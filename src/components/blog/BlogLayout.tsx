import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface BlogLayoutProps {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const BlogLayout = ({ 
  children, 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage 
}: BlogLayoutProps) => {
  return (
    <div className="blog-layout min-h-screen bg-gray-50">
      <Helmet>
        <title>{title || 'مدونة النخبة للنقل'}</title>
        <meta name="description" content={description || 'مدونة النخبة للنقل تقدم معلومات قيمة عن خدمات نقل العفش والأثاث وأفضل الممارسات في المملكة العربية السعودية'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={canonicalUrl || 'https://elitemovers.com/blog'} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={title || 'مدونة النخبة للنقل'} />
        <meta property="og:description" content={description || 'مدونة النخبة للنقل تقدم معلومات قيمة عن خدمات نقل العفش والأثاث وأفضل الممارسات في المملكة العربية السعودية'} />
        <meta property="og:url" content={canonicalUrl || 'https://elitemovers.com/blog'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage || '/images/blog-cover.jpg'} />
        
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'مدونة النخبة للنقل'} />
        <meta name="twitter:description" content={description || 'مدونة النخبة للنقل تقدم معلومات قيمة عن خدمات نقل العفش والأثاث وأفضل الممارسات في المملكة العربية السعودية'} />
        <meta name="twitter:image" content={ogImage || '/images/blog-cover.jpg'} />
      </Helmet>
      
      {/* Blog Header */}
      <header className="bg-primary-700 text-white py-8">
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
                <li><Link to="/blog" className="hover:text-primary-200 font-bold">المدونة</Link></li>
                <li><Link to="/contact" className="hover:text-primary-200">اتصل بنا</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="py-8">
        {children}
      </main>
      
      {/* Blog Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">النخبة للنقل</h3>
              <p className="text-gray-300">
                نقدم أفضل خدمات نقل وتخزين وتغليف الأثاث والعفش للمنازل والشركات في جميع أنحاء المملكة العربية السعودية.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">من نحن</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white">خدماتنا</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">المدونة</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <p className="text-gray-300 mb-2">الرياض، المملكة العربية السعودية</p>
              <p className="text-gray-300 mb-2">هاتف: 966-XX-XXXXXXX+</p>
              <p className="text-gray-300 mb-2">بريد إلكتروني: info@elitemovers.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} النخبة للنقل. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout; 