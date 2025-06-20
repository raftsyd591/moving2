import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../Seo';
import Footer from '../Footer';

const BlogLayout = ({ 
  children,
  title = 'مدونة النخبة للنقل',
  description = 'مدونة النخبة للنقل - مصدرك الأول للنصائح والإرشادات حول نقل العفش والأثاث في المملكة العربية السعودية',
  keywords = [],
  path,
  type = 'website',
  article = null,
  ogImage = '/images/blog-cover.jpg',
  canonicalUrl,
  breadcrumbs = null,
  faqData = null,
  reviewData = null,
  author = null,
  publishedTime = null,
  modifiedTime = null,
  category = null,
  tags = []
}) => {
  const location = useLocation();
  const currentPath = path || location.pathname;

  // إنشاء بيانات المقال للـ SEO
  const seoArticleProp = type === 'article' && article ? {
    title: article.title,
    image: article.image,
    datePublished: article.datePublished || article.date,
    dateModified: article.dateModified || article.datePublished || article.date,
    author: typeof article.author === 'string' ? { name: article.author } : article.author,
    description: article.excerpt || description,
    keywords: article.keywords || article.tags,
    category: article.category,
    tags: article.tags,
    content: article.content,
    wordCount: article.wordCount,
    readTime: article.readTime
  } : null;

  // كلمات مفتاحية افتراضية للمدونة
  const defaultBlogKeywords = [
    'مدونة نقل العفش',
    'نصائح نقل الأثاث',
    'خدمات النقل',
    'شركة النخبة للنقل',
    'نقل العفش السعودية',
    'أدلة النقل',
    'خبراء النقل'
  ];

  const seoKeywords = [...defaultBlogKeywords, ...keywords];

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title={title}
        description={description}
        image={ogImage}
        path={currentPath}
        type={type}
        article={seoArticleProp}
        keywords={seoKeywords}
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        reviewData={reviewData}
        author={author}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        category={category}
        tags={tags}
      />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Link 
                to="/" 
                className="text-white font-bold text-2xl hover:text-primary-200 transition-colors duration-200"
                aria-label="الصفحة الرئيسية - النخبة للنقل"
              >
                النخبة للنقل
              </Link>
              <p className="text-lg mt-1 font-light opacity-90">لخدمات نقل العفش المتميزة</p>
            </div>
            
            {/* التنقل الرئيسي */}
            <nav aria-label="التنقل الرئيسي">
              <ul className="flex space-x-6 rtl:space-x-reverse">
                <li>
                  <Link 
                    to="/" 
                    className="hover:text-primary-200 transition-colors duration-200 px-3 py-2 rounded"
                    aria-label="الصفحة الرئيسية"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="hover:text-primary-200 transition-colors duration-200 px-3 py-2 rounded"
                    aria-label="خدماتنا"
                  >
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className={`hover:text-primary-200 transition-colors duration-200 px-3 py-2 rounded ${
                      currentPath.startsWith('/blog') ? 'bg-primary-600 font-bold' : ''
                    }`}
                    aria-label="المدونة"
                    aria-current={currentPath.startsWith('/blog') ? 'page' : undefined}
                  >
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="hover:text-primary-200 transition-colors duration-200 px-3 py-2 rounded"
                    aria-label="من نحن"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="hover:text-primary-200 transition-colors duration-200 px-3 py-2 rounded"
                    aria-label="اتصل بنا"
                  >
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* شريط فرعي للمدونة */}
      {currentPath.startsWith('/blog') && (
        <div className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <h2 className="text-lg font-semibold text-gray-800">مدونة النخبة للنقل</h2>
                <span className="text-gray-400">|</span>
                <p className="text-sm text-gray-600">نصائح وأدلة متخصصة في نقل العفش</p>
              </div>
              
              {/* روابط سريعة للمدونة */}
              <nav aria-label="التنقل الفرعي للمدونة" className="hidden md:block">
                <ul className="flex space-x-4 rtl:space-x-reverse text-sm">
                  <li>
                    <Link 
                      to="/blog" 
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      جميع المقالات
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-300">•</span>
                  </li>
                  <li>
                    <a 
                      href="#latest" 
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      الأحدث
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-300">•</span>
                  </li>
                  <li>
                    <a 
                      href="#popular" 
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      الأكثر قراءة
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
      
      {/* المحتوى الرئيسي */}
      <main role="main" className="py-12">
        {children}
      </main>
      
      {/* قسم الاشتراك في النشرة الإخبارية */}
      {currentPath === '/blog' && (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              احصل على أحدث النصائح والأدلة حول نقل العفش مباشرة في بريدك الإلكتروني
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
                aria-label="البريد الإلكتروني للاشتراك"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-l-lg transition-colors duration-200"
                aria-label="اشترك في النشرة الإخبارية"
              >
                اشترك
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              نحن نحترم خصوصيتك ولن نرسل لك رسائل غير مرغوب فيها
            </p>
          </div>
        </section>
      )}
      
      {/* Footer */}
      <Footer />
      
      {/* Schema للمدونة */}
      {currentPath === '/blog' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "@id": "https://www.elitemovers.com.sa/blog",
              "url": "https://www.elitemovers.com.sa/blog",
              "name": "مدونة النخبة للنقل",
              "description": description,
              "inLanguage": "ar-SA",
              "publisher": {
                "@type": "Organization",
                "@id": "https://www.elitemovers.com.sa/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.elitemovers.com.sa/blog?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      )}
    </div>
  );
};

export default BlogLayout; 