/**
 * Utility to fix article image paths to match actual file extensions
 */

/**
 * Updates article image paths to match the correct file extension based on what's available
 * @param {Array} articles - The array of article objects
 * @returns {Array} The updated array of articles with corrected image paths
 */
export const fixArticleImages = (articles) => {
  if (!articles || !Array.isArray(articles)) {
    console.error('Invalid articles array provided to fixArticleImages');
    return articles;
  }

  // List of known jpg files that shouldn't be converted to jpeg
  const knownJpgFiles = [
    'diy_furniture_packing_tips_professional_guide.jpg',
    'best_movers_riyadh_guide_criteria_pricing.jpg', 
    'latest_technology_moving_companies_asset_safety.jpg', 
    'decluttering_before_move_save_costs.jpg', 
    'customer_rights_moving_companies_saudi_arabia.jpg', 
    'default-blog-post.jpg'
  ];
  
  // List of all image files we know to exist in the blog directory
  // This improves matching for available files
  const knownImageFiles = [
    // Files with .jpg extension
    ...knownJpgFiles,
    // Files with .jpeg extension
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
    'moving_to_makkah_madinah_special_considerations.jpeg'
  ];
  
  // Create a lookup map between slug and image file
  const slugToImageMap = {};
  
  // Process the known image files to build the slug-to-image mapping
  knownImageFiles.forEach(filename => {
    // Extract the base name without extension
    const baseFilename = filename.substring(0, filename.lastIndexOf('.'));
    
    // Create mappings for both dash and underscore versions
    const dashVersion = baseFilename.replace(/_/g, '-');
    const underscoreVersion = baseFilename.replace(/-/g, '_');
    
    slugToImageMap[dashVersion] = filename;
    slugToImageMap[underscoreVersion] = filename;
  });

  return articles.map(article => {
    if (!article.image) {
      // Try to create an image path based on the slug if available
      if (article.slug) {
        const slugBasedFilename = article.slug.replace(/-/g, '_');
        const potentialImage = `/images/blog/${slugBasedFilename}.jpeg`;
        console.log(`[fixArticleImages] Created image from slug: ${potentialImage}`);
        article = { ...article, image: potentialImage };
      } else {
        return article;
      }
    }
    
    // Check if image path needs fixing
    let updatedImage = article.image;
    let changed = false;
    
    // Remove "/public/" prefix if present
    if (updatedImage.includes('/public/')) {
      updatedImage = updatedImage.replace('/public/', '/');
      console.log(`[fixArticleImages] Removed /public/ prefix: ${updatedImage}`);
      changed = true;
    }
    
    // Ensure path starts with a slash
    if (!updatedImage.startsWith('/') && !updatedImage.startsWith('http')) {
      updatedImage = '/' + updatedImage;
      console.log(`[fixArticleImages] Added leading slash: ${updatedImage}`);
      changed = true;
    }
    
    // If using /blob/ instead of /blog/ path (common typo)
    if (updatedImage.includes('/blob/')) {
      const oldPath = updatedImage;
      updatedImage = updatedImage.replace('/blob/', '/blog/');
      console.log(`[fixArticleImages] Fixed blob to blog path: ${oldPath} → ${updatedImage}`);
      changed = true;
    }
    
    // Ensure all blog images have /images/blog/ prefix
    if (updatedImage.includes('/blog/') && !updatedImage.includes('/images/blog/')) {
      updatedImage = updatedImage.replace('/blog/', '/images/blog/');
      console.log(`[fixArticleImages] Added proper /images/ prefix: ${updatedImage}`);
      changed = true;
    }
    
    // Extract filename from path
    const lastSlashIndex = updatedImage.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
      const basePath = updatedImage.substring(0, lastSlashIndex + 1);
      let fileName = updatedImage.substring(lastSlashIndex + 1);
      const extension = fileName.substring(fileName.lastIndexOf('.'));
      const baseFileName = fileName.substring(0, fileName.lastIndexOf('.'));
      
      // Try to get the correct filename from the slug-to-image map
      const slugKey = article.slug ? article.slug.replace(/-/g, '_') : baseFileName.replace(/-/g, '_');
      if (slugToImageMap[slugKey]) {
        const correctedFileName = slugToImageMap[slugKey];
        if (correctedFileName !== fileName) {
          updatedImage = `${basePath}${correctedFileName}`;
          console.log(`[fixArticleImages] Used known image file for ${slugKey}: ${correctedFileName}`);
          changed = true;
        }
      } else {
        // IMPORTANT: Our image files use .jpeg extension and underscore naming
        // Convert jpg to jpeg if it's not a jpg file known to exist
        if (fileName.endsWith('.jpg') && !knownJpgFiles.includes(fileName)) {
          const oldPath = updatedImage;
          updatedImage = updatedImage.replace('.jpg', '.jpeg');
          console.log(`[fixArticleImages] Converted extension: ${oldPath} → ${updatedImage}`);
          changed = true;
        }
        
        // Convert dashes to underscores in filename (this is crucial)
        if (fileName.includes('-') && !fileName.includes('default-blog-post')) {
          const oldFileName = fileName;
          const convertedFileName = fileName.replace(/-/g, '_');
          updatedImage = basePath + convertedFileName;
          console.log(`[fixArticleImages] Converted dashes to underscores: ${oldFileName} → ${convertedFileName}`);
          changed = true;
        }
      }
    }
    
    // Log changes if the image path was updated
    if (changed) {
      console.log(`[fixArticleImages] Updated path: "${article.image}" → "${updatedImage}"`);
    }
    
    return {
      ...article,
      image: updatedImage
    };
  });
};

export default fixArticleImages; 