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

const PreMovingDayChecklistEssentialTasks = () => {
  // الحصول على المقال من البيانات
  const slug = "pre-moving-day-checklist-essential-tasks";
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
    <p>يوم النقل يمكن أن يكون من أكثر الأيام توترًا في حياتك، خاصة إذا لم تكن مستعدًا له بشكل جيد. لذلك، فإن إعداد قائمة مهام شاملة لما قبل يوم النقل يعد أمرًا ضروريًا لضمان انتقال سلس وخالٍ من المشاكل. في هذا المقال، سنقدم لك قائمة مهام أساسية ومفصلة لمساعدتك في التخطيط والتحضير ليوم النقل بكفاءة عالية، مع ضمان عدم نسيان أي شيء مهم.</p>

    <h2 id="one-month-before">قائمة المهام قبل شهر من النقل</h2>
    
    <h3 id="planning">1. التخطيط والتنظيم</h3>
    <p>البدء مبكرًا في التخطيط للانتقال يقلل من الضغط والتوتر:</p>
    <ul>
      <li>حدد تاريخ النقل النهائي وتأكد من مناسبته لجميع أفراد الأسرة</li>
      <li>ابدأ في البحث عن شركات نقل العفش وطلب عروض أسعار من 3-5 شركات على الأقل</li>
      <li>اقرأ مراجعات العملاء وتأكد من سمعة الشركة قبل التعاقد معها</li>
      <li>تحقق من توفر التأمين على المنقولات خلال عملية النقل</li>
      <li>جهز ميزانية تفصيلية لتكاليف النقل وما يتعلق بها من مصاريف</li>
    </ul>
    
    <h3 id="inventory">2. جرد وتصنيف الممتلكات</h3>
    <p>قم بإعداد قائمة جرد شاملة لجميع ممتلكاتك:</p>
    <ul>
      <li>التقط صورًا للأثاث والأجهزة الإلكترونية والقطع الثمينة قبل النقل كدليل على حالتها</li>
      <li>صنف ممتلكاتك إلى فئات: ما سيتم نقله، ما سيتم التبرع به، ما سيتم بيعه، وما سيتم التخلص منه</li>
      <li>نظم حملة للتخلص من الأشياء غير الضرورية عبر البيع أو التبرع</li>
      <li>حدد المقتنيات الثمينة التي قد تحتاج إلى تغليف خاص أو تأمين إضافي</li>
    </ul>
    
    <h3 id="documents">3. تجهيز الوثائق والمستندات</h3>
    <p>تأكد من تجهيز وتنظيم جميع الأوراق الرسمية الهامة:</p>
    <ul>
      <li>جمع الوثائق العائلية المهمة (شهادات الميلاد، جوازات السفر، عقود العمل، السجلات الطبية)</li>
      <li>تصوير المستندات المهمة وحفظها رقميًا كنسخة احتياطية</li>
      <li>تجهيز عقد الإيجار الجديد أو أوراق ملكية المنزل الجديد</li>
      <li>الاحتفاظ بجميع المستندات المتعلقة بالنقل في ملف خاص (عقد النقل، التأمين، الإيصالات)</li>
      <li>تجهيز قائمة بأرقام هواتف مهمة (شركة النقل، الكهرباء، الماء، الإنترنت)</li>
    </ul>
    
    <h2 id="two-weeks-before">قائمة المهام قبل أسبوعين من النقل</h2>
    
    <h3 id="utilities">4. إجراءات المرافق والخدمات</h3>
    <p>اتخذ الإجراءات اللازمة بخصوص المرافق والخدمات في المنزلين القديم والجديد:</p>
    <ul>
      <li>إبلاغ شركات المرافق (الكهرباء، الماء، الغاز) بموعد الانتقال وطلب قطع الخدمة في المنزل القديم</li>
      <li>ترتيب توصيل الخدمات في المنزل الجديد قبل وصولك</li>
      <li>الاتصال بمزودي خدمة الإنترنت والتلفزيون لنقل الخدمة إلى العنوان الجديد</li>
      <li>تحديث العنوان لدى البنوك، شركات التأمين، وجهات العمل</li>
      <li>ترتيب تغيير العنوان في البطاقة الشخصية أو الهوية الوطنية</li>
    </ul>
    
    <h3 id="packing-materials">5. تجهيز مواد التغليف</h3>
    <p>اجمع مواد التغليف اللازمة لتأمين ممتلكاتك أثناء النقل:</p>
    <ul>
      <li>شراء أو الحصول على صناديق كرتونية بأحجام مختلفة</li>
      <li>تجهيز شريط لاصق، أقلام تحديد، أكياس بلاستيكية، ورق فقاعات</li>
      <li>توفير مواد تغليف متخصصة للقطع الهشة والثمينة</li>
      <li>تجهيز بطانيات وأغطية قديمة لحماية الأثاث الكبير</li>
      <li>شراء أكياس مخصصة للملابس وحقائب للأحذية</li>
    </ul>
    
    <h3 id="start-packing">6. البدء في تغليف الأغراض غير المستخدمة</h3>
    <p>ابدأ في تغليف الأشياء التي لا تستخدمها بشكل يومي:</p>
    <ul>
      <li>تغليف الديكورات، اللوحات، والكتب</li>
      <li>تخزين الملابس الموسمية التي لا تحتاجها حاليًا</li>
      <li>تفريغ الخزائن والأدراج غير المستخدمة</li>
      <li>تصوير ترتيب الأسلاك والكابلات للأجهزة الإلكترونية قبل فصلها</li>
      <li>وضع ملصقات واضحة على كل صندوق توضح محتوياته والغرفة التي ينتمي إليها</li>
    </ul>
    
    <h2 id="week-before">قائمة المهام قبل أسبوع من النقل</h2>
    
    <h3 id="confirm-arrangements">7. تأكيد الترتيبات النهائية</h3>
    <p>تأكد من جميع الترتيبات مع الأطراف المعنية:</p>
    <ul>
      <li>الاتصال بشركة النقل لتأكيد موعد ووقت النقل</li>
      <li>مراجعة قائمة الأثاث الذي سيتم نقله مع الشركة</li>
      <li>التأكد من إجراءات استلام وتسليم المفاتيح للمنزلين القديم والجديد</li>
      <li>ترتيب مكان لوقوف شاحنة النقل أمام المنزلين القديم والجديد</li>
      <li>إبلاغ الجيران عن موعد النقل وخاصة إذا كان سيؤثر على حركة المرور في المنطقة</li>
    </ul>
    
    <h3 id="food-management">8. إدارة الطعام والمؤن</h3>
    <p>تخطيط استهلاك الطعام الموجود في المنزل وترتيب الأمور المتعلقة بوجبات يوم النقل:</p>
    <ul>
      <li>استهلاك الطعام المتبقي في الثلاجة والمجمد قدر الإمكان</li>
      <li>تجنب التسوق بكميات كبيرة قبل النقل</li>
      <li>التخطيط لوجبات بسيطة ليوم النقل وما بعده</li>
      <li>توزيع الأطعمة التي لن تستهلك على الأصدقاء أو الجيران</li>
      <li>تجهيز صندوق خاص بالمطبخ يحتوي على أدوات أساسية للاستخدام فور الوصول للمنزل الجديد</li>
    </ul>
    
    <h3 id="special-items">9. الترتيب للعناصر الخاصة</h3>
    <p>اتخذ الترتيبات اللازمة للعناصر التي تتطلب اهتمامًا خاصًا:</p>
    <ul>
      <li>ترتيب نقل النباتات المنزلية بشكل آمن (قد تحتاج لنقلها بنفسك)</li>
      <li>تحديد طريقة نقل الحيوانات الأليفة وتجهيز مستلزماتها</li>
      <li>تأمين المجوهرات والمقتنيات الثمينة ونقلها شخصيًا</li>
      <li>ترتيب نقل الأدوية والمستلزمات الطبية الهامة</li>
      <li>تفريغ وتنظيف الأجهزة الكهربائية الكبيرة (ثلاجة، غسالة، مكيف) قبل النقل</li>
    </ul>
    
    <h2 id="day-before">قائمة المهام في اليوم السابق للنقل</h2>
    
    <h3 id="final-packing">10. إنهاء التغليف</h3>
    <p>استكمال تغليف الأغراض المتبقية وتجهيز الأمور النهائية:</p>
    <ul>
      <li>تغليف الأغراض الشخصية والملابس المتبقية</li>
      <li>تجهيز حقيبة للاحتياجات الفورية في المنزل الجديد (ملابس ليوم أو يومين، أدوات نظافة شخصية، شواحن)</li>
      <li>فصل الأجهزة الإلكترونية المتبقية وتغليفها</li>
      <li>إفراغ محتويات المطبخ والحمامات المتبقية</li>
      <li>التأكد من ترميز جميع الصناديق وإعداد قائمة بها</li>
    </ul>
    
    <h3 id="cleaning">11. تنظيف المنزل</h3>
    <p>قم بتنظيف المنزل القديم قبل المغادرة:</p>
    <ul>
      <li>تنظيف المنزل تدريجيًا مع إفراغ كل غرفة</li>
      <li>إعداد مواد التنظيف الأساسية في صندوق منفصل لاستخدامها في اليوم الأخير وفي المنزل الجديد</li>
      <li>التأكد من نظافة المنزل القديم قبل تسليم المفاتيح، خاصة إذا كنت مستأجرًا</li>
      <li>توثيق حالة المنزل القديم بالصور بعد إخلائه</li>
      <li>التخلص من النفايات والمواد غير المرغوب فيها</li>
    </ul>
    
    <h2 id="moving-day">قائمة المهام ليوم النقل</h2>
    
    <h3 id="supervision">12. الإشراف على عملية النقل</h3>
    <p>كن متواجدًا للإشراف على عملية تحميل وتفريغ الأثاث:</p>
    <ul>
      <li>استيقظ مبكرًا واجعل نفسك جاهزًا قبل وصول فريق النقل</li>
      <li>تأكد من وضوح المسارات داخل المنزل لتسهيل حركة العمال</li>
      <li>وجّه فريق النقل بشأن القطع التي تحتاج لعناية خاصة</li>
      <li>تحقق من قائمة الأثاث أثناء التحميل للتأكد من عدم نسيان أي شيء</li>
      <li>احتفظ برقم هاتف مسؤول فريق النقل في متناول اليد</li>
    </ul>
    
    <h3 id="final-check">13. الفحص النهائي للمنزل القديم</h3>
    <p>قبل مغادرة المنزل القديم نهائيًا، قم بالفحص الشامل:</p>
    <ul>
      <li>تفقد جميع الغرف، الأدراج، الخزائن، الأرفف للتأكد من عدم ترك أي شيء</li>
      <li>التقط قراءات عدادات الكهرباء والماء والغاز</li>
      <li>تأكد من إغلاق جميع النوافذ والأبواب</li>
      <li>إيقاف تشغيل جميع الأجهزة ومفاتيح الكهرباء</li>
      <li>قفل صمامات المياه والغاز</li>
      <li>التقط صورًا للمنزل بعد إخلائه</li>
    </ul>
    
    <h2 id="after-moving">قائمة المهام بعد النقل</h2>
    
    <h3 id="immediate-tasks">14. المهام الفورية بعد النقل</h3>
    <p>بعد وصول جميع الأثاث، قم بهذه المهام الفورية:</p>
    <ul>
      <li>تركيب أجهزة السلامة (كاشفات الدخان، طفايات الحريق)</li>
      <li>التأكد من سلامة المفاتيح وأقفال الأبواب</li>
      <li>تعرف على موقع قواطع الكهرباء وصمامات المياه الرئيسية</li>
      <li>تركيب ستائر أو أغطية للنوافذ للخصوصية</li>
      <li>تنظيف الأماكن الرئيسية كالحمامات والمطبخ</li>
    </ul>
    
    <h3 id="update-address">15. تحديث العنوان</h3>
    <p>قم بتحديث عنوانك لدى الجهات المختلفة:</p>
    <ul>
      <li>البنوك وشركات بطاقات الائتمان</li>
      <li>جهات العمل والمدارس</li>
      <li>شركات التأمين</li>
      <li>الاشتراكات والمجلات</li>
      <li>متاجر التسوق عبر الإنترنت</li>
      <li>المواقع الحكومية وقواعد البيانات الرسمية</li>
    </ul>

    <h2 id="common-mistakes">أخطاء شائعة يجب تجنبها</h2>
    <p>تجنب هذه الأخطاء الشائعة التي يقع فيها كثير من الناس قبل النقل:</p>
    <ul>
      <li>تأجيل التغليف حتى اللحظات الأخيرة</li>
      <li>عدم إعداد قائمة جرد شاملة للممتلكات</li>
      <li>نسيان إبلاغ الجهات المعنية بتغيير العنوان</li>
      <li>عدم تجهيز صندوق الضروريات للاستخدام الفوري في المنزل الجديد</li>
      <li>تغليف الأغراض المهمة التي قد تحتاجها في اليوم الأخير</li>
      <li>عدم أخذ قراءات العدادات في المنزلين القديم والجديد</li>
      <li>توقع إنجاز كل شيء في يوم واحد</li>
      <li>إهمال راحة الأطفال والحيوانات الأليفة أثناء النقل</li>
    </ul>

    <h2 id="conclusion">الخاتمة</h2>
    <p>التحضير الجيد ليوم النقل يمكن أن يحول تجربة مرهقة إلى تجربة منظمة وسلسة. استخدم هذه القائمة الشاملة للمهام الأساسية كدليل لمساعدتك على التخطيط والتنظيم، وتأكد من تكييفها حسب احتياجاتك الخاصة.</p>
    <p>تذكر أن الهدف الرئيسي هو تقليل التوتر وضمان انتقال آمن وفعال لممتلكاتك. إذا شعرت بأن المهمة كبيرة، فلا تتردد في طلب المساعدة من الأصدقاء والعائلة، أو الاستعانة بخدمات شركة متخصصة مثل شركة النخبة للنقل، التي توفر خدمات نقل شاملة تغطي جميع احتياجاتك.</p>
    <p>مع التخطيط الجيد والتنظيم المحكم، ستتمكن من الانتقال إلى منزلك الجديد دون نسيان أي شيء مهم، والاستمتاع بتجربة انتقال خالية من المتاعب والمفاجآت غير السارة.</p>
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
                <a href="#one-month-before" className="text-primary-600 hover:underline">قائمة المهام قبل شهر من النقل</a>
              </li>
              <li className="mb-2">
                <a href="#two-weeks-before" className="text-primary-600 hover:underline">قائمة المهام قبل أسبوعين من النقل</a>
              </li>
              <li className="mb-2">
                <a href="#week-before" className="text-primary-600 hover:underline">قائمة المهام قبل أسبوع من النقل</a>
              </li>
              <li className="mb-2">
                <a href="#day-before" className="text-primary-600 hover:underline">قائمة المهام في اليوم السابق للنقل</a>
              </li>
              <li className="mb-2">
                <a href="#moving-day" className="text-primary-600 hover:underline">قائمة المهام ليوم النقل</a>
              </li>
              <li className="mb-2">
                <a href="#after-moving" className="text-primary-600 hover:underline">قائمة المهام بعد النقل</a>
              </li>
              <li className="mb-2">
                <a href="#common-mistakes" className="text-primary-600 hover:underline">أخطاء شائعة يجب تجنبها</a>
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
                  خبيرة في مجال التنظيم والتخطيط للانتقال. تتمتع بخبرة 7 سنوات في مساعدة العائلات على الانتقال بسلاسة وتنظيم. متخصصة في تقديم نصائح عملية لتجارب انتقال خالية من التوتر.
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
    >
      {pageContent}
    </BlogLayout>
  );
};

export default PreMovingDayChecklistEssentialTasks; 