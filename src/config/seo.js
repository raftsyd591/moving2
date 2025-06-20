/**
 * تكوين السيو للموقع
 */
export const seoConfig = {
  // معلومات الموقع الأساسية
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.elitemovers.com.sa',
  siteName: 'النخبة للنقل',
  siteDescription: 'شركة النخبة للنقل - المزود الرائد لخدمات نقل العفش الاحترافية في جميع أنحاء المملكة العربية السعودية. حلول متكاملة لنقل آمن وفعال لمنزلك أو مكتبك.',
  
  // معلومات الشركة
  company: {
    name: 'النخبة للنقل',
    phone: '+966-55-5071769',
    email: 'info@elitemovers.com.sa',
    address: 'شارع الملك فهد، الرياض، المملكة العربية السعودية',
    foundingDate: '2015',
    numberOfEmployees: '50-100',
    priceRange: '$$'
  },

  // الكلمات المفتاحية الرئيسية
  primaryKeywords: [
    'نقل عفش',
    'نقل أثاث',
    'شركة نقل',
    'السعودية',
    'الرياض',
    'جدة',
    'الدمام',
    'خدمات نقل',
    'نقل منزلي',
    'نقل مكتبي'
  ],

  // الكلمات المفتاحية الثانوية
  secondaryKeywords: [
    'تغليف أثاث',
    'تخزين عفش',
    'نقل آمن',
    'شركة نقل موثوقة',
    'نقل احترافي',
    'خدمات التعبئة',
    'نقل المكاتب',
    'نقل الشركات',
    'فك وتركيب الأثاث',
    'نقل الأجهزة الكهربائية'
  ],

  // المواقع الجغرافية المخدومة
  serviceAreas: [
    'الرياض',
    'جدة',
    'الدمام',
    'مكة المكرمة',
    'المدينة المنورة',
    'الخبر',
    'تبوك',
    'بريدة',
    'خميس مشيط',
    'حائل'
  ],

  // وسائل التواصل الاجتماعي
  socialMedia: {
    facebook: 'https://www.facebook.com/EliteMoversSA',
    twitter: 'https://twitter.com/EliteMoversSA',
    instagram: 'https://www.instagram.com/elitemovers_sa',
    linkedin: 'https://www.linkedin.com/company/elite-movers-sa',
    youtube: 'https://www.youtube.com/channel/UCEliteMovers'
  },

  // إعدادات Open Graph
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'النخبة للنقل',
    images: {
      default: '/images/social-preview.jpg',
      blog: '/images/blog-cover.jpg',
      services: '/images/services-cover.jpg'
    }
  },

  // إعدادات Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@EliteMoversSA',
    creator: '@EliteMoversSA'
  },

  // إعدادات JSON-LD Schema
  schema: {
    organization: {
      '@type': 'MovingCompany',
      name: 'النخبة للنقل',
      url: 'https://www.elitemovers.com.sa',
      logo: '/images/logo.png',
      description: 'شركة النخبة للنقل - المزود الرائد لخدمات نقل العفش الاحترافية في المملكة العربية السعودية',
      foundingDate: '2015',
      numberOfEmployees: '50-100',
      priceRange: '$$',
      serviceArea: {
        '@type': 'Country',
        name: 'Saudi Arabia'
      },
      areaServed: [
        { '@type': 'City', name: 'الرياض' },
        { '@type': 'City', name: 'جدة' },
        { '@type': 'City', name: 'الدمام' },
        { '@type': 'City', name: 'مكة المكرمة' },
        { '@type': 'City', name: 'المدينة المنورة' }
      ]
    }
  },

  // الأسئلة الشائعة الافتراضية
  defaultFAQs: [
    {
      question: "كم تكلفة خدمات نقل العفش؟",
      answer: "تختلف تكلفة نقل العفش حسب عدة عوامل مثل المسافة، كمية الأثاث، نوع الخدمة المطلوبة، والطابق. نحن نقدم تقديرات مجانية بعد معاينة الأثاث لضمان دقة السعر."
    },
    {
      question: "هل تقدمون خدمة التغليف؟",
      answer: "نعم، نقدم خدمة التغليف الاحترافية باستخدام مواد عالية الجودة لضمان حماية أثاثك أثناء النقل. يشمل ذلك تغليف الأثاث الحساس والأجهزة الكهربائية."
    },
    {
      question: "كم من الوقت يستغرق نقل العفش؟",
      answer: "يعتمد الوقت على كمية الأثاث والمسافة. عادة ما يستغرق نقل منزل متوسط الحجم من 4-8 ساعات. نحن نعمل على إنجاز المهمة بأسرع وقت ممكن مع ضمان السلامة."
    },
    {
      question: "هل الشركة مؤمنة ومرخصة؟",
      answer: "نعم، شركتنا مرخصة ومؤمنة بالكامل. نحن نحمل تأميناً شاملاً يغطي أي أضرار قد تحدث أثناء عملية النقل، مما يضمن راحة البال لعملائنا."
    },
    {
      question: "هل تقدمون خدمات نقل في جميع مدن المملكة؟",
      answer: "نعم، نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، بما في ذلك الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، وجميع المدن الأخرى."
    },
    {
      question: "كيف يمكنني الحصول على عرض أسعار؟",
      answer: "يمكنك الحصول على عرض أسعار مجاني من خلال الاتصال بنا أو ملء النموذج على موقعنا. سنقوم بإرسال فريق لمعاينة الأثاث وتقديم عرض دقيق ومفصل."
    }
  ],

  // المراجعات الافتراضية
  defaultReviews: {
    averageRating: 4.8,
    reviewCount: 250,
    reviews: [
      {
        author: 'أحمد محمد',
        rating: 5,
        date: '2024-01-15',
        text: 'خدمة ممتازة ونقل احترافي. الفريق كان منظماً ومهذباً والأسعار معقولة.'
      },
      {
        author: 'فاطمة العلي',
        rating: 5,
        date: '2024-01-10',
        text: 'تجربة رائعة مع شركة النخبة للنقل. نقلوا أثاثي بعناية فائقة دون أي أضرار.'
      },
      {
        author: 'خالد السعد',
        rating: 4,
        date: '2024-01-05',
        text: 'شركة موثوقة وأسعار تنافسية. أنصح بها لمن يريد نقل آمن لأثاثه.'
      }
    ]
  },

  // إعدادات الأداء
  performance: {
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCaching: true,
    cacheMaxAge: 31536000, // سنة واحدة
    enableCompression: true
  },

  // إعدادات Analytics
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
    googleSearchConsoleId: import.meta.env.VITE_GOOGLE_SEARCH_CONSOLE_ID,
    facebookPixelId: import.meta.env.VITE_FACEBOOK_PIXEL_ID
  }
};

export default seoConfig; 