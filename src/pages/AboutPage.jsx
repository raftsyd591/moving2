import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Footer from '../components/Footer';

const AboutPage = () => {
  // Company statistics
  const stats = [
    { value: '15+', label: 'سنوات خبرة' },
    { value: '10,000+', label: 'عميل سعيد' },
    { value: '50+', label: 'موظف محترف' },
    { value: '100%', label: 'رضا العملاء' }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'محمد الأحمد',
      position: 'المدير التنفيذي',
      image: '/images/authors/Fahad_Alotaibi.png',
      bio: 'خبرة أكثر من 20 عاماً في مجال الخدمات اللوجستية ونقل العفش في المملكة العربية السعودية، قاد الشركة للحصول على العديد من الجوائز المحلية في مجال الخدمة المتميزة.'
    },
    {
      name: 'سارة العتيبي',
      position: 'مديرة العمليات',
      image: '/images/authors/Sara_Alqahtani.png',
      bio: 'تمتلك سارة خبرة واسعة في إدارة العمليات اللوجستية وتنظيم فرق العمل، حاصلة على شهادة في إدارة سلاسل الإمداد من جامعة الملك سعود.'
    },
    {
      name: 'عبدالله الشمري',
      position: 'رئيس قسم خدمة العملاء',
      image: '/images/authors/Turki_Alharbi.png',
      bio: 'متخصص في تحسين تجربة العملاء وتطوير معايير الخدمة، يعمل مع النخبة للنقل منذ أكثر من 10 سنوات، ويشرف على فريق خدمة العملاء.'
    },
    {
      name: 'نورة الزهراني',
      position: 'مديرة التسويق',
      image: '/images/authors/Alya_Alrashid.png',
      bio: 'متخصصة في التسويق الرقمي والعلامات التجارية، انضمت إلى الشركة منذ 5 سنوات وساهمت في تعزيز الوجود الرقمي للنخبة للنقل.'
    }
  ];

  // Values
  const values = [
    {
      icon: 'fa-star',
      title: 'الجودة',
      description: 'نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا، من خلال الاهتمام بأدق التفاصيل.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'الموثوقية',
      description: 'يمكنك الاعتماد علينا دائماً للوفاء بوعودنا ومواعيدنا مع الالتزام بالشفافية التامة.'
    },
    {
      icon: 'fa-handshake',
      title: 'النزاهة',
      description: 'نتعامل مع جميع العملاء وشركاء العمل بأعلى درجات الشفافية والأمانة في جميع الأوقات.'
    },
    {
      icon: 'fa-heart',
      title: 'الاهتمام',
      description: 'نتعامل مع ممتلكات عملائنا بنفس القدر من العناية والاهتمام كما لو كانت ممتلكاتنا الشخصية.'
    },
    {
      icon: 'fa-users',
      title: 'العمل الجماعي',
      description: 'نؤمن بقوة العمل الجماعي والتعاون لتحقيق أفضل النتائج لعملائنا وشركتنا.'
    },
    {
      icon: 'fa-leaf',
      title: 'الاستدامة',
      description: 'نسعى جاهدين لتقليل تأثيرنا على البيئة من خلال اعتماد ممارسات صديقة للبيئة في عملياتنا.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title="من نحن | النخبة للنقل - قصة نجاحنا وقيمنا"
        description="تعرف على شركة النخبة للنقل، تاريخنا، قيمنا، وفريقنا المحترف الذي يجعلنا الخيار الأمثل لخدمات نقل العفش في المملكة العربية السعودية"
        image="/images/about-banner.jpg"
        path="/about"
        type="aboutPage" // Changed type to 'aboutPage'
        teamMembers={teamMembers} // Passed teamMembers data
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
                <li><Link to="/about" className="hover:text-primary-200 font-bold">من نحن</Link></li>
                <li><Link to="/contact" className="hover:text-primary-200">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/about-banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-shadow-lg">قصة نجاح النخبة للنقل</h1>
            <p className="text-xl mb-8 text-shadow">
              منذ أكثر من 15 عاماً، ونحن نقدم خدمات نقل العفش بتميز وإتقان، لنصبح الشريك الأكثر ثقة لآلاف العائلات والشركات في المملكة العربية السعودية.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/about/our-story.jpg" 
                alt="قصة النخبة للنقل" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">قصتنا</h2>
              <p className="text-lg text-gray-600 mb-4">
                بدأت رحلة النخبة للنقل في عام 2008، عندما لاحظ مؤسسها محمد الأحمد حاجة السوق المحلي لخدمات نقل عفش احترافية تجمع بين الجودة العالية والأسعار المعقولة.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                بدأنا بفريق صغير وسيارة نقل واحدة، ومع التزامنا بتقديم خدمة استثنائية، سرعان ما نمت سمعتنا وتوسعت عملياتنا لتشمل مختلف مناطق المملكة.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                اليوم، أصبحت النخبة للنقل واحدة من أكبر شركات نقل العفش في المملكة، مع أسطول كبير من المركبات الحديثة وفريق من المحترفين المدربين على أعلى المستويات، ومع ذلك ما زلنا نحافظ على نفس القيم التي بدأنا بها: التفاني في خدمة العملاء والالتزام بالجودة العالية.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-bold text-primary-600 mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-primary-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h2>
              <p className="text-lg text-gray-600">
                تقديم خدمات نقل عفش استثنائية بأعلى معايير الجودة والموثوقية، مع التركيز على تخفيف عبء الانتقال عن كاهل عملائنا وتوفير تجربة سلسة وخالية من التوتر. نسعى جاهدين لتجاوز توقعات عملائنا من خلال الاهتمام بأدق التفاصيل والتفاني في تقديم خدمة متميزة في كل مرة.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-primary-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
              <p className="text-lg text-gray-600">
                أن نكون الشركة الرائدة في مجال نقل العفش في المملكة العربية السعودية، المعروفة بالتميز والابتكار وإرضاء العملاء. نطمح لتوسيع نطاق خدماتنا لتشمل دول مجلس التعاون الخليجي، مع الحفاظ على قيمنا الأساسية المتمثلة في الجودة والنزاهة والاهتمام بعملائنا. نسعى لتحديد معايير جديدة في الصناعة من خلال الاستثمار المستمر في موظفينا وتكنولوجيا متطورة.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">قيمنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              قيمنا هي حجر الأساس لكل ما نقوم به في النخبة للنقل، وهي تشكل ثقافتنا وتوجه قراراتنا وتعاملاتنا اليومية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${value.icon} text-primary-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">فريقنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              يتكون فريقنا من محترفين متفانين يجمعون بين الخبرة والشغف لتقديم أفضل الخدمات لعملائنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certificates and Awards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">شهاداتنا وجوائزنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              حصلت النخبة للنقل على العديد من الشهادات والجوائز تقديراً لالتزامنا بالتميز في الخدمة
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="/images/certificates/iso-9001.png" 
                alt="شهادة الأيزو 9001"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">شهادة الأيزو 9001</h3>
              <p className="text-gray-600 text-sm">لأنظمة إدارة الجودة</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/images/certificates/best-movers.png" 
                alt="جائزة أفضل شركة نقل"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">أفضل شركة نقل 2022</h3>
              <p className="text-gray-600 text-sm">من مجلة الأعمال السعودية</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/images/certificates/customer-satisfaction.png" 
                alt="جائزة رضا العملاء"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">جائزة التميز في خدمة العملاء</h3>
              <p className="text-gray-600 text-sm">لثلاث سنوات متتالية</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/images/certificates/chamber-of-commerce.png" 
                alt="شهادة الغرفة التجارية"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="font-bold text-gray-800">عضوية الغرفة التجارية</h3>
              <p className="text-gray-600 text-sm">منذ عام 2008</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">انضم إلى قائمة عملائنا السعداء</h2>
            <p className="text-xl mb-8">
              سواء كنت تنتقل داخل المدينة أو بين المدن، يمكنك الاعتماد على النخبة للنقل لتوفير تجربة نقل سلسة وخالية من التوتر
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
      <Footer />
    </div>
  );
};

export default AboutPage; 