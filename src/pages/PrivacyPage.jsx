import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="سياسة الخصوصية | النخبة للنقل"
        description="سياسة الخصوصية الخاصة بالنخبة للنقل - تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية عند استخدام موقعنا وخدماتنا"
        path="/privacy" // Use path prop instead of canonical
        // keywords prop removed as Seo.jsx doesn't use it
      />
      
      {/* Header */}
      <header className="bg-primary-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="text-white font-bold text-2xl">النخبة للنقل</Link>
              <h2 className="text-lg mt-1 font-light">لخدمات نقل العفش المتميزة</h2>
            </div>
            <nav>
              <ul className="flex space-x-6 rtl:space-x-reverse">
                <li><Link to="/" className="hover:text-primary-200">الرئيسية</Link></li>
                <li><Link to="/services" className="hover:text-primary-200">خدماتنا</Link></li>
                <li><Link to="/blog" className="hover:text-primary-200">المدونة</Link></li>
                <li><Link to="/about" className="hover:text-primary-200">من نحن</Link></li>
                <li><Link to="/contact" className="hover:text-primary-200">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/images/slider/slider3.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-shadow-lg">سياسة الخصوصية</h1>
            <p className="text-xl text-shadow">
              نلتزم بحماية خصوصية بياناتك الشخصية. تعرف على كيفية جمع واستخدام وحماية معلوماتك.
            </p>
          </div>
        </div>
      </section>
      
      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="prose prose-lg max-w-none rtl:prose-headings:text-right rtl:prose-p:text-right">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">مقدمة</h2>
              <p className="mb-6">
                مرحبًا بك في سياسة الخصوصية الخاصة بشركة النخبة للنقل. نحن نقدر ثقتك ونلتزم بحماية خصوصيتك. تشرح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للمعلومات الشخصية التي تقدمها لنا عند استخدام موقعنا الإلكتروني أو خدماتنا.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">المعلومات التي نجمعها</h2>
              <p className="mb-4">قد نقوم بجمع الأنواع التالية من المعلومات:</p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات شخصية</h3>
              <p className="mb-6">
                عند استخدام خدماتنا أو التسجيل في موقعنا، قد نطلب منك تزويدنا بمعلومات شخصية معينة مثل:
              </p>
              <ul className="mb-6 list-disc pr-6">
                <li className="mb-2">الاسم الكامل</li>
                <li className="mb-2">عنوان البريد الإلكتروني</li>
                <li className="mb-2">رقم الهاتف</li>
                <li className="mb-2">العنوان الحالي والجديد (في حالة طلب خدمة النقل)</li>
                <li className="mb-2">تفاصيل الدفع (عند إتمام عملية الحجز)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات التصفح</h3>
              <p className="mb-6">
                نقوم تلقائيًا بجمع بعض المعلومات عند زيارتك لموقعنا، بما في ذلك:
              </p>
              <ul className="mb-6 list-disc pr-6">
                <li className="mb-2">عنوان IP الخاص بك</li>
                <li className="mb-2">نوع المتصفح والجهاز</li>
                <li className="mb-2">الصفحات التي تزورها على موقعنا</li>
                <li className="mb-2">وقت وتاريخ زيارتك</li>
                <li className="mb-2">صفحة الإحالة أو الموقع الذي وصلت منه إلى موقعنا</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">كيفية استخدام المعلومات</h2>
              <p className="mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
              <ul className="mb-6 list-disc pr-6">
                <li className="mb-2">تقديم وتحسين خدماتنا</li>
                <li className="mb-2">معالجة طلبات الخدمة والمدفوعات</li>
                <li className="mb-2">التواصل معك بخصوص طلباتك واستفساراتك</li>
                <li className="mb-2">إرسال معلومات تسويقية عن خدماتنا وعروضنا (إذا اخترت الاشتراك)</li>
                <li className="mb-2">تحليل استخدام الموقع وتحسين تجربة المستخدم</li>
                <li className="mb-2">الامتثال للالتزامات القانونية</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">حماية المعلومات</h2>
              <p className="mb-6">
                نحن نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نحن نستخدم بروتوكولات تشفير قياسية في الصناعة لحماية المعلومات المرسلة عبر الإنترنت، ونقيد الوصول إلى بياناتك الشخصية للموظفين المصرح لهم فقط الذين يحتاجون إليها لأداء وظائفهم.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">مشاركة المعلومات</h2>
              <p className="mb-6">
                لن نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية مع أطراف ثالثة. ومع ذلك، قد نشارك معلوماتك في الحالات التالية:
              </p>
              <ul className="mb-6 list-disc pr-6">
                <li className="mb-2">مع مقدمي الخدمات الذين يساعدوننا في تقديم خدماتنا (مثل شركات النقل المتعاقدة ومعالجي المدفوعات)</li>
                <li className="mb-2">عندما يكون ذلك مطلوبًا بموجب القانون أو استجابة لعملية قانونية</li>
                <li className="mb-2">لحماية حقوقنا أو ممتلكاتنا أو سلامة مستخدمينا أو الجمهور</li>
                <li className="mb-2">في حالة الاندماج أو الاستحواذ أو بيع أصول الشركة، مع الالتزام بإخطارك قبل نقل معلوماتك</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ملفات تعريف الارتباط (الكوكيز)</h2>
              <p className="mb-6">
                نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربتك على موقعنا وتحليل كيفية استخدام الموقع. يمكنك تعديل إعدادات متصفحك لرفض ملفات تعريف الارتباط أو تنبيهك عندما يتم إرسالها. ومع ذلك، قد يؤثر ذلك على قدرتك على استخدام بعض ميزات موقعنا.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">حقوقك فيما يتعلق ببياناتك</h2>
              <p className="mb-4">لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:</p>
              <ul className="mb-6 list-disc pr-6">
                <li className="mb-2">الوصول إلى المعلومات التي نحتفظ بها عنك</li>
                <li className="mb-2">تصحيح أي معلومات غير دقيقة أو غير كاملة</li>
                <li className="mb-2">طلب حذف معلوماتك الشخصية (في ظروف معينة)</li>
                <li className="mb-2">الاعتراض على معالجة معلوماتك لأغراض تسويقية</li>
                <li className="mb-2">طلب تقييد معالجة معلوماتك (في ظروف معينة)</li>
              </ul>
              <p className="mb-6">
                لممارسة أي من هذه الحقوق، يرجى التواصل معنا باستخدام معلومات الاتصال الموضحة أدناه.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">الروابط الخارجية</h2>
              <p className="mb-6">
                قد يحتوي موقعنا على روابط لمواقع خارجية. لا تغطي سياسة الخصوصية هذه ممارسات الخصوصية لهذه المواقع، ونحن لسنا مسؤولين عن محتوى أو ممارسات الخصوصية للمواقع الأخرى. نشجعك على قراءة سياسات الخصوصية الخاصة بأي موقع تزوره.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">خصوصية الأطفال</h2>
              <p className="mb-6">
                لا نجمع عن قصد معلومات شخصية من الأطفال دون سن 18 عامًا. إذا كنت والدًا أو وصيًا وتعتقد أن طفلك قد قدم لنا معلومات شخصية، يرجى الاتصال بنا، وسنتخذ الخطوات اللازمة لحذف هذه المعلومات من سجلاتنا.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">تعديلات على سياسة الخصوصية</h2>
              <p className="mb-6">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارسات المعلومات لدينا. نشجعك على مراجعة هذه الصفحة بشكل دوري للاطلاع على أحدث المعلومات حول ممارسات الخصوصية لدينا. سيتم نشر أي تغييرات على هذه الصفحة، وقد نخطرك أيضًا عبر البريد الإلكتروني في حالة التغييرات الجوهرية.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">اتصل بنا</h2>
              <p className="mb-6">
                إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتك الشخصية، يرجى التواصل معنا عبر:
                <br />
                البريد الإلكتروني: privacy@elitemovers.com
                <br />
                الهاتف: +966 50 000 0000
                <br />
                العنوان: الرياض، المملكة العربية السعودية
              </p>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-gray-600 text-sm">
                  آخر تحديث لسياسة الخصوصية: 1 يونيو 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">نضع خصوصيتك في المقام الأول</h2>
            <p className="text-xl mb-8">
              انضم إلى آلاف العملاء الذين يثقون بنا لنقل أثاثهم مع الالتزام الكامل بحماية خصوصيتهم
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 rounded-md font-bold transition-colors">
                تواصل معنا
              </Link>
              <Link to="/services" className="bg-transparent hover:bg-primary-600 border-2 border-white py-3 px-8 rounded-md font-bold transition-colors">
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">النخبة للنقل</h3>
              <p className="text-gray-300 mb-4">
                نقدم أفضل خدمات نقل وتخزين وتغليف الأثاث والعفش للمنازل والشركات في جميع أنحاء المملكة العربية السعودية.
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">الرئيسية</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">من نحن</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white">خدماتنا</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">المدونة</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">اتصل بنا</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white">الشروط والأحكام</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">سياسة الخصوصية</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary-400 mt-1 ml-3"></i>
                  <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt text-primary-400 mt-1 ml-3"></i>
                  <span className="text-gray-300">+966 50 000 0000</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-primary-400 mt-1 ml-3"></i>
                  <span className="text-gray-300">info@elitemovers.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock text-primary-400 mt-1 ml-3"></i>
                  <span className="text-gray-300">السبت - الخميس: 8 ص - 8 م</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} النخبة للنقل. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage; 