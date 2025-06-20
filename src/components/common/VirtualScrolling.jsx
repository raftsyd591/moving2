import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * مكون Virtual Scrolling لتحسين الأداء مع عدد كبير من العناصر
 */
const VirtualScrolling = ({
  items = [],
  itemHeight = 300,
  containerHeight = 600,
  renderItem,
  overscan = 5,
  className = ''
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeightState, setContainerHeightState] = useState(containerHeight);
  const containerRef = useRef(null);

  // حساب العناصر المرئية
  const visibleRange = React.useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + containerHeightState) / itemHeight) + overscan
    );
    return { startIndex, endIndex };
  }, [scrollTop, containerHeightState, itemHeight, items.length, overscan]);

  // العناصر المرئية
  const visibleItems = React.useMemo(() => {
    const { startIndex, endIndex } = visibleRange;
    return items.slice(startIndex, endIndex + 1).map((item, index) => ({
      ...item,
      index: startIndex + index
    }));
  }, [items, visibleRange]);

  // معالج التمرير
  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  // تحديث ارتفاع الحاوية عند تغيير حجم النافذة
  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerHeightState(rect.height);
      }
    };

    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, []);

  // الارتفاع الإجمالي للمحتوى
  const totalHeight = items.length * itemHeight;

  // موضع العناصر المرئية
  const offsetY = visibleRange.startIndex * itemHeight;

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeightState }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'relative'
          }}
        >
          {visibleItems.map((item) => (
            <div
              key={item.index}
              style={{
                height: itemHeight,
                position: 'relative'
              }}
            >
              {renderItem(item, item.index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * مكون Grid Virtual Scrolling للشبكات
 */
export const VirtualGrid = ({
  items = [],
  itemWidth = 300,
  itemHeight = 300,
  containerWidth = '100%',
  containerHeight = 600,
  renderItem,
  gap = 16,
  className = ''
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: containerHeight
  });
  const containerRef = useRef(null);

  // حساب عدد الأعمدة
  const columnsCount = Math.floor((containerDimensions.width + gap) / (itemWidth + gap));
  const rowsCount = Math.ceil(items.length / columnsCount);

  // حساب الصفوف المرئية
  const visibleRange = React.useMemo(() => {
    const startRow = Math.max(0, Math.floor(scrollTop / (itemHeight + gap)) - 1);
    const endRow = Math.min(
      rowsCount - 1,
      Math.ceil((scrollTop + containerDimensions.height) / (itemHeight + gap)) + 1
    );
    return { startRow, endRow };
  }, [scrollTop, containerDimensions.height, itemHeight, gap, rowsCount]);

  // العناصر المرئية
  const visibleItems = React.useMemo(() => {
    const { startRow, endRow } = visibleRange;
    const startIndex = startRow * columnsCount;
    const endIndex = Math.min(items.length - 1, (endRow + 1) * columnsCount - 1);
    
    return items.slice(startIndex, endIndex + 1).map((item, index) => {
      const globalIndex = startIndex + index;
      const row = Math.floor(globalIndex / columnsCount);
      const col = globalIndex % columnsCount;
      
      return {
        ...item,
        index: globalIndex,
        row,
        col,
        x: col * (itemWidth + gap),
        y: row * (itemHeight + gap)
      };
    });
  }, [items, visibleRange, columnsCount, itemWidth, itemHeight, gap]);

  // معالج التمرير
  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  // تحديث أبعاد الحاوية
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // الارتفاع الإجمالي للمحتوى
  const totalHeight = rowsCount * (itemHeight + gap) - gap;

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ 
        height: containerDimensions.height,
        width: containerWidth
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((item) => (
          <div
            key={item.index}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              width: itemWidth,
              height: itemHeight
            }}
          >
            {renderItem(item, item.index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualScrolling; 