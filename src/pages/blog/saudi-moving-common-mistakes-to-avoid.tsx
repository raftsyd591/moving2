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

const SaudiMovingCommonMistakesToAvoid = () => {
  // الحصول على المقال من البيانات
  const slug = "saudi-moving-common-mistakes-to-avoid";
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
    <p>تعتبر عملية نقل العفش من أكثر المهام إرهاقاً وتوتراً التي يمر بها الكثيرون. وفي المملكة العربية السعودية، هناك العديد من الأخطاء الشائعة التي يقع فيها الناس أثناء عملية النقل، والتي قد تؤدي إلى تلف الممتلكات، وتكاليف إضافية، وضغوط نفسية. في هذا المقال، سنستعرض كيفية تجنب هذه الأخطاء للحصول على تجربة نقل سلسة وناجحة.</p>

    <h2 id="planning-mistakes">أخطاء مرحلة التخطيط</h2>
    
    <h3 id="last-minute">1. التخطيط في اللحظات الأخيرة</h3>
    <p>من أكبر الأخطاء التي يقع فيها الكثيرون هو تأجيل التخطيط للنقل حتى اللحظات الأخيرة:</p>
    <ul>
      <li>التأثير: ارتفاع التكاليف، صعوبة إيجاد شركة نقل جيدة، ضغط نفسي كبير، نسيان أشياء مهمة</li>
      <li>الحل: البدء في التخطيط قبل 1-2 شهر على الأقل من موعد النقل</li>
      <li>إعداد قائمة مهام مفصلة وجدول زمني</li>
      <li>تحديد ميزانية واضحة تشمل جميع جوانب النقل</li>
      <li>البحث المبكر عن شركات نقل وطلب عروض أسعار متعددة</li>
    </ul>
    
    <h3 id="no-research">2. عدم البحث الكافي عن شركات النقل</h3>
    <p>اختيار شركة نقل دون بحث كافٍ يعد خطأً فادحاً:</p>
    <ul>
      <li>التأثير: احتمالية الوقوع ضحية لشركات غير محترفة، تلف الأثاث، خدمة سيئة، تكاليف مخفية</li>
      <li>الحل: البحث عن مراجعات وتقييمات الشركات على الإنترنت</li>
      <li>طلب توصيات من الأصدقاء والعائلة</li>
      <li>التحقق من ترخيص الشركة وتأمينها</li>
      <li>زيارة مقر الشركة إذا أمكن للتأكد من احترافيتها</li>
      <li>طلب عروض أسعار مفصلة من 3-5 شركات على الأقل للمقارنة</li>
    </ul>
    
    <h3 id="budget-mistakes">3. سوء تقدير الميزانية</h3>
    <p>عدم إعداد ميزانية واقعية يسبب مشاكل مالية:</p>
    <ul>
      <li>التأثير: نفقات غير متوقعة، اضطرار لتخفيض جودة الخدمة، أو تأجيل النقل</li>
      <li>الحل: الأخذ في الاعتبار جميع التكاليف المحتملة:
        <ul>
          <li>تكلفة شركة النقل الأساسية</li>
          <li>مواد التغليف</li>
          <li>خدمات إضافية (فك وتركيب، تنظيف)</li>
          <li>تأمين المنقولات</li>
          <li>مصاريف النقل الشخصية</li>
          <li>احتياطي للطوارئ (10-15% من إجمالي الميزانية)</li>
        </ul>
      </li>
    </ul>
    
    <h2 id="packing-mistakes">أخطاء التغليف والتعبئة</h2>
    
    <h3 id="poor-packing">4. التغليف غير الكافي أو غير المناسب</h3>
    <p>تغليف الأثاث والمقتنيات بشكل غير صحيح يعرضها للتلف:</p>
    <ul>
      <li>التأثير: تلف أو كسر المقتنيات الثمينة، خدوش في الأثاث، تكاليف إضافية للإصلاح أو الاستبدال</li>
      <li>الحل: استخدام مواد تغليف مناسبة لكل نوع من المقتنيات:
        <ul>
          <li>ورق فقاعات للمواد الهشة والقابلة للكسر</li>
          <li>كرتون سميك للصناديق</li>
          <li>بطانيات أو أغطية واقية للأثاث الكبير</li>
          <li>أشرطة لاصقة قوية</li>
          <li>صناديق مخصصة للأجهزة الإلكترونية</li>
        </ul>
      </li>
      <li>تعبئة الصناديق بشكل متوازن (لا فارغة جداً ولا ممتلئة جداً)</li>
      <li>استخدام وسائد فقاعية أو ورق جرائد لملء الفراغات</li>
    </ul>
    
    <h3 id="heavy-boxes">5. تعبئة صناديق ثقيلة جداً</h3>
    <p>تحميل الصناديق بأكثر مما ينبغي يسبب مشاكل:</p>
    <ul>
      <li>التأثير: صعوبة في الحمل، مخاطر الإصابة، تمزق الصناديق، تلف المحتويات</li>
      <li>الحل: تحديد وزن مناسب لكل صندوق (لا يزيد عن 20-25 كيلوغرام)</li>
      <li>توزيع الأغراض الثقيلة على عدة صناديق</li>
      <li>وضع الأغراض الثقيلة في صناديق صغيرة والخفيفة في صناديق كبيرة</li>
      <li>اختبار وزن الصندوق أثناء التعبئة للتأكد من إمكانية حمله بسهولة</li>
      <li>استخدام صناديق متينة للأغراض الثقيلة</li>
    </ul>
    
    <h3 id="no-labeling">6. عدم ترميز وتصنيف الصناديق</h3>
    <p>إهمال ترميز الصناديق يسبب فوضى كبيرة عند التفريغ:</p>
    <ul>
      <li>التأثير: صعوبة في إيجاد الأغراض، تأخير في عملية التفريغ والترتيب، إحباط وتوتر</li>
      <li>الحل: كتابة محتويات كل صندوق بوضوح على جميع جوانبه</li>
      <li>استخدام نظام ترميز بالألوان للغرف المختلفة</li>
      <li>وضع علامة "للأعلى" و"قابل للكسر" عند الحاجة</li>
      <li>إعداد قائمة مرقمة بجميع الصناديق ومحتوياتها</li>
      <li>ترقيم الصناديق بتسلسل وحفظ سجل بالأرقام</li>
    </ul>
    
    <h2 id="moving-day-mistakes">أخطاء يوم النقل</h2>
    
    <h3 id="no-inventory">7. عدم إعداد قائمة جرد شاملة</h3>
    <p>نقل الأثاث دون قائمة جرد مفصلة يزيد من مخاطر فقدان الأغراض:</p>
    <ul>
      <li>التأثير: صعوبة تتبع المفقودات، مشاكل مع شركة النقل في حالة فقدان شيء ما</li>
      <li>الحل: إعداد قائمة جرد مفصلة بجميع القطع المنقولة</li>
      <li>التقاط صور للأثاث والأغراض الثمينة قبل النقل</li>
      <li>مراجعة القائمة عند التفريغ في المنزل الجديد</li>
      <li>تعداد الصناديق والقطع الكبيرة أثناء التحميل والتفريغ</li>
      <li>الاحتفاظ بنسخة من قائمة الجرد وإعطاء نسخة للشركة</li>
    </ul>
    
    <h3 id="valuables-handling">8. سوء التعامل مع المقتنيات الثمينة والوثائق</h3>
    <p>ترك المقتنيات الثمينة والوثائق المهمة مع باقي الأغراض:</p>
    <ul>
      <li>التأثير: فقدان أو تلف الأشياء ذات القيمة العالية، ضياع وثائق مهمة يصعب استبدالها</li>
      <li>الحل: نقل المقتنيات الثمينة والوثائق بنفسك شخصياً</li>
      <li>تجهيز حقيبة خاصة للمجوهرات والوثائق والأوراق المهمة</li>
      <li>الاحتفاظ بنسخ إلكترونية من الوثائق المهمة</li>
      <li>التأمين الإضافي على المقتنيات عالية القيمة إذا كانت ستنقل مع شركة النقل</li>
      <li>تصوير المستندات المهمة قبل النقل</li>
    </ul>
    
    <h3 id="no-essentials-bag">9. عدم تجهيز حقيبة المستلزمات الأساسية</h3>
    <p>عدم تجهيز حقيبة تحتوي على المستلزمات الأساسية لليوم الأول:</p>
    <ul>
      <li>التأثير: الاضطرار للبحث في صناديق كثيرة للعثور على المستلزمات الضرورية، إرهاق إضافي</li>
      <li>الحل: تجهيز حقيبة خاصة تحتوي على:
        <ul>
          <li>ملابس ليوم أو يومين</li>
          <li>أدوات النظافة الشخصية</li>
          <li>الأدوية الضرورية</li>
          <li>شواحن الهواتف والأجهزة</li>
          <li>مناشف وأغطية أسرّة</li>
          <li>أدوات مطبخ أساسية</li>
          <li>وجبات خفيفة ومياه</li>
        </ul>
      </li>
      <li>نقل هذه الحقيبة معك شخصياً وليس مع شركة النقل</li>
    </ul>
    
    <h2 id="logistical-mistakes">أخطاء لوجستية</h2>
    
    <h3 id="utility-transfer">10. نسيان نقل المرافق والخدمات</h3>
    <p>إهمال نقل اشتراكات المرافق والخدمات في الوقت المناسب:</p>
    <ul>
      <li>التأثير: انقطاع الخدمات الأساسية في المنزل الجديد، دفع فواتير للمنزل القديم</li>
      <li>الحل: إعداد قائمة بجميع المرافق والخدمات التي تحتاج لنقلها:
        <ul>
          <li>الكهرباء والماء</li>
          <li>الإنترنت والهاتف</li>
          <li>الاشتراكات الترفيهية</li>
          <li>خدمات البريد</li>
        </ul>
      </li>
      <li>الاتصال بالجهات المعنية قبل أسبوعين على الأقل من موعد النقل</li>
      <li>تحديد موعد لتفعيل الخدمات في المنزل الجديد</li>
      <li>تسجيل قراءات العدادات في المنزلين القديم والجديد</li>
    </ul>
    
    <h3 id="measuring-furniture">11. عدم قياس الأثاث والمداخل</h3>
    <p>نقل الأثاث دون التأكد من إمكانية مروره عبر المداخل والأبواب:</p>
    <ul>
      <li>التأثير: تأخير في عملية النقل، الاضطرار لتفكيك الأثاث، أو حتى عدم القدرة على نقله</li>
      <li>الحل: قياس جميع قطع الأثاث الكبيرة (العرض، الارتفاع، العمق)</li>
      <li>قياس المداخل والأبواب والممرات في المنزلين القديم والجديد</li>
      <li>التخطيط لمسار النقل داخل المنزلين</li>
      <li>تحديد القطع التي قد تحتاج للتفكيك قبل النقل</li>
      <li>التأكد من وجود مصعد كافٍ في حالة الشقق العليا</li>
    </ul>
    
    <h3 id="parking-issues">12. عدم ترتيب مواقف الشاحنات</h3>
    <p>إهمال ترتيب مكان لوقوف شاحنة النقل:</p>
    <ul>
      <li>التأثير: تأخير في عملية التحميل والتفريغ، تكاليف إضافية بسبب وقت الانتظار</li>
      <li>الحل: التنسيق مع الجيران أو إدارة المبنى لحجز مكان قريب</li>
      <li>الاستعلام عن قواعد الوقوف في المجمعات السكنية</li>
      <li>الحصول على تصاريح الوقوف إذا كانت مطلوبة</li>
      <li>إخطار البوابات الأمنية في المجمعات المغلقة بموعد قدوم شاحنة النقل</li>
      <li>قياس المسافة بين موقف الشاحنة ومدخل المنزل للتأكد من سهولة النقل</li>
    </ul>
    
    <h2 id="after-moving-mistakes">أخطاء ما بعد النقل</h2>
    
    <h3 id="inspection">13. عدم فحص الأثاث بعد النقل</h3>
    <p>التغاضي عن فحص الأثاث والمقتنيات فور وصولها:</p>
    <ul>
      <li>التأثير: اكتشاف الأضرار متأخراً، صعوبة المطالبة بالتعويض من شركة النقل</li>
      <li>الحل: فحص جميع قطع الأثاث والصناديق فور وصولها</li>
      <li>توثيق أي ضرر بالصور</li>
      <li>إبلاغ شركة النقل فوراً بأي تلفيات</li>
      <li>عدم التوقيع على استلام الشحنة بشكل نهائي قبل التأكد من سلامتها</li>
      <li>الاحتفاظ بجميع الأوراق والإيصالات المتعلقة بالنقل</li>
    </ul>
    
    <h3 id="tipping">14. عدم تقدير جهود العمال</h3>
    <p>إهمال تقدير جهود فريق النقل الذي عمل بجد:</p>
    <ul>
      <li>التأثير: انخفاض الروح المعنوية للعمال، احتمالية عدم بذل الجهد الكافي</li>
      <li>الحل: تقديم المشروبات والوجبات الخفيفة أثناء العمل</li>
      <li>تقديم إكرامية مناسبة (25-50 ريال لكل عامل حسب حجم العمل)</li>
      <li>شكر العمال على جهودهم</li>
      <li>كتابة تقييم إيجابي للشركة إذا كانت الخدمة جيدة</li>
      <li>التعامل باحترام وتقدير مع فريق العمل طوال اليوم</li>
    </ul>
    
    <h3 id="waste-disposal">15. إهمال التخلص من مخلفات التغليف</h3>
    <p>ترك مخلفات التغليف والصناديق الفارغة دون تنظيم:</p>
    <ul>
      <li>التأثير: فوضى في المنزل الجديد، صعوبة الحركة والترتيب</li>
      <li>الحل: تخصيص منطقة محددة لتجميع مخلفات التغليف</li>
      <li>التخلص من الصناديق والأوراق تدريجياً أثناء التفريغ</li>
      <li>إعادة تدوير الكرتون والورق في الأماكن المخصصة</li>
      <li>الاحتفاظ ببعض الصناديق الجيدة للاستخدام المستقبلي</li>
      <li>التنسيق مع إدارة النفايات في الحي للتخلص من كميات كبيرة</li>
    </ul>

    <h2 id="conclusion">الخاتمة</h2>
    <p>تجنب الأخطاء الشائعة عند نقل العفش في السعودية يتطلب تخطيطاً دقيقاً ووعياً بالتفاصيل. من خلال التخطيط المبكر، واختيار شركة نقل موثوقة، والتغليف المناسب، والتنظيم الجيد، يمكنك تحويل تجربة النقل من مهمة مرهقة إلى عملية سلسة وناجحة.</p>
    <p>تذكر أن الاستثمار في النقل الآمن والمنظم ليس مضيعة للوقت أو المال، بل هو حماية لممتلكاتك الثمينة وراحة نفسية لا تقدر بثمن. ومع شركة النخبة للنقل، يمكنك الاعتماد على خبراء متخصصين يعرفون كيفية تجنب هذه الأخطاء وضمان نقل آمن وسلس لجميع ممتلكاتك.</p>
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
                <a href="#planning-mistakes" className="text-primary-600 hover:underline">أخطاء مرحلة التخطيط</a>
              </li>
              <li className="mb-2">
                <a href="#packing-mistakes" className="text-primary-600 hover:underline">أخطاء التغليف والتعبئة</a>
              </li>
              <li className="mb-2">
                <a href="#moving-day-mistakes" className="text-primary-600 hover:underline">أخطاء يوم النقل</a>
              </li>
              <li className="mb-2">
                <a href="#logistical-mistakes" className="text-primary-600 hover:underline">أخطاء لوجستية</a>
              </li>
              <li className="mb-2">
                <a href="#after-moving-mistakes" className="text-primary-600 hover:underline">أخطاء ما بعد النقل</a>
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
                  خبير في مجال نقل العفش والتغليف مع خبرة تمتد لأكثر من 8 سنوات. متخصص في تقديم حلول عملية لتحديات نقل الأثاث، وله العديد من المقالات الإرشادية في مجال النقل والتخزين.
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
      canonicalUrl={`https://elitemovers.com/blog/${slug}`}
      ogImage={post.image}
      children={pageContent}
    >
    </BlogLayout>
  );
};

export default SaudiMovingCommonMistakesToAvoid; 