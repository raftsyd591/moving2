import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
  );
};

export default Footer; 