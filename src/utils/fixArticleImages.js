/**
 * أداة مساعدة لإصلاح مسارات صور المقالات
 * تعالج مشاكل الصور مثل اختلاف تنسيق الأسماء والامتدادات
 */

import { normalizeImagePath } from './imageHelpers';

// قائمة الصور المتاحة في مجلد الصور
const availableImages = [
  'moving_within_riyadh_guide.jpeg',
  'jeddah_moving_costs_factors_save_money.jpeg',
  'pre_moving_day_checklist_essential_tasks.jpeg',
  'saudi_moving_common_mistakes_to_avoid.jpeg',
  'long_distance_moving_ksa_challenges_solutions.jpeg',
  'furniture_disassembly_assembly_services_importance_choosing.jpeg',
  'moving_insurance_saudi_arabia_guide.jpeg',
  'best_packing_materials_furniture_safety.jpeg',
  'moving_large_appliances_safely_fridge_washer_ac.jpeg',
  'dammam_khobar_moving_guide_local_tips.jpeg',
  'handling_bulky_heavy_furniture_moving.jpeg',
  'organizing_new_home_after_move_7_steps.jpeg',
  'office_relocation_saudi_arabia_special_considerations.jpeg',
  'questions_to_ask_moving_company_before_hiring.jpeg',
  'preparing_kids_for_a_move_reduce_stress.jpeg',
  'expert_tips_long_term_furniture_storage.jpeg',
  'cheap_vs_professional_movers_which_to_choose.jpeg',
  'moving_artwork_antiques_safely.jpeg',
  'choosing_right_size_moving_truck_guide.jpeg',
  'perfect_moving_plan_detailed_timeline.jpeg',
  'summer_moving_saudi_arabia_tips_challenges.jpeg',
  'eco_friendly_moving_services_ksa.jpeg',
  'reading_moving_company_reviews_smartly.jpeg',
  'post_move_unpacking_organizing_efficiently.jpeg',
  'best_time_year_to_move_saudi_arabia_cost_comfort.jpeg',
  'moving_to_makkah_madinah_special_considerations.jpeg',
  'default-blog-post.jpg',
  'diy_furniture_packing_tips_professional_guide.jpg',
  'best_movers_riyadh_guide_criteria_pricing.jpg',
  'latest_technology_moving_companies_asset_safety.jpg',
  'decluttering_before_move_save_costs.jpg',
  'customer_rights_moving_companies_saudi_arabia.jpg',
  'top_riyadh_neighborhoods_families_singles_guide.jpeg',
  'riyadh_storage_solutions_cost_options_benefits.jpeg',
  'best_furniture_packing_methods_protection_moving.jpeg',
  'disassembly_assembly_bedrooms_kitchens_services.jpeg',
  'long_term_furniture_storage_guide_protection.jpeg',
  'comprehensive_moving_checklist_before_during_after.jpeg',
  'moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg',
];

