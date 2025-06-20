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

const JeddahMovingCosts = () => {
  // الحصول على المقال من البيانات
  const slug = "jeddah-moving-costs-factors-save-money";
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
    <p>يعد الانتقال إلى منزل جديد في جدة تجربة مثيرة وتحديًا في نفس الوقت، لكن أحد أهم الأسئلة التي تشغل بال الكثيرين هو: كم ستكلف عملية النقل؟ تختلف تكاليف نقل العفش في جدة بناءً على عدة عوامل، وفهم هذه العوامل يمكن أن يساعدك في وضع ميزانية واقعية وتوفير جزء كبير من المال. في هذا المقال، سنستعرض متوسط تكاليف نقل العفش في جدة، والعوامل المؤثرة في تحديد هذه التكاليف، بالإضافة إلى نصائح عملية لتقليل النفقات دون المساس بجودة الخدمة أو سلامة ممتلكاتك.</p>
    
    <h2 id="average-costs">متوسط تكاليف نقل العفش في جدة</h2>
    
    <h3 id="apartment-costs">1. تكلفة نقل عفش الشقق</h3>
    <p>متوسط تكاليف نقل أثاث الشقق داخل جدة:</p>
    <ul>
      <li>شقة استوديو أو غرفة وصالة: 600 - 1000 ريال سعودي</li>
      <li>شقة غرفتين وصالة: 900 - 1500 ريال سعودي</li>
      <li>شقة ثلاث غرف وصالة: 1300 - 2000 ريال سعودي</li>
      <li>شقة أربع غرف وصالة: 1800 - 2500 ريال سعودي</li>
      <li>شقة خمس غرف وأكثر: 2200 - 3500 ريال سعودي</li>
    </ul>
    <p>ملاحظة: هذه الأسعار تقديرية وتشمل عادة خدمات النقل الأساسية دون خدمات إضافية مثل الفك والتركيب أو التغليف.</p>
    
    <h3 id="villa-costs">2. تكلفة نقل عفش الفلل والمنازل الكبيرة</h3>
    <p>متوسط تكاليف نقل أثاث الفلل داخل جدة:</p>
    <ul>
      <li>فيلا صغيرة (دورين): 3000 - 5000 ريال سعودي</li>
      <li>فيلا متوسطة: 5000 - 8000 ريال سعودي</li>
      <li>فيلا كبيرة: 8000 - 12000 ريال سعودي</li>
      <li>قصر أو فيلا فاخرة: 12000 ريال سعودي وأكثر</li>
    </ul>
    <p>تشمل هذه التكاليف عادة استخدام شاحنات أكبر وعدد أكبر من العمال نظرًا لحجم الأثاث والمقتنيات.</p>
    
    <h3 id="additional-services">3. تكلفة الخدمات الإضافية</h3>
    <p>أسعار الخدمات المكملة لعملية النقل:</p>
    <ul>
      <li>فك وتركيب الأثاث: 300 - 800 ريال سعودي (حسب كمية وتعقيد الأثاث)</li>
      <li>تغليف الأثاث والمقتنيات: 400 - 1000 ريال سعودي</li>
      <li>خدمات التنظيف بعد النقل: 350 - 700 ريال سعودي</li>
      <li>خدمات التخزين المؤقت: 500 - 1500 ريال شهريًا (حسب حجم العفش)</li>
      <li>نقل المقتنيات الثمينة والحساسة: 300 - 1200 ريال سعودي</li>
    </ul>
    
    <h2 id="factors">العوامل المؤثرة في تكلفة نقل العفش</h2>
    
    <h3 id="volume-weight">4. حجم ووزن العفش</h3>
    <p>كيف يؤثر حجم العفش على التكلفة:</p>
    <ul>
      <li>كلما زاد حجم العفش، زادت مساحة الشاحنة المطلوبة</li>
      <li>الأثاث الثقيل يتطلب عمالة أكثر وأدوات خاصة للنقل</li>
      <li>بعض شركات النقل تحسب التكلفة بناءً على عدد القطع الكبيرة (مثل الأسرّة والخزائن)</li>
      <li>وجود أجهزة كبيرة مثل الثلاجات والغسالات يزيد من التكلفة</li>
      <li>عدد الصناديق والحقائب يؤثر على إجمالي التكلفة</li>
    </ul>
    
    <h3 id="distance">5. المسافة ومنطقة النقل</h3>
    <p>تأثير المسافة والموقع على تكلفة النقل:</p>
    <ul>
      <li>النقل داخل الحي الواحد يكون أقل تكلفة من النقل بين أحياء متباعدة</li>
      <li>تكلفة النقل من وسط المدينة إلى ضواحيها عادة ما تكون أعلى</li>
      <li>النقل من جدة إلى المدن المجاورة مثل مكة أو الطائف يضيف تكلفة إضافية</li>
      <li>بعض المناطق في جدة ذات كثافة مرورية عالية تزيد من وقت النقل وبالتالي التكلفة</li>
      <li>الأحياء الراقية قد تكون أسعار النقل إليها أعلى قليلاً</li>
    </ul>
    
    <h3 id="accessibility">6. سهولة الوصول والتحديات اللوجستية</h3>
    <p>الصعوبات التي تزيد من تكلفة النقل:</p>
    <ul>
      <li>المباني بدون مصاعد للأدوار العليا تزيد التكلفة بنسبة 15-30%</li>
      <li>الممرات والأبواب الضيقة التي تتطلب تفكيك الأثاث</li>
      <li>صعوبة وقوف الشاحنات في المناطق المزدحمة أو الشوارع الضيقة</li>
      <li>القيود الزمنية لدخول الشاحنات في بعض المجمعات السكنية</li>
      <li>الحاجة لمعدات خاصة مثل الرافعات للأثاث الثقيل أو الضخم</li>
    </ul>
    
    <h3 id="timing">7. توقيت وموسم النقل</h3>
    <p>كيف يؤثر التوقيت على تكاليف النقل:</p>
    <ul>
      <li>مواسم الذروة (بداية ونهاية العام الدراسي) تكون الأسعار أعلى بنسبة 20-40%</li>
      <li>أيام نهاية الأسبوع والإجازات الرسمية تكون أكثر تكلفة</li>
      <li>النقل خلال شهر رمضان قد يكون أكثر تكلفة نظراً لقلة ساعات العمل</li>
      <li>النقل في الصباح الباكر أو المساء المتأخر قد يكون أقل تكلفة</li>
      <li>الحجز المبكر قبل موعد النقل بفترة كافية يمكن أن يوفر 10-15% من التكلفة</li>
    </ul>
    
    <h2 id="saving-tips">استراتيجيات توفير تكاليف نقل العفش</h2>
    
    <h3 id="quotes-comparison">8. طلب ومقارنة عروض الأسعار</h3>
    <p>خطوات للحصول على أفضل عرض سعر:</p>
    <ul>
      <li>اطلب عروض أسعار من 3-5 شركات نقل مختلفة</li>
      <li>تأكد من أن العروض تحدد بوضوح ما هو مشمول وما هو غير مشمول</li>
      <li>اسأل عن أي رسوم إضافية محتملة قد تنشأ خلال عملية النقل</li>
      <li>اطلب تقييمًا للعفش في الموقع وليس فقط تقديرًا عبر الهاتف</li>
      <li>استخدم عروض المنافسين للتفاوض على سعر أفضل</li>
      <li>ابحث عن الشركات التي تقدم خصومات للعملاء الجدد أو عند التوصية بأصدقاء</li>
    </ul>
    
    <h3 id="selective-services">9. اختيار الخدمات حسب الحاجة</h3>
    <p>تقليل التكاليف عن طريق اختيار ما تحتاجه فقط:</p>
    <ul>
      <li>فكك الأثاث البسيط بنفسك وتعاقد فقط لفك القطع المعقدة</li>
      <li>غلف المقتنيات الشخصية والأغراض غير الهشة بنفسك</li>
      <li>قم بتنظيف المنزل الجديد والقديم بدلاً من دفع رسوم خدمة التنظيف</li>
      <li>اطلب خدمة النقل فقط دون التحميل والتفريغ إذا كان لديك من يساعدك</li>
      <li>استأجر شاحنة بسائق فقط إذا كنت ستتولى عملية التحميل والتفريغ</li>
      <li>نقل القطع الصغيرة والأغراض الشخصية بنفسك</li>
    </ul>
    
    <h3 id="decluttering">10. التخلص من الأغراض غير الضرورية</h3>
    <p>كيف يمكن للتخلص من الزوائد أن يوفر المال:</p>
    <ul>
      <li>بيع الأثاث الذي لم تعد بحاجة إليه عبر منصات البيع الإلكترونية</li>
      <li>التبرع بالملابس والأغراض غير المستخدمة للجمعيات الخيرية</li>
      <li>تنظيم معرض للبيع المنزلي قبل النقل بأسبوعين</li>
      <li>التخلص من الأوراق والمستندات القديمة غير الضرورية</li>
      <li>تقييم مدى الحاجة لكل قطعة أثاث قبل نقلها</li>
      <li>تقليل عدد الصناديق عن طريق تنظيم المحتويات بشكل أفضل</li>
    </ul>
    
    <h3 id="timing-strategies">11. استراتيجيات التوقيت المناسب</h3>
    <p>اختيار الوقت المناسب للنقل لتوفير المال:</p>
    <ul>
      <li>جدولة النقل خارج مواسم الذروة (منتصف الفصل الدراسي مثلاً)</li>
      <li>اختيار أيام منتصف الأسبوع (الأحد إلى الأربعاء) بدلاً من نهاية الأسبوع</li>
      <li>الحجز قبل موعد النقل بشهر على الأقل للحصول على أسعار أفضل</li>
      <li>تجنب النقل خلال المناسبات والأعياد والإجازات الرسمية</li>
      <li>الاستفسار عن أوقات الخصومات الموسمية لدى شركات النقل</li>
      <li>اختيار نقل العفش على مراحل إذا كان ذلك ممكناً</li>
    </ul>
    
    <h2 id="diy-vs-professional">النقل الذاتي مقابل الاستعانة بمحترفين</h2>
    
    <h3 id="diy-moving">12. تكاليف ومزايا النقل الذاتي</h3>
    <p>حساب تكلفة نقل العفش بنفسك:</p>
    <ul>
      <li>استئجار شاحنة بسائق: 300 - 700 ريال يومياً (حسب الحجم)</li>
      <li>استئجار عمالة للمساعدة: 100 - 150 ريال للعامل الواحد</li>
      <li>مواد التغليف والصناديق: 200 - 500 ريال</li>
      <li>تكلفة الوقود والمواصلات: 100 - 200 ريال</li>
      <li>مزايا النقل الذاتي: توفير 30-50% من تكلفة التعاقد مع شركة متخصصة</li>
      <li>مخاطر النقل الذاتي: احتمالية إتلاف الأثاث، الإصابات الشخصية، استهلاك الوقت والجهد</li>
    </ul>
    
    <h3 id="professional-value">13. القيمة المضافة للخدمات المحترفة</h3>
    <p>لماذا قد تكون الخدمات المحترفة أكثر قيمة رغم تكلفتها:</p>
    <ul>
      <li>الخبرة في التعامل مع القطع الثمينة والهشة</li>
      <li>توفير الوقت والجهد وتجنب الإجهاد</li>
      <li>استخدام معدات متخصصة ومواد تغليف عالية الجودة</li>
      <li>التأمين على الممتلكات ضد التلف أو الضياع</li>
      <li>فريق متخصص لفك وتركيب الأثاث المعقد</li>
      <li>القدرة على التعامل مع التحديات اللوجستية مثل نقل الأثاث عبر السلالم الضيقة</li>
      <li>خبرة في تنظيم وترتيب الأثاث في الشاحنات لمنع التلف</li>
    </ul>
    
    <h2 id="elite-moving">خدمات النخبة للنقل في جدة</h2>
    
    <h3 id="elite-packages">14. باقات النخبة المتنوعة والاقتصادية</h3>
    <p>خيارات مختلفة تناسب جميع الميزانيات:</p>
    <ul>
      <li>باقة النقل الأساسية: تشمل النقل فقط بأسعار تنافسية</li>
      <li>باقة النقل المتكاملة: تشمل النقل والفك والتركيب والتغليف الأساسي</li>
      <li>باقة النقل الشاملة: تغطي كافة الخدمات من التغليف إلى التنظيف</li>
      <li>خيارات الدفع المرنة وخطط التقسيط دون فوائد</li>
      <li>خصومات للنقل في أوقات خارج الذروة تصل إلى 25%</li>
      <li>عروض خاصة للمؤسسات والشركات وعمليات النقل الكبيرة</li>
      <li>باقات مخصصة حسب احتياجات العميل لضمان الدفع فقط مقابل ما تحتاجه</li>
    </ul>
    
    <h3 id="elite-advantages">15. مميزات التعامل مع النخبة للنقل</h3>
    <p>لماذا تعتبر النخبة الخيار الأمثل لنقل العفش في جدة:</p>
    <ul>
      <li>أسعار شفافة بدون رسوم خفية أو مفاجآت</li>
      <li>فريق محترف مدرب على أعلى مستوى</li>
      <li>أسطول حديث من الشاحنات المجهزة خصيصاً لنقل الأثاث</li>
      <li>استخدام تقنيات متطورة في التغليف والنقل</li>
      <li>تأمين شامل على جميع المنقولات</li>
      <li>التزام تام بالمواعيد المتفق عليها</li>
      <li>خدمة عملاء متميزة على مدار الساعة</li>
      <li>خدمات ما بعد النقل مثل الضمان على التركيب</li>
      <li>سجل حافل من العملاء الراضين في جميع أنحاء جدة</li>
    </ul>
    
    <h2 id="conclusion">الخاتمة</h2>
    <p>تختلف تكاليف نقل العفش في جدة بناءً على العديد من العوامل مثل حجم العفش، المسافة، والخدمات المطلوبة. من خلال فهم هذه العوامل والتخطيط المسبق، يمكنك توفير جزء كبير من تكاليف النقل دون التضحية بجودة الخدمة أو سلامة ممتلكاتك. سواء اخترت النقل الذاتي أو الاستعانة بشركة محترفة، فإن المفتاح هو الموازنة بين التكلفة والراحة والأمان.</p>
    <p>تفخر شركة النخبة للنقل بتقديم خدمات نقل عفش متميزة في جدة بأسعار تنافسية ومستوى عالٍ من الاحترافية. نحن ندرك أن كل عملية نقل فريدة من نوعها، ولذلك نقدم حلولاً مخصصة تناسب ميزانيتك واحتياجاتك الخاصة. تواصل معنا اليوم للحصول على تقدير مجاني وشفاف لتكلفة نقل عفشك في جدة، وسنساعدك في الحصول على أفضل قيمة مقابل المال.</p>
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
                <a href="#average-costs" className="text-primary-600 hover:underline">متوسط تكاليف نقل العفش في جدة</a>
              </li>
              <li className="mb-2">
                <a href="#factors" className="text-primary-600 hover:underline">العوامل المؤثرة في تكلفة نقل العفش</a>
              </li>
              <li className="mb-2">
                <a href="#saving-tips" className="text-primary-600 hover:underline">استراتيجيات توفير تكاليف نقل العفش</a>
              </li>
              <li className="mb-2">
                <a href="#diy-vs-professional" className="text-primary-600 hover:underline">النقل الذاتي مقابل الاستعانة بمحترفين</a>
              </li>
              <li className="mb-2">
                <a href="#elite-moving" className="text-primary-600 hover:underline">خدمات النخبة للنقل في جدة</a>
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
                  خبير اقتصادي متخصص في تحليل تكاليف النقل والخدمات اللوجستية في المملكة العربية السعودية. لديه أكثر من 10 سنوات من الخبرة في قطاع الخدمات المنزلية ونقل العفش، ويقدم استشارات للشركات والأفراد حول كيفية موازنة التكلفة والجودة عند اختيار خدمات النقل.
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

export default JeddahMovingCosts; 