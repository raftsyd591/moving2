// IMPORTANT: This file is synchronized with articles.js
// All blog posts are available in both files to maintain compatibility with different import styles.

// Articles data
import { extractBlogPostsFromFiles } from './extractBlogPosts.js'; // Added .js extension
import fixArticleImages from './fixArticleImages.js'; // Added .js extension

// This array contains the 17 main articles that are defined here
export const articlesFromData = [
  // Adding new articles
  {
    title: 'دليل احترافي لتغليف الأثاث بنفسك: تقنيات وأدوات ونصائح',
    slug: 'diy-furniture-packing-tips-professional-guide',
    image: '/images/blog/diy_furniture_packing_tips_professional_guide.jpg',
    author: 'سارة القحطاني',
    authorImage: '/images/authors/Sara_Alqahtani.png',
    date: '2025-03-20',
    category: 'تغليف الأثاث',
    readTime: 11,
    excerpt: 'دليل شامل لتغليف قطع الأثاث المختلفة بنفسك بطريقة احترافية، يتضمن أفضل الأدوات والتقنيات والنصائح العملية لضمان سلامة ممتلكاتك أثناء النقل.',
    keywords: 'تغليف أثاث، نصائح تغليف، أدوات تغليف، حماية الأثاث، التغليف الذاتي',
    content: '<p>محتوى المقال سيظهر هنا. هذا محتوى افتراضي للمقال.</p>'
  },
  {
    title: 'خطة النقل المثالية: جدول زمني مفصل من 8 أسابيع إلى يوم النقل',
    slug: 'perfect-moving-plan-detailed-timeline',
    image: '/images/blog/perfect_moving_plan_detailed_timeline.jpeg',
    author: 'تركي الحربي',
    authorImage: '/images/authors/Turki_Alharbi.png',
    date: '2025-03-05',
    category: 'خطط وجداول النقل',
    readTime: 12,
    excerpt: 'خطة نقل مفصلة على مدى 8 أسابيع تغطي جميع المهام الضرورية قبل وأثناء وبعد الانتقال، مع قوائم مرجعية وجداول زمنية مخصصة لضمان تجربة انتقال سلسة وخالية من التوتر.',
    keywords: 'خطة النقل، جدول زمني للنقل، تنظيم النقل، تخطيط الانتقال، قائمة مهام النقل، الاستعداد للنقل',
    content: '<p>محتوى المقال سيظهر هنا. هذا محتوى افتراضي للمقال.</p>'
  },
  {
    title: 'دليل شامل للانتقال داخل مدينة الرياض: تكاليف، نصائح، وخطوات عملية',
    slug: 'moving-within-riyadh-guide',
    image: '/images/blog/moving_within_riyadh_guide.jpeg',
    author: 'فهد العتيبي',
    authorImage: '/images/authors/Fahad_Alotaibi.png',
    date: '2025-02-15',
    category: 'نقل العفش',
    readTime: 10,
    excerpt: 'دليل شامل للانتقال من منزل إلى آخر داخل مدينة الرياض، يشمل تقديرات التكاليف، الجدول الزمني المثالي، وخطوات عملية لضمان تجربة انتقال سلسة داخل العاصمة السعودية.',
    keywords: 'نقل عفش الرياض، الانتقال داخل الرياض، تكاليف النقل الداخلي، نقل أثاث داخل الرياض',
    content: '<p>محتوى المقال سيظهر هنا. هذا محتوى افتراضي للمقال.</p>'
  },
  // Moving Services Articles
  {
    title: 'دليلك الشامل لاختيار أفضل شركة نقل عفش بالرياض: معايير وأسعار',
    slug: 'best-movers-riyadh-guide-criteria-pricing',
    image: '/images/blog/best_movers_riyadh_guide_criteria_pricing.jpg',
    author: 'علياء الراشد',
    authorImage: '/images/authors/Alya_Alrashid.png',
    date: '2025-03-10',
    category: 'نقل العفش',
    readTime: 9,
    excerpt: 'دليل شامل يساعدك في اختيار أفضل شركة نقل عفش في الرياض بناءً على معايير الجودة والخبرة والأسعار، مع نصائح عملية لتجربة نقل ناجحة.',
    keywords: 'شركات نقل عفش الرياض، أسعار نقل الأثاث، اختيار شركة نقل، خدمات نقل العفش',
    content: '<p>محتوى المقال سيظهر هنا. هذا محتوى افتراضي للمقال.</p>'
  },
  {
    title: 'كيفية نقل الأجهزة الكهربائية الكبيرة بأمان (ثلاجة، غسالة، مكيف)',
    slug: 'moving-large-appliances-safely-fridge-washer-ac',
    image: '/images/blog/moving_large_appliances_safely_fridge_washer_ac.jpeg',
    author: 'علياء الراشد',
    authorImage: '/images/authors/Alya_Alrashid.png',
    date: '2025-03-15',
    category: 'نقل العفش',
    readTime: 6,
    excerpt: 'دليل عملي لنقل الأجهزة الكهربائية الكبيرة بأمان دون تلف، مع خطوات تفصيلية للتعامل مع الثلاجة والغسالة والمكيف وغيرها من الأجهزة.',
    keywords: 'نقل أجهزة كهربائية، نقل ثلاجة، نقل غسالة، نقل مكيف'
  },
  {
    title: 'كيف تتعامل مع القطع الثمينة والهشة أثناء النقل؟ (تحف، لوحات، كريستال)',
    slug: 'handling-valuable-fragile-items-moving-antiques-paintings',
    image: '/images/blog/moving_artwork_antiques_safely.jpeg',
    author: 'علياء الراشد',
    authorImage: '/images/authors/Alya_Alrashid.png',
    date: '2025-04-20',
    category: 'نقل المقتنيات الثمينة',
    readTime: 9,
    excerpt: 'دليل شامل للتعامل مع القطع الثمينة والهشة أثناء النقل، بما في ذلك التحف الفنية، اللوحات، والقطع الكريستالية، مع نصائح احترافية للتغليف والحماية.',
    keywords: 'نقل تحف، تغليف لوحات، حماية كريستال، نقل مقتنيات ثمينة'
  },
  {
    title: 'كيف تقلل من تكاليف نقل العفش دون التضحية بالجودة؟ 10 نصائح عملية',
    slug: 'reduce-moving-costs-without-sacrificing-quality',
    image: '/images/blog/saudi_moving_common_mistakes_to_avoid.jpeg',
    author: 'فهد العتيبي',
    authorImage: '/images/authors/Fahad_Alotaibi.png',
    date: '2025-04-25',
    category: 'تكاليف النقل',
    readTime: 5,
    excerpt: '10 نصائح عملية تساعدك على تقليل تكاليف نقل العفش دون التضحية بجودة الخدمة أو تعريض ممتلكاتك للخطر.',
    keywords: 'تقليل تكاليف النقل، توفير مال النقل، نقل عفش اقتصادي، خفض أسعار النقل'
  },
  {
    title: 'قائمة مهام ضرورية قبل يوم النقل: لا تنسَ شيئًا!',
    slug: 'pre-moving-day-checklist-essential-tasks',
    image: '/images/blog/pre_moving_day_checklist_essential_tasks.jpeg',
    author: 'علياء الراشد',
    authorImage: '/images/authors/Alya_Alrashid.png',
    date: '2025-04-05',
    category: 'نصائح الانتقال',
    readTime: 8,
    excerpt: 'قائمة شاملة بالمهام الضرورية التي يجب القيام بها قبل يوم الانتقال إلى منزل جديد، مرتبة زمنيًا لضمان تجربة نقل سلسة ومنظمة دون نسيان أي تفاصيل مهمة.',
    keywords: 'قائمة مهام النقل، استعدادات الانتقال، تنظيم النقل، نصائح قبل الانتقال، جدول الانتقال'
  },
  {
    title: 'أحدث التقنيات المستخدمة في شركات نقل العفش لضمان سلامة ممتلكاتك',
    slug: 'latest-technology-moving-companies-asset-safety',
    image: '/images/blog/latest_technology_moving_companies_asset_safety.jpg',
    author: 'تركي الحربي',
    authorImage: '/images/authors/Turki_Alharbi.png',
    date: '2025-05-05',
    category: 'تكنولوجيا النقل',
    readTime: 10,
    excerpt: 'استعراض شامل لأحدث التقنيات والأساليب التي تستخدمها شركات نقل العفش المتطورة لضمان سلامة ممتلكاتك أثناء النقل، من التغليف المتطور إلى أنظمة التتبع والمراقبة.',
    keywords: 'تقنيات نقل العفش، تكنولوجيا النقل، أمان الممتلكات، حماية الأثاث، تقنيات التغليف'
  },
  {
    title: 'حلول تخزين العفش في الرياض - التكاليف، الخيارات، والفوائد',
    slug: 'riyadh-storage-solutions-cost-options-benefits',
    image: '/images/blog/riyadh_storage_solutions_cost_options_benefits.jpeg',
    author: 'فهد العتيبي',
    authorImage: '/images/authors/Fahad_Alotaibi.png',
    date: '2025-05-15',
    category: 'تخزين الأثاث',
    readTime: 8,
    excerpt: 'دليل شامل لخيارات تخزين الأثاث والعفش في الرياض، يستعرض التكاليف المتوقعة، أنواع المستودعات المتاحة، وفوائد التخزين الاحترافي مقابل الحلول الذاتية.',
    keywords: 'تخزين عفش الرياض، مستودعات أثاث، تكلفة تخزين الأثاث، خيارات تخزين العفش، تخزين آمن'
  },
  {
    title: 'أفضل أحياء الرياض للعائلات والعزاب: دليل المناطق السكنية',
    slug: 'top-riyadh-neighborhoods-families-singles-guide',
    image: '/images/blog/top_riyadh_neighborhoods_families_singles_guide.jpeg',
    author: 'علياء الراشد',
    authorImage: '/images/authors/Alya_Alrashid.png',
    date: '2025-05-30',
    category: 'دليل السكن',
    readTime: 12,
    excerpt: 'دليل شامل لأفضل أحياء الرياض للعائلات والعزاب، يستعرض مميزات كل حي، متوسط الأسعار، الخدمات المتوفرة، ومعايير اختيار المنطقة المناسبة لاحتياجاتك.',
    keywords: 'أحياء الرياض، سكن العائلات، مناطق سكنية للعزاب، إيجارات الرياض، أفضل الأحياء السكنية'
  },
  {
    title: 'كيف تتجنب الأخطاء الشائعة عند نقل العفش في السعودية؟',
    slug: 'saudi-moving-common-mistakes-to-avoid',
    image: '/images/blog/saudi_moving_common_mistakes_to_avoid.jpeg',
    author: 'فهد العتيبي',
    authorImage: '/images/authors/Fahad_Alotaibi.png',
    date: '2023-04-25',
    category: 'نصائح النقل',
    readTime: 6,
    excerpt: 'تعرف على الأخطاء الشائعة التي يقع فيها الكثيرون عند نقل الأثاث في المملكة العربية السعودية وكيفية تجنبها لضمان تجربة نقل سلسة وآمنة.',
    keywords: 'نقل عفش السعودية، أخطاء نقل الأثاث، نصائح نقل العفش، شركة نقل'
  },
  {
    title: '10 نصائح ذهبية لتغليف الأثاث بنفسك كالمحترفين قبل الانتقال',
    slug: 'professional-furniture-packing-tips-guide',
    image: '/images/blog/diy_furniture_packing_tips_professional_guide.jpg',
    author: 'فهد العتيبي',
    authorImage: '/images/authors/Fahad_Alotaibi.png',
    date: '2023-05-18',
    category: 'تغليف الأثاث',
    readTime: 7,
    excerpt: 'تعلم أفضل الطرق لتغليف أثاثك بنفسك قبل الانتقال باستخدام تقنيات المحترفين لحماية ممتلكاتك وتوفير المال.',
    keywords: 'تغليف أثاث، نصائح تغليف، حماية الأثاث، تقنيات تغليف محترفة'
  },
  {
    title: 'نقل العفش للمسافات الطويلة بين مدن المملكة: التحديات والحلول',
    slug: 'long-distance-moving-ksa-challenges-solutions',
    image: '/images/blog/long_distance_moving_ksa_challenges_solutions.jpeg',
    author: 'تركي الحربي',
    authorImage: '/images/authors/Turki_Alharbi.png',
    date: '2023-06-10',
    category: 'النقل بين المدن',
    readTime: 8,
    excerpt: 'دليل شامل للتغلب على تحديات نقل العفش للمسافات الطويلة بين مدن المملكة العربية السعودية مع نصائح عملية لتجربة نقل ناجحة.',
    keywords: 'نقل عفش بين المدن، المسافات الطويلة، الرياض جدة، نقل أثاث للدمام'
  },
  {
    title: 'كم تكلفة نقل العفش داخل جدة؟ العوامل المؤثرة وتوفير المال',
    slug: 'jeddah-moving-costs-factors-save-money',
    image: '/images/blog/jeddah_moving_costs_factors_save_money.jpeg',
    author: 'تركي الحربي',
    authorImage: '/images/authors/Turki_Alharbi.png',
    date: '2023-05-10',
    category: 'تكاليف النقل',
    readTime: 6,
    excerpt: 'دليل شامل حول تكاليف نقل العفش في جدة والعوامل المؤثرة عليها، مع نصائح عملية لتوفير المال',
    keywords: 'تكلفة نقل العفش، أسعار نقل الأثاث، شركات نقل جدة، توفير تكاليف النقل'
  },
  {
    title: 'نقل عفش المكاتب والشركات في السعودية: اعتبارات خاصة',
    slug: 'office-relocation-saudi-arabia-special-considerations',
    image: '/images/blog/office_relocation_saudi_arabia_special_considerations.jpeg',
    author: 'فهد العتيبي',
    authorImage: '/images/authors/Fahad_Alotaibi.png',
    date: '2023-11-05',
    category: 'نقل المكاتب',
    readTime: 8,
    excerpt: 'دليل شامل لنقل عفش المكاتب والشركات في السعودية، مع التركيز على الاعتبارات الخاصة التي تميز نقل الأعمال عن النقل السكني.',
    keywords: 'نقل مكاتب، نقل شركات، نقل أثاث مكتبي، تخطيط نقل الأعمال'
  },
  {
    title: '5 أسئلة حاسمة يجب طرحها على شركة نقل العفش قبل التعاقد',
    slug: 'questions-to-ask-moving-company-before-hiring',
    image: '/images/blog/questions_to_ask_moving_company_before_hiring.jpeg',
    author: 'تركي الحربي',
    authorImage: '/images/authors/Turki_Alharbi.png',
    date: '2023-11-18',
    category: 'اختيار شركة النقل',
    readTime: 5,
    excerpt: 'تعرف على الأسئلة الحاسمة التي يجب عليك طرحها على شركة نقل العفش قبل التعاقد معها لضمان الحصول على خدمة احترافية وتجنب المشاكل.',
    keywords: 'أسئلة شركات النقل، اختيار شركة عفش، تقييم شركة نقل، معايير اختيار'
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
