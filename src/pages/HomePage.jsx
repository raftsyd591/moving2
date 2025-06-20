import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles.jsx';
import BlogPostCard from '../components/blog/BlogPostCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import Footer from '../components/Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HomePage = () => {
  // Get the latest 12 blog posts
  const featuredPosts = articles.slice(0, 12);
  
  // Slider Data
  const sliderData = [
    {
      image: "/images/slider/slider1.jpg",
      title: "الشريك الأكثر ثقة لنقل عفشك بأمان",
      description: "نقدم خدمات نقل العفش الاحترافية وتغليف وفك وتركيب الأثاث في جميع أنحاء المملكة العربية السعودية"
    },
    {
      image: "/images/slider/slider2.jpg",
      title: "خدمات تغليف احترافية",
      description: "نستخدم أفضل المواد وأحدث التقنيات لضمان وصول ممتلكاتك بأمان تام"
    },
    {
      image: "/images/slider/slider3.jpg",
      title: "أكثر من 15 عام من الخبرة",
      description: "نعتمد على خبرة طويلة في مجال نقل العفش وخدمة آلاف العملاء في جميع أنحاء المملكة"
    }
  ];
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title="النخبة للنقل | خدمات نقل العفش المتميزة في المملكة العربية السعودية"
        description="شركة النخبة للنقل - المزود الرائد لخدمات نقل العفش الاحترافية في جميع أنحاء المملكة العربية السعودية"
        image="/images/slider/slider1.jpg"
        path="/"
        type="website"
      />
      
      {/* Header */}
      <header className="bg-primary-700 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="text-white font-bold text-2xl">النخبة للنقل</Link>
              <h2 className="text-lg mt-1 font-light">لخدمات نقل العفش المتميزة</h2>
            </div>
            <nav>
              <ul className="flex space-x-6 rtl:space-x-reverse">
                <li><Link to="/" className="hover:text-primary-200 font-bold">الرئيسية</Link></li>
                <li><Link to="/services" className="hover:text-primary-200">خدماتنا</Link></li>
                <li><Link to="/blog" className="hover:text-primary-200">المدونة</Link></li>
                <li><Link to="/about" className="hover:text-primary-200">من نحن</Link></li>
                <li><Link to="/contact" className="hover:text-primary-200">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section with Slider */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-[600px]"
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[600px] flex items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="absolute inset-0 bg-primary-900/70"></div>
                <div className="container mx-auto px-4 relative z-10 text-white">
                  <div className="max-w-3xl">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-5xl font-bold mb-6 text-shadow-lg"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-xl mb-8 text-shadow"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link to="/contact" className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-md font-bold transition-colors">
                        احصل على عرض سعر مجاني
                      </Link>
                      <Link to="/services" className="bg-white hover:bg-gray-100 text-primary-700 py-3 px-8 rounded-md font-bold transition-colors">
                        اكتشف خدماتنا
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* Services Overview */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              خدماتنا المتميزة
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              نقدم مجموعة شاملة من خدمات نقل العفش المصممة خصيصًا لتلبية احتياجات عملائنا في جميع أنحاء المملكة
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {/* Service 1 */}
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">نقل العفش المنزلي</h3>
              <p className="text-gray-600">
                خدمات نقل الأثاث المنزلي بكفاءة وأمان من وإلى جميع مناطق المملكة
              </p>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-box-open text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">تغليف الأثاث</h3>
              <p className="text-gray-600">
                تغليف احترافي باستخدام أفضل المواد للحفاظ على سلامة ممتلكاتك أثناء النقل
              </p>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">فك وتركيب الأثاث</h3>
              <p className="text-gray-600">
                خدمات فك وتركيب الأثاث بشكل احترافي بواسطة فنيين متخصصين
              </p>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-warehouse text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">تخزين الأثاث</h3>
              <p className="text-gray-600">
                خدمات تخزين آمنة وموثوقة للأثاث لفترات قصيرة أو طويلة المدى
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link to="/services" className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 rounded-md font-bold transition-colors">
              استكشف جميع خدماتنا
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* About Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="/images/about/our-story.jpg" 
                  alt="فريق النخبة للنقل" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute bottom-4 right-4 bg-primary-500 text-white py-2 px-4 rounded-md font-bold">
                  15+ سنة خبرة
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">من نحن</h2>
              <p className="text-lg text-gray-600 mb-4">
                نحن شركة النخبة للنقل، المزود الرائد لخدمات نقل العفش في المملكة العربية السعودية. نتميز بالتزامنا الثابت بتقديم أعلى معايير الجودة والخدمة المتميزة لعملائنا.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                منذ تأسيسنا، عملنا مع آلاف العملاء في مختلف مناطق المملكة، ونفخر بكوننا الخيار الأول للعديد من العائلات والشركات عندما يتعلق الأمر بنقل الأثاث.
              </p>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                <motion.div variants={cardVariants} className="flex items-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-medal text-primary-600"></i>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-800">أعلى جودة</h3>
                    <p className="text-gray-600">أفضل معدات النقل والتغليف</p>
                  </div>
                </motion.div>
                
                <motion.div variants={cardVariants} className="flex items-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-handshake text-primary-600"></i>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-800">خدمة عملاء</h3>
                    <p className="text-gray-600">دعم متميز على مدار الساعة</p>
                  </div>
                </motion.div>
                
                <motion.div variants={cardVariants} className="flex items-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-truck-fast text-primary-600"></i>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-800">توصيل سريع</h3>
                    <p className="text-gray-600">الالتزام بالمواعيد المحددة</p>
                  </div>
                </motion.div>
                
                <motion.div variants={cardVariants} className="flex items-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <i className="fas fa-tag text-primary-600"></i>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-800">أسعار تنافسية</h3>
                    <p className="text-gray-600">أفضل قيمة مقابل المال</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Link to="/about" className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-bold transition-colors">
                  اقرأ المزيد عنا
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              variants={fadeIn} 
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              ماذا يقول عملاؤنا
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              نفخر بالثقة التي منحها لنا عملاؤنا على مر السنين، وهذه بعض شهاداتهم
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Testimonials mapped with animations */}
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "تعاملنا مع النخبة للنقل عند انتقالنا لمنزلنا الجديد، كانت تجربة ممتازة من البداية للنهاية. فريق محترف، وعناية فائقة بكل قطعة أثاث، وأسعار منافسة."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/images/authors/Fahad_Alotaibi.png" alt="أحمد السالم" className="w-full h-full object-cover" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-800">أحمد السالم</h4>
                  <p className="text-gray-600">الرياض</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "استعنا بخدمات النخبة للنقل لنقل أثاث مكاتبنا الجديدة. كان الفريق محترفاً ودقيقاً في التعامل مع جميع القطع. الخدمة كانت ممتازة والأسعار معقولة."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/images/authors/Sara_Alqahtani.png" alt="م. سارة العتيبي" className="w-full h-full object-cover" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-800">م. سارة العتيبي</h4>
                  <p className="text-gray-600">مديرة الخدمات اللوجستية - شركة الرؤية المتكاملة</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "لقد استفدت من خدمات تخزين الأثاث من النخبة للنقل أثناء تجديد منزلي. كانت خدماتهم ممتازة وأثاثي عاد بحالة ممتازة كما تم تخزينه. أنصح بشدة بالتعامل معهم."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/images/authors/Alya_Alrashid.png" alt="نورة الشمري" className="w-full h-full object-cover" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-800">نورة الشمري</h4>
                  <p className="text-gray-600">جدة</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Featured Blog Posts */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              أحدث المقالات
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              اطلع على أحدث المقالات والنصائح المفيدة في مدونتنا
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {featuredPosts.map((post, index) => (
              <motion.div key={post.slug} variants={cardVariants}>
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="text-center mt-10"
          >
            <Link to="/blog" className="inline-block bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-bold transition-colors">
              تصفح جميع المقالات
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-primary-700 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              هل تخطط للانتقال قريباً؟
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8"
            >
              اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 rounded-md font-bold transition-colors">
                تواصل معنا
              </Link>
              <Link to="/services" className="bg-transparent hover:bg-primary-600 border-2 border-white py-3 px-8 rounded-md font-bold transition-colors">
                استكشف خدماتنا
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage; 