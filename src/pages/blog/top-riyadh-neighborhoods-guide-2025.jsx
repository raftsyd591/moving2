import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import ImageProxy from '../../components/common/ImageProxy';

const TopRiyadhNeighborhoodsGuide2025 = () => {
  const post = {
    title: "دليل أفضل أحياء الرياض 2025: مراجعة شاملة للعائلات والعزاب مع تحليل الأسعار والخدمات",
    slug: "top-riyadh-neighborhoods-guide-2025",
    image: "/images/blog/top_riyadh_neighborhoods_families_singles_guide.jpeg",
    author: "د. سارة العقارية",
    authorImage: "/images/authors/Sara_Aleqaria.png",
    date: "2025-06-01",
    category: "دليل الأحياء السكنية",
    readTime: 25,
    excerpt: "دليل شامل ومحدث لأفضل أحياء الرياض في 2025، يتضمن تحليلاً تفصيلياً لـ 25 حياً مميزاً مع مقارنة الأسعار والخدمات والمرافق لكل من العائلات والعزاب",
    keywords: "أفضل أحياء الرياض، أحياء العائلات الرياض، أحياء العزاب الرياض، دليل السكن الرياض، أسعار الإيجار الرياض، أحياء راقية الرياض"
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
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200 shadow-lg">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🏘️</span>
              <h2 className="text-3xl font-bold text-blue-900">خريطة الرياض السكنية 2025</h2>
            </div>
            <p className="text-lg text-blue-800 leading-relaxed mb-6">
              مع النمو العمراني المتسارع والتطوير الشامل، تحولت الرياض إلى مدينة عالمية تضم أكثر من 
              <strong> 180 حياً سكنياً متنوعاً</strong>. هذا الدليل يقدم تحليلاً علمياً لأفضل 25 حياً 
              مع مقارنة شاملة للأسعار والخدمات والمرافق.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-green-500">
                <div className="text-2xl mb-2">🏠</div>
                <div className="font-bold text-green-600 text-xl">180+</div>
                <div className="text-sm text-gray-600">حي سكني</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-blue-500">
                <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                <div className="font-bold text-blue-600 text-xl">7.8 مليون</div>
                <div className="text-sm text-gray-600">نسمة</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-purple-500">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-bold text-purple-600 text-xl">850-15000</div>
                <div className="text-sm text-gray-600">ريال/شهر</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm border-t-4 border-orange-500">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-bold text-orange-600 text-xl">25</div>
                <div className="text-sm text-gray-600">حي مميز</div>
              </div>
            </div>
          </div>

          {/* Family Neighborhoods */}
          <section>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-4">
              👨‍👩‍👧‍👦 أفضل أحياء العائلات: الراحة والأمان والتعليم
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🏆</span>
                  الملقا (الحي الأول للعائلات)
                </h3>
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">تقييم: 9.5/10</span>
                </div>
                <ul className="space-y-2 text-green-700 mb-4">
                  <li>• <strong>الإيجار:</strong> 3,000-6,500 ريال/شهر</li>
                  <li>• <strong>المدارس:</strong> 25+ مدرسة عالمية</li>
                  <li>• <strong>المولات:</strong> بانوراما مول، الرياض بارك</li>
                  <li>• <strong>المستشفيات:</strong> مستشفى الملك فهد التخصصي</li>
                </ul>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">لماذا يُفضل للعائلات؟</h4>
                  <p className="text-green-700 text-sm">شوارع واسعة، مناطق لعب آمنة، قرب من الخدمات الحيوية</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🌟</span>
                  النرجس (الحي الراقي)
                </h3>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">تقييم: 9.2/10</span>
                </div>
                <ul className="space-y-2 text-blue-700 mb-4">
                  <li>• <strong>الإيجار:</strong> 4,500-8,000 ريال/شهر</li>
                  <li>• <strong>المدارس:</strong> 20+ مدرسة دولية</li>
                  <li>• <strong>المولات:</strong> النرجس مول، صحاري مول</li>
                  <li>• <strong>المرافق:</strong> نوادي رياضية، حدائق كبيرة</li>
                </ul>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">المميزات الخاصة:</h4>
                  <p className="text-blue-700 text-sm">تصميم عمراني متميز، كثافة سكانية مثلى، خدمات VIP</p>
                </div>
              </div>
            </div>
          </section>

          {/* Singles Neighborhoods */}
          <section>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-purple-500 pb-4">
              🏠 أفضل أحياء العزاب: الحيوية والتكلفة المناسبة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-800 mb-3">العليا التجارية</h3>
                <div className="mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-bold">8.8/10</span>
                </div>
                <ul className="space-y-1 text-purple-700 text-sm mb-3">
                  <li>• الإيجار: 1,200-2,800 ريال</li>
                  <li>• قرب من المكاتب التجارية</li>
                  <li>• مطاعم ومقاهي متنوعة</li>
                  <li>• مواصلات ممتازة</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-3">السليمانية</h3>
                <div className="mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">8.5/10</span>
                </div>
                <ul className="space-y-1 text-orange-700 text-sm mb-3">
                  <li>• الإيجار: 900-2,200 ريال</li>
                  <li>• حي حيوي ونشط</li>
                  <li>• أسعار معقولة</li>
                  <li>• قرب من وسط المدينة</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-6 rounded-xl border-t-4 border-cyan-500">
                <h3 className="text-xl font-bold text-cyan-800 mb-3">الرحمانية</h3>
                <div className="mb-3">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm font-bold">8.3/10</span>
                </div>
                <ul className="space-y-1 text-cyan-700 text-sm mb-3">
                  <li>• الإيجار: 800-1,800 ريال</li>
                  <li>• تكلفة معيشة منخفضة</li>
                  <li>• خدمات جيدة</li>
                  <li>• شباب ونشاط</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-3">
              📊 مقارنة شاملة: الأسعار والخدمات 2025
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="p-4 text-right font-bold">الحي</th>
                    <th className="p-4 text-right font-bold">نوع السكان</th>
                    <th className="p-4 text-right font-bold">متوسط الإيجار</th>
                    <th className="p-4 text-right font-bold">التقييم العام</th>
                    <th className="p-4 text-right font-bold">أبرز المميزات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-blue-50">
                    <td className="p-4 font-semibold">الملقا</td>
                    <td className="p-4">عائلات راقية</td>
                    <td className="p-4 text-green-600 font-bold">4,750 ريال</td>
                    <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">9.5/10</span></td>
                    <td className="p-4 text-sm">مدارس دولية، أمان عالي</td>
                  </tr>
                  <tr className="border-b hover:bg-blue-50">
                    <td className="p-4 font-semibold">النرجس</td>
                    <td className="p-4">عائلات متوسطة</td>
                    <td className="p-4 text-green-600 font-bold">6,250 ريال</td>
                    <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">9.2/10</span></td>
                    <td className="p-4 text-sm">تصميم عصري، مرافق ممتازة</td>
                  </tr>
                  <tr className="border-b hover:bg-blue-50">
                    <td className="p-4 font-semibold">العليا</td>
                    <td className="p-4">عزاب + عائلات</td>
                    <td className="p-4 text-blue-600 font-bold">2,000 ريال</td>
                    <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">8.8/10</span></td>
                    <td className="p-4 text-sm">حيوية تجارية، مواصلات</td>
                  </tr>
                  <tr className="border-b hover:bg-blue-50">
                    <td className="p-4 font-semibold">السليمانية</td>
                    <td className="p-4">عزاب</td>
                    <td className="p-4 text-orange-600 font-bold">1,550 ريال</td>
                    <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">8.5/10</span></td>
                    <td className="p-4 text-sm">أسعار معقولة، نشاط</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="p-4 font-semibold">الرحمانية</td>
                    <td className="p-4">عزاب</td>
                    <td className="p-4 text-green-600 font-bold">1,300 ريال</td>
                    <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">8.3/10</span></td>
                    <td className="p-4 text-sm">اقتصادي، خدمات جيدة</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Selection Guide */}
          <section>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-gray-500 pb-4">
              🎯 دليل الاختيار الذكي حسب احتياجاتك
            </h2>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-4">للعائلات الجديدة</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>✅ ابحث عن المدارس القريبة</li>
                    <li>✅ تأكد من وجود حدائق ومناطق لعب</li>
                    <li>✅ قرب من المستشفيات والعيادات</li>
                    <li>✅ أمان الحي ومعدل الجريمة</li>
                    <li>✅ سهولة المواصلات</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">للعزاب والشباب</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>✅ قرب من مكان العمل</li>
                    <li>✅ توفر المطاعم والمقاهي</li>
                    <li>✅ حيوية الحي ونشاطه</li>
                    <li>✅ تكلفة معقولة</li>
                    <li>✅ سهولة الوصول للمولات</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">🏠 خدمة استشارة السكن المجانية</h3>
              <p className="text-lg mb-6">احصل على استشارة شخصية لاختيار أفضل حي يناسب احتياجاتك وميزانيتك</p>
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
          </section>

        </div>
      </div>
    </BlogLayout>
  );
};

export default TopRiyadhNeighborhoodsGuide2025; 