// تخطيط بين الرابط المختصر للمقال وصورته المقابلة
const slugToImageMapping = {
  'moving-within-riyadh-guide': 'moving_within_riyadh_guide.jpeg',
  'jeddah-moving-costs-factors-save-money': 'jeddah_moving_costs_factors_save_money.jpeg',
  'pre-moving-day-checklist-essential-tasks': 'pre_moving_day_checklist_essential_tasks.jpeg',
  'saudi-moving-common-mistakes-to-avoid': 'saudi_moving_common_mistakes_to_avoid.jpeg',
  'long-distance-moving-ksa-challenges-solutions': 'long_distance_moving_ksa_challenges_solutions.jpeg',
  'furniture-disassembly-assembly-services-importance-choosing': 'furniture_disassembly_assembly_services_importance_choosing.jpeg',
  'moving-insurance-saudi-arabia-guide': 'moving_insurance_saudi_arabia_guide.jpeg',
  'best-packing-materials-furniture-safety': 'best_packing_materials_furniture_safety.jpeg',
  'moving-large-appliances-safely-fridge-washer-ac': 'moving_large_appliances_safely_fridge_washer_ac.jpeg',
  'dammam-khobar-moving-guide-local-tips': 'dammam_khobar_moving_guide_local_tips.jpeg',
  'handling-bulky-heavy-furniture-moving': 'handling_bulky_heavy_furniture_moving.jpeg',
  'organizing-new-home-after-move-7-steps': 'organizing_new_home_after_move_7_steps.jpeg',
  'office-relocation-saudi-arabia-special-considerations': 'office_relocation_saudi_arabia_special_considerations.jpeg',
  'questions-to-ask-moving-company-before-hiring': 'questions_to_ask_moving_company_before_hiring.jpeg',
  'preparing-kids-for-a-move-reduce-stress': 'preparing_kids_for_a_move_reduce_stress.jpeg',
  'expert-tips-long-term-furniture-storage': 'expert_tips_long_term_furniture_storage.jpeg',
  'cheap-vs-professional-movers-which-to-choose': 'cheap_vs_professional_movers_which_to_choose.jpeg',
  'moving-artwork-antiques-safely': 'moving_artwork_antiques_safely.jpeg',
  'choosing-right-size-moving-truck-guide': 'choosing_right_size_moving_truck_guide.jpeg',
  'perfect-moving-plan-detailed-timeline': 'perfect_moving_plan_detailed_timeline.jpeg',
  'summer-moving-saudi-arabia-tips-challenges': 'summer_moving_saudi_arabia_tips_challenges.jpeg',
  'eco-friendly-moving-services-ksa': 'eco_friendly_moving_services_ksa.jpeg',
  'reading-moving-company-reviews-smartly': 'reading_moving_company_reviews_smartly.jpeg',
  'post-move-unpacking-organizing-efficiently': 'post_move_unpacking_organizing_efficiently.jpeg',
  'best-time-year-to-move-saudi-arabia-cost-comfort': 'best_time_year_to_move_saudi_arabia_cost_comfort.jpeg',
  'moving-to-makkah-madinah-special-considerations': 'moving_to_makkah_madinah_special_considerations.jpeg',
  'diy-furniture-packing-tips-professional-guide': 'diy_furniture_packing_tips_professional_guide.jpg',
  'best-movers-riyadh-guide-criteria-pricing': 'best_movers_riyadh_guide_criteria_pricing.jpg',
  'latest-technology-moving-companies-asset-safety': 'latest_technology_moving_companies_asset_safety.jpg',
  'decluttering-before-move-save-costs': 'decluttering_before_move_save_costs.jpg',
  'customer-rights-moving-companies-saudi-arabia': 'customer_rights_moving_companies_saudi_arabia.jpg',
  
  // المقالات الثمانية المحددة
  'top-riyadh-neighborhoods-families-singles-guide': 'top_riyadh_neighborhoods_families_singles_guide.jpeg',
  'riyadh-storage-solutions-cost-options-benefits': 'riyadh_storage_solutions_cost_options_benefits.jpeg',
  'best-furniture-packing-methods-protection-moving': 'best_furniture_packing_methods_protection_moving.jpeg',
  'disassembly-assembly-bedrooms-kitchens-services': 'disassembly_assembly_bedrooms_kitchens_services.jpeg',
  'long-term-furniture-storage-guide-protection': 'long_term_furniture_storage_guide_protection.jpeg',
  'comprehensive-moving-checklist-before-during-after': 'comprehensive_moving_checklist_before_during_after.jpeg',
  'moving-furniture-riyadh-jeddah-steps-costs-tips': 'moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg',
};

/**
 * الحصول على مسار الصورة المناسب بناءً على الرابط المختصر للمقال
 * @param {string} slug - الرابط المختصر للمقال
 * @returns {string} - مسار الصورة المناسب أو الصورة الافتراضية
 */
export const getImagePathFromSlug = (slug) => {
  if (!slug) return '/images/blog/default-blog-post.jpg';
  
  // محاولة العثور على الصورة مباشرة في المسار المحدد للمقالات الثمانية المحددة
  const highPriorityArticles = {
    'moving-within-riyadh-guide': '/images/blog/moving_within_riyadh_guide.jpeg',
    'top-riyadh-neighborhoods-families-singles-guide': '/images/blog/top_riyadh_neighborhoods_families_singles_guide.jpeg',
    'riyadh-storage-solutions-cost-options-benefits': '/images/blog/riyadh_storage_solutions_cost_options_benefits.jpeg',
    'best-furniture-packing-methods-protection-moving': '/images/blog/best_furniture_packing_methods_protection_moving.jpeg',
    'disassembly-assembly-bedrooms-kitchens-services': '/images/blog/furniture_disassembly_assembly_services_importance_choosing.jpeg',
    'long-term-furniture-storage-guide-protection': '/images/blog/expert_tips_long_term_furniture_storage.jpeg',
    'comprehensive-moving-checklist-before-during-after': '/images/blog/comprehensive_moving_checklist_before_during_after.jpeg',
    'moving-furniture-riyadh-jeddah-steps-costs-tips': '/images/blog/moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg'
  };
  
  // استخدام مسار /images/blog للمقالات الثمانية المهمة أولاً (بدون /public/)
  if (highPriorityArticles.hasOwnProperty(slug)) {
    console.log(`[fixArticleImages] استخدام مسار الصورة ذات الأولوية العالية للمقال: ${slug}`);
    
    // استخدام المسار بدون /public/ لأن هذا هو ما يتوقعه المتصفح
    return highPriorityArticles[slug];
  }
  
  // البحث عن صورة مناسبة في التخطيط
  const imageName = slugToImageMapping[slug];
  if (imageName) {
    // استخدام المسار بدون /public/
    return `/images/blog/${imageName}`;
  }
  
  // محاولة تحديد صورة بناءً على تصحيح الاسم
  const slugWithUnderscores = slug.replace(/-/g, '_');
  for (const img of availableImages) {
    if (img.startsWith(slugWithUnderscores) || img.startsWith(slug)) {
      return `/images/blog/${img}`;
    }
  }
  
  // إذا لم يتم العثور على صورة، استخدم المسار الافتراضي
  return `/images/blog/default-blog-post.jpg`;
};

