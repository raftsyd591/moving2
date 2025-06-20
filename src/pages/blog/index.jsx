import React, { useState, useEffect, useMemo } from 'react';
import BlogPostCard from '../../components/blog/BlogPostCard';
import BlogLayout from '../../components/blog/BlogLayout';
import Seo from '../../components/Seo';
import LoadingSkeleton from '../../components/common/LoadingSkeleton';
import Breadcrumbs, { useBreadcrumbsSchema } from '../../components/common/Breadcrumbs';
import { useLazyLoading, useFilter } from '../../hooks/useLazyLoading';
import { articles } from '../../data/articles.jsx';
import { fixArticlesImages } from '../../utils/fixArticleImages';

const BlogPage = () => {
  const [articlesWithImages, setArticlesWithImages] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState({ loaded: 0, total: 0 });
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // الحصول على breadcrumbs للـ Schema
  const breadcrumbsData = useBreadcrumbsSchema();

  // تحميل وإصلاح المقالات عند تحميل الصفحة
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setIsInitialLoading(true);
        
        // محاكاة تأخير للحصول على تجربة أفضل
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const processedArticles = fixArticlesImages(articles);
        setArticlesWithImages(processedArticles);
        
        console.log('تم معالجة المقالات:', processedArticles.length);
        console.log('المقالات مع صور:', processedArticles.filter(a => a.image).length);
        
        setLoadingStatus({
          loaded: processedArticles.filter(a => a.image).length,
          total: processedArticles.length
        });
        
      } catch (error) {
        console.error('خطأ في معالجة صور المقالات:', error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    loadArticles();
  }, []);

  // استخدام hook الفلترة والبحث
  const {
    filteredItems: filteredArticles,
    filters,
    searchTerm,
    setSearchTerm,
    updateFilter,
    clearFilters,
    filteredCount
  } = useFilter(articlesWithImages, { category: 'all' });

  // استخدام hook lazy loading
  const {
    visibleItems: visibleArticles,
    visibleCount,
    isLoading,
    hasMore,
    loadMore,
    reset
  } = useLazyLoading({
    items: filteredArticles,
    initialCount: 6,
    increment: 6,
    threshold: 0.8,
    loadDelay: 300
  });

  // إعادة تعيين lazy loading عند تغيير الفلتر
  useEffect(() => {
    reset();
  }, [filteredArticles.length, reset]);

  // استخراج الفئات الفريدة من المقالات (مع memoization)
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articlesWithImages.map(article => article.category))];
    return [
      { id: 'all', name: 'جميع المقالات' },
      ...uniqueCategories.filter(Boolean).map(cat => ({ id: cat.toLowerCase(), name: cat }))
    ];
  }, [articlesWithImages]);

  // نموذج Schema.org لقائمة مقالات المدونة
  const blogListingSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": visibleArticles.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "image": post.image,
        "url": `/blog/${post.slug}`
      }
    }))
  }), [visibleArticles]);

  // معالج تغيير الفئة
  const handleCategoryChange = (categoryId) => {
    updateFilter('category', categoryId);
  };

  // معالج مسح الفلاتر
  const handleClearFilters = () => {
    clearFilters();
  };

  // إعداد كلمات مفتاحية للصفحة
  const pageKeywords = [
    'مدونة نقل العفش',
    'نصائح نقل الأثاث',
    'أدلة النقل',
    'خبراء النقل',
    'مقالات النقل',
    'تعليمات النقل',
    'حلول النقل'
  ];

  return (
    <BlogLayout
      title="مدونة النخبة للنقل | نصائح وأدلة نقل العفش"
      description="أحدث المقالات والنصائح من خبراء النخبة للنقل."
    >
      <Seo
        title="مدونة النخبة للنقل | نصائح وأدلة نقل العفش في السعودية"
        description="اكتشف أحدث المقالات والنصائح من خبراء النخبة للنقل حول كل ما يتعلق بخدمات نقل وتخزين الأثاث والتغليف في المملكة العربية السعودية. أدلة شاملة ونصائح عملية من المتخصصين."
        path="/blog"
        image="/images/blog/default-blog-post.jpeg"
        keywords={pageKeywords}
        breadcrumbs={breadcrumbsData}
        type="blog"
        publishedTime={new Date().toISOString()}
        modifiedTime={new Date().toISOString()}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs className="text-sm" />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900 leading-tight">
            مدونة النخبة للنقل
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أحدث المقالات والنصائح المتخصصة حول نقل العفش والأثاث من خبراء النخبة للنقل. 
            اكتشف أفضل الممارسات والحلول العملية لنقل آمن وفعال.
          </p>
          
          {/* إحصائيات سريعة */}
          <div className="flex justify-center space-x-8 rtl:space-x-reverse mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{articlesWithImages.length}+</div>
              <div className="text-sm text-gray-500">مقال متخصص</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-500">نصيحة عملية</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">10+</div>
              <div className="text-sm text-gray-500">سنوات خبرة</div>
            </div>
          </div>
        </div>

        {/* البحث والتصفية */}
        {!isInitialLoading && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث في المقالات..."
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* فلتر الفئات */}
              <div className="w-full lg:w-1/2">
                <select
                  value={filters.category || 'all'}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* أزرار الفلترة السريعة */}
            {(searchTerm || filters.category !== 'all') && (
              <div className="flex justify-center">
                <button
                  onClick={handleClearFilters}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  مسح الفلاتر
                </button>
              </div>
            )}
          </div>
        )}

        {/* عداد النتائج */}
        {!isInitialLoading && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              عرض {visibleArticles.length} من أصل {filteredCount} مقال
              {filteredCount !== articlesWithImages.length && (
                <span className="text-gray-500"> (من إجمالي {articlesWithImages.length} مقال)</span>
              )}
            </p>
          </div>
        )}

        {/* شبكة المقالات أو Loading Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {isInitialLoading ? (
            // عرض Loading Skeleton أثناء التحميل الأولي
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <LoadingSkeleton type="card" />
              </div>
            ))
          ) : visibleArticles.length > 0 ? (
            visibleArticles.map((post, index) => (
              <div
                key={post.slug}
                className="animate-fadeIn"
                style={{
                  animationDelay: `${(index % 6) * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <BlogPostCard post={post} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="text-6xl text-gray-300 mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">لا توجد مقالات تطابق بحثك</h3>
                <p className="text-gray-500 mb-4">حاول استخدام كلمات بحث أخرى أو اختيار فئة مختلفة</p>
                {(searchTerm || filters.category !== 'all') && (
                  <button
                    onClick={handleClearFilters}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    مسح الفلاتر وعرض جميع المقالات
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* زر تحميل المزيد أو مؤشر التحميل */}
        {!isInitialLoading && hasMore && (
          <div className="text-center">
            {isLoading ? (
              <div className="inline-flex items-center px-6 py-3 text-primary-600">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600 ml-3"></div>
                جاري تحميل المزيد...
              </div>
            ) : (
              <button
                onClick={loadMore}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                تحميل المزيد من المقالات ({filteredCount - visibleCount} متبقي)
              </button>
            )}
          </div>
        )}

        {/* إحصائيات المقالات */}
        {!isInitialLoading && (
          <div className="mt-12 text-center text-gray-500 text-sm">
            <div className="bg-gray-50 rounded-lg p-4 inline-block">
              <p className="mb-1">إجمالي المقالات: {articlesWithImages.length}</p>
              <p>المقالات مع صور: {loadingStatus.loaded} ({Math.round((loadingStatus.loaded / Math.max(loadingStatus.total, 1)) * 100)}%)</p>
            </div>
          </div>
        )}

        {/* دعوة للعمل */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج خدمات نقل احترافية؟</h2>
          <p className="text-lg mb-6 opacity-90">
            تواصل معنا الآن للحصول على استشارة مجانية وعرض أسعار مخصص لاحتياجاتك
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            احصل على عرض مجاني
          </a>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      {!isInitialLoading && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
        />
      )}
      
      {/* CSS للرسوم المتحركة */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </BlogLayout>
  );
};

export default BlogPage;
