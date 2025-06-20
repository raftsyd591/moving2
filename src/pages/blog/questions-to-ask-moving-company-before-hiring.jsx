import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import { articles } from '../../data/articles.jsx';

const QuestionsToAskMovingCompany = () => {
  const slug = "questions-to-ask-moving-company-before-hiring";
  const post = articles.find((article) => article.slug === slug);
  
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
    <p>اختيار شركة نقل عفش مناسبة يمكن أن يكون الفارق بين تجربة انتقال سلسة وتجربة مليئة بالإحباط والمشاكل. قبل التعاقد مع أي شركة نقل، من الضروري طرح مجموعة من الأسئلة الحاسمة للتأكد من أنها تناسب احتياجاتك وتوفر الخدمة التي تتوقعها. في هذا المقال، نقدم لك 5 أسئلة أساسية يجب طرحها على شركة نقل العفش قبل اتخاذ قرار التعاقد، مع شرح أهمية كل سؤال وما يجب أن تبحث عنه في الإجابة.</p>

    <h2 id="licensing">السؤال الأول: هل الشركة مرخصة ومؤمنة؟</h2>
    
    <h3 id="importance-licensing">1. أهمية الترخيص والتأمين</h3>
    <p>لماذا يعتبر هذا السؤال الأكثر أهمية:</p>
    <ul>
      <li>الترخيص الرسمي يثبت أن الشركة تعمل بشكل قانوني</li>
      <li>التأمين يحمي ممتلكاتك في حالة التلف أو الضياع</li>
      <li>شركات النقل غير المرخصة قد تفتقر إلى المعايير المهنية</li>
      <li>الشركات المؤمنة توفر تعويضاً في حالة حدوث حوادث</li>
      <li>التعامل مع شركة غير مرخصة قد يعرضك لمخاطر قانونية</li>
    </ul>
    
    <h3 id="verify-credentials">2. كيفية التحقق من أوراق اعتماد الشركة</h3>
    <p>خطوات يجب اتباعها للتأكد من شرعية الشركة:</p>
    <ul>
      <li>طلب رقم الترخيص التجاري والتحقق منه مع الجهات المختصة</li>
      <li>الاطلاع على وثيقة التأمين ونطاق تغطيتها</li>
      <li>التحقق من عضويتها في الغرف التجارية أو جمعيات النقل</li>
      <li>سؤال الشركة عن تصاريح العمل للعمالة لديها</li>
      <li>البحث عن اسم الشركة في سجلات الشكاوى لدى وزارة التجارة</li>
      <li>التأكد من وجود مقر فعلي للشركة وعدم الاكتفاء بالتواصل الهاتفي</li>
    </ul>
    
    <h2 id="experience">السؤال الثاني: ما هي خبرة الشركة وسمعتها؟</h2>
    
    <h3 id="company-history">3. تاريخ الشركة في مجال نقل العفش</h3>
    <p>المعلومات التي يجب معرفتها عن خبرة الشركة:</p>
    <ul>
      <li>عدد سنوات العمل في مجال نقل العفش</li>
      <li>تخصص الشركة (نقل منزلي، تجاري، محلي، دولي)</li>
      <li>حجم العمليات السنوية ونطاق الخدمة الجغرافي</li>
      <li>قدرة الشركة على التعامل مع أنواع معينة من الأثاث</li>
      <li>مستوى خبرة الموظفين والعمال في الشركة</li>
      <li>أمثلة على عمليات نقل مشابهة قامت بها الشركة سابقاً</li>
    </ul>
    
    <h3 id="customer-reviews">4. كيفية البحث عن تقييمات العملاء</h3>
    <p>مصادر موثوقة للاطلاع على آراء العملاء السابقين:</p>
    <ul>
      <li>قراءة التقييمات على منصات جوجل وموقع معروف</li>
      <li>البحث عن الشركة في وسائل التواصل الاجتماعي</li>
      <li>طلب قائمة بالعملاء السابقين للاتصال بهم كمراجع</li>
      <li>زيارة منتديات النقاش المحلية للاطلاع على تجارب الآخرين</li>
      <li>التحقق من تصنيف الشركة لدى جمعيات حماية المستهلك</li>
      <li>البحث عن شهادات التقدير أو الجوائز التي حصلت عليها الشركة</li>
      <li>التركيز على التقييمات الحديثة التي تعكس جودة الخدمة الحالية</li>
    </ul>
    
    <h2 id="pricing">السؤال الثالث: كيف يتم تحديد التكلفة وما هي الرسوم الإضافية؟</h2>
    
    <h3 id="pricing-structure">5. فهم هيكل التسعير</h3>
    <p>العوامل التي تؤثر على تكلفة نقل العفش:</p>
    <ul>
      <li>أساس التسعير: بالساعة أم بالوزن أم بحجم المنزل</li>
      <li>تأثير المسافة والموقع على السعر الإجمالي</li>
      <li>اختلاف الأسعار حسب موسم النقل وتاريخه</li>
      <li>تكلفة خدمات إضافية مثل الفك والتركيب والتغليف</li>
      <li>تأثير وجود سلالم أو مصاعد على السعر النهائي</li>
      <li>وجود خصومات أو عروض خاصة يمكن الاستفادة منها</li>
    </ul>
    
    <h3 id="hidden-fees">6. الكشف عن الرسوم الخفية</h3>
    <p>رسوم إضافية محتملة يجب السؤال عنها مسبقاً:</p>
    <ul>
      <li>رسوم التوقف أو التأخير غير المتوقع</li>
      <li>تكاليف مواد التغليف ومستلزمات الحماية</li>
      <li>رسوم إضافية للقطع الثقيلة أو كبيرة الحجم</li>
      <li>غرامات التأخير في تفريغ الشاحنة</li>
      <li>رسوم الطابق الإضافي أو المسافات الطويلة من موقف السيارات</li>
      <li>تكلفة التخزين المؤقت إذا تطلب الأمر</li>
      <li>رسوم نقل المواد الخطرة أو ذات الطبيعة الخاصة</li>
      <li>تكاليف التأمين الإضافي على القطع الثمينة</li>
    </ul>
    
    <h3 id="written-estimate">7. الحصول على تقدير مكتوب واضح</h3>
    <p>ما يجب أن يتضمنه عرض السعر:</p>
    <ul>
      <li>تفاصيل جميع الخدمات المشمولة في السعر</li>
      <li>قائمة بجميع الرسوم الإضافية المحتملة</li>
      <li>تحديد ما إذا كان التقدير ملزماً أم قابلاً للتغيير</li>
      <li>شروط الدفع وطرق السداد المقبولة</li>
      <li>سياسة الإلغاء واسترداد العربون</li>
      <li>ضمانات السعر والظروف التي قد تؤدي إلى تغييره</li>
      <li>الحصول على تقديرات من عدة شركات للمقارنة</li>
    </ul>
    
    <h2 id="services">السؤال الرابع: ما هي الخدمات والضمانات المقدمة؟</h2>
    
    <h3 id="service-scope">8. نطاق الخدمات المقدمة</h3>
    <p>خدمات أساسية وإضافية يجب السؤال عنها:</p>
    <ul>
      <li>تفاصيل خدمات الفك والتركيب للأثاث المعقد</li>
      <li>مستويات خدمة التغليف المتاحة (جزئي، كامل، مواد خاصة)</li>
      <li>إمكانية توفير خدمات التنظيف للمنزل القديم أو الجديد</li>
      <li>توفر خدمات التخزين المؤقت وشروطها</li>
      <li>التعامل مع الأجهزة الإلكترونية والقطع الثمينة</li>
      <li>تقديم خدمات نقل النباتات والحيوانات الأليفة</li>
      <li>خيارات التعبئة والتفريغ الذاتي لتوفير التكاليف</li>
      <li>خدمات إعادة ترتيب الأثاث في المنزل الجديد</li>
    </ul>
    
    <h3 id="guarantees">9. الضمانات وحماية العملاء</h3>
    <p>ضمانات يجب البحث عنها في عقد النقل:</p>
    <ul>
      <li>ضمان موعد التسليم وتعويضات التأخير</li>
      <li>سياسة التعامل مع الأضرار والتلفيات</li>
      <li>نطاق تغطية التأمين وقيمته</li>
      <li>إجراءات تقديم المطالبات في حالة الضرر</li>
      <li>المدة الزمنية المسموح بها لتقديم شكوى بعد النقل</li>
      <li>سياسة إرجاع الأثاث المفقود أو التعويض عنه</li>
      <li>حق إلغاء الخدمة واسترداد العربون في ظروف معينة</li>
      <li>خدمات ما بعد النقل وإصلاح الأضرار المحتملة</li>
    </ul>
    
    <h2 id="logistics">السؤال الخامس: كيف ستتم إدارة عملية النقل لوجستياً؟</h2>
    
    <h3 id="moving-day">10. تفاصيل يوم النقل</h3>
    <p>معلومات لوجستية مهمة يجب معرفتها:</p>
    <ul>
      <li>عدد العمال والمشرفين الذين سيحضرون للنقل</li>
      <li>نوع وحجم الشاحنات المستخدمة ومواصفاتها</li>
      <li>الوقت التقريبي اللازم لإكمال عملية النقل</li>
      <li>إمكانية تقسيم النقل على عدة أيام إذا لزم الأمر</li>
      <li>خطة النقل في حالة سوء الأحوال الجوية</li>
      <li>ترتيبات وقوف الشاحنات وتصاريح الدخول للأحياء المغلقة</li>
      <li>تنسيق استخدام المصاعد في العمارات السكنية</li>
      <li>خطة طوارئ في حالة وجود عوائق غير متوقعة</li>
    </ul>
    
    <h3 id="packing-materials">11. مواد التغليف ومعايير الجودة</h3>
    <p>أسئلة حول معايير الجودة في التغليف:</p>
    <ul>
      <li>نوعية وجودة مواد التغليف المستخدمة</li>
      <li>استخدام مواد صديقة للبيئة أو قابلة لإعادة التدوير</li>
      <li>مدى توفر حلول تغليف خاصة للعناصر الهشة والقيمة</li>
      <li>تكلفة مواد التغليف وما إذا كانت مشمولة في السعر</li>
      <li>إمكانية استخدام مواد تغليف خاصة بك لتوفير التكاليف</li>
      <li>تقنيات تغليف الأثاث الخشبي لمنع الخدوش</li>
      <li>حلول تغليف مقاومة للرطوبة للمناطق الساحلية</li>
      <li>سياسة إزالة مواد التغليف بعد النقل وتنظيف المخلفات</li>
    </ul>
    
    <h3 id="tracking">12. تتبع الشحنة والتواصل</h3>
    <p>آليات التواصل أثناء عملية النقل:</p>
    <ul>
      <li>إمكانية تتبع الشاحنة أثناء النقل</li>
      <li>تعيين منسق أو مدير مشروع مسؤول عن تجربتك</li>
      <li>وسائل التواصل المتاحة مع فريق النقل في يوم النقل</li>
      <li>الإخطارات المسبقة بأي تأخير أو تغيير في الخطة</li>
      <li>تقارير حالة الشحن أثناء الرحلة للنقل طويل المسافة</li>
      <li>سياسة الاتصال في حالات الطوارئ</li>
      <li>خدمة العملاء على مدار الساعة أثناء عملية النقل</li>
      <li>التواصل بعد النقل للتأكد من الرضا وحل أي مشكلات</li>
    </ul>
    
    <h2 id="contract-terms">أسئلة إضافية حول شروط العقد والتوقيت</h2>
    
    <h3 id="contract-clauses">13. بنود العقد ذات الأهمية الخاصة</h3>
    <p>شروط يجب مراجعتها بعناية في العقد:</p>
    <ul>
      <li>تفاصيل الإلغاء وظروف استرداد العربون</li>
      <li>المسؤوليات في حالة فقدان أو تلف الأغراض</li>
      <li>قيود المسؤولية وحدود التعويض</li>
      <li>سياسة تسوية النزاعات والشكاوى</li>
      <li>الالتزامات المتعلقة بالتأخير في التسليم</li>
      <li>شروط التخزين المؤقت إذا كان مطلوباً</li>
      <li>تفاصيل الدفع وتوقيته</li>
      <li>المحظورات والمواد التي ترفض الشركة نقلها</li>
    </ul>
    
    <h3 id="timing">14. اختيار التوقيت المناسب للنقل</h3>
    <p>اعتبارات مهمة للتوقيت الأمثل:</p>
    <ul>
      <li>مدى مرونة الشركة في تحديد مواعيد النقل</li>
      <li>فترات الانتظار في المواسم المزدحمة</li>
      <li>اختلاف الأسعار حسب اليوم من الأسبوع</li>
      <li>أفضل الأوقات للنقل في الصيف والشتاء</li>
      <li>التنسيق بين موعد مغادرة المنزل القديم واستلام الجديد</li>
      <li>مدة النقل للمسافات الطويلة بين المدن</li>
      <li>إمكانية جدولة النقل على مراحل</li>
      <li>سياسة النقل خلال الإجازات والعطلات الرسمية</li>
    </ul>
    
    <h2 id="elite-services">خدمات النخبة للنقل: الإجابة على جميع استفساراتك</h2>
    <p>في شركة النخبة للنقل، نؤمن بالشفافية التامة ونشجع العملاء على طرح جميع أسئلتهم قبل التعاقد. نقدم لعملائنا:</p>
    <ul>
      <li>استشارة مجانية شاملة قبل التعاقد لفهم احتياجاتك بدقة</li>
      <li>عرض أسعار مفصل وشفاف بدون رسوم خفية</li>
      <li>جميع التراخيص والشهادات اللازمة لشركات النقل في المملكة</li>
      <li>فريق مدرب يتمتع بخبرة أكثر من 10 سنوات في مجال النقل</li>
      <li>تأمين شامل على جميع الممتلكات أثناء النقل</li>
      <li>مواد تغليف عالية الجودة تناسب البيئة السعودية</li>
      <li>خدمات متكاملة تشمل الفك والتركيب والتغليف والتنظيف</li>
      <li>منسق شخصي للإشراف على عملية النقل من البداية للنهاية</li>
      <li>أسطول حديث من الشاحنات المجهزة خصيصاً لنقل الأثاث</li>
      <li>ضمان مكتوب يغطي خدماتنا ويحمي حقوقك</li>
      <li>خدمة عملاء متاحة على مدار الساعة للرد على استفساراتك</li>
      <li>مرونة في جدولة مواعيد النقل بما يناسب ظروفك</li>
    </ul>

    <h2 id="conclusion">الخاتمة</h2>
    <p>طرح الأسئلة المناسبة قبل التعاقد مع شركة نقل العفش هو استثمار في راحة بالك وضمان تجربة نقل ناجحة. الشركات المحترفة والموثوقة لن تتردد في الإجابة على جميع استفساراتك بشفافية ووضوح. لا تتسرع في اختيار أرخص عرض، بل ابحث عن أفضل قيمة من حيث الخدمة والضمانات والخبرة.</p>
    <p>في النخبة للنقل، نفخر بنهجنا الشفاف والمهني في التعامل مع عملائنا، ونشجعك على طرح هذه الأسئلة الحاسمة علينا قبل اتخاذ قرارك. هدفنا ليس فقط تقديم خدمة نقل ممتازة، بل أيضاً توفير تجربة خالية من القلق منذ اللحظة الأولى للتواصل معنا وحتى استقرارك الكامل في منزلك الجديد. اتصل بنا اليوم للحصول على استشارة مجانية واكتشف الفرق الذي تقدمه خدماتنا المتميزة.</p>
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
                <a href="#licensing" className="text-primary-600 hover:underline">السؤال الأول: هل الشركة مرخصة ومؤمنة؟</a>
              </li>
              <li className="mb-2">
                <a href="#experience" className="text-primary-600 hover:underline">السؤال الثاني: ما هي خبرة الشركة وسمعتها؟</a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-primary-600 hover:underline">السؤال الثالث: كيف يتم تحديد التكلفة وما هي الرسوم الإضافية؟</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-primary-600 hover:underline">السؤال الرابع: ما هي الخدمات والضمانات المقدمة؟</a>
              </li>
              <li className="mb-2">
                <a href="#logistics" className="text-primary-600 hover:underline">السؤال الخامس: كيف ستتم إدارة عملية النقل لوجستياً؟</a>
              </li>
              <li className="mb-2">
                <a href="#contract-terms" className="text-primary-600 hover:underline">أسئلة إضافية حول شروط العقد والتوقيت</a>
              </li>
              <li className="mb-2">
                <a href="#elite-services" className="text-primary-600 hover:underline">خدمات النخبة للنقل: الإجابة على جميع استفساراتك</a>
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
                  خبير في مجال نقل العفش مع خبرة أكثر من 15 عاماً في قطاع الخدمات اللوجستية والنقل. متخصص في توعية المستهلكين حول أفضل الممارسات في اختيار شركات النقل وتقييم جودة الخدمة. ساهم في وضع معايير الجودة لشركات النقل في المملكة وقدم استشارات لعدد من المؤسسات في هذا المجال.
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

export default QuestionsToAskMovingCompany; 