/**
 * إصلاح مسار الصورة في كائن المقال
 * @param {Object} article - كائن المقال
 * @returns {Object} - كائن المقال مع الصورة المصححة
 */
export const fixArticleImage = (article) => {
  if (!article) return article;
  
  let fixedArticle = { ...article };
  
  // المقالات الثمانية المحددة - تعيين الصورة مباشرة من /images/blog
  const highPriorityArticles = {
    'moving-within-riyadh-guide': '/images/blog/moving_within_riyadh_guide.jpeg',
    'top-riyadh-neighborhoods-families-singles-guide': '/images/blog/top_riyadh_neighborhoods_families_singles_guide.jpeg',
    'riyadh-storage-solutions-cost-options-benefits': '/images/blog/riyadh_storage_solutions_cost_options_benefits.jpeg',
    'best-furniture-packing-methods-protection-moving': '/images/blog/best_furniture_packing_methods_protection_moving.jpeg',
    'disassembly-assembly-bedrooms-kitchens-services': '/images/blog/furniture_disassembly_assembly_services_importance_choosing.jpeg',
    'long-term-furniture-storage-guide-protection': '/images/blog/expert_tips_long_term_furniture_storage.jpeg',
    'comprehensive-moving-checklist-before-during-after': '/images/blog/comprehensive_moving_checklist_before_during_after.jpeg',
    'moving-furniture-riyadh-jeddah-steps-costs-tips': '/images/blog/moving_furniture_riyadh_jeddah_steps_costs_tips.jpeg'
  };
  
  if (article.slug && highPriorityArticles.hasOwnProperty(article.slug)) {
    // تعيين المسار مباشرة إلى الملف في مجلد /images/blog
    console.log(`[fixArticleImage] تعيين صورة ذات أولوية عالية للمقال: ${article.slug}`);
    fixedArticle.image = highPriorityArticles[article.slug];
    return fixedArticle;
  }
  
  // إذا لم تكن هناك صورة، قم بإعادة تعيينها
  if (!article.image || article.image === '') {
    fixedArticle.image = getImagePathFromSlug(article.slug);
    return fixedArticle;
  }
  
  // إذا كانت الصورة موجودة ولكن تحتاج إلى إصلاح المسار
  let imagePath = article.image;
  
  // إذا كان المسار يبدأ بـ /public/، قم بإزالته
  if (imagePath.startsWith('/public/') && !imagePath.startsWith('http')) {
    imagePath = imagePath.replace('/public', '');
    console.log(`[fixArticleImages] تمت إزالة /public/ من المسار: ${imagePath}`);
  }
  
  // إذا كانت الصورة لا تحتوي على مسار كامل
  if (!imagePath.startsWith('/') && !imagePath.startsWith('http')) {
    imagePath = `/images/blog/${imagePath}`;
    console.log(`[fixArticleImages] تمت إضافة بادئة المسار: ${imagePath}`);
  }
  
  fixedArticle.image = imagePath;
  return fixedArticle;
};

/**
 * إصلاح مسارات الصور لمصفوفة من المقالات
 * @param {Array} articlesArray - مصفوفة المقالات
 * @returns {Array} - مصفوفة المقالات مع الصور المصححة
 */
export const fixArticlesImages = (articlesArray) => {
  if (!Array.isArray(articlesArray)) return [];
  
  return articlesArray.map(article => fixArticleImage(article));
};

/**
 * Arregla las rutas de imágenes en los artículos
 * @param {Array} articles - Lista de artículos
 * @returns {Array} - Lista de artículos con rutas de imágenes corregidas
 */
export const fixArticleImages = (articles) => {
  if (!articles || !Array.isArray(articles)) return [];
  
  return articles.map(article => {
    if (!article) return article;
    
    // Normalizar la ruta de la imagen principal
    const fixedImage = normalizeImagePath(article.image);
    
    // Normalizar la ruta de la imagen del autor
    const fixedAuthorImage = normalizeImagePath(article.authorImage);
    
    // Devolver el artículo con las rutas corregidas
    return {
      ...article,
      image: fixedImage,
      authorImage: fixedAuthorImage
    };
  });
};

export default {
  getImagePathFromSlug,
  fixArticleImage,
  fixArticlesImages
}; 