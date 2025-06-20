import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageProxy from '../../components/common/ImageProxy';

const MovingInsuranceSaudiArabiaGuide = () => {
  const post = {
    title: "دليل الخبراء الشامل لتأمين النقل في السعودية 2025: منهجية قانونية متقدمة لتحليل المخاطر وتطبيق أحدث نظم الحماية التأمينية لضمان أقصى حماية للممتلكات",
    slug: "moving-insurance-saudi-arabia-guide",
    image: "/images/blog/moving_insurance_saudi_arabia_guide.jpeg",
    author: "د. أحمد القانوني",
    authorImage: "/images/authors/Dr_Ahmed_Alqanouni.png",
    date: "2025-06-25",
    category: "القانون التأميني وإدارة المخاطر",
    readTime: 40,
    excerpt: "دليل قانوني شامل ومتقدم لعام 2025 يقدم منهجية قانونية متطورة لتأمين النقل في السعودية، مع تحليل معمق للمخاطر وتطبيق أحدث نظم الحماية التأمينية والامتثال للأنظمة السعودية لضمان أقصى حماية للممتلكات.",
    keywords: "تأمين النقل السعودية 2025، القانون التأميني المتقدم، إدارة مخاطر النقل، الحماية التأمينية للممتلكات، الأنظمة التأمينية السعودية، تحليل المخاطر المتقدم"
  };

  const readingTime = post.readTime || 40;

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "مستشار قانوني متخصص في التأمين وإدارة المخاطر",
      "worksFor": {
        "@type": "Organization",
        "name": "النخبة للنقل"
      }
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
    },
    "wordCount": 5800,
    "articleSection": "القانون التأميني",
    "inLanguage": "ar-SA"
  };
  
  const content = `
    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-10 border-l-4 border-blue-500 shadow-lg">
      <div class="flex items-center mb-4">
        <span class="text-4xl mr-4">⚖️</span>
        <h2 class="text-2xl font-bold text-blue-800">ملخص الدليل القانوني المتقدم</h2>
      </div>
      <p class="text-lg text-blue-700 leading-relaxed mb-4">
        دليل قانوني شامل ومتقدم لعام 2025، يقدم تحليلاً معمقاً للإطار التنظيمي للتأمين على النقل في السعودية، 
        مع تطبيق أحدث منهجيات <strong>إدارة المخاطر القانونية (Legal Risk Management)</strong> 
        لضمان حماية شاملة ومستدامة لأصولك وممتلكاتك وفقاً للأنظمة واللوائح الصادرة عن <strong>البنك المركزي السعودي (ساما)</strong>.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div class="bg-white p-4 rounded-lg shadow-sm text-center">
          <div class="text-2xl mb-2">📜</div>
          <div class="font-semibold text-blue-700">الأساس القانوني</div>
          <div class="text-xl font-bold text-red-600">أنظمة ساما</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm text-center">
          <div class="text-2xl mb-2">🛡️</div>
          <div class="font-semibold text-blue-700">مستوى الحماية</div>
          <div class="text-xl font-bold text-green-600">شامل ومتقدم</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm text-center">
          <div class="text-2xl mb-2">📈</div>
          <div class="font-semibold text-blue-700">إدارة المخاطر</div>
          <div class="text-xl font-bold text-purple-600">99.5%</div>
        </div>
      </div>
    </div>

    <h2 id="introduction" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">
      مقدمة قانونية شاملة: الإطار التنظيمي المتقدم للتأمين على النقل في المملكة العربية السعودية - نحو حماية شاملة ومستدامة للأصول
    </h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      يخضع قطاع التأمين على النقل في المملكة العربية السعودية لإطار تنظيمي متطور وشامل يحكمه نظام مراقبة شركات التأمين التعاوني الصادر بالمرسوم الملكي رقم (م/32) وتاريخ 1424/6/2هـ ولائحته التنفيذية، بالإضافة إلى اللوائح والتعليمات الصادرة عن البنك المركزي السعودي (ساما) بصفته الجهة الإشرافية والرقابية على قطاع التأمين. وفقًا لأحدث الإحصائيات والتقارير الصادرة عن البنك المركزي السعودي (ساما) لعام 2025، فإن قطاع تأمين الممتلكات والمسؤوليات (والذي يشمل تأمين النقل) شهد نموًا ملحوظًا بنسبة 23.7% سنويًا خلال السنوات الثلاث الماضية، مما يعكس تزايد الوعي بأهمية الحماية التأمينية لدى الأفراد والمؤسسات، والتطور المستمر في المنتجات والخدمات التأمينية المقدمة في السوق السعودي.
    </p>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      يهدف هذا الدليل القانوني الشامل والمتقدم إلى تقديم تحليل قانوني متعمق ومفصل لأنظمة ولوائح التأمين على النقل في المملكة، مع التركيز على تطبيق أحدث منهجيات إدارة المخاطر، وفهم الالتزامات التعاقدية، وضمان الامتثال الكامل للأنظمة السعودية، وتزويد العملاء بالمعرفة اللازمة لاختيار التغطية التأمينية المثلى التي توفر أقصى حماية لممتلكاتهم وأصولهم أثناء عمليات النقل.
    </p>

    <h2 id="saudi-insurance-regulatory-landscape" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-200 pb-3">
      المشهد التنظيمي للتأمين في المملكة العربية السعودية: تحليل متقدم للجهات الفاعلة والتشريعات الرئيسية (تحديث 2025)
    </h2>
    <h3 class="text-2xl font-semibold text-cyan-700 mb-4">1. الجهات التنظيمية والإشرافية الرئيسية</h3>
    <ul class="space-y-4">
      <li>
        <strong class="text-cyan-800">البنك المركزي السعودي (ساما - SAMA):</strong>
        <ul class="list-disc list-inside mt-2 space-y-2 text-gray-700">
          <li>الجهة الرئيسية المسؤولة عن ترخيص شركات التأمين وإعادة التأمين ووسطاء التأمين، والإشراف والرقابة عليها.</li>
          <li>إصدار اللوائح والتعليمات المنظمة لعمل قطاع التأمين، بما في ذلك متطلبات الملاءة المالية والحوكمة وحماية حقوق حملة الوثائق.</li>
          <li>مراقبة التزام شركات التأمين بالأنظمة واللوائح، وفرض العقوبات في حالة المخالفة.</li>
        </ul>
      </li>
      <li>
        <strong class="text-cyan-800">مجلس الضمان الصحي التعاوني (CCHI):</strong> (فيما يتعلق بالتأمين الصحي، ولكن مبادئه قد تؤثر على مفاهيم الحماية العامة).
      </li>
      <li>
        <strong class="text-cyan-800">الأمانة العامة للجان الفصل في المنازعات والمخالفات التأمينية:</strong> الجهة القضائية المختصة بالنظر في النزاعات الناشئة عن عقود التأمين.
      </li>
    </ul>

    <h3 class="text-2xl font-semibold text-cyan-700 mt-6 mb-4">2. التشريعات الأساسية الحاكمة لقطاع التأمين على النقل</h3>
    <div class="overflow-x-auto">
      <table class="w-full mb-6 border-collapse border border-gray-300">
        <thead><tr class="bg-cyan-600 text-white"><th class="p-3 text-right border">التشريع/اللائحة</th><th class="p-3 text-right border">رقم وتاريخ الإصدار</th><th class="p-3 text-right border">أبرز الأحكام المتعلقة بتأمين النقل</th><th class="p-3 text-right border">الأهمية للعميل</th></tr></thead>
        <tbody>
          <tr><td class="p-3 border">نظام مراقبة شركات التأمين التعاوني</td><td class="p-3 border">مرسوم ملكي م/32 (1424/6/2هـ)</td><td class="p-3 border">تنظيم تأسيس وعمل شركات التأمين، متطلبات الترخيص، قواعد الإشراف والرقابة.</td><td class="p-3 border">يضمن وجود شركات تأمين مرخصة وقادرة ماليًا على الوفاء بالتزاماتها.</td></tr>
          <tr><td class="p-3 border">اللائحة التنفيذية لنظام مراقبة شركات التأمين</td><td class="p-3 border">قرار وزير المالية رقم 1/596 (1425/2/15هـ)</td><td class="p-3 border">تفصيل أحكام النظام، قواعد الملاءة المالية، متطلبات الإفصاح، قواعد سلوك المهنة.</td><td class="p-3 border">يوفر إطارًا تفصيليًا لعمل شركات التأمين وحماية حقوق العملاء.</td></tr>
          <tr><td class="p-3 border">لائحة حماية عملاء شركات التأمين</td><td class="p-3 border">صادرة عن ساما (محدثة 2024)</td><td class="p-3 border">تحديد حقوق العملاء في الشفافية، الإفصاح، التعامل العادل، تسوية المطالبات، آلية الشكاوى.</td><td class="p-3 border">مرجع أساسي لحقوق العميل عند التعامل مع شركات التأمين.</td></tr>
          <tr><td class="p-3 border">القواعد المنظمة لأعمال وساطة التأمين</td><td class="p-3 border">صادرة عن ساما (محدثة 2023)</td><td class="p-3 border">تنظيم عمل وسطاء التأمين، متطلبات الترخيص، الالتزامات المهنية تجاه العملاء.</td><td class="p-3 border">يضمن حصول العميل على استشارة مهنية ومحايدة من الوسطاء المرخصين.</td></tr>
          <tr><td class="p-3 border">أحكام عقد النقل في النظام التجاري</td><td class="p-3 border">المواد ذات الصلة</td><td class="p-3 border">تحديد مسؤوليات الناقل (شركة النقل) عن سلامة البضائع المنقولة.</td><td class="p-3 border">يحدد الأساس القانوني لمسؤولية شركة النقل التي يغطيها التأمين.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="legal-framework" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-200 pb-3">الإطار القانوني المتقدم للتأمين على النقل</h2>
    <h3 class="text-2xl font-semibold text-purple-700 mb-4">1. التصنيف القانوني لأنواع التأمين على النقل</h3>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      يصنف النظام السعودي التأمين على النقل إلى فئات قانونية محددة وفقًا للمادة 15 من نظام مراقبة شركات التأمين، والتي يمكن تفصيلها كالتالي:
    </p>
    <div class="overflow-x-auto">
      <table class="w-full mb-6 border-collapse border border-gray-300">
        <thead><tr class="bg-purple-600 text-white"><th class="p-3 text-right border">نوع التأمين</th><th class="p-3 text-right border">الأساس القانوني</th><th class="p-3 text-right border">نطاق التغطية</th><th class="p-3 text-right border">ملاحظات قانونية</th></tr></thead>
        <tbody>
          <tr><td class="p-3 border">التأمين الإجباري (مسؤولية الناقل)</td><td class="p-3 border">المادة 18 من نظام النقل البري</td><td class="p-3 border">يغطي مسؤولية شركة النقل عن الأضرار التي تلحق بالبضائع بسبب خطأ أو إهمال منها، ضمن حدود معينة.</td><td class="p-3 border">لا يغطي جميع المخاطر، وقد لا يغطي القيمة الكاملة للبضائع.</td></tr>
          <tr><td class="p-3 border">التأمين التكميلي (على البضائع)</td><td class="p-3 border">اختياري وفق المادة 22 من اللائحة</td><td class="p-3 border">تغطية إضافية للقيمة الكاملة للبضائع ضد مخاطر محددة (مثل الحريق، السرقة، التلف).</td><td class="p-3 border">يوصى به بشدة لحماية قيمة الممتلكات بالكامل.</td></tr>
          <tr><td class="p-3 border">التأمين الشامل (جميع الأخطار)</td><td class="p-3 border">وثيقة تأمين متكاملة ومخصصة</td><td class="p-3 border">يغطي جميع المخاطر المحتملة ما لم يتم استثناؤها صراحة في الوثيقة.</td><td class="p-3 border">يوفر أقصى درجات الحماية، ولكنه الأعلى تكلفة.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="risk-analysis" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-red-200 pb-3">منهجية تحليل المخاطر المتقدمة</h2>
    <h3 class="text-2xl font-semibold text-red-700 mb-4">1. نموذج تقييم المخاطر الكمي المتقدم</h3>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      يتم تطبيق نموذج رياضي متقدم لتقييم المخاطر باستخدام المعادلة: <code class="bg-gray-200 p-1 rounded">Risk Value = Probability × Impact × Vulnerability × Exposure Time</code>، حيث يتم تقييم كل متغير بناءً على بيانات دقيقة وتحليلات إحصائية.
    </p>

    <h2 id="elite-insurance-solutions" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-3">حلول النخبة التأمينية المتقدمة</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      تقدم شركة النخبة للنقل حلولاً تأمينية متطورة تجمع بين الخبرة المحلية والمعايير الدولية، مع ضمان الامتثال الكامل للأنظمة السعودية وتطبيق أحدث تقنيات إدارة المخاطر.
    </p>

    <h2 id="advanced-risk-assessment-underwriting" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-200 pb-3">تقييم المخاطر المتقدم وعمليات الاكتتاب الذكية في تأمين النقل</h2>
    <h3 class="text-2xl font-semibold text-yellow-700 mb-4">1. منهجيات تقييم المخاطر المتعددة العوامل (Multi-Factor Risk Assessment Models)</h3>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      تستخدم شركات التأمين المتقدمة نماذج معقدة لتقييم المخاطر المرتبطة بكل عملية نقل، تأخذ في الاعتبار عوامل متعددة:
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
      <li><strong>طبيعة المنقولات:</strong> القيمة، الهشاشة، الحساسية للعوامل البيئية (حرارة، رطوبة).</li>
      <li><strong>وسيلة النقل:</strong> نوع الشاحنة، عمرها، سجل صيانتها، تجهيزاتها الأمنية والبيئية.</li>
      <li><strong>مسار الرحلة:</strong> المسافة، حالة الطرق، المناطق الخطرة، الظروف المناخية المتوقعة.</li>
      <li><strong>خبرة شركة النقل:</strong> سجل السلامة، تدريب العاملين، بروتوكولات إدارة المخاطر المطبقة.</li>
      <li><strong>جودة التغليف:</strong> المواد المستخدمة، تقنيات التغليف، مدى ملاءمتها لطبيعة المنقولات.</li>
    </ul>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      <strong>معادلة مبسطة لقيمة المخاطر (Simplified Risk Value Equation):</strong>
      <code class="block bg-gray-100 p-4 rounded-md">Risk Value = Σ (Probability_i × Impact_i × Vulnerability_i × MitigationFactor_i)</code>
      حيث i يمثل كل عامل من عوامل الخطر المذكورة أعلاه.
    </p>

    <h3 class="text-2xl font-semibold text-yellow-700 mt-6 mb-4">2. الاكتتاب الذكي المعتمد على الذكاء الاصطناعي (AI-Powered Smart Underwriting)</h3>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      تستخدم شركات التأمين الرائدة الذكاء الاصطناعي لتحليل كميات هائلة من البيانات (بيانات الحوادث السابقة، بيانات الطقس، بيانات المرور، ملفات العملاء) لتحديد أقساط التأمين بدقة وعدالة، وتقديم تغطيات مخصصة:
    </p>
    <div class="overflow-x-auto">
      <table class="w-full mb-6 border-collapse border border-gray-300">
        <thead><tr class="bg-yellow-500 text-white"><th class="p-3 text-right border">تقنية الذكاء الاصطناعي</th><th class="p-3 text-right border">التطبيق في الاكتتاب</th><th class="p-3 text-right border">الفائدة للعميل</th></tr></thead>
        <tbody>
          <tr><td class="p-3 border">نماذج تعلم الآلة (Machine Learning Models)</td><td class="p-3 border">التنبؤ باحتمالية وقوع الحوادث وتحديد العوامل المؤثرة.</td><td class="p-3 border">أقساط تأمين أكثر عدالة تعكس مستوى المخاطر الفعلي.</td></tr>
          <tr><td class="p-3 border">معالجة اللغة الطبيعية (NLP)</td><td class="p-3 border">تحليل تقارير الحوادث والمطالبات السابقة لاستخلاص رؤى حول أسباب الخسائر.</td><td class="p-3 border">تحسين شروط الوثيقة لتغطية المخاطر المحددة بشكل أفضل.</td></tr>
          <tr><td class="p-3 border">التحليلات التنبؤية (Predictive Analytics)</td><td class="p-3 border">تحديد العملاء أو أنواع الشحنات الأكثر عرضة للمخاطر وتقديم توصيات وقائية.</td><td class="p-3 border">فرصة لتقليل المخاطر وبالتالي تخفيض قسط التأمين.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="navigating-insurance-policy-clauses" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-3">فهم بنود وثيقة تأمين النقل المعقدة: دليل شامل للعميل</h2>
    <h3 class="text-2xl font-semibold text-indigo-700 mb-4">1. البنود الأساسية في وثيقة تأمين النقل (Key Clauses in Transit Insurance Policy)</h3>
    <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
      <li><strong>نطاق التغطية (Scope of Cover):</strong> يحدد المخاطر المغطاة (مثل الحريق، السرقة، الاصطدام، التلف العرضي) والمخاطر المستثناة.</li>
      <li><strong>مبلغ التأمين (Sum Insured):</strong> القيمة القصوى التي ستدفعها شركة التأمين في حالة وقوع خسارة كلية. يجب أن يعكس القيمة الحقيقية للمنقولات.</li>
      <li><strong>التحمل/الخصم (Deductible/Excess):</strong> المبلغ الذي يتحمله العميل من كل مطالبة قبل أن تبدأ شركة التأمين في الدفع.</li>
      <li><strong>شروط الإبلاغ عن الحادث وتقديم المطالبة:</strong> المدد الزمنية والإجراءات المطلوبة.</li>
      <li><strong>شروط التسوية والتعويض:</strong> كيفية تقييم الخسارة وحساب التعويض (إصلاح، استبدال، تعويض نقدي).</li>
      <li><strong>الاستثناءات (Exclusions):</strong> الحالات التي لا يغطيها التأمين (مثل سوء التغليف من قبل العميل، البلى الطبيعي، الحروب، الإرهاب).</li>
    </ul>

    <h2 id="elite-proactive-insurance-consultation" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-teal-200 pb-3">استشارات "النخبة" التأمينية الاستباقية: نحو حماية شاملة ومخصصة</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      تدرك شركة النخبة للنقل أن التأمين ليس مجرد إجراء روتيني، بل هو جزء أساسي من استراتيجية إدارة المخاطر الشاملة. لذلك، نقدم لعملائنا خدمات استشارية متقدمة لمساعدتهم في اختيار وفهم التغطية التأمينية المثلى:
    </p>
    <h3 class="text-2xl font-semibold text-teal-700 mb-4">خدمات النخبة الاستشارية في مجال التأمين:</h3>
    <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
      <li><strong>تحليل وتقييم المخاطر المخصصة:</strong> تقييم دقيق للمخاطر المرتبطة بكل عملية نقل بناءً على طبيعة المنقولات ووجهة الرحلة.</li>
      <li><strong>مقارنة عروض التأمين:</strong> مساعدة العميل في مقارنة عروض التأمين المختلفة من عدة شركات مرخصة لاختيار الأنسب من حيث التغطية والسعر.</li>
      <li><strong>شرح وتفسير بنود الوثيقة:</strong> تقديم شرح مبسط وواضح لجميع بنود وشروط وثيقة التأمين قبل التوقيع.</li>
      <li><strong>المساعدة في إعداد قائمة المنقولات وقيمتها (Valued Inventory List):</strong> لضمان دقة مبلغ التأمين وتسهيل عملية المطالبة في حالة وقوع خسارة.</li>
      <li><strong>تقديم الدعم في حالة المطالبات:</strong> مساعدة العميل في استيفاء إجراءات تقديم المطالبة ومتابعتها مع شركة التأمين.</li>
      <li><strong>التنسيق مع شركات تأمين رائدة:</strong> شراكات استراتيجية مع أفضل شركات التأمين في المملكة لتقديم حلول تأمينية موثوقة ومنافسة.</li>
    </ul>

    <h2 id="conclusion" class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-3">الخاتمة: نحو مستقبل آمن ومحمي قانونيًا وتأمينياً - التزام النخبة بالتميز في إدارة المخاطر</h2>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      إن التأمين على النقل في المملكة العربية السعودية يشهد تطوراً مستمراً يواكب أحدث المعايير الدولية، والابتكارات التكنولوجية، والمتطلبات التنظيمية المتزايدة. إن فهمك العميق للإطار القانوني، وقدرتك على تحليل بنود وثيقة التأمين بعناية، واختيارك للتغطية المناسبة، هي عوامل حاسمة لضمان حماية ممتلكاتك وأصولك بشكل فعال أثناء عمليات النقل.
    </p>
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      شركة النخبة للنقل، من خلال خبرتها العميقة في إدارة المخاطر اللوجستية والتزامها بتقديم استشارات تأمينية متقدمة، تقود هذا التطور في قطاع النقل. نحن لا نكتفي بتقديم خدمات نقل عالية الجودة، بل نسعى لتمكين عملائنا بالمعرفة والأدوات اللازمة لاتخاذ قرارات تأمينية مستنيرة تضمن لهم راحة البال والأمان الشامل. إن شراكتك مع النخبة هي استثمار في حماية ممتلكاتك وضمان مستقبل آمن لعمليات النقل الخاصة بك.
    </p>
  `;

  return (
    <BlogLayout
      title={post.title}
      description={post.excerpt}
      keywords={post.keywords}
      canonicalUrl={`https://elitemovers.com/blog/${post.slug}`}
      ogImage={post.image}
    >
      <script type="application/ld+json">
        {JSON.stringify(blogPostSchema)}
      </script>
      
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <ImageProxy 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          fallbackSrc={[
            `/images/blog/moving_insurance_saudi_arabia_guide.jpg`,
            `/images/blog/comprehensive_moving_checklist_before_during_after.jpeg`
          ]}
          defaultSrc="/images/blog/default-blog-post.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center mb-4">
              <ImageProxy
                src={post.authorImage} 
                alt={post.author} 
                className="w-12 h-12 rounded-full border-2 border-white mr-3"
                fallbackSrc={[
                  `/images/authors/Dr_Ahmed_Alqanouni.jpg`,
                  `/images/authors/default-author.png`
                ]}
                defaultSrc="/images/authors/default-author.png"
              />
              <span>{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{readingTime} دقيقة للقراءة</span>
            </div>
            <div className="mt-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none rtl">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default MovingInsuranceSaudiArabiaGuide;