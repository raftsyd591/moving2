import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import { articles } from '../../data/articles';
import ImageProxy from '../../components/common/ImageProxy';

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

const MovingFurnitureRiyadhJeddah = () => {
  const slug = "moving-furniture-riyadh-jeddah-steps-costs-tips";
  const post = articles.find((article) => article.slug === slug) as BlogPostProps;
  
  // إضافة الصور البديلة للمقال
  const mainImage = post.image || "/images/blog/moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg";
  const fallbackImages = [
    "/images/blog/moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg",
    "/images/blog/long_distance_moving_ksa_challenges_solutions.jpeg",
    "/images/blog/default-blog-post.jpeg"
  ];
  
  // عرض معلومات الصورة في وحدة التحكم للتصحيح
  console.log('[MovingFurnitureRiyadhJeddah] Image paths:', { 
    postImage: post.image,
    mainImage, 
    fallbackImages 
  });
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": mainImage,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "النخبة للنقل",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
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
  
  const articleContent = `
    <h2 id="introduction">مقدمة</h2>
    <p>يعد نقل العفش بين المدن الكبرى في المملكة العربية السعودية مثل الرياض وجدة تحديًا يتطلب تخطيطًا دقيقًا وتنفيذًا محترفًا. المسافة الكبيرة بين المدينتين (حوالي 950 كم) تجعل عملية النقل أكثر تعقيدًا من النقل المحلي. في هذا الدليل الشامل، سنتعرف على الخطوات الأساسية، والتكاليف المتوقعة، ونصائح مهمة لضمان نقل آمن وفعال للعفش من الرياض إلى جدة.</p>

    <h2 id="preparation">التحضير لنقل العفش بين المدن</h2>
    
    <h3 id="planning">1. التخطيط المبكر</h3>
    <p>أهمية البدء مبكرًا في التخطيط للانتقال:</p>
    <ul>
      <li>البدء في التخطيط قبل 4-6 أسابيع على الأقل من موعد النقل</li>
      <li>إعداد قائمة بجميع المهام المطلوبة وتواريخ تنفيذها</li>
      <li>تحديد الأغراض التي سيتم نقلها والتي سيتم الاستغناء عنها</li>
      <li>التأكد من جاهزية المنزل الجديد في جدة لاستقبال الأثاث</li>
      <li>ترتيب أمور السفر والإقامة المؤقتة إذا لزم الأمر</li>
      <li>إبلاغ الجهات المعنية (المدارس، البنوك، الخدمات) بتغيير العنوان</li>
    </ul>
    
    <h3 id="choosing-company">2. اختيار شركة نقل محترفة</h3>
    <p>معايير اختيار شركة نقل للمسافات الطويلة:</p>
    <ul>
      <li>البحث عن شركات متخصصة في النقل بين المدن وليس فقط النقل المحلي</li>
      <li>التأكد من وجود فروع أو شركاء للشركة في جدة لتسهيل عملية التسليم</li>
      <li>التحقق من التراخيص والتأمينات اللازمة للنقل بين المدن</li>
      <li>قراءة تقييمات العملاء السابقين خاصة في رحلات النقل الطويلة</li>
      <li>طلب عروض أسعار مفصلة من 3-5 شركات للمقارنة</li>
      <li>الاستفسار عن أسطول الشاحنات ومدى ملاءمتها للرحلات الطويلة</li>
      <li>التأكد من توفر خدمات إضافية مثل التغليف والفك والتركيب</li>
    </ul>
    
    <h2 id="moving-steps">خطوات نقل العفش من الرياض إلى جدة</h2>
    
    <h3 id="inventory">3. جرد الأثاث والمقتنيات</h3>
    <p>إعداد قائمة تفصيلية بالعفش المراد نقله:</p>
    <ul>
      <li>عمل جرد شامل لجميع قطع الأثاث والأجهزة والصناديق</li>
      <li>تصوير القطع الثمينة قبل النقل لتوثيق حالتها</li>
      <li>تصنيف الأغراض حسب الغرف أو الأولوية</li>
      <li>تحديد القطع التي تحتاج إلى عناية خاصة</li>
      <li>إعداد قائمة منفصلة بالأغراض الثمينة أو المستندات المهمة</li>
      <li>تقدير الحجم الإجمالي للعفش لتحديد حجم الشاحنة المناسب</li>
    </ul>
    
    <h3 id="packing">4. تغليف وتعبئة العفش</h3>
    <p>تقنيات التغليف المناسبة للرحلات الطويلة:</p>
    <ul>
      <li>استخدام مواد تغليف عالية الجودة تتحمل رحلة طويلة</li>
      <li>فك الأثاث الكبير وتغليف أجزائه بشكل منفصل</li>
      <li>تأمين الأدراج والأبواب لمنع فتحها أثناء النقل</li>
      <li>استخدام صناديق قوية للأغراض الهشة مع حشوات إضافية</li>
      <li>تغليف الأجهزة الإلكترونية بعناية خاصة وتأمينها ضد الصدمات</li>
      <li>ترقيم الصناديق ووضع ملصقات توضح محتوياتها والغرفة التي تنتمي إليها</li>
      <li>تجهيز حقيبة خاصة بالأغراض الشخصية المهمة للاحتفاظ بها معك</li>
    </ul>
    
    <h3 id="loading">5. تحميل العفش في الشاحنة</h3>
    <p>أفضل ممارسات التحميل لرحلة طويلة:</p>
    <ul>
      <li>ترتيب العفش داخل الشاحنة بطريقة تمنع تحركه أثناء الرحلة</li>
      <li>وضع الأغراض الثقيلة في الأسفل والخفيفة في الأعلى</li>
      <li>ترك مساحات للتهوية بين القطع الكبيرة</li>
      <li>استخدام أحزمة تثبيت وحواجز لتقسيم المساحة داخل الشاحنة</li>
      <li>عدم وضع الأغراض الثمينة والهشة بالقرب من أبواب الشاحنة</li>
      <li>تأمين الشاحنة بشكل جيد قبل بدء الرحلة</li>
      <li>التأكد من توزيع الوزن بشكل متساوٍ على جانبي الشاحنة</li>
    </ul>
    
    <h3 id="transportation">6. النقل والمتابعة</h3>
    <p>إجراءات أثناء رحلة النقل:</p>
    <ul>
      <li>الاتفاق على آلية لمتابعة الشاحنة أثناء الرحلة</li>
      <li>تحديد نقاط توقف معينة للاطمئنان على العفش</li>
      <li>الاحتفاظ برقم السائق والمشرف على عملية النقل</li>
      <li>التأكد من وجود خطة بديلة في حالة حدوث طارئ على الطريق</li>
      <li>تنسيق وقت الوصول إلى جدة مسبقًا لضمان تواجدك عند التفريغ</li>
      <li>مراعاة حالة الطقس وظروف الطريق عند تحديد موعد النقل</li>
    </ul>
    
    <h3 id="unloading">7. التفريغ والتركيب في جدة</h3>
    <p>خطوات استلام العفش في الوجهة الجديدة:</p>
    <ul>
      <li>التواجد شخصيًا أثناء تفريغ العفش من الشاحنة</li>
      <li>مراجعة قائمة الجرد للتأكد من وصول جميع القطع</li>
      <li>فحص العفش للتأكد من عدم وجود أضرار نتيجة النقل</li>
      <li>توجيه العمال لوضع الأثاث في الأماكن المناسبة</li>
      <li>البدء بتركيب الأثاث الأساسي (الأسرّة، الأرائك، طاولة الطعام)</li>
      <li>تجميع الصناديق حسب الغرف لتسهيل عملية التفريغ لاحقًا</li>
      <li>توثيق أي ملاحظات أو أضرار قبل مغادرة فريق النقل</li>
    </ul>
    
    <h2 id="costs">تكاليف نقل العفش من الرياض إلى جدة</h2>
    
    <h3 id="cost-factors">8. العوامل المؤثرة في التكلفة</h3>
    <p>ما الذي يحدد سعر نقل العفش بين المدن:</p>
    <ul>
      <li>حجم ووزن العفش المراد نقله</li>
      <li>المسافة بين المنزل القديم والجديد (موقع دقيق في كلتا المدينتين)</li>
      <li>الخدمات الإضافية المطلوبة (فك، تركيب، تغليف، تخزين مؤقت)</li>
      <li>موسم النقل (المواسم المزدحمة مثل الإجازات تكون أكثر تكلفة)</li>
      <li>مدى سهولة الوصول إلى المنزلين (وجود مصاعد، مواقف قريبة)</li>
      <li>سرعة النقل المطلوبة (النقل العاجل أكثر تكلفة)</li>
      <li>نوع التأمين المطلوب على المنقولات</li>
      <li>عدد العمال المطلوبين لإتمام المهمة</li>
    </ul>
    
    <h3 id="average-costs">9. متوسط الأسعار الحالية</h3>
    <p>تقديرات تقريبية لنقل العفش من الرياض إلى جدة:</p>
    <ul>
      <li>شقة صغيرة (غرفة واحدة): 1,800 - 2,500 ريال سعودي</li>
      <li>شقة متوسطة (غرفتين): 2,500 - 3,500 ريال سعودي</li>
      <li>شقة كبيرة (ثلاث غرف): 3,500 - 5,000 ريال سعودي</li>
      <li>فيلا صغيرة: 5,000 - 7,000 ريال سعودي</li>
      <li>فيلا كبيرة: 7,000 - 12,000 ريال سعودي</li>
      <li>تكلفة إضافية للتغليف الكامل: 500 - 1,500 ريال (حسب الحجم)</li>
      <li>تكلفة إضافية للفك والتركيب: 500 - 2,000 ريال (حسب كمية الأثاث)</li>
      <li>تأمين شامل على المنقولات: 1-3% من قيمة العفش</li>
    </ul>
    <p>ملاحظة: هذه الأسعار تقديرية وقد تختلف حسب الشركة والظروف الخاصة بكل عميل.</p>
    
    <h3 id="saving-tips">10. نصائح لتوفير تكاليف النقل</h3>
    <p>كيفية تقليل مصاريف نقل العفش بين المدن:</p>
    <ul>
      <li>التخلص من الأغراض غير الضرورية قبل النقل لتقليل الحجم</li>
      <li>اختيار أوقات خارج المواسم المزدحمة (تجنب الإجازات وبداية المدارس)</li>
      <li>طلب عروض أسعار من عدة شركات والمقارنة بينها</li>
      <li>التفاوض على السعر النهائي والخدمات المشمولة</li>
      <li>القيام ببعض مهام التغليف البسيطة بنفسك</li>
      <li>الجمع بين عملية النقل الخاصة بك وعمليات نقل أخرى في نفس الاتجاه (نقل مشترك)</li>
      <li>التخطيط المبكر لإتاحة المجال للحصول على أفضل الأسعار</li>
      <li>النقل خلال أيام الأسبوع العادية وليس في عطلات نهاية الأسبوع</li>
    </ul>
    
    <h2 id="tips">نصائح مهمة لنقل ناجح بين الرياض وجدة</h2>
    
    <h3 id="road-considerations">11. اعتبارات خاصة بالطريق بين المدينتين</h3>
    <p>خصائص الطريق من الرياض إلى جدة والاستعداد لها:</p>
    <ul>
      <li>الاطلاع على حالة الطريق قبل موعد النقل (صيانة، إغلاقات)</li>
      <li>تجنب مواسم الطقس السيئ خاصة العواصف الرملية</li>
      <li>مراعاة التغيرات المناخية بين المدينتين (جدة أكثر رطوبة)</li>
      <li>الاستعداد لنقاط التفتيش على الطريق</li>
      <li>التأكد من تزويد الشاحنة بالوقود الكافي والصيانة قبل الرحلة</li>
      <li>اختيار شركة لديها خبرة في مسار الرياض-جدة</li>
      <li>التأكد من توفر طاقم من سائقين للرحلات الطويلة</li>
    </ul>
    
    <h3 id="paperwork">12. الأوراق والمستندات المطلوبة</h3>
    <p>الوثائق الضرورية لعملية النقل بين المدن:</p>
    <ul>
      <li>عقد نقل رسمي مع الشركة يشمل جميع التفاصيل والضمانات</li>
      <li>قائمة جرد مفصلة موقعة من الطرفين</li>
      <li>وثيقة التأمين على المنقولات</li>
      <li>إيصال دفع مع تفاصيل الدفعات المقدمة والمتبقية</li>
      <li>رخص وتصاريح الشركة الناقلة للعمل بين المدن</li>
      <li>أرقام التواصل مع المشرفين والسائقين</li>
      <li>نسخة من بوليصة الشحن تتضمن تفاصيل المرسل والمستلم</li>
      <li>تصريح دخول للمدن أو الأحياء المغلقة إذا لزم الأمر</li>
    </ul>
    
    <h3 id="timing">13. توقيت النقل المثالي</h3>
    <p>متى يفضل نقل العفش بين الرياض وجدة:</p>
    <ul>
      <li>تجنب فصل الصيف الحار (يونيو - أغسطس) قدر الإمكان</li>
      <li>اختيار الفترات ذات المناخ المعتدل (مارس-مايو أو سبتمبر-نوفمبر)</li>
      <li>تجنب فترات الإجازات الرسمية والعطل المدرسية</li>
      <li>بدء الرحلة في الصباح الباكر لتجنب حرارة النهار</li>
      <li>التنسيق للوصول إلى جدة في وقت مناسب لاستلام العفش</li>
      <li>مراعاة أوقات الذروة عند الخروج من الرياض والدخول إلى جدة</li>
      <li>ترك هامش زمني كافٍ للتعامل مع أي تأخير محتمل</li>
    </ul>
    
    <h2 id="elite-services">خدمات النخبة للنقل بين المدن</h2>
    
    <h3 id="our-services">14. خدماتنا المتميزة للنقل من الرياض إلى جدة</h3>
    <p>ما يميز شركة النخبة في نقل العفش بين المدن:</p>
    <ul>
      <li>أسطول حديث من الشاحنات المجهزة خصيصًا للمسافات الطويلة</li>
      <li>فريق متخصص في عمليات النقل بين المدن الرئيسية</li>
      <li>خدمة النقل من الباب إلى الباب بدون وسطاء</li>
      <li>تأمين شامل على جميع المنقولات أثناء الرحلة</li>
      <li>خدمات متكاملة (فك، تغليف، نقل، تركيب، تنظيف)</li>
      <li>إمكانية التخزين المؤقت في مستودعاتنا في كلتا المدينتين</li>
      <li>نظام تتبع للشاحنات لمعرفة موقعها أثناء الرحلة</li>
      <li>فرق عمل في كل من الرياض وجدة لضمان تنسيق أفضل</li>
      <li>خدمة عملاء على مدار الساعة خلال فترة النقل</li>
      <li>ضمان وصول العفش بالحالة نفسها التي كان عليها قبل النقل</li>
    </ul>

    <h2 id="conclusion">الخاتمة</h2>
    <p>نقل العفش من الرياض إلى جدة رحلة طويلة تتطلب تخطيطًا محكمًا واختيار شركة نقل محترفة. بالالتزام بالخطوات والنصائح التي استعرضناها في هذا الدليل، يمكنك ضمان وصول أثاثك ومقتنياتك بسلامة إلى وجهتك الجديدة في جدة، مع تقليل المخاطر والتكاليف قدر الإمكان.</p>
    <p>في شركة النخبة للنقل، نفتخر بتقديم خدمة متكاملة ومتميزة للنقل بين المدن، مستفيدين من خبرتنا الطويلة في هذا المسار تحديدًا، وملتزمين بأعلى معايير الأمان والجودة. نتطلع إلى مساعدتك في تجربة انتقال سلسة وخالية من المتاعب من الرياض إلى جدة.</p>
  `;
  
  const pageContent = (
    <>
      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>
      
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <ImageProxy
          src={mainImage}
          alt={post.title}
          className="w-full h-full object-cover"
          fallbackSrc={fallbackImages}
          defaultSrc="/images/blog/default-blog-post.jpeg"
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
                <a href="#preparation" className="text-primary-600 hover:underline">التحضير لنقل العفش بين المدن</a>
              </li>
              <li className="mb-2">
                <a href="#moving-steps" className="text-primary-600 hover:underline">خطوات نقل العفش من الرياض إلى جدة</a>
              </li>
              <li className="mb-2">
                <a href="#costs" className="text-primary-600 hover:underline">تكاليف نقل العفش من الرياض إلى جدة</a>
              </li>
              <li className="mb-2">
                <a href="#tips" className="text-primary-600 hover:underline">نصائح مهمة لنقل ناجح بين الرياض وجدة</a>
              </li>
              <li className="mb-2">
                <a href="#elite-services" className="text-primary-600 hover:underline">خدمات النخبة للنقل بين المدن</a>
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
                  خبير في مجال النقل بين المدن مع خبرة تمتد لأكثر من 15 عاماً. قام بالإشراف على مئات عمليات النقل بين الرياض وجدة، وهو متخصص في تخطيط وإدارة عمليات النقل للمسافات الطويلة. يشارك بانتظام في تطوير معايير الأمان والجودة في قطاع نقل العفش بالمملكة.
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
      ogImage={mainImage}
      children={pageContent}
    >
    </BlogLayout>
  );
};

export default MovingFurnitureRiyadhJeddah; 