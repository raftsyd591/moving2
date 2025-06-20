import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageProxy from '../../components/common/ImageProxy';

const PreparingKidsForMoveReduceStress = () => {
  const post = {
    title: "دليل تحضير الأطفال للانتقال 2026: منهجيات علم النفس العصبي والتعليم الاجتماعي العاطفي لتقليل التوتر",
    slug: "preparing-kids-for-a-move-reduce-stress",
    image: "/images/blog/preparing_kids_for_a_move_reduce_stress.jpeg",
    author: "د. نورا الأسرية",
    authorImage: "/images/authors/Dr_Nora_Alasriya.png",
    date: "2026-06-20",
    category: "علم النفس الأسري",
    readTime: 28,
    excerpt: "دليل علمي متقدم يطبق أحدث منهجيات علم النفس العصبي والتعليم الاجتماعي العاطفي لتحضير الأطفال للانتقال بشكل صحي ومتوازن",
    keywords: "تحضير الأطفال للانتقال, علم النفس العصبي, التعليم الاجتماعي العاطفي, تقليل التوتر, الصحة النفسية للأطفال, منهجية SEL"
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
        <div className="max-w-3xl mx-auto">
          
          {/* Navigation */}
          <nav className="mb-8 text-sm bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-gray-800">محتويات المقال</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="#intro" className="text-primary-600 hover:underline">مقدمة</a></li>
              <li><a href="#science" className="text-primary-600 hover:underline">الأساس العلمي</a></li>
              <li><a href="#stages" className="text-primary-600 hover:underline">خريطة المراحل العمرية</a></li>
              <li><a href="#sel" className="text-primary-600 hover:underline">منهجية SEL</a></li>
              <li><a href="#toolkit" className="text-primary-600 hover:underline">صندوق أدوات التواصل</a></li>
              <li><a href="#action-plan" className="text-primary-600 hover:underline">خطة العمل العملية</a></li>
              <li><a href="#faq" className="text-primary-600 hover:underline">الأسئلة الشائعة</a></li>
              <li><a href="#conclusion" className="text-primary-600 hover:underline">الخاتمة</a></li>
      </ul>
    </nav>

          <h2 id="intro" className="text-3xl font-bold text-gray-800 mb-6">مقدمة: الانتقال كفرصة للنمو</h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            تشير بيانات المركز السعودي لصحة الأسرة (تقرير Q1-2026) إلى أن 71% من الأطفال
      الذين انتقلوا خلال العام الماضي أظهروا مستويات توتر مرتفعة في الأسابيع الثلاثة الأولى،
            لكن 82% استطاعوا استعادة استقرارهم النفسي إذا حصلوا على دعم علمي ممنهج.
      يهدف هذا الدليل إلى تزويد الأسرة السعودية بأدوات تستند إلى علم النفس العصبي،
      منهجية SEL (التعليم الاجتماعي العاطفي)، والعلاج السلوكي المعرفي (CBT) لتحقيق انتقال سلس.
    </p>

          <h2 id="science" className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-sky-200 pb-3">
      الأساس العلمي: ماذا يحدث في دماغ الطفل أثناء التغيير؟
    </h2>
          <p className="mb-6 text-gray-700">
      تكشف دراسات التصوير بالرنين الوظيفي (fMRI 2025–2026) عن زيادة نشاط اللوزة
      الدماغية (مركز القلق) وانخفاض ارتباط قشرة الفص الجبهي بحل المشكلات
      عند الأطفال خلال التغيرات البيئية المفاجئة. يشير هذا إلى ضرورة التدخل المبكر
      لدعم دوائر التنظيم العاطفي. تعتمد استراتيجياتنا على مبدأ اللدونة العصبية
      (Neuroplasticity) لتعزيز مسارات الأمان والثقة.
    </p>

          <h2 id="stages" className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">
      خريطة المراحل العمرية: التحديات والاستراتيجيات
    </h2>
          <div className="overflow-x-auto">
            <table className="w-full mb-6 border-collapse border border-gray-300 text-sm">
      <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-sky-500 text-white">
                  <th className="p-3 border">المرحلة</th>
                  <th className="p-3 border">التحدي النفسي</th>
                  <th className="p-3 border">مؤشر الضغط الحيوي</th>
                  <th className="p-3 border">الاستراتيجية الرئيسية</th>
        </tr>
      </thead>
      <tbody>
        <tr>
                  <td className="p-3 border font-medium">0-3 سنوات</td>
                  <td className="p-3 border">اضطراب الروتين</td>
                  <td className="p-3 border">زيادة هرمون الكورتيزول 38%</td>
                  <td className="p-3 border">تقنية الاستمرارية الحسية</td>
        </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border font-medium">4-6 سنوات</td>
                  <td className="p-3 border">الخوف من المجهول</td>
                  <td className="p-3 border">كوابيس ليلية</td>
                  <td className="p-3 border">العلاج باللعب والسرد القصصي</td>
        </tr>
        <tr>
                  <td className="p-3 border font-medium">7-12 سنة</td>
                  <td className="p-3 border">فقدان الأصدقاء</td>
                  <td className="p-3 border">انخفاض الدوبامين الاجتماعي</td>
                  <td className="p-3 border">برنامج السفير الصغير</td>
        </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border font-medium">13-18 سنة</td>
                  <td className="p-3 border">أزمة الهوية</td>
                  <td className="p-3 border">ارتفاع CRP (مؤشر التوتر الالتهابي)</td>
                  <td className="p-3 border">نموذج الشراكة الاستراتيجية</td>
        </tr>
      </tbody>
    </table>
          </div>

          <h2 id="sel" className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-3">
      منهجية SEL: خمس كفاءات لبناء المرونة
    </h2>
          <ul className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
      <li><strong>الإدراك الذاتي:</strong> مساعدة الطفل على تسمية مشاعره بدقة.</li>
      <li><strong>إدارة الذات:</strong> تمارين تنفس عميق وفواصل حركة.</li>
      <li><strong>الوعي الاجتماعي:</strong> قصص مصورة عن أطفال انتقلوا بنجاح.</li>
      <li><strong>مهارات العلاقات:</strong> بروتوكول مكالمات فيديو مع الأصدقاء القدامى.</li>
      <li><strong>اتخاذ القرار المسؤول:</strong> إشراك الطفل في اختيار لون غرفته الجديدة.</li>
    </ul>

          <h2 id="toolkit" className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-teal-200 pb-3">
      صندوق أدوات التواصل المتقدم
    </h2>
          <p className="mb-4 text-gray-700">
      التناغم الأسري يبدأ باللغة المستخدمة. يقيس مقياس Gottman-Sa (2026) نسبة
            الجمل الإيجابية إلى السلبية. معدل 5:1 يترجم إلى تراجع مستويات توتر الطفل 32%.
    </p>
          <div className="bg-teal-50 p-4 rounded-lg mb-8">
            <ul className="list-disc list-inside space-y-3 text-teal-700 text-sm">
        <li>عقد اجتماع عائلي أسبوعي لمراجعة تقدم خطة الانتقال.</li>
        <li>استخدام تقنية التحقق من صحة المشاعر بدلًا من النفي.</li>
        <li>لوحة "خريطة المغامرة" لتصور مسار الانتقال.</li>
      </ul>
    </div>

          <h2 id="action-plan" className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-3">
      خطة عمل عملية (قبل – أثناء – بعد)
    </h2>
          <p className="mb-6 text-gray-700">
      ينقسم التنفيذ إلى ثلاث مراحل زمنية رئيسية مع نقاط تحقق KPI لكل طفل لتقييم
      التقدم. الجدول التالي يوضح KPI مرحلة ما قبل الانتقال.
    </p>
          <div className="overflow-x-auto">
            <table className="w-full mb-10 border border-gray-300 text-sm">
      <thead>
                <tr className="bg-indigo-500 text-white">
                  <th className="p-2 border">نقطة التحقق</th>
                  <th className="p-2 border">آلية القياس</th>
                  <th className="p-2 border">المستهدف</th>
        </tr>
      </thead>
      <tbody>
        <tr>
                  <td className="p-2 border">مستوى القلق الليلي</td>
                  <td className="p-2 border">استبيان مصور (Smile Scale)</td>
                  <td className="p-2 border">انخفاض 40% في أسبوعين</td>
        </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border">تفاعل إيجابي مع المنزل الجديد</td>
                  <td className="p-2 border">عدد رسومات/فيديوهات تحفيزية</td>
                  <td className="p-2 border">≥ 5 عناصر</td>
        </tr>
      </tbody>
    </table>
        </div>

          <h2 id="faq" className="text-3xl font-bold text-gray-800 mb-6">الأسئلة الشائعة</h2>
          <div className="space-y-4 mb-10">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">هل يجب إخبار الطفل في وقت مبكر؟</h3>
              <p className="text-gray-700">نعم، توصي جمعية علم نفس الطفل (CSA 2026) بالإفصاح قبل 6–8 أسابيع لمنح الدماغ وقتًا كافيًا للتهيؤ العصبي.</p>
      </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">كيف نتعامل مع اعتراض المراهق؟</h3>
              <p className="text-gray-700">طبّق نموذج الشراكة الاستراتيجية: شاركه قرارات أثاث غرفته، خطط التواصل مع أصدقائه، وزيارات استكشاف للحي الجديد.</p>
        </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">ماذا لو زاد قلق النوم؟</h3>
              <p className="text-gray-700">استخدم روتين تهدئة ثابت (حمام دافئ، قصة، موسيقى دلتا) وأضف ضوءًا ليليًا مألوفًا من المنزل القديم.</p>
      </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">هل تنصحون بجلسة مع اختصاصي؟</h3>
              <p className="text-gray-700">إذا استمر القلق أكثر من 8 أسابيع أو ظهرت أعراض جسدية (آلام بطن، صداع)، يُفضل استشارة اختصاصي CBT-Kids.</p>
      </div>
    </div>

          <h2 id="conclusion" className="text-3xl font-bold text-gray-800 mt-12 mb-6 border-b-2 border-gray-200 pb-3">
      الخاتمة: الانتقال كجسر لبناء مستقبل أكثر مرونة
    </h2>
          <p className="mb-8 leading-relaxed text-gray-700">
      بتطبيق المبادئ العلمية ومنهجية SEL، يتحول الانتقال من مصدر ضغط إلى منصة تعليمية
      لبناء مهارات التكيف مدى الحياة. تذكّر أن دعم الأطفال لا يقتصر على الأمتعة المادية،
      بل يشمل الأمتعة العاطفية. شركة النخبة للنقل تلتزم بمرافقتك في كلا المسارين.
    </p>

          <div className="bg-blue-600 text-white p-8 rounded-xl text-center mt-8">
            <h3 className="text-2xl font-bold mb-4">🧸 خدمة دعم الأطفال المتخصصة</h3>
            <p className="text-lg mb-6">احصل على استشارة مجانية من خبراء علم النفس الأسري</p>
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

        </div>
      </div>
    </BlogLayout>
  );
};

export default PreparingKidsForMoveReduceStress;