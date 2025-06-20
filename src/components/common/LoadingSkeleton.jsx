import React from 'react';

/**
 * مكون Loading Skeleton لعرض placeholder أثناء تحميل المحتوى
 */
const LoadingSkeleton = ({ 
  type = 'card', 
  count = 1, 
  className = '',
  height = 'auto',
  width = 'auto' 
}) => {
  const renderCardSkeleton = () => (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* صورة المقال */}
      <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shimmer relative">
        <div className="absolute top-3 left-3 bg-gray-300 rounded-full h-6 w-16"></div>
      </div>
      
      {/* محتوى المقال */}
      <div className="p-5">
        {/* العنوان */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        
        {/* الوصف */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
        
        {/* معلومات المؤلف والتاريخ */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full ml-2"></div>
            <div className="h-3 bg-gray-200 rounded w-16"></div>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="h-3 bg-gray-200 rounded w-12"></div>
            <div className="h-3 bg-gray-200 rounded w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTextSkeleton = () => (
    <div className="animate-pulse space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );

  const renderImageSkeleton = () => (
    <div 
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shimmer rounded ${className}`}
      style={{ height, width }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400 text-2xl">📷</div>
      </div>
    </div>
  );

  const renderButtonSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-10 bg-gray-200 rounded-lg w-32"></div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCustomSkeleton = () => (
    <div 
      className={`bg-gray-200 animate-pulse rounded ${className}`}
      style={{ height, width }}
    ></div>
  );

  const getSkeleton = () => {
    switch (type) {
      case 'card':
        return renderCardSkeleton();
      case 'text':
        return renderTextSkeleton();
      case 'image':
        return renderImageSkeleton();
      case 'button':
        return renderButtonSkeleton();
      case 'list':
        return renderListSkeleton();
      case 'custom':
        return renderCustomSkeleton();
      default:
        return renderCardSkeleton();
    }
  };

  if (count === 1) {
    return getSkeleton();
  }

  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          {getSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton; 