import React, { useState } from 'react';

/**
 * مكون الأسئلة الشائعة مع Schema markup لتحسين السيو
 */
const FAQ = ({ 
  faqs = [], 
  title = "الأسئلة الشائعة",
  className = "",
  allowMultipleOpen = false,
  showSearch = false
}) => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  // تصفية الأسئلة بناءً على البحث
  const filteredFAQs = faqs.filter(faq => 
    searchTerm === '' || 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // التحكم في فتح/إغلاق الأسئلة
  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    
    if (allowMultipleOpen) {
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
    } else {
      if (newOpenItems.has(index)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(index);
      }
    }
    
    setOpenItems(newOpenItems);
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      {/* العنوان */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          إجابات على الأسئلة الأكثر شيوعاً حول خدمات نقل العفش
        </p>
      </div>

      {/* البحث */}
      {showSearch && (
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <svg 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}

      {/* قائمة الأسئلة */}
      <div className="max-w-4xl mx-auto">
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-lg"
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-primary-600 transform transition-transform duration-200 ${
                        openItems.has(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">لا توجد أسئلة تطابق بحثك</p>
          </div>
        )}
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

/**
 * بيانات الأسئلة الشائعة الافتراضية لنقل العفش
 */
export const defaultMovingFAQs = [
  {
    question: "كم تكلفة خدمات نقل العفش؟",
    answer: "تختلف تكلفة نقل العفش حسب عدة عوامل مثل المسافة، كمية الأثاث، نوع الخدمة المطلوبة، والطابق. نحن نقدم تقديرات مجانية بعد معاينة الأثاث لضمان دقة السعر."
  },
  {
    question: "هل تقدمون خدمة التغليف؟",
    answer: "نعم، نقدم خدمة التغليف الاحترافية باستخدام مواد عالية الجودة لضمان حماية أثاثك أثناء النقل. يشمل ذلك تغليف الأثاث الحساس والأجهزة الكهربائية."
  },
  {
    question: "كم من الوقت يستغرق نقل العفش؟",
    answer: "يعتمد الوقت على كمية الأثاث والمسافة. عادة ما يستغرق نقل منزل متوسط الحجم من 4-8 ساعات. نحن نعمل على إنجاز المهمة بأسرع وقت ممكن مع ضمان السلامة."
  },
  {
    question: "هل الشركة مؤمنة ومرخصة؟",
    answer: "نعم، شركتنا مرخصة ومؤمنة بالكامل. نحن نحمل تأميناً شاملاً يغطي أي أضرار قد تحدث أثناء عملية النقل، مما يضمن راحة البال لعملائنا."
  },
  {
    question: "هل تقدمون خدمات نقل في جميع مدن المملكة؟",
    answer: "نعم، نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، بما في ذلك الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، وجميع المدن الأخرى."
  },
  {
    question: "كيف يمكنني الحصول على عرض أسعار؟",
    answer: "يمكنك الحصول على عرض أسعار مجاني من خلال الاتصال بنا أو ملء النموذج على موقعنا. سنقوم بإرسال فريق لمعاينة الأثاث وتقديم عرض دقيق ومفصل."
  }
];

export default FAQ; 