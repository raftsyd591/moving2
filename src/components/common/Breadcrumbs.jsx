import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * مكون Breadcrumbs لتحسين التنقل والسيو
 */
const Breadcrumbs = ({ 
  customBreadcrumbs = null, 
  className = '',
  showHome = true,
  separator = '/',
  maxItems = 5 
}) => {
  const location = useLocation();
  
  // تعريف أسماء الصفحات باللغة العربية
  const pageNames = {
    '': 'الرئيسية',
    'services': 'خدماتنا',
    'about': 'من نحن',
    'contact': 'اتصل بنا',
    'blog': 'المدونة',
    'terms': 'الشروط والأحكام',
    'privacy': 'سياسة الخصوصية',
    'sitemap': 'خريطة الموقع'
  };

  // إنشاء breadcrumbs تلقائياً من المسار
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    let breadcrumbs = [];
    
    // إضافة الصفحة الرئيسية إذا كانت مطلوبة
    if (showHome) {
      breadcrumbs.push({
        name: 'الرئيسية',
        url: '/',
        isActive: pathnames.length === 0
      });
    }
    
    // إنشاء breadcrumbs من المسار
    let currentPath = '';
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      const isLast = index === pathnames.length - 1;
      
      // الحصول على اسم الصفحة
      let name = pageNames[pathname] || pathname;
      
      // تحسين أسماء مقالات المدونة
      if (pathnames[0] === 'blog' && index === 1) {
        name = decodeURIComponent(pathname)
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
      }
      
      breadcrumbs.push({
        name,
        url: currentPath,
        isActive: isLast
      });
    });
    
    return breadcrumbs;
  };

  // استخدام breadcrumbs مخصصة أو إنشاؤها تلقائياً
  const breadcrumbs = customBreadcrumbs || generateBreadcrumbs();
  
  // تقليل عدد العناصر إذا كان كثيراً
  const displayBreadcrumbs = breadcrumbs.length > maxItems 
    ? [
        breadcrumbs[0], // الرئيسية
        { name: '...', url: '#', isEllipsis: true },
        ...breadcrumbs.slice(-2) // آخر عنصرين
      ]
    : breadcrumbs;

  // عدم عرض breadcrumbs إذا كان هناك عنصر واحد فقط (الرئيسية)
  if (displayBreadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className={`flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 ${className}`}
      aria-label="مسار التنقل"
    >
      <ol className="flex items-center space-x-2 rtl:space-x-reverse">
        {displayBreadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                {separator}
              </span>
            )}
            
            {crumb.isEllipsis ? (
              <span className="text-gray-400">...</span>
            ) : crumb.isActive ? (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {crumb.name}
              </span>
            ) : (
              <Link
                to={crumb.url}
                className="text-primary-600 hover:text-primary-800 transition-colors duration-200"
                title={`انتقل إلى ${crumb.name}`}
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

/**
 * Hook لإنشاء بيانات breadcrumbs للـ Schema
 */
export const useBreadcrumbsSchema = (customBreadcrumbs = null) => {
  const location = useLocation();
  
  const pageNames = {
    '': 'الرئيسية',
    'services': 'خدماتنا',
    'about': 'من نحن',
    'contact': 'اتصل بنا',
    'blog': 'المدونة',
    'terms': 'الشروط والأحكام',
    'privacy': 'سياسة الخصوصية'
  };

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    let breadcrumbs = [];
    
    // الصفحة الرئيسية
    breadcrumbs.push({
      name: 'الرئيسية',
      url: '/'
    });
    
    // باقي الصفحات
    let currentPath = '';
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      let name = pageNames[pathname] || pathname;
      
      if (pathnames[0] === 'blog' && index === 1) {
        name = decodeURIComponent(pathname)
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
      }
      
      breadcrumbs.push({
        name,
        url: currentPath
      });
    });
    
    return breadcrumbs;
  };

  return customBreadcrumbs || generateBreadcrumbs();
};

export default Breadcrumbs; 