# النخبة للنقل - موقع شركة نقل العفش الاحترافية

موقع ويب متطور لشركة النخبة للنقل، متخصص في خدمات نقل العفش والأثاث في المملكة العربية السعودية. تم بناؤه باستخدام أحدث التقنيات مع تحسينات شاملة لمحركات البحث (SEO).

## 🏆 المزايا الرئيسية

- **موقع سريع ومحسن**: بُني باستخدام React + Vite للحصول على أداء فائق
- **تحسينات SEO شاملة**: Schema markup، Sitemap، Meta tags محسنة
- **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة
- **محتوى عربي**: دعم كامل للغة العربية مع RTL
- **مدونة متقدمة**: +40 مقال متخصص في نقل العفش
- **تحسينات الأداء**: Lazy loading، Image optimization، Code splitting

## 🛠️ التقنيات المستخدمة

### Frontend
- **React 18** - مكتبة JavaScript للواجهات
- **Vite** - أداة بناء سريعة وحديثة
- **TailwindCSS** - إطار عمل CSS للتصميم
- **React Router** - للتنقل بين الصفحات
- **React Helmet Async** - إدارة meta tags

### SEO & Performance
- **Schema.org** - بيانات منظمة شاملة
- **XML Sitemaps** - خرائط موقع متعددة
- **Image Optimization** - تحسين الصور التلقائي
- **Lazy Loading** - تحميل تدريجي للمحتوى
- **Critical CSS** - CSS أساسي مضمن

### Tools & Scripts
- **ESLint** - فحص جودة الكود
- **Prettier** - تنسيق الكود
- **PostCSS** - معالجة CSS
- **Custom Scripts** - أدوات تطوير مخصصة

## 📊 إحصائيات المشروع

- **243 ملف** في المشروع الكامل
- **48 صفحة** في Sitemap
- **41 مقال** مع صور محسنة
- **+50 مكون** React قابل لإعادة الاستخدام
- **95-100/100** الدرجة المتوقعة في أدوات SEO

## 🚀 التشغيل السريع

### 1. تثبيت المتطلبات
```bash
npm install
```

### 2. تشغيل الخادم المحلي
```bash
npm run dev
```
الموقع سيكون متاح على: `http://localhost:5173`

### 3. بناء للإنتاج
```bash
npm run build
```

### 4. إنشاء Sitemap
```bash
npm run generate-sitemap
```

## 📁 هيكل المشروع

```
src/
├── components/          # مكونات React قابلة لإعادة الاستخدام
│   ├── common/         # مكونات مشتركة
│   ├── blog/           # مكونات المدونة
│   └── Seo.jsx         # مكون تحسين محركات البحث
├── pages/              # صفحات الموقع
│   ├── blog/           # صفحات المدونة (41 مقال)
│   ├── HomePage.jsx    # الصفحة الرئيسية
│   ├── ServicesPage.jsx # صفحة الخدمات
│   ├── AboutPage.jsx   # صفحة من نحن
│   └── ContactPage.jsx # صفحة الاتصال
├── data/               # بيانات المحتوى
├── hooks/              # React Hooks مخصصة
├── utils/              # أدوات مساعدة
├── config/             # إعدادات التطبيق
└── styles/             # ملفات CSS
```

## 🎯 صفحات الموقع

### الصفحات الرئيسية
- **الرئيسية (/)** - صفحة رئيسية متطورة مع hero section
- **الخدمات (/services)** - عرض شامل لخدمات النقل
- **من نحن (/about)** - قصة الشركة وفريق العمل
- **اتصل بنا (/contact)** - نماذج التواصل ومعلومات الاتصال

### المدونة (/blog)
- **صفحة المدونة الرئيسية** - عرض جميع المقالات مع بحث وفلترة
- **41 مقال متخصص** في نقل العفش والأثاث
- **فئات متنوعة**: نصائح، أدلة، مراجعات، توفير التكاليف

## 🔧 مكونات متقدمة

