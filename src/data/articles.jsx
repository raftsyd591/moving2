// IMPORTANT: This file is now synchronized with articles.js
// All blog posts are available in both files to maintain compatibility with different import styles.

// Articles data
import { extractBlogPostsFromFiles } from './extractBlogPosts';
import fixArticleImages from './fixArticleImages';

// This array contains the 17 main articles that are defined here
export const articlesFromData = [
  {
    title: "دليل الخبراء الشامل للمقارنة بين شركات النقل الرخيصة والمحترفة 2025: منهجية اقتصادية متقدمة لتحليل القيمة والمخاطر وتطبيق مبادئ إدارة الجودة الشاملة",
    slug: "cheap-vs-professional-movers-which-to-choose",
    image: "/images/blog/cheap_vs_professional_movers_which_to_choose.jpeg",
    author: "د. خالد الاقتصادي",
    authorImage: "/images/authors/Dr_Khalid_Aleqtisadi.png",
    date: "2025-07-01",
    category: "الاقتصاد التطبيقي وإدارة الجودة",
    readTime: 345,
    excerpt: "دليل اقتصادي شامل ومتقدم لعام 2025 يقدم منهجية علمية معمقة للمقارنة بين شركات النقل الرخيصة والمحترفة، مع تطبيق أحدث مبادئ التحليل الاقتصادي، إدارة المخاطر، إدارة الجودة الشاملة، ودراسات حالة لاتخاذ قرار مستنير ومبني على بيانات.",
    keywords: "مقارنة شركات النقل 2025، التحليل الاقتصادي المتقدم، إدارة مخاطر النقل، إدارة الجودة الشاملة، اختيار شركة نقل، القيمة مقابل المال في النقل، تكلفة الجودة، تحليل TCO للنقل، معايير اختيار شركات النقل",
  },
  {
    slug: "dammam-khobar-moving-guide-local-tips",
    title: 'دليل النقل الذكي في الدمام والخبر 2026: الابتكار اللوجستي والمدن الخضراء في المنطقة الشرقية',
    image: "/images/blog/dammam_khobar_moving_guide_local_tips.jpeg",
    author: "م. عبد العزيز الشرقي",
    authorImage: "/images/authors/Eng_Abdulaziz_Alsharqi.png",
    date: '2026-06-17',
    category: 'اللوجستيات الذكية والاستدامة الحضرية',
    readTime: 22,
    excerpt: 'أول دليل محدث منتصف 2026 يكشف كيف تعيد تقنيات الذكاء الاصطناعي والتوأم الرقمي والهيدروجين الأخضر تشكيل عمليات النقل في الدمام والخبر، مع نصائح محلية عملية واستراتيجيات خضراء متوافقة مع رؤية 2030.',
    keywords: 'النقل الذكي الدمام الخبر 2026, لوجستيات مستدامة, المدن الخضراء, الذكاء الاصطناعي اللوجستي, التوأم الرقمي, الهيدروجين الأخضر, رؤية 2030, نقل الأثاث الدمام الخبر',
  },
  {
    slug: "furniture-disassembly-assembly-services-importance-choosing",
    title: "خدمات فك وتركيب الأثاث 2026: الدليل الهندسي والاقتصادي الشامل لاختيار الخدمة المثلى وضمان الاستدامة والجودة",
    image: "/images/blog/furniture_disassembly_assembly_services_importance_choosing.jpeg",
    author: "م. سلطان القحطاني",
    authorImage: "/images/authors/Sultan_Alqahtani.png",
    date: "2026-06-17",
    category: "الهندسة الميكانيكية وعلوم المواد في خدمات النقل",
    readTime: 18,
    excerpt: "دليل متقدم محدث لمنتصف 2026 يشرح أهمية خدمات فك وتركيب الأثاث الاحترافية باستخدام أحدث منهجيات الهندسة الميكانيكية، التحليل الاقتصادي لدورة الحياة، والاستدامة، مع خطوات عملية ودراسات حالة واقعية.",
    keywords: "فك وتركيب الأثاث 2026, خدمات الأثاث المستدامة, هندسة الأثاث الذكي, دورة حياة الأثاث, معايير السلامة 2026, اختيار فني أثاث محترف, الذكاء الاصطناعي في النقل",
  },
  {
    slug: "preparing-kids-for-a-move-reduce-stress",
    title: 'تهيئة الأطفال للانتقال 2026: دليل علم نفس النمو الحديث لبناء المرونة والتكيف الإيجابي',
    image: "/images/blog/preparing_kids_for_a_move_reduce_stress.jpeg",
    author: "د. سارة الأحمدي",
    authorImage: "/images/authors/Sara_Alqahtani.png",
    date: '2026-06-17',
    category: 'علم نفس الطفل والتربية الحديثة',
    readTime: 22,
    excerpt: 'أحدث دليل لعام 2026 يستند إلى علم نفس النمو، العلاج السلوكي المعرفي، ومنهجية SEL لمساعدة الأطفال على تحويل الانتقال إلى فرصة للنمو واكتساب مهارات التكيف.',
    keywords: 'تهيئة الأطفال للانتقال 2026, علم نفس النمو, SEL, المرونة النفسية, تقليل التوتر, الانتقال العائلي, استراتيجيات التكيف, التربية الإيجابية, علاج سلوكي معرفي, دليل الأسرة السعودية',
  },
  // Adding new articles
  {
    title: "دليل احترافي لتغليف الأثاث بنفسك: تقنيات وأدوات ونصائح",
    slug: "diy-furniture-packing-tips-professional-guide",
    image: "/images/blog/diy_furniture_packing_tips_professional_guide.jpg",
    author: "سارة القحطاني",
    authorImage: "/images/authors/Sara_Alqahtani.png",
    date: "2025-03-20",
    category: "تغليف الأثاث",
    readTime: 18,
    excerpt: "دليل شامل لتغليف قطع الأثاث المختلفة بنفسك بطريقة احترافية، يتضمن أفضل الأدوات والتقنيات والنصائح العملية لضمان سلامة ممتلكاتك أثناء النقل.",
    keywords: "تغليف أثاث، نصائح تغليف، أدوات تغليف، حماية الأثاث، التغليف الذاتي, تغليف احترافي",
    content: `
      <h2 id="intro" class="text-2xl font-bold mb-4">مقدمة: لماذا التغليف الاحترافي مهم؟</h2>
      <p class="mb-4">
        التغليف الصحيح هو خط الدفاع الأول لحماية أثاثك من الخدوش والكسور أثناء النقل. استثمار القليل من الوقت والجهد في التغليف يمكن أن يوفر عليك الكثير من المال والحسرة لاحقاً.
      </p>
      <h2 id="tools" class="text-2xl font-bold mb-4">1. الأدوات والمواد الأساسية</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>صناديق كرتونية متينة:</strong> بأحجام مختلفة.</li>
        <li><strong>شريط لاصق عريض وقوي.</strong></li>
        <li><strong>غطاء فقاعي (Bubble Wrap):</strong> للقطع الهشة.</li>
        <li><strong>بلاستيك تغليف (Stretch Wrap):</strong> لتثبيت الأجزاء المتحركة وحماية الأقمشة.</li>
        <li><strong>بطانيات نقل:</strong> لحماية الأسطح الخشبية الكبيرة.</li>
        <li><strong>أقلام تعليم (Markers):</strong> لتصنيف الصناديق.</li>
      </ul>
      <h2 id="disassembly" class="text-2xl font-bold mb-4">2. تفكيك الأثاث بذكاء</h2>
      <p class="mb-4">
        قم بفك أي أجزاء قابلة للإزالة مثل الأرجل، الأرفف، والمقابض. ضع جميع البراغي والمسامير الخاصة بكل قطعة في كيس بلاستيكي صغير وقم بلصقه على القطعة نفسها.
      </p>
      <h2 id="wrapping-techniques" class="text-2xl font-bold mb-4">3. تقنيات التغليف لكل نوع أثاث</h2>
      <h3 class="text-xl font-bold mb-2">الأثاث الخشبي (طاولات، كراسي، خزائن):</h3>
      <ol class="list-decimal list-inside mb-4">
        <li>نظف السطح جيداً من الغبار.</li>
        <li>لف القطعة بالكامل ببطانيات النقل.</li>
        <li>استخدم بلاستيك التغليف لتثبيت البطانيات بإحكام.</li>
        <li>ضع واقيات من الكرتون على الزوايا الحادة.</li>
      </ol>
      <h3 class="text-xl font-bold mb-2">الأثاث المنجد (كنب، كراسي بذراعين):</h3>
      <ol class="list-decimal list-inside mb-4">
        <li>قم بإزالة الوسائد وتغليفها بشكل منفصل.</li>
        <li>استخدم بلاستيك التغليف لحماية القماش من الأوساخ والرطوبة.</li>
        <li>لا تضع أي شيء ثقيل فوق الأثاث المنجد.</li>
      </ol>
      <h2 id="labeling" class="text-2xl font-bold mb-4">4. التصنيف والترقيم</h2>
      <p>
        اكتب على كل قطعة مغلفة اسم الغرفة التي تنتمي إليها ووصفاً موجزاً لها. هذا سيسهل عملية التفريغ والترتيب في منزلك الجديد بشكل كبير.
      </p>
    `
  },
  {
    title: "خطة النقل المثالية: جدول زمني مفصل من 8 أسابيع إلى يوم النقل",
    slug: "perfect-moving-plan-detailed-timeline",
    image: "/images/blog/perfect_moving_plan_detailed_timeline.jpeg",
    author: "تركي الحربي",
    authorImage: "/images/authors/Turki_Alharbi.png",
    date: "2025-03-05",
    category: "خطط وجداول النقل",
    readTime: 20,
    excerpt: "خطة نقل مفصلة على مدى 8 أسابيع تغطي جميع المهام الضرورية قبل وأثناء وبعد الانتقال، مع قوائم مرجعية وجداول زمنية مخصصة لضمان تجربة انتقال سلسة وخالية من التوتر.",
    keywords: "خطة النقل، جدول زمني للنقل، تنظيم النقل، تخطيط الانتقال، قائمة مهام النقل، الاستعداد للنقل",
    content: `
      <h2 id="intro" class="text-2xl font-bold mb-4">مقدمة: مفتاح الانتقال الناجح هو التخطيط</h2>
      <p class="mb-4">
        الانتقال المنظم يبدأ قبل يوم النقل بأسابيع. هذا الجدول الزمني المفصل سيقودك خطوة بخطوة خلال العملية بأكملها.
      </p>
      <h2 id="8-weeks" class="text-2xl font-bold mb-4">قبل 8 أسابيع: البحث والتخطيط</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>حدد ميزانية النقل:</strong> قم بتقدير التكاليف المتوقعة.</li>
        <li><strong>ابحث عن شركات النقل:</strong> اطلب عروض أسعار من 3-4 شركات موثوقة.</li>
        <li><strong>ابدأ بالفرز:</strong> تخلص من الأغراض التي لم تعد بحاجة إليها (بيع، تبرع، إعادة تدوير).</li>
      </ul>
      <h2 id="6-weeks" class="text-2xl font-bold mb-4">قبل 6 أسابيع: الحجز والتوثيق</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>احجز شركة النقل:</strong> قم بتأكيد الحجز مع الشركة التي اخترتها.</li>
        <li><strong>اجمع المستندات الهامة:</strong> ضع جميع الأوراق المهمة (شهادات ميلاد، عقود) في ملف واحد.</li>
        <li><strong>أبلغ الجهات المعنية:</strong> مثل المدارس والبنوك، بتاريخ انتقالك.</li>
      </ul>
      <h2 id="4-weeks" class="text-2xl font-bold mb-4">قبل 4 أسابيع: بدء التغليف</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>احصل على مواد التغليف:</strong> صناديق، شريط لاصق، غطاء فقاعي.</li>
        <li><strong>ابدأ بتغليف الأغراض غير الأساسية:</strong> مثل الكتب، الديكورات، والملابس الموسمية.</li>
        <li><strong>صنف الصناديق:</strong> اكتب محتويات كل صندوق والغرفة المخصصة له.</li>
      </ul>
      <h2 id="2-weeks" class="text-2xl font-bold mb-4">قبل أسبوعين: الترتيبات النهائية</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>تأكيد تفاصيل يوم النقل:</strong> مع شركة النقل.</li>
        <li><strong>تحديث عنوانك:</strong> في الجهات الحكومية والخدمات (بريد، فواتير).</li>
        <li><strong>استهلك الطعام:</strong> حاول استهلاك الأطعمة المجمدة والقابلة للتلف.</li>
      </ul>
      <h2 id="1-week" class="text-2xl font-bold mb-4">الأسبوع الأخير: اللمسات الأخيرة</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>حضر "صندوق الضروريات":</strong> يجب أن يحتوي على أدوات نظافة، أدوية، شواحن، ووجبات خفيفة لليوم الأول.</li>
        <li><strong>فك الأجهزة الكبيرة:</strong> مثل الثلاجة والغسالة.</li>
        <li><strong>تأكد من تنظيف المنزل القديم.</strong></li>
      </ul>
      <h2 id="moving-day" class="text-2xl font-bold mb-4">يوم النقل: التنفيذ</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>كن متواجداً للإشراف:</strong> على عملية التحميل.</li>
        <li><strong>قم بجولة أخيرة:</strong> في المنزل القديم للتأكد من عدم نسيان أي شيء.</li>
        <li><strong>استلم مفاتيح منزلك الجديد:</strong> ووجه فريق النقل لوضع الصناديق في الغرف الصحيحة.</li>
      </ul>
    `
  },
  {
    title: "دليل شامل للانتقال داخل مدينة الرياض: تكاليف، نصائح، وخطوات عملية",
    slug: "moving-within-riyadh-guide",
    image: "/images/blog/moving_within_riyadh_guide.jpeg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2025-02-15",
    category: "نقل العفش",
    readTime: 10,
    excerpt: "دليل شامل للانتقال من منزل إلى آخر داخل مدينة الرياض، يشمل تقديرات التكاليف، الجدول الزمني المثالي، وخطوات عملية لضمان تجربة انتقال سلسة داخل العاصمة السعودية.",
    keywords: "نقل عفش الرياض، الانتقال داخل الرياض، تكاليف النقل الداخلي، نقل أثاث داخل الرياض"
  },
  // Moving Services Articles
  {
    title: "دليلك الشامل لاختيار أفضل شركة نقل عفش بالرياض: معايير وأسعار",
    slug: "best-movers-riyadh-guide-criteria-pricing",
    image: "/images/blog/best_movers_riyadh_guide_criteria_pricing.jpg",
    author: "علياء الراشد",
    authorImage: "/images/authors/Alya_Alrashid.png",
    date: "2025-03-10",
    category: "نقل العفش",
    readTime: 22,
    excerpt: "دليل شامل يساعدك في اختيار أفضل شركة نقل عفش في الرياض بناءً على معايير الجودة والخبرة والأسعار، مع نصائح عملية لتجربة نقل ناجحة.",
    keywords: "شركات نقل عفش الرياض، أسعار نقل الأثاث، اختيار شركة نقل، خدمات نقل العفش, أفضل شركة نقل بالرياض",
    content: `
      <h2 id="intro" class="text-2xl font-bold mb-4">مقدمة: أهمية الاختيار الصحيح</h2>
      <p class="mb-4">
        اختيار شركة نقل العفش المناسبة في الرياض هو القرار الأهم لضمان تجربة انتقال سلسة وآمنة. هذا الدليل سيساعدك على اتخاذ قرار مستنير.
      </p>
      <h2 id="criteria" class="text-2xl font-bold mb-4">1. معايير اختيار الشركة</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>الترخيص والتأمين:</strong> تأكد من أن الشركة مرخصة وتوفر تأميناً شاملاً على الممتلكات.</li>
        <li><strong>الخبرة والسمعة:</strong> ابحث عن تقييمات العملاء السابقين واقرأ مراجعاتهم على مواقع محايدة.</li>
        <li><strong>الخدمات المقدمة:</strong> هل توفر الشركة خدمات فك وتركيب، تغليف، وتخزين؟</li>
        <li><strong>فريق العمل:</strong> اسأل عن خبرة وتدريب فريق العمل.</li>
        <li><strong>الأسطول والمعدات:</strong> تأكد من أن الشركة تمتلك شاحنات مجهزة وأدوات حديثة.</li>
      </ul>
      <h2 id="pricing" class="text-2xl font-bold mb-4">2. فهم هيكل الأسعار</h2>
      <p class="mb-4">
        تعتمد تكلفة النقل على عدة عوامل:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>حجم الأثاث:</strong> عدد الغرف وكمية الممتلكات.</li>
        <li><strong>المسافة:</strong> بين المنزل القديم والجديد.</li>
        <li><strong>الطابق:</strong> وجود مصعد أو الحاجة لاستخدام السلالم.</li>
        <li><strong>الخدمات الإضافية:</strong> مثل التغليف الخاص أو التخزين.</li>
      </ul>
      <h2 id="comparison" class="text-2xl font-bold mb-4">3. كيفية مقارنة عروض الأسعار</h2>
      <ol class="list-decimal list-inside mb-4">
        <li><strong>اطلب عرض سعر تفصيلي:</strong> يجب أن يكون العرض مكتوباً ويتضمن جميع الخدمات والتكاليف.</li>
        <li><strong>احذر من الأسعار المنخفضة جداً:</strong> قد تكون علامة على خدمة سيئة أو تكاليف خفية.</li>
        <li><strong>قارن بين الخدمات:</strong> لا تقارن السعر فقط، بل قارن بين ما ستحصل عليه مقابل هذا السعر.</li>
      </ol>
      <h2 id="questions" class="text-2xl font-bold mb-4">4. أسئلة مهمة يجب طرحها</h2>
      <ul class="list-disc list-inside mb-4">
        <li>ما هي سياسة التعويض في حال حدوث تلف؟</li>
        <li>هل السعر المعطى نهائي أم تقديري؟</li>
        <li>ما هو الوقت المتوقع لإتمام عملية النقل؟</li>
      </ul>
      <h2 id="conclusion" class="text-2xl font-bold mb-4">خلاصة: استثمر في راحة بالك</h2>
      <p>
        الاختيار الدقيق لشركة النقل هو استثمار في سلامة ممتلكاتك وراحة بالك. اتبع هذه النصائح لاختيار الشريك الأفضل لعملية انتقالك في الرياض.
      </p>
    `
  },
  {
    title: "كيفية نقل الأجهزة الكهربائية الكبيرة بأمان (ثلاجة، غسالة، مكيف)",
    slug: "moving-large-appliances-safely-fridge-washer-ac",
    image: "/images/blog/moving_large_appliances_safely_fridge_washer_ac.jpeg",
    author: "علياء الراشد",
    authorImage: "/images/authors/Alya_Alrashid.png",
    date: "2025-03-15",
    category: "نقل العفش",
    readTime: 15,
    excerpt: "دليل عملي مفصل لنقل الأجهزة الكهربائية الكبيرة بأمان دون تلف، مع خطوات تفصيلية للتعامل مع الثلاجة والغسالة والمكيف وغيرها من الأجهزة الحساسة.",
    keywords: "نقل أجهزة كهربائية، نقل ثلاجة، نقل غسالة، نقل مكيف, نقل آمن للأجهزة",
    content: `
      <h2 id="intro" class="text-2xl font-bold mb-4">مقدمة: تحديات نقل الأجهزة الكبيرة</h2>
      <p class="mb-4">
        تعتبر الأجهزة الكهربائية الكبيرة من أكثر الممتلكات حساسية وقيمة في المنزل. يتطلب نقلها عناية فائقة ومعرفة تقنية لتجنب الأعطال المكلفة.
      </p>
      <h2 id="fridge" class="text-2xl font-bold mb-4">1. نقل الثلاجة والفريزر</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>التنظيف والتذويب:</strong> قبل النقل بـ 24-48 ساعة، قم بفصل الثلاجة، إفراغها بالكامل، وتنظيفها جيداً. اترك الأبواب مفتوحة لضمان جفافها تماماً.</li>
        <li><strong>تأمين الأجزاء المتحركة:</strong> ثبت جميع الأرفف والأدراج بشريط لاصق مخصص لا يترك أثراً.</li>
        <li><strong>تثبيت الباب:</strong> استخدم حزاماً قوياً أو حبلاً لتأمين الباب ومنعه من الفتح أثناء النقل.</li>
        <li><strong>النقل العمودي:</strong> يجب نقل الثلاجة دائماً في وضع عمودي للحفاظ على سلامة نظام التبريد.</li>
      </ul>
      <h2 id="washer" class="text-2xl font-bold mb-4">2. نقل الغسالة</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>فصل وتصريف المياه:</strong> افصل خراطيم المياه والكهرباء. قم بتشغيل دورة شطف سريعة لتصريف أي مياه متبقية.</li>
        <li><strong>تثبيت الحلة (Drum):</strong> استخدم مسامير الشحن (Shipping Bolts) التي تأتي مع الغسالة لتثبيت الحلة ومنعها من الحركة. هذه الخطوة حيوية جداً لحماية نظام التعليق.</li>
        <li><strong>تغليف الخراطيم:</strong> ضع الخراطيم والأسلاك في كيس وثبته بالجزء الخلفي من الغسالة.</li>
      </ul>
      <h2 id="ac" class="text-2xl font-bold mb-4">3. نقل المكيف (الوحدة الداخلية والخارجية)</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>الاستعانة بفني:</strong> فك وتركيب المكيفات يتطلب فني متخصص لضمان عدم تسرب غاز الفريون والتعامل مع التوصيلات الكهربائية بأمان.</li>
        <li><strong>تغليف الوحدات:</strong> قم بتغليف الوحدتين بغطاء فقاعي ووضعهما في صناديق متينة.</li>
        <li><strong>حماية الأنابيب النحاسية:</strong> تأكد من عدم ثني أو إتلاف الأنابيب النحاسية التي تربط بين الوحدتين.</li>
      </ul>
      <h2 id="conclusion" class="text-2xl font-bold mb-4">خلاصة: السلامة أولاً</h2>
      <p>
        نقل الأجهزة الكبيرة يتطلب تخطيطاً دقيقاً وأدوات مناسبة. إذا لم تكن متأكداً من أي خطوة، فمن الأفضل دائماً الاستعانة بخبراء النقل لضمان سلامة أجهزتك القيمة.
      </p>
    `
  },
  {
    title: "كيف تتعامل مع القطع الثمينة والهشة أثناء النقل؟ (تحف، لوحات، كريستال)",
    slug: "handling-valuable-fragile-items-moving-antiques-paintings",
    image: "/images/blog/moving_artwork_antiques_safely.jpeg",
    author: "علياء الراشد",
    authorImage: "/images/authors/Alya_Alrashid.png",
    date: "2025-04-20",
    category: "نقل المقتنيات الثمينة",
    readTime: 18,
    excerpt: "دليل شامل ومفصل للتعامل مع القطع الثمينة والهشة أثناء النقل، بما في ذلك التحف الفنية، اللوحات، والقطع الكريستالية، مع نصائح احترافية للتغليف والحماية.",
    keywords: "نقل تحف، تغليف لوحات، حماية كريستال، نقل مقتنيات ثمينة, نقل آمن للتحف",
    content: `
      <h2 id="intro" class="text-2xl font-bold mb-4">مقدمة: فن حماية الكنوز</h2>
      <p class="mb-4">
        يتطلب نقل القطع الثمينة والهشة مزيجاً من العلم والفن. أي خطأ صغير يمكن أن يؤدي إلى خسارة لا تعوض. هذا الدليل يقدم لك خبرة المحترفين لحماية مقتنياتك.
      </p>
      <h2 id="evaluation" class="text-2xl font-bold mb-4">1. التقييم والجرد</h2>
      <p class="mb-4">
        قبل لمس أي قطعة، قم بجرد وتقييم جميع المقتنيات الثمينة. التقط صوراً واضحة لكل قطعة من زوايا مختلفة لتوثيق حالتها.
      </p>
      <h2 id="materials" class="text-2xl font-bold mb-4">2. اختيار مواد التغليف الصحيحة</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>ورق خالٍ من الأحماض (Acid-Free Paper):</strong> للف اللوحات والتحف مباشرةً لمنع التفاعلات الكيميائية.</li>
        <li><strong>غطاء فقاعي (Bubble Wrap):</strong> استخدم النوع ذو الفقاعات الكبيرة للقطع الكبيرة والصغيرة للقطع الأصغر.</li>
        <li><strong>صناديق مزدوجة الجدران (Double-Wall Boxes):</strong> لتوفير حماية إضافية.</li>
        <li><strong>حشوات الفوم أو الفول السوداني (Foam Peanuts):</strong> لملء الفراغات ومنع الحركة داخل الصندوق.</li>
      </ul>
      <h2 id="paintings" class="text-2xl font-bold mb-4">3. تقنية تغليف اللوحات الفنية</h2>
      <ol class="list-decimal list-inside mb-4">
        <li>ضع علامة 'X' بشريط لاصق على زجاج اللوحة لحمايته من التحطم.</li>
        <li>لف اللوحة بورق خالٍ من الأحماض.</li>
        <li>استخدم واقيات زوايا من الكرتون المقوى.</li>
        <li>لف اللوحة بالكامل بغطاء فقاعي.</li>
        <li>ضعها في صندوق مخصص للوحات، واملأ أي فراغات.</li>
      </ol>
      <h2 id="crystal" class="text-2xl font-bold mb-4">4. تقنية تغليف الكريستال والزجاجيات</h2>
      <ol class="list-decimal list-inside mb-4">
        <li>لف كل قطعة على حدة بورق تغليف ناعم.</li>
        <li>ضع القطع الأثقل في الأسفل والأخف في الأعلى.</li>
        <li>استخدم فواصل كرتونية بين كل قطعة وأخرى.</li>
        <li>لا تضع وزناً كبيراً في صندوق واحد.</li>
      </ol>
      <h2 id="labeling" class="text-2xl font-bold mb-4">5. الترقيم والتصنيف الواضح</h2>
      <p>
        اكتب "قابل للكسر" و "هذا الاتجاه للأعلى" على جميع جوانب الصندوق. قم بترقيم الصناديق ووضع قائمة بمحتويات كل صندوق.
      </p>
    `
  },
  {
    title: "كيف تقلل من تكاليف نقل العفش دون التضحية بالجودة؟ 10 نصائح عملية",
    slug: "reduce-moving-costs-without-sacrificing-quality",
    image: "/images/blog/saudi_moving_common_mistakes_to_avoid.jpeg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2025-04-25",
    category: "تكاليف النقل",
    readTime: 5,
    excerpt: "10 نصائح عملية تساعدك على تقليل تكاليف نقل العفش دون التضحية بجودة الخدمة أو تعريض ممتلكاتك للخطر.",
    keywords: "تقليل تكاليف النقل، توفير مال النقل، نقل عفش اقتصادي، خفض أسعار النقل"
  },
  {
    title: "قائمة مهام ضرورية قبل يوم النقل: لا تنسَ شيئًا!",
    slug: "pre-moving-day-checklist-essential-tasks",
    image: "/images/blog/pre_moving_day_checklist_essential_tasks.jpeg",
    author: "علياء الراشد",
    authorImage: "/images/authors/Alya_Alrashid.png",
    date: "2025-04-05",
    category: "نصائح الانتقال",
    readTime: 8,
    excerpt: "قائمة شاملة بالمهام الضرورية التي يجب القيام بها قبل يوم الانتقال إلى منزل جديد، مرتبة زمنيًا لضمان تجربة نقل سلسة ومنظمة دون نسيان أي تفاصيل مهمة.",
    keywords: "قائمة مهام النقل، استعدادات الانتقال، تنظيم النقل، نصائح قبل الانتقال، جدول الانتقال"
  },
  {
    title: "أحدث التقنيات المستخدمة في شركات نقل العفش لضمان سلامة ممتلكاتك",
    slug: "latest-technology-moving-companies-asset-safety",
    image: "/images/blog/latest_technology_moving_companies_asset_safety.jpg",
    author: "تركي الحربي",
    authorImage: "/images/authors/Turki_Alharbi.png",
    date: "2025-05-05",
    category: "تكنولوجيا النقل",
    readTime: 10,
    excerpt: "استعراض شامل لأحدث التقنيات والأساليب التي تستخدمها شركات نقل العفش المتطورة لضمان سلامة ممتلكاتك أثناء النقل، من التغليف المتطور إلى أنظمة التتبع والمراقبة.",
    keywords: "تقنيات نقل العفش، تكنولوجيا النقل، أمان الممتلكات، حماية الأثاث، تقنيات التغليف"
  },
  {
    title: "حلول تخزين العفش في الرياض - التكاليف، الخيارات، والفوائد",
    slug: "riyadh-storage-solutions-cost-options-benefits",
    image: "/images/blog/riyadh_storage_solutions_cost_options_benefits.jpeg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2025-05-15",
    category: "تخزين الأثاث",
    readTime: 8,
    excerpt: "دليل شامل لخيارات تخزين الأثاث والعفش في الرياض، يستعرض التكاليف المتوقعة، أنواع المستودعات المتاحة، وفوائد التخزين الاحترافي مقابل الحلول الذاتية.",
    keywords: "تخزين عفش الرياض، مستودعات أثاث، تكلفة تخزين الأثاث، خيارات تخزين العفش، تخزين آمن"
  },
  {
    title: "أفضل أحياء الرياض للعائلات والعزاب: دليل المناطق السكنية",
    slug: "top-riyadh-neighborhoods-families-singles-guide",
    image: "/images/blog/top_riyadh_neighborhoods_families_singles_guide.jpeg",
    author: "علياء الراشد",
    authorImage: "/images/authors/Alya_Alrashid.png",
    date: "2025-05-30",
    category: "دليل السكن",
    readTime: 12,
    excerpt: "دليل شامل لأفضل أحياء الرياض للعائلات والعزاب، يستعرض مميزات كل حي، متوسط الأسعار، الخدمات المتوفرة، ومعايير اختيار المنطقة المناسبة لاحتياجاتك.",
    keywords: "أحياء الرياض، سكن العائلات، مناطق سكنية للعزاب، إيجارات الرياض، أفضل الأحياء السكنية"
  },
  {
    title: "كيف تتجنب الأخطاء الشائعة عند نقل العفش في السعودية؟",
    slug: "saudi-moving-common-mistakes-to-avoid",
    image: "/images/blog/saudi_moving_common_mistakes_to_avoid.jpeg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2023-04-25",
    category: "نصائح النقل",
    readTime: 6,
    excerpt: "تعرف على الأخطاء الشائعة التي يقع فيها الكثيرون عند نقل الأثاث في المملكة العربية السعودية وكيفية تجنبها لضمان تجربة نقل سلسة وآمنة.",
    keywords: "نقل عفش السعودية، أخطاء نقل الأثاث، نصائح نقل العفش، شركة نقل"
  },
  {
    title: "10 نصائح ذهبية لتغليف الأثاث بنفسك كالمحترفين قبل الانتقال",
    slug: "professional-furniture-packing-tips-guide",
    image: "/images/blog/diy_furniture_packing_tips_professional_guide.jpg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2023-05-18",
    category: "تغليف الأثاث",
    readTime: 7,
    excerpt: "تعلم أفضل الطرق لتغليف أثاثك بنفسك قبل الانتقال باستخدام تقنيات المحترفين لحماية ممتلكاتك وتوفير المال.",
    keywords: "تغليف أثاث، نصائح تغليف، حماية الأثاث، تقنيات تغليف محترفة"
  },
  {
    title: "نقل العفش للمسافات الطويلة بين مدن المملكة: التحديات والحلول",
    slug: "long-distance-moving-ksa-challenges-solutions",
    image: "/images/blog/long_distance_moving_ksa_challenges_solutions.jpeg",
    author: "تركي الحربي",
    authorImage: "/images/authors/Turki_Alharbi.png",
    date: "2023-06-10",
    category: "النقل بين المدن",
    readTime: 8,
    excerpt: "دليل شامل للتغلب على تحديات نقل العفش للمسافات الطويلة بين مدن المملكة العربية السعودية مع نصائح عملية لتجربة نقل ناجحة.",
    keywords: "نقل عفش بين المدن، المسافات الطويلة، الرياض جدة، نقل أثاث للدمام"
  },
  {
    title: "كم تكلفة نقل العفش داخل جدة؟ العوامل المؤثرة وتوفير المال",
    slug: "jeddah-moving-costs-factors-save-money",
    image: "/images/blog/jeddah_moving_costs_factors_save_money.jpeg",
    author: "تركي الحربي",
    authorImage: "/images/authors/Turki_Alharbi.png",
    date: "2023-05-10",
    category: "تكاليف النقل",
    readTime: 6,
    excerpt: "دليل شامل حول تكاليف نقل العفش في جدة والعوامل المؤثرة عليها، مع نصائح عملية لتوفير المال",
    keywords: "تكلفة نقل العفش، أسعار نقل الأثاث، شركات نقل جدة، توفير تكاليف النقل"
  },
  {
    title: "نقل عفش المكاتب والشركات في السعودية: اعتبارات خاصة",
    slug: "office-relocation-saudi-arabia-special-considerations",
    image: "/images/blog/office_relocation_saudi_arabia_special_considerations.jpeg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2023-11-05",
    category: "نقل المكاتب",
    readTime: 8,
    excerpt: "دليل شامل لنقل عفش المكاتب والشركات في السعودية، مع التركيز على الاعتبارات الخاصة التي تميز نقل الأعمال عن النقل السكني.",
    keywords: "نقل مكاتب، نقل شركات، نقل أثاث مكتبي، تخطيط نقل الأعمال"
  },
  {
    title: "5 أسئلة حاسمة يجب طرحها على شركة نقل العفش قبل التعاقد",
    slug: "questions-to-ask-moving-company-before-hiring",
    image: "/images/blog/questions_to_ask_moving_company_before_hiring.jpeg",
    author: "تركي الحربي",
    authorImage: "/images/authors/Turki_Alharbi.png",
    date: "2023-11-18",
    category: "اختيار شركة النقل",
    readTime: 5,
    excerpt: "تعرف على الأسئلة الحاسمة التي يجب عليك طرحها على شركة نقل العفش قبل التعاقد معها لضمان الحصول على خدمة احترافية وتجنب المشاكل.",
    keywords: "أسئلة شركات النقل، اختيار شركة عفش، تقييم شركة نقل، معايير اختيار"
  },
  {
    title: "أفضل طرق تغليف وحماية الأثاث عند النقل: دليل شامل",
    slug: "best-furniture-packing-methods-protection-moving",
    image: "/images/blog/best_furniture_packing_methods_protection_moving.jpeg",
    author: "سارة القحطاني",
    authorImage: "/images/authors/Sara_Alqahtani.png",
    date: "2025-04-10",
    category: "تغليف الأثاث",
    readTime: 9,
    excerpt: "دليل شامل يستعرض أفضل طرق وتقنيات تغليف مختلف قطع الأثاث لحمايتها أثناء النقل، مع صور توضيحية ونصائح عملية من خبراء النقل.",
    keywords: "تغليف الأثاث، حماية الأثاث، مواد تغليف، نقل آمن، تقنيات التغليف"
  },
  {
    title: "قائمة مهام شاملة للانتقال: ما قبل وأثناء وبعد النقل",
    slug: "comprehensive-moving-checklist-before-during-after",
    image: "/images/blog/comprehensive_moving_checklist_before_during_after.jpeg",
    author: "تركي الحربي",
    authorImage: "/images/authors/Turki_Alharbi.png",
    date: "2025-04-15",
    category: "خطط النقل",
    readTime: 10,
    excerpt: "قائمة مهام تفصيلية تغطي جميع مراحل الانتقال إلى منزل جديد، بدءاً من التخطيط المبكر وحتى الاستقرار في المسكن الجديد، مع نصائح للتعامل مع التحديات المحتملة.",
    keywords: "قائمة مهام الانتقال، خطة نقل، تنظيم النقل، نصائح الانتقال، جدول زمني للنقل"
  },
  {
    title: "نقل الأثاث من الرياض إلى جدة: خطوات، تكاليف، ونصائح عملية",
    slug: "moving-furniture-riyadh-jeddah-steps-costs-tips",
    image: "/images/blog/moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg",
    author: "فهد العتيبي",
    authorImage: "/images/authors/Fahad_Alotaibi.png",
    date: "2025-05-10",
    category: "النقل بين المدن",
    readTime: 11,
    excerpt: "دليل شامل لنقل الأثاث من الرياض إلى جدة، يستعرض خطوات العملية، التكاليف المتوقعة، واعتبارات خاصة بالطريق، مع نصائح عملية لتجربة نقل ناجحة.",
    keywords: "نقل أثاث الرياض جدة، تكلفة نقل العفش، شركات نقل بين المدن، خطوات نقل الأثاث"
  }
];

// Merge articles from data array and from individual files, then fix image paths
const mergedArticles = [...articlesFromData, ...extractBlogPostsFromFiles()];
export const articles = fixArticleImages(mergedArticles);

// Extract unique categories for use in blog filtering
const uniqueCategories = [...new Set(articles.map(article => article.category))];
export const categories = [
  { id: "all", name: "جميع المقالات" },
  ...uniqueCategories.map(cat => ({ id: cat.toLowerCase(), name: cat }))
]; 

export default articles;