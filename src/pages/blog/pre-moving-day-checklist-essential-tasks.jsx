import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageProxy from '../../components/common/ImageProxy';

const PreMovingDayChecklistEssentialTasks = () => {
  const post = {
    title: "قائمة المهام الضرورية قبل يوم النقل 2025: 35 مهمة أساسية لانتقال مثالي بدون مشاكل",
    slug: "pre-moving-day-checklist-essential-tasks",
    image: "/images/blog/pre_moving_day_checklist_essential_tasks.jpeg",
    author: "م. علياء الراشد",
    authorImage: "/images/authors/Alya_Alrashid.png",
    date: "2025-06-01",
    category: "تخطيط الانتقال",
    readTime: 15,
    excerpt: "قائمة شاملة ومنظمة لـ 35 مهمة أساسية يجب إنجازها قبل يوم النقل، مرتبة زمنياً لضمان انتقال سلس ومنظم دون نسيان أي تفاصيل مهمة",
    keywords: "قائمة مهام النقل، تحضيرات الانتقال، تنظيم النقل، نصائح قبل الانتقال، جدول الانتقال، مهام ضرورية للنقل"
  };

  return (
    <BlogLayout
      title={post.title}
      description={post.excerpt}
      keywords={post.keywords}
      canonicalUrl={`https://elitemovers.com/blog/${post.slug}`}
    >
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <ImageProxy
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center mb-4">
              <ImageProxy
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
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-green-50 to-blue-100 p-8 rounded-2xl mb-10 border border-green-200 shadow-lg">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">📋</span>
              <h2 className="text-3xl font-bold text-green-900">التحضير المثالي للانتقال</h2>
            </div>
            <p className="text-lg text-green-800 leading-relaxed mb-6">
              النجاح في الانتقال يبدأ بالتحضير المنظم. هذه القائمة الشاملة تضمن عدم نسيان أي تفصيل مهم 
              وتحول عملية الانتقال إلى تجربة سلسة ومريحة.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-green-500">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-bold text-green-600 text-xl">35</div>
                <div className="text-sm text-gray-600">مهمة أساسية</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-blue-500">
                <div className="text-2xl mb-2">📅</div>
                <div className="font-bold text-blue-600 text-xl">8</div>
                <div className="text-sm text-gray-600">أسابيع تحضير</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-purple-500">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-bold text-purple-600 text-xl">100%</div>
                <div className="text-sm text-gray-600">نجاح مضمون</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-orange-500">
                <div className="text-2xl mb-2">⏰</div>
                <div className="font-bold text-orange-600 text-xl">0</div>
                <div className="text-sm text-gray-600">مشاكل متوقعة</div>
              </div>
            </div>
          </div>

          {/* 8 Weeks Before */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-4">
              📅 قبل 8 أسابيع: التخطيط والبحث
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">البحث والتخطيط</h4>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>✅ تحديد تاريخ الانتقال المطلوب</li>
                    <li>✅ وضع ميزانية تقديرية للنقل</li>
                    <li>✅ البحث عن شركات النقل الموثوقة</li>
                    <li>✅ طلب عروض أسعار من 5-7 شركات</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">الفرز والتنظيم</h4>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>✅ فرز الأغراض (احتفاظ، تبرع، بيع)</li>
                    <li>✅ تصوير الأثاث الثمين</li>
                    <li>✅ إعداد قائمة جرد أولية</li>
                    <li>✅ بيع أو التبرع بالأغراض غير المرغوبة</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Weeks Before */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 pb-4">
              📝 قبل 6 أسابيع: الحجز والتوثيق
            </h2>
            
            <div className="bg-green-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">الحجوزات</h4>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>✅ حجز شركة النقل المختارة</li>
                    <li>✅ تأكيد التأمين الشامل</li>
                    <li>✅ حجز إجازة من العمل</li>
                    <li>✅ ترتيب رعاية الأطفال والحيوانات</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">الإشعارات</h4>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>✅ إشعار المالك بتاريخ الإخلاء</li>
                    <li>✅ إبلاغ المدارس بالانتقال</li>
                    <li>✅ إشعار البنوك والمؤسسات المالية</li>
                    <li>✅ تحديث العنوان في التأمين الصحي</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4 Weeks Before */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 pb-4">
              📦 قبل 4 أسابيع: بدء التغليف
            </h2>
            
            <div className="bg-purple-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3">مواد التغليف</h4>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li>✅ شراء صناديق وشريط لاصق</li>
                    <li>✅ الحصول على غطاء فقاعي</li>
                    <li>✅ تحضير بطانيات النقل</li>
                    <li>✅ شراء ملصقات وأقلام تعليم</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3">التغليف التدريجي</h4>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li>✅ تغليف الكتب والديكورات</li>
                    <li>✅ تغليف الملابس الموسمية</li>
                    <li>✅ تصنيف الصناديق بوضوح</li>
                    <li>✅ إعداد قائمة محتويات مفصلة</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 2 Weeks Before */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-orange-500 pb-4">
              🔧 قبل أسبوعين: الترتيبات النهائية
            </h2>
            
            <div className="bg-orange-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-3">تأكيد الترتيبات</h4>
                  <ul className="text-orange-700 space-y-2 text-sm">
                    <li>✅ تأكيد موعد النقل مع الشركة</li>
                    <li>✅ مراجعة تفاصيل العقد</li>
                    <li>✅ تحديد مواقف السيارات للشاحنة</li>
                    <li>✅ التحقق من مصاعد البناية</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-3">تحديث البيانات</h4>
                  <ul className="text-orange-700 space-y-2 text-sm">
                    <li>✅ تحديث العنوان في البريد</li>
                    <li>✅ تحويل الخدمات (كهرباء، ماء، إنترنت)</li>
                    <li>✅ إلغاء الاشتراكات غير المرغوبة</li>
                    <li>✅ طلب نقل الخدمات للمنزل الجديد</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 1 Week Before */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 pb-4">
              ⚡ الأسبوع الأخير: اللمسات الأخيرة
            </h2>
            
            <div className="bg-red-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-3">إنهاء التغليف</h4>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>✅ تغليف الأغراض الأساسية</li>
                    <li>✅ إعداد صندوق الضروريات</li>
                    <li>✅ تفريغ وتنظيف الثلاجة</li>
                    <li>✅ فك الأجهزة الكبيرة</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-3">الاستعداد النهائي</h4>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>✅ تحضير المستندات المهمة</li>
                    <li>✅ إعداد النقود للعمال</li>
                    <li>✅ شحن الهواتف والأجهزة</li>
                    <li>✅ تحضير وجبات خفيفة ومشروبات</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Moving Day */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 pb-4">
              🚛 يوم النقل: التنفيذ المثالي
            </h2>
            
            <div className="bg-yellow-50 p-6 rounded-xl mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-3">الإشراف والمتابعة</h4>
                  <ul className="text-yellow-700 space-y-2 text-sm">
                    <li>✅ التواجد مبكراً للإشراف</li>
                    <li>✅ التحقق من هوية فريق النقل</li>
                    <li>✅ مراجعة قائمة الجرد</li>
                    <li>✅ توجيه الفريق للقطع الهشة</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-3">التوثيق والتسليم</h4>
                  <ul className="text-yellow-700 space-y-2 text-sm">
                    <li>✅ تصوير عملية التحميل</li>
                    <li>✅ فحص المنزل القديم أخيراً</li>
                    <li>✅ تسليم المفاتيح</li>
                    <li>✅ متابعة الشاحنة للمنزل الجديد</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-gray-500 pb-4">
              🎯 النجاح في التفاصيل
            </h2>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl mb-8">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                النجاح في الانتقال يكمن في التفاصيل الصغيرة والتحضير المنظم. 
                اتباع هذه القائمة يضمن انتقالاً سلساً دون مفاجآت غير سارة.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 text-xl mb-4">نصائح أخيرة للنجاح:</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• احتفظ بنسخة مطبوعة من هذه القائمة</li>
                  <li>• اطلب المساعدة من الأصدقاء والعائلة</li>
                  <li>• لا تتردد في السؤال عن أي شيء غير واضح</li>
                  <li>• حافظ على هدوئك وصبرك</li>
                  <li>• احتفل بإنجاز كل مهمة!</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">📋 خدمة التخطيط المجانية</h3>
              <p className="text-lg mb-6">احصل على استشارة مجانية وخطة شخصية مصممة خصيصاً لانتقالك</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white text-blue-600 p-4 rounded-lg font-semibold">
                  📞 920000123
                </div>
                <div className="bg-white text-blue-600 p-4 rounded-lg font-semibold">
                  📧 info@elitemovers.com
                </div>
                <div className="bg-white text-blue-600 p-4 rounded-lg font-semibold">
                  🌐 استشارة فورية
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </BlogLayout>
  );
};

export default PreMovingDayChecklistEssentialTasks; 