### SEO Components
- **Seo.jsx** - مكون شامل لتحسين محركات البحث
- **Breadcrumbs.jsx** - مسار التنقل مع Schema
- **FAQ.jsx** - الأسئلة الشائعة مع Schema

### Performance Components
- **LazyImage.jsx** - تحميل الصور بشكل تدريجي
- **VirtualScrolling.jsx** - التمرير الافتراضي للقوائم الطويلة
- **LoadingSkeleton.jsx** - عناصر تحميل أنيقة

### Blog Components
- **BlogLayout.jsx** - تخطيط صفحات المدونة
- **BlogPostCard.jsx** - بطاقة عرض المقال
- **BlogPost.jsx** - عرض المقال الكامل

## 📈 تحسينات SEO المطبقة

### Schema Markup
- **Organization Schema** - معلومات الشركة
- **LocalBusiness Schema** - الأعمال المحلية
- **BlogPosting Schema** - مقالات المدونة
- **FAQ Schema** - الأسئلة الشائعة
- **BreadcrumbList Schema** - مسار التنقل

### Technical SEO
- **XML Sitemaps** - خرائط موقع شاملة
- **Robots.txt** - توجيهات محركات البحث
- **Canonical URLs** - روابط أساسية صحيحة
- **Meta Tags** - عناوين وأوصاف محسنة
- **Open Graph** - مشاركة اجتماعية محسنة

### Performance
- **Image Optimization** - ضغط وتحسين الصور
- **Code Splitting** - تقسيم الكود
- **Lazy Loading** - تحميل تدريجي
- **Caching** - تخزين مؤقت ذكي
- **Compression** - ضغط الملفات (Gzip/Brotli)

## 🌐 النشر والاستضافة

### Netlify (الافتراضي)
```bash
npm run build
npm run deploy
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
npm run build
npm run deploy:github
```

## 📋 Scripts متاحة

```bash
# التطوير
npm run dev              # تشغيل خادم التطوير
npm run dev:host         # تشغيل مع الوصول الخارجي

# البناء
npm run build           # بناء للإنتاج
npm run preview         # معاينة البناء

# SEO
npm run generate-sitemap # إنشاء sitemap
npm run check-seo       # فحص تحسينات SEO

# جودة الكود
npm run lint            # فحص الأخطاء
npm run lint:fix        # إصلاح الأخطاء التلقائي
npm run format          # تنسيق الكود

# أدوات مساعدة
npm run analyze         # تحليل حجم الحزم
npm run clean           # تنظيف ملفات البناء
```

## 🎨 التخصيص

### الألوان الرئيسية
```css
:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
}
```

### الخطوط
- **العربية**: Noto Sans Arabic, Tahoma
- **الإنجليزية**: Inter, system-ui

## �� المساهمة

### إضافة مقال جديد
1. إنشاء ملف JSX في `src/pages/blog/`
2. إضافة بيانات المقال في `src/data/articles.jsx`
3. إضافة صورة في `public/images/blog/`
4. تشغيل `npm run generate-sitemap`

### تحسين الأداء
1. استخدام `React.memo` للمكونات الثقيلة
2. تطبيق `lazy loading` للصور
3. تقسيم الكود باستخدام `React.lazy`
4. تحسين استعلامات البيانات

## 🔒 الأمان

- **Token GitHub**: مُخزن بشكل آمن
- **Environment Variables**: في ملف `.env`
- **Sanitization**: تنظيف البيانات المدخلة
- **HTTPS**: اتصال آمن إجباري

## 📞 الدعم والمساعدة

للحصول على المساعدة أو الإبلاغ عن مشاكل:
- **البريد الإلكتروني**: support@elitemovers.com.sa
- **الهاتف**: +966-55-5071769
- **GitHub Issues**: [إنشاء issue جديد](https://github.com/raftsyd591/moving2/issues)

## 📄 الترخيص

هذا المشروع محمي بحقوق الطبع والنشر لشركة النخبة للنقل © 2024

---

**آخر تحديث**: ديسمبر 2024  
**الإصدار**: 1.0.0  
**حالة البناء**: ✅ نجح  
**حالة SEO**: ✅ محسن بالكامل 