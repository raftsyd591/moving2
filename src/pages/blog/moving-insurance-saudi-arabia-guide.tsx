import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import { articles } from '../../data/articles';

// تعريف نوع البيانات للمقال
type BlogPostProps = {
  title: string;
  slug: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  readTime: number;
  excerpt: string;
  keywords: string;
  content: string;
};

const MovingInsuranceSaudiArabiaGuide = () => {
  // الحصول على المقال من البيانات
  const slug = "moving-insurance-saudi-arabia-guide";
  const post = articles.find((article) => article.slug === slug) as BlogPostProps;
  
  // بيانات المخطط الهيكلي لـ Schema.org
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "النخبة للنقل",
      "logo": {
        "@type": "ImageObject",
        "url": "/public/images/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "description": post.excerpt,
    "keywords": post.keywords,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elitemovers.com/blog/${post.slug}`
    }
  };
  
  // محتوى المقال المنسق بـ HTML
  const articleContent = `
    <h2 id="introduction">مقدمة</h2>
    <p>عندما يتعلق الأمر بنقل العفش، سواء كان ذلك داخل مدينة واحدة أو بين مدن المملكة العربية السعودية، فإن احتمالية تعرض الممتلكات للتلف أو الضياع تظل قائمة رغم كل الاحتياطات. هنا يأتي دور التأمين على العفش أثناء النقل كضمان إضافي لحماية استثماراتك وممتلكاتك الثمينة. في هذا المقال، سنستعرض كل ما تحتاج معرفته عن التأمين على العفش في السعودية، أنواعه، وكيفية اختيار التغطية المناسبة لاحتياجاتك.</p>

    <h2 id="insurance-importance">لماذا يعتبر التأمين على العفش ضرورياً؟</h2>
    
    <h3 id="risk-protection">1. حماية من المخاطر المحتملة</h3>
    <p>يوفر التأمين طبقة إضافية من الحماية ضد مجموعة متنوعة من المخاطر:</p>
    <ul>
      <li>تلف الأثاث الناتج عن الاهتزازات أو الصدمات أثناء النقل</li>
      <li>خدوش أو كسور في القطع الثمينة</li>
      <li>فقدان بعض القطع أو الصناديق خلال عملية النقل</li>
      <li>تلف ناتج عن ظروف الطقس غير المتوقعة (أمطار، عواصف رملية)</li>
      <li>حوادث الطريق المحتملة وتأثيرها على الشحنة</li>
      <li>السرقة أو الاختلاس في أثناء عملية النقل</li>
    </ul>
    
    <h3 id="financial-security">2. الأمان المالي والراحة النفسية</h3>
    <p>يقدم التأمين على العفش فوائد مالية ونفسية كبيرة:</p>
    <ul>
      <li>تعويض مالي في حال تلف أو فقدان الممتلكات الثمينة</li>
      <li>تقليل القلق والتوتر المرتبط بعملية النقل</li>
      <li>ضمان القدرة على استبدال أو إصلاح الأثاث المتضرر</li>
      <li>حماية الاستثمارات في قطع الأثاث باهظة الثمن</li>
      <li>تجنب الخسائر المالية الكبيرة غير المتوقعة</li>
    </ul>
    
    <h2 id="insurance-types">أنواع التأمين على العفش في السعودية</h2>
    
    <h3 id="basic-coverage">3. التغطية الأساسية (تعويض بالوزن)</h3>
    <p>وهي أبسط أنواع التأمين وأكثرها شيوعاً:</p>
    <ul>
      <li>تحسب قيمة التعويض حسب وزن الأغراض المتضررة أو المفقودة</li>
      <li>تكلفة منخفضة نسبياً مقارنة بالأنواع الأخرى</li>
      <li>غالباً ما تكون مشمولة في سعر النقل الأساسي لدى بعض الشركات</li>
      <li>تعويض محدود لا يغطي القيمة الفعلية للأغراض الثمينة</li>
      <li>مناسبة للأثاث العادي ذي القيمة المتوسطة أو المنخفضة</li>
    </ul>
    
    <h3 id="full-value-protection">4. تغطية القيمة الكاملة</h3>
    <p>تغطية شاملة توفر حماية أكبر للعفش:</p>
    <ul>
      <li>تعويض عن القيمة الكاملة للإصلاح أو الاستبدال</li>
      <li>إمكانية إصلاح القطع المتضررة أو استبدالها بأخرى مماثلة</li>
      <li>تغطية أعلى للأثاث الثمين والقطع الفنية</li>
      <li>تكلفة أعلى مقارنة بالتغطية الأساسية</li>
      <li>خيارات للخصم (المبلغ الذي يتحمله العميل) لتقليل قسط التأمين</li>
      <li>مثالية للأثاث عالي القيمة والممتلكات الثمينة</li>
    </ul>
    
    <h3 id="third-party-insurance">5. التأمين من شركات تأمين خارجية</h3>
    <p>بديل للتأمين المقدم من شركات النقل:</p>
    <ul>
      <li>وثائق تأمين مستقلة من شركات تأمين متخصصة</li>
      <li>تغطية قد تكون أكثر شمولاً من تلك المقدمة من شركات النقل</li>
      <li>إمكانية تخصيص التغطية حسب احتياجاتك الخاصة</li>
      <li>غالباً ما تتطلب تقييماً مسبقاً للأغراض الثمينة</li>
      <li>توفر في بعض الأحيان تغطية للفترة الانتقالية (تخزين مؤقت)</li>
    </ul>
    
    <h2 id="valuable-items">تأمين المقتنيات الثمينة والخاصة</h2>
    
    <h3 id="special-valuables">6. القطع ذات القيمة الاستثنائية</h3>
    <p>بعض المقتنيات تتطلب تغطية تأمينية خاصة:</p>
    <ul>
      <li>التحف والقطع الأثرية</li>
      <li>المجوهرات والساعات الثمينة</li>
      <li>الأعمال الفنية واللوحات</li>
      <li>المجموعات النادرة (طوابع، عملات، تحف)</li>
      <li>الأثاث العتيق أو المصنوع يدوياً</li>
      <li>الآلات الموسيقية القيمة</li>
    </ul>
    
    <h3 id="special-coverage">7. تغطية المقتنيات الخاصة</h3>
    <p>كيفية تأمين الأغراض ذات القيمة الاستثنائية:</p>
    <ul>
      <li>إعلان القيمة المقدرة للأغراض الثمينة قبل النقل</li>
      <li>توثيق حالة المقتنيات بالصور والفيديو</li>
      <li>الحصول على تقييم رسمي من خبير مختص</li>
      <li>شراء تغطية إضافية مخصصة للقطع الثمينة</li>
      <li>التأكد من شروط وقيود التغطية لهذه المقتنيات</li>
      <li>الاحتفاظ بفواتير الشراء وشهادات الأصالة</li>
    </ul>
    
    <h2 id="choosing-insurance">كيفية اختيار التأمين المناسب</h2>
    
    <h3 id="assess-needs">8. تقييم احتياجاتك التأمينية</h3>
    <p>عوامل يجب مراعاتها عند اختيار التغطية المناسبة:</p>
    <ul>
      <li>القيمة الإجمالية لأثاثك ومقتنياتك</li>
      <li>وجود قطع ثمينة تتطلب تغطية خاصة</li>
      <li>مسافة النقل وطبيعة الطريق</li>
      <li>موسم النقل (صيف، شتاء) والظروف المناخية المتوقعة</li>
      <li>مدة التخزين المؤقت إذا كانت مطلوبة</li>
      <li>ميزانيتك المخصصة للتأمين</li>
    </ul>
    
    <h3 id="compare-policies">9. مقارنة وثائق التأمين المختلفة</h3>
    <p>نقاط يجب التحقق منها عند مقارنة خيارات التأمين:</p>
    <ul>
      <li>قيمة التغطية مقابل التكلفة</li>
      <li>الاستثناءات والقيود في بوليصة التأمين</li>
      <li>إجراءات المطالبة بالتعويض وسهولتها</li>
      <li>سرعة صرف التعويضات</li>
      <li>سمعة شركة التأمين أو شركة النقل</li>
      <li>إمكانية تخصيص التغطية حسب احتياجاتك</li>
      <li>توافر خدمة العملاء والدعم أثناء وبعد النقل</li>
    </ul>
    
    <h2 id="insurance-cost">العوامل المؤثرة في تكلفة التأمين</h2>
    
    <h3 id="cost-factors">10. ما الذي يحدد سعر بوليصة التأمين؟</h3>
    <p>تتأثر تكلفة تأمين العفش بعدة عوامل:</p>
    <ul>
      <li>القيمة المصرح بها للعفش والمقتنيات</li>
      <li>نوع التغطية المختارة (أساسية أو شاملة)</li>
      <li>مستوى الخصم الذي تختاره</li>
      <li>مسافة النقل والوجهة</li>
      <li>وجود مقتنيات ثمينة تتطلب تغطية خاصة</li>
      <li>تاريخ المطالبات التأمينية السابقة (إن وجد)</li>
      <li>شركة النقل المختارة وتصنيفها</li>
      <li>الحاجة للتخزين المؤقت وفترته</li>
    </ul>
    
    <h3 id="saving-tips">11. نصائح لتوفير تكاليف التأمين</h3>
    <p>كيفية الحصول على تغطية جيدة بسعر معقول:</p>
    <ul>
      <li>المقارنة بين عروض عدة شركات تأمين</li>
      <li>السؤال عن الخصومات المتاحة (دفع كامل المبلغ مقدماً، العملاء السابقين)</li>
      <li>اختيار خصم (تحمل) أعلى لتخفيض قسط التأمين</li>
      <li>التأمين فقط على القطع الثمينة والمهمة إذا كانت الميزانية محدودة</li>
      <li>الاستفسار عن التغطية المشمولة أصلاً في سعر النقل</li>
      <li>تجميع وثائق تأمين مختلفة (منزل، سيارة، عفش) مع نفس الشركة للحصول على خصم</li>
    </ul>
    
    <h2 id="claims-process">عملية المطالبة بالتعويض</h2>
    
    <h3 id="documentation">12. التوثيق اللازم قبل وأثناء وبعد النقل</h3>
    <p>خطوات هامة لضمان تغطية تأمينية سليمة:</p>
    <ul>
      <li>إعداد قائمة جرد تفصيلية بجميع المقتنيات وقيمتها</li>
      <li>توثيق حالة الأثاث بالصور والفيديو قبل النقل</li>
      <li>الاحتفاظ بنسخ من وثيقة التأمين وشروطها</li>
      <li>تسجيل أي تلف أو ضرر فور ملاحظته</li>
      <li>توثيق تاريخ ووقت اكتشاف الضرر</li>
      <li>الاحتفاظ بجميع المراسلات مع شركة النقل وشركة التأمين</li>
    </ul>
    
    <h3 id="filing-claim">13. خطوات تقديم مطالبة تأمينية</h3>
    <p>الإجراءات اللازمة للحصول على التعويض المستحق:</p>
    <ul>
      <li>الإبلاغ الفوري عن الضرر لشركة النقل وشركة التأمين</li>
      <li>تعبئة نموذج المطالبة بشكل كامل ودقيق</li>
      <li>تقديم الأدلة والتوثيق اللازم (صور، فيديو، قائمة جرد)</li>
      <li>تقديم تقديرات الإصلاح أو الاستبدال من جهات معتمدة</li>
      <li>متابعة المطالبة بانتظام والاحتفاظ بسجل للمراسلات</li>
      <li>الالتزام بالمواعيد النهائية المحددة في وثيقة التأمين</li>
      <li>طلب المساعدة من خبير مطالبات عند الحاجة لمطالبات كبيرة أو معقدة</li>
    </ul>
    
    <h3 id="disputes">14. التعامل مع النزاعات والرفض</h3>
    <p>ماذا تفعل إذا رفضت مطالبتك التأمينية:</p>
    <ul>
      <li>فهم أسباب الرفض بشكل واضح</li>
      <li>مراجعة شروط وثيقة التأمين للتأكد من تغطية الضرر</li>
      <li>تقديم أدلة إضافية لدعم مطالبتك</li>
      <li>طلب مراجعة ثانية للقرار من شركة التأمين</li>
      <li>الاستفادة من إجراءات الشكاوى الرسمية لدى شركة التأمين</li>
      <li>التواصل مع الجهات الرقابية (مؤسسة النقد العربي السعودي) عند الحاجة</li>
      <li>استشارة محامٍ متخصص في التأمين للمطالبات الكبيرة</li>
    </ul>
    
    <h2 id="elite-insurance">خدمات التأمين من شركة النخبة للنقل</h2>
    <p>تقدم شركة النخبة للنقل مجموعة متكاملة من خدمات التأمين على العفش أثناء النقل:</p>
    <ul>
      <li>تغطية تأمينية أساسية مشمولة في جميع خدمات النقل</li>
      <li>خيارات تأمين شاملة للقيمة الكاملة للأثاث والمقتنيات</li>
      <li>تغطية خاصة للقطع الثمينة والفنية</li>
      <li>شراكات مع كبرى شركات التأمين في المملكة</li>
      <li>خدمة تقييم مجانية للمقتنيات الثمينة</li>
      <li>إجراءات مبسطة وسريعة للمطالبات التأمينية</li>
      <li>فريق متخصص للمساعدة في توثيق الممتلكات قبل النقل</li>
      <li>تعويضات سريعة في حالة وقوع أي ضرر</li>
      <li>خدمة عملاء على مدار الساعة للرد على استفسارات التأمين</li>
      <li>أسعار تنافسية مع تغطية شاملة</li>
    </ul>

    <h2 id="conclusion">الخاتمة</h2>
    <p>التأمين على العفش أثناء النقل ليس ترفاً بل ضرورة لحماية استثماراتك ومقتنياتك الثمينة من المخاطر المحتملة. بينما قد يبدو كتكلفة إضافية، إلا أن قيمة الراحة النفسية التي يوفرها والحماية المالية التي يضمنها تفوق بكثير تكلفته.</p>
    <p>في شركة النخبة للنقل، نؤمن بأهمية توفير خيارات تأمينية متكاملة تناسب احتياجات عملائنا المختلفة. نحن نضمن لك عملية نقل آمنة مع تغطية تأمينية شاملة تحمي أثاثك ومقتنياتك الثمينة من البداية إلى النهاية. تواصل معنا اليوم لمعرفة المزيد عن خيارات التأمين المتاحة وكيفية اختيار التغطية المناسبة لاحتياجاتك.</p>
  `;
  
  // The complete page content including all sections
  const pageContent = (
    <>
      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>
      
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center mb-4">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-12 h-12 rounded-full border-2 border-white mr-3"
              />
              <span>{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime} دقائق للقراءة</span>
            </div>
            <div className="mt-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 mb-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">محتويات المقال</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <a href="#introduction" className="text-primary-600 hover:underline">مقدمة</a>
              </li>
              <li className="mb-2">
                <a href="#insurance-importance" className="text-primary-600 hover:underline">لماذا يعتبر التأمين على العفش ضرورياً؟</a>
              </li>
              <li className="mb-2">
                <a href="#insurance-types" className="text-primary-600 hover:underline">أنواع التأمين على العفش في السعودية</a>
              </li>
              <li className="mb-2">
                <a href="#valuable-items" className="text-primary-600 hover:underline">تأمين المقتنيات الثمينة والخاصة</a>
              </li>
              <li className="mb-2">
                <a href="#choosing-insurance" className="text-primary-600 hover:underline">كيفية اختيار التأمين المناسب</a>
              </li>
              <li className="mb-2">
                <a href="#insurance-cost" className="text-primary-600 hover:underline">العوامل المؤثرة في تكلفة التأمين</a>
              </li>
              <li className="mb-2">
                <a href="#claims-process" className="text-primary-600 hover:underline">عملية المطالبة بالتعويض</a>
              </li>
              <li className="mb-2">
                <a href="#elite-insurance" className="text-primary-600 hover:underline">خدمات التأمين من شركة النخبة للنقل</a>
              </li>
              <li className="mb-2">
                <a href="#conclusion" className="text-primary-600 hover:underline">الخاتمة</a>
              </li>
            </ul>
          </div>
          
          {/* Article Body */}
          <div className="prose prose-lg max-w-none rtl">
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
          </div>
          
          {/* Share Links */}
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold mb-2">مشاركة المقال</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=https://elitemovers.com/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook"></i> فيسبوك
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=https://elitemovers.com/blog/${slug}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i> تويتر
                  </a>
                  <a href={`https://api.whatsapp.com/send?text=${post.title} https://elitemovers.com/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                    <i className="fab fa-whatsapp"></i> واتساب
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://elitemovers.com/blog/${slug}&title=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
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
                src={post.authorImage} 
                alt={post.author} 
                className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  خبير في مجال التأمين وخدمات نقل العفش مع خبرة تتجاوز 9 سنوات. متخصص في تقديم استشارات حول أفضل الممارسات لحماية الممتلكات أثناء النقل وكيفية اختيار التغطية التأمينية المناسبة للمقتنيات الثمينة.
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
      </div>
    </>
  );
  
  return (
    <BlogLayout
      title={post.title + " | النخبة للنقل"}
      description={post.excerpt}
      keywords={post.keywords}
      canonicalUrl={`https://elitemovers.com/blog/${post.slug}`}
      ogImage={post.image}
      children={pageContent}
    >
    </BlogLayout>
  );
};

export default MovingInsuranceSaudiArabiaGuide; 