import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageProxy from '../../components/common/ImageProxy';
import { articles } from '../../data/articles';
import { fixArticleImage, getImagePathFromSlug } from '../../utils/fixArticleImages';
import { getAuthorImage } from '../../utils/authorImages';

// Helper to map slug to component path with better error handling
const articleComponentMap = {
  'cheap-vs-professional-movers-which-to-choose': lazy(() => 
    import('./cheap-vs-professional-movers-which-to-choose').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'dammam-khobar-moving-guide-local-tips': lazy(() => 
    import('./dammam-khobar-moving-guide-local-tips').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'furniture-disassembly-assembly-services-importance-choosing': lazy(() => 
    import('./furniture-disassembly-assembly-services-importance-choosing').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'preparing-kids-for-a-move-reduce-stress': lazy(() => 
    import('./preparing-kids-for-a-move-reduce-stress').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'moving-artwork-antiques-safely': lazy(() => 
    import('./moving-artwork-antiques-safely').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'diy-furniture-packing-tips-professional-guide': lazy(() => 
    import('./diy-furniture-packing-tips-professional-guide').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'perfect-moving-plan-detailed-timeline': lazy(() => 
    import('./perfect-moving-plan-detailed-timeline').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'handling-valuable-fragile-items-moving-antiques-paintings': lazy(() => 
    import('./handling-valuable-fragile-items-moving-antiques-paintings').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'moving-large-appliances-safely-fridge-washer-ac': lazy(() => 
    import('./moving-large-appliances-safely-fridge-washer-ac').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'long-distance-moving-ksa-challenges-solutions': lazy(() => 
    import('./long-distance-moving-ksa-challenges-solutions').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'pre-moving-day-checklist-essential-tasks': lazy(() => 
    import('./pre-moving-day-checklist-essential-tasks').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'reduce-moving-costs-quality-2025': lazy(() => 
    import('./reduce-moving-costs-quality-2025').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'top-riyadh-neighborhoods-guide-2025': lazy(() => 
    import('./top-riyadh-neighborhoods-guide-2025').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'professional-furniture-packing-tips-guide': lazy(() => 
    import('./professional-furniture-packing-tips-guide').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'best-movers-riyadh-guide-updated-2025': lazy(() => 
    import('./best-movers-riyadh-guide-updated-2025').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'moving-furniture-riyadh-jeddah-steps-costs-tips': lazy(() => 
    import('./moving-furniture-riyadh-jeddah-steps-costs-tips').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'best-packing-materials-furniture-safety': lazy(() => 
    import('./best-packing-materials-furniture-safety').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'organizing-new-home-after-move-7-steps': lazy(() => 
    import('./organizing-new-home-after-move-7-steps').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'moving-insurance-saudi-arabia-guide': lazy(() => 
    import('./moving-insurance-saudi-arabia-guide').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'best-movers-riyadh-guide-criteria-pricing': lazy(() => 
    import('./best-movers-riyadh-guide-criteria-pricing').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'customer-rights-moving-companies-saudi-arabia': lazy(() => 
    import('./customer-rights-moving-companies-saudi-arabia').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'post-move-unpacking-organizing-efficiently': lazy(() => 
    import('./post-move-unpacking-organizing-efficiently').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'best-time-year-to-move-saudi-arabia-cost-comfort': lazy(() => 
    import('./best-time-year-to-move-saudi-arabia-cost-comfort').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'moving-to-makkah-madinah-special-considerations': lazy(() => 
    import('./moving-to-makkah-madinah-special-considerations').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'reading-moving-company-reviews-smartly': lazy(() => 
    import('./reading-moving-company-reviews-smartly').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'eco-friendly-moving-services-ksa': lazy(() => 
    import('./eco-friendly-moving-services-ksa').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'choosing-right-size-moving-truck-guide': lazy(() => 
    import('./choosing-right-size-moving-truck-guide').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'comprehensive-moving-checklist-before-during-after': lazy(() => 
    import('./comprehensive-moving-checklist-before-during-after').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'disassembly-assembly-bedrooms-kitchens-services': lazy(() => 
    import('./disassembly-assembly-bedrooms-kitchens-services').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'expert-tips-long-term-furniture-storage': lazy(() => 
    import('./expert-tips-long-term-furniture-storage').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'handling-bulky-heavy-furniture-moving': lazy(() => 
    import('./handling-bulky-heavy-furniture-moving').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'decluttering-before-move-save-costs': lazy(() => 
    import('./decluttering-before-move-save-costs').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'summer-moving-saudi-arabia-tips-challenges': lazy(() => 
    import('./summer-moving-saudi-arabia-tips-challenges').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'latest-technology-moving-companies-asset-safety': lazy(() => 
    import('./latest-technology-moving-companies-asset-safety').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'saudi-moving-common-mistakes-to-avoid': lazy(() => 
    import('./saudi-moving-common-mistakes-to-avoid').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'jeddah-moving-costs-factors-save-money': lazy(() => 
    import('./jeddah-moving-costs-factors-save-money').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'moving-within-riyadh-guide': lazy(() => 
    import('./moving-within-riyadh-guide').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'office-relocation-saudi-arabia-special-considerations': lazy(() => 
    import('./office-relocation-saudi-arabia-special-considerations').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'reduce-moving-costs-without-sacrificing-quality': lazy(() => 
    import('./reduce-moving-costs-without-sacrificing-quality').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'riyadh-storage-solutions-cost-options-benefits': lazy(() => 
    import('./riyadh-storage-solutions-cost-options-benefits').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'top-riyadh-neighborhoods-families-singles-guide': lazy(() => 
    import('./top-riyadh-neighborhoods-families-singles-guide').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'questions-to-ask-moving-company-before-hiring': lazy(() => 
    import('./questions-to-ask-moving-company-before-hiring').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'best-furniture-packing-methods-protection-moving': lazy(() => 
    import('./best-furniture-packing-methods-protection-moving').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  'long-term-furniture-storage-guide-protection': lazy(() => 
    import('./long-term-furniture-storage-guide-protection').catch(err => {
      console.error('Error loading component:', err);
      return { default: () => <div>خطأ في تحميل المحتوى</div> };
    })
  ),
  // Add other mappings here as needed
};

const BlogPost = () => {
  const { slug } = useParams();

  // Validate slug
  if (!slug) {
    return (
      <BlogLayout
        title="رابط غير صحيح | النخبة للنقل"
        description="عذراً، الرابط غير صحيح."
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">رابط غير صحيح</h1>
          <p className="mb-8">عذراً، الرابط غير صحيح.</p>
          <Link to="/blog" className="bg-primary-600 text-white px-6 py-3 rounded-md">
            العودة إلى المدونة
          </Link>
        </div>
      </BlogLayout>
    );
  }

  // Find the post metadata from the articles array
  const post = articles.find((article) => article.slug === slug);

  // Dynamically select the component to render
  const ArticleComponent = articleComponentMap[slug];

  // Fix article image paths for the main post
  const fixedPost = post ? fixArticleImage(post) : null;
  
  // الحصول على صورة المؤلف
  const authorImagePath = fixedPost ? getAuthorImage(fixedPost.author) : '/images/authors/default-author.png';

  // Handle post not found
  if (!post) {
    return (
      <BlogLayout
        title="المقال غير موجود | النخبة للنقل"
        description="عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه."
        canonicalUrl={`https://elitemovers.com/blog/not-found`}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
          <p className="mb-8">عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه.</p>
          <Link to="/blog" className="bg-primary-600 text-white px-6 py-3 rounded-md">
            العودة إلى المدونة
          </Link>
        </div>
      </BlogLayout>
    );
  }
  
  // Use pre-calculated readTime or estimate it
  const readingTime = fixedPost.readTime || 10; // Default read time if not specified

  // Related posts - find articles in the same category or by the same author
  const relatedPosts = articles
    .filter((article) => 
      article.slug !== slug && 
      (article.category === fixedPost.category || article.author === fixedPost.author)
    )
    .slice(0, 3)
    .map(article => fixArticleImage(article)); // Fix images for related posts too
  
  // الحصول على مسارات صور بديلة باستخدام الوظيفة الجاهزة
  const getAlternativePaths = (articleSlug) => {
    if (!articleSlug) return [];
    
    // استخدام مسار الصورة الأساسي
    const mainPath = getImagePathFromSlug(articleSlug);
    
    // إضافة مسارات بديلة أخرى للمحاولة
    return [
      mainPath,
      `/public/images/blog/${articleSlug.replace(/-/g, '_')}.jpeg`,
      `/public/images/blog/${articleSlug.replace(/-/g, '_')}.jpg`,
      `/images/blog/${articleSlug.replace(/-/g, '_')}.jpeg`,
      `/images/blog/${articleSlug.replace(/-/g, '_')}.jpg`
    ];
  };
  
  // Schema.org markup for BlogPosting
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": fixedPost.title || "",
    "image": fixedPost.image || "/images/blog/default-blog-post.jpg",
    "author": {
      "@type": "Person",
      "name": fixedPost.author || "كاتب المدونة"
    },
    "publisher": {
      "@type": "Organization",
      "name": "النخبة للنقل",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    },
    "datePublished": fixedPost.date || new Date().toISOString().split('T')[0],
    "dateModified": fixedPost.lastModified || fixedPost.date || new Date().toISOString().split('T')[0],
    "description": fixedPost.excerpt || "",
    "keywords": fixedPost.keywords || "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elitemovers.com/blog/${fixedPost.slug}`
    }
  };
  
  // Component to handle article rendering with error boundary
  const ArticleRenderer = () => {
    try {
      if (!ArticleComponent) {
        return (
          <div className="prose prose-lg max-w-none rtl">
            <p>عذراً، محتوى هذا المقال غير متوفر حالياً.</p>
            <p>يرجى المحاولة لاحقاً أو الاتصال بنا إذا استمرت المشكلة.</p>
          </div>
        );
      }
      
      return (
        <Suspense fallback={
          <div className="prose prose-lg max-w-none rtl">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
              <p className="text-center text-gray-500">تحميل المقال...</p>
            </div>
          </div>
        }>
          <ArticleComponent />
        </Suspense>
      );
    } catch (error) {
      console.error('Error rendering article:', error);
      return (
        <div className="prose prose-lg max-w-none rtl">
          <p>عذراً، حدث خطأ في تحميل المقال.</p>
          <p>يرجى إعادة تحميل الصفحة أو المحاولة لاحقاً.</p>
        </div>
      );
    }
  };
  
  // The table of contents will be generated within each article component
  // so we remove the logic from here.
  
  return (
    <BlogLayout
      title={`${fixedPost.title || 'مقال'} | النخبة للنقل`}
      description={fixedPost.excerpt || fixedPost.title || 'مقال على مدونة النخبة للنقل'}
      keywords={fixedPost.keywords || ''}
      path={`/blog/${fixedPost.slug}`} // Pass dynamic path
      type="article" // Specify type as article
      article={fixedPost} // Pass the full article object for Seo component
      ogImage={fixedPost.image || "/images/blog/default-blog-post.jpg"}
      // canonicalUrl is derived by Seo component from path, so no need to pass it here if Seo handles it
    >
      {/* The Seo component within BlogLayout will now handle the Article schema, so the script below is removed. */}
      {/*
      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>
      */}
      
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <ImageProxy 
          src={fixedPost.image}
          fallbackSrc={getAlternativePaths(fixedPost.slug)}
          defaultSrc="/images/blog/default-blog-post.jpg"
          alt={fixedPost.title || 'صورة المقال'} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">{fixedPost.title}</h1>
            <div className="flex items-center justify-center mb-4">
              <img
                src={authorImagePath}
                alt={`صورة ${fixedPost.author || 'المؤلف'}`}
                className="w-12 h-12 rounded-full border-2 border-white mr-3 object-cover"
                onError={(e) => {
                  e.target.src = '/images/authors/default-author.png';
                }}
              />
              <span>{fixedPost.author || 'كاتب'}</span>
              <span className="mx-3">•</span>
              <span>{fixedPost.date || 'تاريخ غير محدد'}</span>
              <span className="mx-3">•</span>
              <span>{readingTime} دقائق للقراءة</span>
            </div>
            <div className="mt-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                {fixedPost.category || 'عام'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none rtl">
            <ArticleRenderer />
          </div>
          
          {/* Share Links */}
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold mb-2">مشاركة المقال</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https://elitemovers.com/blog/${fixedPost.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook"></i> فيسبوك
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=https://elitemovers.com/blog/${fixedPost.slug}&text=${encodeURIComponent(fixedPost.title || '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i> تويتر
                  </a>
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent((fixedPost.title || '') + ' https://elitemovers.com/blog/' + fixedPost.slug)}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                    <i className="fab fa-whatsapp"></i> واتساب
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://elitemovers.com/blog/${fixedPost.slug}&title=${encodeURIComponent(fixedPost.title || '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-linkedin"></i> لينكد إن
                  </a>
                </div>
              </div>
              <div>
                <button className="bg-primary-100 text-primary-700 px-4 py-2 rounded-md hover:bg-primary-200">
                  <i className="far fa-bookmark mr-1"></i> حفظ المقال
                </button>
              </div>
            </div>
          </div>
          
          {/* Author Box */}
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={authorImagePath}
                alt={`صورة ${fixedPost.author || 'المؤلف'}`}
                className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6 object-cover"
                onError={(e) => {
                  e.target.src = '/images/authors/default-author.png';
                }}
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{fixedPost.author || 'كاتب'}</h3>
                <p className="text-gray-600 mb-4">
                  خبير في مجال نقل وتغليف الأثاث مع أكثر من 10 سنوات من الخبرة. يهتم بمساعدة العملاء في الحصول على خدمات نقل آمنة وموثوقة مع الحفاظ على سلامة ممتلكاتهم الثمينة.
                </p>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a href="#" className="text-gray-600 hover:text-primary-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary-600">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary-600">
                    <i className="fas fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <ImageProxy 
                      src={relatedPost.image}
                      fallbackSrc={getAlternativePaths(relatedPost.slug)}
                      defaultSrc="/images/blog/default-blog-post.jpg"
                      alt={relatedPost.title || 'مقال ذو صلة'}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{relatedPost.title || 'مقال ذو صلة'}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt || 'مقال ذو صلة بالموضوع الحالي'}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BlogLayout>
  );
};

export default BlogPost;