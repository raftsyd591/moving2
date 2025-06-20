import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook مخصص لإدارة lazy loading للمقالات
 */
export const useLazyLoading = ({
  items = [],
  initialCount = 6,
  increment = 6,
  threshold = 0.8,
  loadDelay = 300
}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);

  // تحديث hasMore عند تغيير العناصر
  useEffect(() => {
    setHasMore(visibleCount < items.length);
  }, [visibleCount, items.length]);

  // دالة تحميل المزيد
  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setIsLoading(true);

    // محاكاة تأخير التحميل
    await new Promise(resolve => setTimeout(resolve, loadDelay));

    setVisibleCount(prev => {
      const newCount = Math.min(prev + increment, items.length);
      return newCount;
    });

    setIsLoading(false);
    loadingRef.current = false;
  }, [hasMore, increment, items.length, loadDelay]);

  // إعادة تعيين العدد المرئي
  const reset = useCallback(() => {
    setVisibleCount(initialCount);
    setIsLoading(false);
    loadingRef.current = false;
  }, [initialCount]);

  // مراقبة التمرير للتحميل التلقائي
  useEffect(() => {
    const handleScroll = () => {
      if (loadingRef.current || !hasMore) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight * threshold) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, hasMore, threshold]);

  // العناصر المرئية
  const visibleItems = items.slice(0, visibleCount);

  return {
    visibleItems,
    visibleCount,
    isLoading,
    hasMore,
    loadMore,
    reset,
    totalItems: items.length
  };
};

/**
 * Hook لمراقبة Intersection Observer
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px'
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        if (isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, hasBeenVisible]);

  return {
    elementRef,
    isVisible,
    hasBeenVisible
  };
};

/**
 * Hook لإدارة تحميل الصور lazy
 */
export const useLazyImage = (src, fallbackSrc = []) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    const tryLoadImage = (imageUrl) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = reject;
        img.src = imageUrl;
      });
    };

    const loadImage = async () => {
      const imagesToTry = [src, ...fallbackSrc].filter(Boolean);
      
      for (let i = currentIndex; i < imagesToTry.length; i++) {
        try {
          const loadedSrc = await tryLoadImage(imagesToTry[i]);
          setImageSrc(loadedSrc);
          setIsLoaded(true);
          setIsError(false);
          return;
        } catch (error) {
          console.warn(`Failed to load image: ${imagesToTry[i]}`);
          continue;
        }
      }
      
      // إذا فشل تحميل جميع الصور
      setIsError(true);
      setIsLoaded(true);
    };

    loadImage();
  }, [src, fallbackSrc, isVisible, currentIndex]);

  const retryLoad = useCallback(() => {
    setCurrentIndex(prev => prev + 1);
    setIsError(false);
    setIsLoaded(false);
  }, []);

  return {
    elementRef,
    imageSrc,
    isLoaded,
    isError,
    isVisible,
    retryLoad
  };
};

/**
 * Hook لإدارة الفلترة والبحث
 */
export const useFilter = (items, initialFilters = {}) => {
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item => {
    // فلترة النص
    const matchesSearch = !searchTerm || 
      (item.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (item.excerpt?.toLowerCase() || '').includes(searchTerm.toLowerCase());

    // فلترة الفئات
    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value || value === 'all') return true;
      return (item[key]?.toLowerCase() || '') === value.toLowerCase();
    });

    return matchesSearch && matchesFilters;
  });

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
    setSearchTerm('');
  }, [initialFilters]);

  return {
    filteredItems,
    filters,
    searchTerm,
    setSearchTerm,
    updateFilter,
    clearFilters,
    totalItems: items.length,
    filteredCount: filteredItems.length
  };
};

export default useLazyLoading; 