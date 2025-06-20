import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Footer from '../components/Footer';

const ContactPage = () => {
  // Contact information
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'العنوان',
      details: ['شارع العليا، حي الورود', 'الرياض، المملكة العربية السعودية']
    },
    {
      icon: 'fa-phone-alt',
      title: 'اتصل بنا',
      details: ['+966 50 000 0000', '+966 11 000 0000']
    },
    {
      icon: 'fa-envelope',
      title: 'البريد الإلكتروني',
      details: ['info@elitemovers.com', 'support@elitemovers.com']
    },
    {
      icon: 'fa-clock',
      title: 'ساعات العمل',
      details: ['السبت - الخميس: 8 ص - 8 م', 'الجمعة: مغلق']
    }
  ];

  // Office locations
  const officeLocations = [
    {
      city: 'الرياض',
      address: 'شارع العليا، حي الورود',
      phone: '+966 11 000 0000',
      email: 'riyadh@elitemovers.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674457239755!2d46.67670231499878!3d24.713454984128068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f32c3d7c89f%3A0xb0d3f176e1e86d6e!2sOlaya%20St%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus'
    },
    {
      city: 'جدة',
      address: 'شارع الأندلس، حي الروضة',
      phone: '+966 12 000 0000',
      email: 'jeddah@elitemovers.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2887531468455!2d39.16243231493294!3d21.56344998569929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe9d86f43dfbe680a!2sAl%20Andalus%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus'
    },
    {
      city: 'الدمام',
      address: 'شارع الأمير محمد بن فهد، حي الشاطئ',
      phone: '+966 13 000 0000',
      email: 'dammam@elitemovers.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.9302301290327!2d50.10235231503304!3d26.43246238334701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef85c961edaf%3A0x7b2db98f2941c78c!2sPrince%20Mohammed%20Bin%20Fahd%20Rd%2C%20Dammam%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus'
    }
  ];

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title="اتصل بنا | النخبة للنقل - تواصل معنا للحصول على خدمات نقل العفش المتميزة"
        description="تواصل مع النخبة للنقل للحصول على استشارة مجانية وعرض سعر لخدمات نقل العفش في المملكة العربية السعودية"
        image="/images/contact-banner.jpg"
        path="/contact"
        type="ContactPage" // Changed type to 'ContactPage'
        officeLocations={officeLocations} // Passed officeLocations data
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
                <li><Link to="/contact" className="hover:text-primary-200 font-bold">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80"></div>
        <div className="absolute inset-0 bg-[url('/images/contact-banner.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl mb-8">
              نحن هنا للإجابة على جميع استفساراتك وتقديم عروض أسعار مخصصة لاحتياجاتك من خدمات نقل العفش
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${info.icon} text-primary-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
          
          {/* Contact Form and Map */}
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
              <p className="text-lg text-gray-600 mb-8">
                يمكنك ملء النموذج أدناه للحصول على عرض سعر مجاني أو لطرح أي استفسارات لديك. سنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="أدخل رقم هاتفك"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">الخدمة المطلوبة</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="residential">نقل الأثاث المنزلي</option>
                    <option value="commercial">نقل المكاتب والشركات</option>
                    <option value="packing">خدمات التغليف</option>
                    <option value="assembly">فك وتركيب الأثاث</option>
                    <option value="storage">خدمات التخزين</option>
                    <option value="specialized">نقل القطع الثمينة والخاصة</option>
                    <option value="other">خدمة أخرى</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">رسالتك</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-bold transition-colors"
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">موقعنا</h2>
              <p className="text-lg text-gray-600 mb-8">
                يمكنك زيارتنا في أحد مكاتبنا في الرياض، جدة، أو الدمام للحصول على استشارة مباشرة أو لمناقشة احتياجاتك من خدمات النقل.
              </p>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={officeLocations[0].mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع المكتب الرئيسي"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">مكاتبنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              لدينا مكاتب في المدن الرئيسية بالمملكة العربية السعودية لخدمتك بشكل أفضل
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{office.city}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-map-marker-alt text-primary-600 mt-1 ml-3"></i>
                      <span className="text-gray-600">{office.address}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-phone-alt text-primary-600 mt-1 ml-3"></i>
                      <span className="text-gray-600">{office.phone}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-envelope text-primary-600 mt-1 ml-3"></i>
                      <span className="text-gray-600">{office.email}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              إليك إجابات على بعض الأسئلة الشائعة التي قد تكون لديك
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">كيف يمكنني الحصول على عرض سعر؟</h3>
                <p className="text-gray-600">
                  يمكنك الحصول على عرض سعر من خلال ملء نموذج الاتصال أعلاه، أو الاتصال بنا مباشرة على أرقام الهواتف المذكورة. سنقوم بالتواصل معك لتحديد احتياجاتك وتقديم عرض سعر مخصص.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">ما هي المناطق التي تغطونها؟</h3>
                <p className="text-gray-600">
                  نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، مع تركيز خاص على المدن الرئيسية: الرياض، جدة، الدمام، مكة، المدينة المنورة، والخبر.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">كم من الوقت يستغرق الرد على استفساراتي؟</h3>
                <p className="text-gray-600">
                  نحن نسعى للرد على جميع الاستفسارات في غضون 24 ساعة خلال أيام العمل. للاستفسارات العاجلة، يرجى الاتصال بنا مباشرة على أرقام الهواتف المذكورة.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">هل تقدمون خدمات في عطلات نهاية الأسبوع؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم خدماتنا في أيام السبت والأحد، ولكن مكاتبنا مغلقة يوم الجمعة. يمكن ترتيب خدمات النقل في أيام العطل الرسمية بناءً على الطلب المسبق.
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
            <h2 className="text-3xl font-bold mb-6">جاهز للانتقال مع النخبة؟</h2>
            <p className="text-xl mb-8">
              اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+966500000000" className="bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 rounded-md font-bold transition-colors">
                <i className="fas fa-phone-alt mr-2"></i> اتصل بنا مباشرة
              </a>
              <a href="https://wa.me/966500000000" className="bg-transparent hover:bg-primary-600 border-2 border-white py-3 px-8 rounded-md font-bold transition-colors">
                <i className="fab fa-whatsapp mr-2"></i> تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage; 