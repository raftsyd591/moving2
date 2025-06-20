import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="الشروط والأحكام | النخبة للنقل"
        description="الشروط والأحكام الخاصة بخدمات النخبة للنقل - اطلع على سياسات استخدام خدماتنا وحقوق والتزامات الأطراف المتعاقدة"
        // image prop removed to use default from Seo.jsx
        path="/terms"
        type="website"
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
        <div className="absolute inset-0 bg-[url('/images/slider/slider2.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-shadow-lg">الشروط والأحكام</h1>
            <p className="text-xl text-shadow">
              نلتزم بتوفير خدمات نقل عفش احترافية وشفافة. تعرف على شروط وأحكام استخدام خدماتنا.
            </p>
          </div>
        </div>
      </section>
      
      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="prose prose-lg max-w-none rtl:prose-headings:text-right rtl:prose-p:text-right">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">مقدمة</h2>
              <p className="mb-6">
                مرحبًا بك في موقع النخبة للنقل. تنطبق هذه الشروط والأحكام على استخدام خدماتنا وموقعنا الإلكتروني. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا، حيث تحكم علاقتك التعاقدية معنا.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">التعريفات</h2>
              <ul className="mb-6 list-disc pr-6">
                <li className="mb-2">"الشركة" أو "نحن" أو "لنا" تشير إلى شركة النخبة للنقل.</li>
                <li className="mb-2">"الخدمات" تعني خدمات نقل العفش والأثاث والتغليف والتخزين التي نقدمها.</li>
                <li className="mb-2">"العميل" أو "أنت" يشير إلى الشخص أو الكيان الذي يستخدم خدماتنا.</li>
                <li className="mb-2">"الموقع الإلكتروني" يشير إلى موقع النخبة للنقل على الإنترنت.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">طلب الخدمة والتعاقد</h2>
              <p className="mb-4">
                1. يتم تقديم طلب الخدمة من خلال الاتصال المباشر أو عبر الموقع الإلكتروني أو تطبيق الهاتف المحمول.
              </p>
              <p className="mb-4">
                2. يعتبر العقد ساريًا بعد تأكيد الحجز من قبلنا وسداد الدفعة المقدمة من قبل العميل.
              </p>
              <p className="mb-4">
                3. نحتفظ بالحق في رفض أي طلب خدمة لا يتوافق مع سياساتنا أو إمكانياتنا الفنية.
              </p>
              <p className="mb-6">
                4. جميع الأسعار المعلنة تخضع للتغيير حسب متطلبات الخدمة الفعلية والمسافة ونوع وحجم المنقولات.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">التزامات الشركة</h2>
              <p className="mb-4">
                1. نلتزم بتقديم الخدمة في الموعد المتفق عليه وبالجودة المناسبة.
              </p>
              <p className="mb-4">
                2. توفير العمالة المدربة والمعدات والسيارات اللازمة لإتمام عملية النقل.
              </p>
              <p className="mb-4">
                3. تغليف وحماية الأثاث والمنقولات وفق أفضل الممارسات المهنية.
              </p>
              <p className="mb-6">
                4. التعامل مع ممتلكات العميل بعناية فائقة وتحمل المسؤولية في حالات الإهمال المثبت.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">التزامات العميل</h2>
              <p className="mb-4">
                1. توفير معلومات دقيقة وكاملة عن العناوين والمنقولات وأي متطلبات خاصة.
              </p>
              <p className="mb-4">
                2. الالتزام بسداد المبالغ المتفق عليها في المواعيد المحددة.
              </p>
              <p className="mb-4">
                3. الإفصاح عن أي مواد ثمينة أو قابلة للكسر أو تحتاج لمعاملة خاصة.
              </p>
              <p className="mb-6">
                4. توفير التصاريح اللازمة للدخول والخروج من المجمعات السكنية أو المناطق المقيدة.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">سياسة الإلغاء والتأجيل</h2>
              <p className="mb-4">
                1. يمكن للعميل تأجيل موعد الخدمة قبل 48 ساعة على الأقل من الموعد المحدد دون رسوم إضافية.
              </p>
              <p className="mb-4">
                2. الإلغاء قبل 72 ساعة من الموعد المحدد يستحق استرداد 90% من المبلغ المدفوع.
              </p>
              <p className="mb-4">
                3. الإلغاء قبل 48 ساعة من الموعد المحدد يستحق استرداد 70% من المبلغ المدفوع.
              </p>
              <p className="mb-6">
                4. الإلغاء قبل 24 ساعة من الموعد المحدد يستحق استرداد 50% من المبلغ المدفوع.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">المسؤولية والتعويض</h2>
              <p className="mb-4">
                1. تقتصر مسؤوليتنا على تعويض الأضرار المباشرة الناتجة عن إهمال مثبت من جانبنا أثناء تقديم الخدمة.
              </p>
              <p className="mb-4">
                2. لا نتحمل مسؤولية الأضرار غير المباشرة أو الخسائر التبعية.
              </p>
              <p className="mb-4">
                3. يجب إبلاغنا بأي أضرار خلال 24 ساعة من تقديم الخدمة وتوثيقها بالصور.
              </p>
              <p className="mb-6">
                4. لا نتحمل مسؤولية الأضرار الناتجة عن عيوب مسبقة في الأثاث أو سوء التخزين.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">تعديل الشروط والأحكام</h2>
              <p className="mb-6">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. ستكون التعديلات سارية المفعول فور نشرها على موقعنا الإلكتروني. استخدامك المستمر لخدماتنا بعد نشر التعديلات يعني موافقتك على الشروط المعدلة.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">القانون المطبق وتسوية النزاعات</h2>
              <p className="mb-6">
                تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن استخدام خدماتنا سيتم حله بالطرق الودية أولاً، وفي حال تعذر ذلك، يتم اللجوء إلى الجهات القضائية المختصة في المملكة العربية السعودية.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">اتصل بنا</h2>
              <p className="mb-6">
                إذا كان لديك أي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا عبر:
                <br />
                البريد الإلكتروني: info@elitemovers.com
                <br />
                الهاتف: +966 50 000 0000
              </p>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-gray-600 text-sm">
                  آخر تحديث للشروط والأحكام: 1 يونيو 2025
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
            <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتجربة خدماتنا المميزة؟</h2>
            <p className="text-xl mb-8">
              نحن هنا لمساعدتك في نقل أثاثك بأمان وراحة تامة، مع الالتزام التام بالشروط والأحكام
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

export default TermsPage; 