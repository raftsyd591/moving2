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

const MovingLargeAppliancesSafelyFridgeWasherAc = () => {
  // الحصول على المقال من البيانات
  const slug = "moving-large-appliances-safely-fridge-washer-ac";
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
    <p>نقل الأجهزة الكهربائية الكبيرة كالثلاجة والغسالة والمكيف يعتبر من أصعب تحديات الانتقال إلى منزل جديد. فهذه الأجهزة ليست ثقيلة فحسب، بل هي أيضًا باهظة الثمن وحساسة للصدمات والحركات المفاجئة. ولذلك، فإن نقلها بأمان يتطلب معرفة وتخطيطًا مسبقًا واتباع خطوات محددة. في هذا المقال، سنستعرض الطرق الصحيحة لنقل الأجهزة الكهربائية الكبيرة بأمان لتجنب أي أضرار قد تلحق بها أثناء عملية النقل.</p>

    <h2 id="general-preparation">التحضير العام قبل نقل الأجهزة الكبيرة</h2>
    
    <h3 id="planning">1. التخطيط والقياس</h3>
    <p>قبل البدء في عملية النقل، هناك بعض الخطوات العامة التي يجب اتباعها:</p>
    <ul>
      <li>قياس أبعاد الأجهزة الكبيرة (العرض، الارتفاع، العمق)</li>
      <li>قياس أبعاد الأبواب والممرات في المنزلين القديم والجديد</li>
      <li>التأكد من وجود مساحة كافية في المنزل الجديد لاستيعاب هذه الأجهزة</li>
      <li>إعداد مسار واضح وخالٍ من العوائق لنقل الأجهزة</li>
      <li>تجهيز الأدوات اللازمة للفك والتركيب (مفكات، عربة نقل، أحزمة رفع، قفازات)</li>
    </ul>
    
    <h3 id="tools-equipment">2. الأدوات والمعدات اللازمة</h3>
    <p>لنقل الأجهزة الكبيرة بأمان، ستحتاج إلى:</p>
    <ul>
      <li>عربة نقل (دولي) خاصة بالأجهزة الثقيلة</li>
      <li>أحزمة رفع لتوزيع الوزن أثناء الحمل</li>
      <li>قفازات مطاطية لتأمين القبضة ومنع الانزلاق</li>
      <li>بطانيات أو أغطية واقية لحماية الأجهزة من الخدوش</li>
      <li>شريط لاصق قوي وحبال للتثبيت</li>
      <li>منصة متحركة ذات عجلات (سكيتس) لنقل الأجهزة الثقيلة على الأرضيات المستوية</li>
      <li>أدوات الفك والتركيب المناسبة لكل جهاز</li>
    </ul>
    
    <h3 id="professional-help">3. الاستعانة بالمتخصصين</h3>
    <p>في بعض الحالات، قد يكون من الأفضل الاستعانة بمتخصصين:</p>
    <ul>
      <li>إذا كانت الأجهزة ثقيلة جدًا أو كبيرة الحجم</li>
      <li>إذا كان المنزل يحتوي على سلالم ضيقة أو منحنيات حادة</li>
      <li>إذا كنت غير متأكد من قدرتك على فك أو إعادة تركيب الأجهزة</li>
      <li>إذا كانت الأجهزة جديدة أو باهظة الثمن وما زالت تحت الضمان</li>
      <li>إذا كانت هناك توصيلات كهربائية أو سباكة معقدة</li>
    </ul>

    <h2 id="refrigerator-moving">كيفية نقل الثلاجة بأمان</h2>
    
    <h3 id="fridge-preparation">1. تحضير الثلاجة للنقل</h3>
    <p>الثلاجة من أكثر الأجهزة تعقيدًا في النقل بسبب وجود سائل التبريد وآلية التشغيل الحساسة:</p>
    <ul>
      <li>إفراغ الثلاجة من جميع المواد الغذائية قبل يوم أو يومين من النقل</li>
      <li>فصل الثلاجة عن الكهرباء قبل 24 ساعة على الأقل من موعد النقل</li>
      <li>إذابة الثلج تمامًا من الفريزر وتنظيف المياه المتجمعة</li>
      <li>إزالة وتغليف الأرفف الداخلية والأدراج بشكل منفصل</li>
      <li>تنظيف الثلاجة من الداخل والخارج لمنع نمو البكتيريا أو الروائح</li>
    </ul>
    
    <h3 id="fridge-moving">2. خطوات نقل الثلاجة</h3>
    <p>عند نقل الثلاجة، اتبع الخطوات التالية:</p>
    <ul>
      <li>استخدم عربة نقل مناسبة وضع الثلاجة عليها بحرص</li>
      <li>ثبت الثلاجة جيدًا بأحزمة على العربة لمنع انزلاقها</li>
      <li>حافظ على الثلاجة في وضع عمودي طوال الوقت قدر الإمكان</li>
      <li>إذا اضطررت لوضعها بشكل أفقي (وهو غير محبذ)، ضعها على جانبها (وليس على ظهرها أو مقدمتها)</li>
      <li>تجنب الاهتزازات الشديدة أثناء النقل</li>
    </ul>
    
    <h3 id="fridge-installation">3. إعادة تشغيل الثلاجة في المنزل الجديد</h3>
    <p>بعد وصولك إلى المنزل الجديد:</p>
    <ul>
      <li>ضع الثلاجة في مكانها المخصص وتأكد من استقرارها</li>
      <li>اترك الثلاجة لمدة 2-6 ساعات قبل توصيلها بالكهرباء (يعتمد على طريقة النقل والمسافة)</li>
      <li>إذا تم نقلها بشكل أفقي، انتظر 24 ساعة على الأقل قبل تشغيلها</li>
      <li>تأكد من ترك مسافة كافية بين الثلاجة والجدار للتهوية المناسبة</li>
      <li>أعد تركيب الأرفف والأدراج الداخلية قبل استخدامها</li>
    </ul>

    <h2 id="washing-machine-moving">كيفية نقل الغسالة بأمان</h2>
    
    <h3 id="washer-preparation">1. تحضير الغسالة للنقل</h3>
    <p>الغسالة تحتاج إلى عناية خاصة قبل نقلها لمنع تسرب المياه وتلف الأجزاء المتحركة:</p>
    <ul>
      <li>فصل الغسالة عن الكهرباء ومصدر المياه</li>
      <li>فصل خراطيم المياه الداخلة والخارجة وتصريف المياه المتبقية</li>
      <li>تنظيف فلتر الغسالة من أي رواسب</li>
      <li>تجفيف الغسالة جيدًا من الداخل لمنع تكون العفن</li>
      <li>تثبيت الحلة الداخلية باستخدام مسامير الشحن الأصلية أو أحزمة مؤقتة</li>
    </ul>
    
    <h3 id="washer-moving">2. خطوات نقل الغسالة</h3>
    <p>عند نقل الغسالة، اتبع الخطوات التالية:</p>
    <ul>
      <li>لف كابل الكهرباء وخراطيم المياه وتثبيتها على الغسالة بشريط لاصق</li>
      <li>تغليف الغسالة ببطانية سميكة أو غطاء واقٍ</li>
      <li>استخدم عربة نقل وثبت الغسالة عليها بأحزمة</li>
      <li>حافظ على وضع الغسالة عموديًا قدر الإمكان أثناء النقل</li>
      <li>تجنب الصدمات والاهتزازات القوية أثناء النقل</li>
    </ul>
    
    <h3 id="washer-installation">3. تركيب الغسالة في المنزل الجديد</h3>
    <p>بعد وصولك إلى المنزل الجديد:</p>
    <ul>
      <li>ضع الغسالة في مكانها وتأكد من أنها مستوية باستخدام ميزان ماء</li>
      <li>قم بإزالة أحزمة التثبيت أو مسامير الشحن</li>
      <li>وصل خراطيم المياه بالمدخل والمخرج المناسبين</li>
      <li>تأكد من عدم وجود تسرب في الوصلات</li>
      <li>شغل دورة غسيل قصيرة بدون ملابس للتأكد من عمل الغسالة بشكل صحيح</li>
    </ul>

    <h2 id="ac-moving">كيفية نقل مكيف الهواء بأمان</h2>
    
    <h3 id="ac-preparation">1. تحضير المكيف للنقل</h3>
    <p>نقل المكيفات يختلف باختلاف نوعها (شباك، سبليت، مركزي)، وفي حالة المكيفات السبليت:</p>
    <ul>
      <li>الاستعانة بفني تكييف لفصل الوحدتين الداخلية والخارجية وتفريغ غاز التبريد</li>
      <li>فصل المكيف عن الكهرباء قبل البدء في أي خطوة</li>
      <li>تنظيف فلاتر المكيف من الغبار والأوساخ</li>
      <li>تغطية أطراف التوصيل بأغطية بلاستيكية لمنع دخول الغبار أو الرطوبة</li>
      <li>تغليف الوحدتين كل على حدة بمواد واقية</li>
    </ul>
    
    <h3 id="ac-moving">2. خطوات نقل المكيف</h3>
    <p>نظرًا لتعقيد نقل المكيفات خاصة السبليت والمركزية، يفضل:</p>
    <ul>
      <li>الاستعانة بشركة متخصصة في نقل وتركيب المكيفات</li>
      <li>نقل الوحدتين بشكل منفصل وبحذر شديد</li>
      <li>الحرص على عدم تعرض أنابيب النحاس للثني أو التلف</li>
      <li>نقل الوحدات في وضعها الطبيعي وتجنب قلبها</li>
      <li>تثبيت الوحدات جيدًا أثناء النقل لمنع الاهتزاز</li>
    </ul>
    
    <h3 id="ac-installation">3. إعادة تركيب المكيف في المنزل الجديد</h3>
    <p>بعد الوصول إلى المنزل الجديد:</p>
    <ul>
      <li>تحديد المكان المناسب لتركيب الوحدتين الداخلية والخارجية</li>
      <li>التأكد من وجود منافذ مناسبة لتوصيل الأنابيب والكابلات</li>
      <li>الاستعانة بفني متخصص لتركيب الوحدات وإعادة تعبئة غاز التبريد</li>
      <li>تجنب تشغيل المكيف فور التركيب والانتظار للتأكد من عدم وجود تسريبات</li>
      <li>فحص عمل المكيف تدريجيًا على درجات حرارة مختلفة</li>
    </ul>

    <h2 id="common-mistakes">أخطاء شائعة عند نقل الأجهزة الكبيرة</h2>
    <p>تجنب هذه الأخطاء الشائعة عند نقل الأجهزة الكهربائية الكبيرة:</p>
    <ul>
      <li>نقل الأجهزة دون تفريغها أو تنظيفها</li>
      <li>عدم تثبيت الأجزاء المتحركة داخل الأجهزة</li>
      <li>إمالة الثلاجة بشكل أفقي لفترة طويلة</li>
      <li>تشغيل الأجهزة فور وصولها إلى المنزل الجديد دون فترة استقرار</li>
      <li>نقل الأجهزة الثقيلة دون مساعدة كافية</li>
      <li>عدم استخدام الأدوات المناسبة كعربات النقل والأحزمة</li>
      <li>محاولة فك وتركيب أجهزة معقدة دون خبرة كافية</li>
    </ul>

    <h2 id="professional-services">خدمات شركة النخبة للنقل في نقل الأجهزة الكبيرة</h2>
    <p>تقدم شركة النخبة للنقل خدمات متخصصة في نقل الأجهزة الكهربائية الكبيرة تشمل:</p>
    <ul>
      <li>فريق عمل مدرب على التعامل مع مختلف أنواع الأجهزة الكهربائية</li>
      <li>أدوات ومعدات متخصصة لنقل الأجهزة الثقيلة بأمان</li>
      <li>خدمات الفك والتركيب على يد فنيين متخصصين</li>
      <li>تغليف احترافي للأجهزة يحميها من الصدمات والخدوش</li>
      <li>شاحنات مجهزة خصيصًا لنقل الأجهزة الكهربائية الحساسة</li>
      <li>تأمين شامل على جميع المنقولات أثناء عملية النقل</li>
      <li>خدمة التنظيف قبل وبعد التركيب</li>
    </ul>

    <h2 id="conclusion">الخاتمة</h2>
    <p>نقل الأجهزة الكهربائية الكبيرة كالثلاجة والغسالة والمكيف يتطلب عناية خاصة وتخطيطًا مسبقًا. اتباع الإرشادات المذكورة في هذا المقال سيساعدك على نقل هذه الأجهزة بأمان والحفاظ عليها من التلف. ومع ذلك، لا تتردد في الاستعانة بخدمات شركة متخصصة مثل النخبة للنقل إذا كنت غير متأكد من قدرتك على القيام بهذه المهمة، خاصة إذا كانت الأجهزة ثمينة أو معقدة التركيب.</p>
    <p>تذكر أن الوقت والجهد المبذولان في التحضير والنقل السليم للأجهزة الكهربائية سيوفران عليك تكاليف الإصلاح أو الاستبدال في المستقبل. حافظ على سلامة أجهزتك واستمتع بها في منزلك الجديد!</p>
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
                <a href="#general-preparation" className="text-primary-600 hover:underline">التحضير العام قبل نقل الأجهزة الكبيرة</a>
              </li>
              <li className="mb-2">
                <a href="#refrigerator-moving" className="text-primary-600 hover:underline">كيفية نقل الثلاجة بأمان</a>
              </li>
              <li className="mb-2">
                <a href="#washing-machine-moving" className="text-primary-600 hover:underline">كيفية نقل الغسالة بأمان</a>
              </li>
              <li className="mb-2">
                <a href="#ac-moving" className="text-primary-600 hover:underline">كيفية نقل مكيف الهواء بأمان</a>
              </li>
              <li className="mb-2">
                <a href="#common-mistakes" className="text-primary-600 hover:underline">أخطاء شائعة عند نقل الأجهزة الكبيرة</a>
              </li>
              <li className="mb-2">
                <a href="#professional-services" className="text-primary-600 hover:underline">خدمات شركة النخبة للنقل في نقل الأجهزة الكبيرة</a>
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
                  خبيرة في مجال نقل وتغليف الأثاث مع أكثر من 10 سنوات من الخبرة. تهتم بمساعدة العملاء في الحصول على خدمات نقل آمنة وموثوقة مع الحفاظ على سلامة ممتلكاتهم الثمينة.
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

export default MovingLargeAppliancesSafelyFridgeWasherAc; 