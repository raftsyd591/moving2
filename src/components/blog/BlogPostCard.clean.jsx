import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getImagePathFromSlug } from '../../utils/fixArticleImages';

/**
 * مكون بطاقة عرض المقال
 * مع معالجة متقدمة للصور
 */
const BlogPostCard = ({ post }) => {
  // حالة لتتبع أخطاء تحميل الصورة
  const [imageError, setImageError] = useState(false);
  
  // التعامل مع حالة عدم وجود بيانات المقال
  if (!post) {
    console.warn("تم استلام بيانات مقال غير صالحة");
    return <div className="p-4 border rounded-lg shadow-md">خطأ: بيانات المقال غير صالحة</div>;
  }

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
    
    // إذا كانت الصورة لا تحتوي على مسار كامل
    if (!path.startsWith('/') && !path.startsWith('http')) {
      return `/images/blog/${path}`;
    }
    
    // إزالة /public/ إذا كان موجودًا
    if (path.includes('/public/')) {
      return path.replace('/public/', '/');
    }
    
    return path;
  };
  
  // الحصول على مسار الصورة المعالج
  const imagePath = processImagePath(post.image);
  
  // استخدام مسار الصورة المعالج أو الحصول على مسار بناءً على slug
  const finalImagePath = !imageError && imagePath ? imagePath : getImagePathFromSlug(post.slug);
  
  // معالج خطأ الصورة
  const handleImageError = () => {
    console.warn(`خطأ في تحميل الصورة للمقال: ${post.title} (${post.slug})`);
    setImageError(true);
  };

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group">
      <Link to={`/blog/${post.slug || ''}`} className="block">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {/* استخدام الصورة مباشرة مع معالج أخطاء التحميل */}
          <img 
            src={finalImagePath || '/images/blog/default-blog-post.jpg'} 
            alt={post.title || 'مقال'}
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 bg-primary-600 text-white px-3 py-1 text-sm rounded-br-lg">
            {post.category || 'مقال'}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title || 'عنوان المقال'}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt || 'محتوى المقال...'}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <img
                src={post.authorImage || '/images/authors/default-author.png'}
                alt={post.author || 'كاتب'}
                className="w-8 h-8 rounded-full ml-2"
                onError={(e) => {e.target.src = '/images/authors/default-author.png'}}
              />
              <span>{post.author || 'كاتب'}</span>
            </div>
            <div className="flex items-center">
              <span>{formatDate(post.date)}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime || 5} دقيقة قراءة</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
