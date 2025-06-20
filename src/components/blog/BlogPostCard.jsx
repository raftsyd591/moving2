import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageProxy from '../common/ImageProxy';
import { getImagePathFromSlug } from '../../utils/fixArticleImages';
import { getAlternativeImagePaths } from '../../utils/imageHelpers';

/**
 * مكون بطاقة عرض المقال
 * مع معالجة متقدمة للصور و lazy loading
 */
const BlogPostCard = ({ post }) => {
  // حالة لتتبع أخطاء تحميل الصورة
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const cardRef = useRef(null);
  
  // التعامل مع حالة عدم وجود بيانات المقال
  if (!post) {
    console.warn("تم استلام بيانات مقال غير صالحة");
    return (
      <div className="p-4 border rounded-lg shadow-md bg-gray-100 animate-pulse">
        <div className="h-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  // Intersection Observer للـ lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // تنسيق التاريخ بشكل آمن
  const formatDate = (dateString) => {
    try {
      if (!dateString) return '';
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? '' : date.toLocaleDateString('ar-SA');
    } catch (e) {
      return '';
    }
  };

  // معالجة مسار الصورة
  const processImagePath = (path) => {
    if (!path || path === '') {
      return null;
    }
    
    if (path.startsWith('http')) {
      return path;
    }
    
    const slug = post.slug || '';
    const slugWithUnderscores = slug.replace(/-/g, '_');
    
    const possiblePaths = [
      path,
      `/public/images/blog/${slugWithUnderscores}.jpeg`,
      `/public/images/blog/${slugWithUnderscores}.jpg`,
      `/public/images/blog/${slug}.jpeg`,
      `/public/images/blog/${slug}.jpg`,
      `/images/blog/${slugWithUnderscores}.jpeg`,
      `/images/blog/${slugWithUnderscores}.jpg`,
      `/images/blog/${slug}.jpeg`,
      `/images/blog/${slug}.jpg`,
    ];
    
    return possiblePaths[0];
  };
  
  // الحصول على مسار الصورة المعالج
  const imagePath = processImagePath(post.image);
  const finalImagePath = !imageError && imagePath ? imagePath : getImagePathFromSlug(post.slug);
  
  // معالج خطأ الصورة
  const handleImageError = () => {
    console.warn(`خطأ في تحميل الصورة للمقال: ${post.title} (${post.slug})`);
    setImageError(true);
  };

  // معالج تحميل الصورة
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  
  // الحصول على مسارات بديلة للصورة
  const getArticleImageFallbacks = () => {
    return getAlternativeImagePaths(post.slug);
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white border rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
    >
      <Link to={`/blog/${post.slug || ''}`} className="block">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {/* Placeholder أثناء عدم الرؤية */}
          {!isVisible && (
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-4xl">📝</div>
              </div>
            </div>
          )}
          
          {/* الصورة الفعلية مع lazy loading */}
          {isVisible && (
            <>
              {/* Skeleton loader أثناء تحميل الصورة */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400 text-2xl">⏳</div>
                  </div>
                </div>
              )}
              
              <ImageProxy 
                src={finalImagePath || '/images/blog/default-blog-post.jpg'} 
                fallbackSrc={getAlternativeImagePaths(post.slug)}
                defaultSrc="/images/blog/default-blog-post.jpg"
                alt={post.title || 'مقال'}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            </>
          )}
          
          {/* شارة الفئة */}
          <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 text-sm rounded-full font-medium shadow-lg">
            {post.category || 'مقال'}
          </div>
          
          {/* تأثير التدرج في الأسفل */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 leading-tight">
            {post.title || 'عنوان المقال'}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt || 'محتوى المقال...'}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              {isVisible ? (
                <ImageProxy
                  src={post.authorImage || '/images/authors/default-author.png'}
                  fallbackSrc={[
                    `/images/authors/${post.author?.toLowerCase()?.replace(/\s+/g, '_')}.jpg`,
                    `/images/authors/${post.author?.toLowerCase()?.replace(/\s+/g, '_')}.png`
                  ]}
                  defaultSrc="/images/authors/default-author.png"
                  alt={post.author || 'كاتب'}
                  className="w-8 h-8 rounded-full ml-2 border-2 border-gray-100"
                  loading="lazy"
                />
              ) : (
                <div className="w-8 h-8 rounded-full ml-2 bg-gray-200 animate-pulse"></div>
              )}
              <span className="font-medium">{post.author || 'كاتب'}</span>
            </div>
            <div className="flex items-center text-xs">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="flex items-center">
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {post.readTime || 5} دقيقة
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard; 