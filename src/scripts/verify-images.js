/**
 * Image verification script
 * 
 * This script verifies that all image paths in articles.md exist in the public/images directory
 * It helps identify any mismatched or missing images
 */
import fs from 'fs';
import path from 'path';

// Paths
const ARTICLES_PATH = './articles.md';
const IMAGES_DIR = './public/images/blog';

// Read the articles file
const readArticles = () => {
  try {
    const content = fs.readFileSync(ARTICLES_PATH, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading articles file: ${error.message}`);
    return '';
  }
};

// Extract image paths from articles content
const extractImagePaths = (content) => {
  const imagePaths = [];
  const regex = /Image: (\/images\/blog\/[^\n]+)/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    imagePaths.push(match[1]);
  }
  
  return imagePaths;
};

// List all images in the directory
const listActualImages = () => {
  try {
    return fs.readdirSync(IMAGES_DIR);
  } catch (error) {
    console.error(`Error reading images directory: ${error.message}`);
    return [];
  }
};

// Check if image exists in the directory
const imageExists = (imagePath, actualImages) => {
  // Extract the filename from the path
  const filename = path.basename(imagePath);
  
  // Check if the file exists as is
  if (actualImages.includes(filename)) {
    return { exists: true, path: filename };
  }
  
  // Check with hyphen/underscore conversion
  const alternateFilename = filename.includes('-') 
    ? filename.replace(/-/g, '_')
    : filename.replace(/_/g, '-');
    
  if (actualImages.includes(alternateFilename)) {
    return { exists: true, path: alternateFilename };
  }
  
  // Check with extension variants
  const filenameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  const jpgVariant = `${filenameWithoutExt}.jpg`;
  const jpegVariant = `${filenameWithoutExt}.jpeg`;
  
  if (actualImages.includes(jpgVariant)) {
    return { exists: true, path: jpgVariant };
  }
  
  if (actualImages.includes(jpegVariant)) {
    return { exists: true, path: jpegVariant };
  }
  
  return { exists: false, path: filename };
};

// Main verification function
const verifyImages = () => {
  // Read the articles content
  const content = readArticles();
  if (!content) return;
  
  // Extract all image paths
  const imagePaths = extractImagePaths(content);
  console.log(`Found ${imagePaths.length} image paths in articles.md`);
  
  // List actual images in the directory
  const actualImages = listActualImages();
  console.log(`Found ${actualImages.length} actual image files in ${IMAGES_DIR}`);
  
  // Check each image path
  let missingCount = 0;
  imagePaths.forEach(imagePath => {
    const result = imageExists(imagePath, actualImages);
    
    if (result.exists) {
      const isExactMatch = path.basename(imagePath) === result.path;
      if (!isExactMatch) {
        console.log(`✓ Image exists but with different name/format: ${imagePath} → ${result.path}`);
      } else {
        console.log(`✓ Image exists: ${imagePath}`);
      }
    } else {
      console.error(`✗ Image missing: ${imagePath}`);
      missingCount++;
    }
  });
  
  console.log('\nSummary:');
  console.log(`Total images referenced: ${imagePaths.length}`);
  console.log(`Missing images: ${missingCount}`);
  console.log(`Success rate: ${Math.round(((imagePaths.length - missingCount) / imagePaths.length) * 100)}%`);
};

// Run the verification
verifyImages(); 