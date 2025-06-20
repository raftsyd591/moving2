import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const ServicesPage = () => {
  // Services data
  const services = [
    {
      id: 'residential',
      title: 'نقل الأثاث المنزلي',
      icon: 'fa-home',
      description: 'خدمات نقل شاملة للأثاث المنزلي من منزل لآخر مع ضمان السلامة والكفاءة.',
      features: [
        'تقييم مجاني وتخطيط مفصل قبل النقل',
        'فريق متخصص لفك وتغليف ونقل وتركيب جميع قطع الأثاث',
        'مركبات حديثة مجهزة خصيصاً لنقل الأثاث',
        'تغطية تأمينية شاملة على جميع المنقولات',
        'خدمة توصيل سريعة تراعي المواعيد المتفق عليها'
      ]
    },
    {
      id: 'commercial',
      title: 'نقل المكاتب والشركات',
      icon: 'fa-building',
      description: 'خدمات نقل متخصصة للشركات والمكاتب مع التركيز على تقليل وقت التوقف عن العمل.',
      features: [
        'التخطيط الاستراتيجي لضمان استمرارية الأعمال',
        'فريق محترف لنقل المعدات المكتبية بعناية فائقة',
        'نقل الأثاث المكتبي مع الحفاظ على ترتيبه وتنظيمه',
        'خدمات النقل خارج ساعات العمل لتقليل الاضطرابات',
        'حلول مخصصة للشركات الصغيرة والمتوسطة والكبيرة'
      ]
    },
    {
      id: 'packing',
      title: 'خدمات التغليف',
      icon: 'fa-box',
      description: 'خدمات تغليف احترافية باستخدام أفضل المواد لضمان حماية ممتلكاتك بشكل كامل.',
      features: [
        'مواد تغليف عالية الجودة مناسبة لكل نوع من الأغراض',
        'تغليف مخصص للقطع الثمينة والهشة والفنية',
        'ترميز وتصنيف الصناديق لتسهيل عملية التفريغ',
        'خدمات تغليف كاملة أو جزئية حسب احتياجاتك',
        'إمكانية تقديم مواد التغليف فقط للعملاء الراغبين بالتغليف بأنفسهم'
      ]
    },
    {
      id: 'assembly',
      title: 'فك وتركيب الأثاث',
      icon: 'fa-tools',
      description: 'خدمات احترافية لفك وتركيب جميع أنواع الأثاث بواسطة فنيين متخصصين.',
      features: [
        'فنيون مدربون على التعامل مع جميع أنواع الأثاث',
        'أدوات ومعدات حديثة لضمان سلامة عملية الفك والتركيب',
        'الاهتمام بأدق التفاصيل أثناء العمل',
        'تخزين القطع الصغيرة (مثل البراغي) بشكل منظم لضمان عدم فقدانها',
        'فك وتركيب الأجهزة الكهربائية المنزلية (الثلاجات، المكيفات، الغسالات)'
      ]
    },
    {
      id: 'storage',
      title: 'خدمات التخزين',
      icon: 'fa-warehouse',
      description: 'مرافق تخزين آمنة ونظيفة لممتلكاتك لفترات قصيرة أو طويلة المدى.',
      features: [
        'مستودعات آمنة مزودة بأنظمة حماية متطورة',
        'مرافق مكيفة لحماية الأثاث من الظروف الجوية',
        'إمكانية الوصول إلى الممتلكات المخزنة عند الحاجة',
        'خيارات تخزين مرنة (قصيرة المدى، طويلة المدى)',
        'أسعار تنافسية مع خصومات للعقود طويلة المدى'
      ]
    },
    {
      id: 'specialized',
      title: 'نقل القطع الثمينة والخاصة',
      icon: 'fa-gem',
      description: 'خدمات متخصصة لنقل القطع الثمينة والفنية والمقتنيات الخاصة.',
      features: [
        'تغليف فائق الجودة للتحف والمقتنيات الثمينة',
        'طرق نقل مخصصة للوحات الفنية والأعمال الفنية',
        'فريق متخصص في التعامل مع القطع النادرة',
        'تأمين إضافي للمقتنيات عالية القيمة',
        'نقل آمن للبيانو وآلات الموسيقية الكبيرة'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="خدماتنا | النخبة للنقل - خدمات نقل العفش المتميزة"
        description="استكشف مجموعة خدماتنا الشاملة في مجال نقل العفش والأثاث، بما في ذلك التغليف والفك والتركيب والتخزين في المملكة العربية السعودية"
        image="/images/services-banner.jpg"
        path="/services"
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
                <li><Link to="/services" className="hover:text-primary-200 font-bold">خدماتنا</Link></li>
                <li><Link to="/blog" className="hover:text-primary-200">المدونة</Link></li>
                <li><Link to="/about" className="hover:text-primary-200">من نحن</Link></li>
                <li><Link to="/contact" className="hover:text-primary-200">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/services-banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-shadow-lg">خدماتنا المتميزة</h1>
            <p className="text-xl mb-8 text-shadow">
              نقدم مجموعة متكاملة من خدمات نقل العفش والأثاث المصممة خصيصاً لتناسب احتياجاتك، مع التركيز على الجودة والسلامة والكفاءة.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">نظرة عامة على خدماتنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              سواء كنت تنتقل إلى منزل جديد، أو تنقل مكتبك، أو تبحث عن حلول تخزين، فإن النخبة للنقل تقدم لك خدمات شاملة لتلبية جميع احتياجاتك.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i className={`fas ${service.icon} text-primary-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link to={`/services/${service.id}`} className="inline-block text-primary-600 hover:text-primary-700 font-semibold">
                  اقرأ المزيد <i className="fas fa-arrow-left mr-1"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index !== 0 ? 'mt-24' : ''}`}>
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={`/images/services/${service.id}.jpg`} 
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i className={`fas ${service.icon} text-primary-600 text-2xl`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">المميزات:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-primary-600 mt-1 ml-2"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-bold transition-colors">
                  احصل على عرض سعر
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا تختار النخبة للنقل؟</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              هناك العديد من الأسباب التي تجعل آلاف العملاء يثقون بنا كل عام
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-primary-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">خبرة واسعة</h3>
              <p className="text-gray-600">
                أكثر من 15 عامًا من الخبرة في مجال نقل العفش في جميع مناطق المملكة
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-primary-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">فريق محترف</h3>
              <p className="text-gray-600">
                فريق من المتخصصين المدربين على أعلى مستويات الخدمة
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-primary-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">ضمان الجودة</h3>
              <p className="text-gray-600">
                نلتزم بتقديم خدمة عالية الجودة مع ضمان سلامة ممتلكاتك
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-hand-holding-usd text-primary-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">أسعار تنافسية</h3>
              <p className="text-gray-600">
                نقدم أفضل قيمة مقابل المال مع باقات تناسب جميع الميزانيات
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">جاهز للانتقال مع النخبة؟</h2>
            <p className="text-xl mb-8">
              اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 rounded-md font-bold transition-colors">
                احصل على عرض سعر
              </Link>
              <a href="tel:+966500000000" className="bg-transparent hover:bg-primary-600 border-2 border-white py-3 px-8 rounded-md font-bold transition-colors">
                <i className="fas fa-phone-alt mr-2"></i> اتصل بنا مباشرة
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
              <ul className="space-y-2">
                {services.slice(0, 5).map(service => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} className="text-gray-300 hover:text-white">{service.title}</Link>
                  </li>
                ))}
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

export default ServicesPage; 