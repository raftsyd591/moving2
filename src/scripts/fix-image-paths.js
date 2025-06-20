/**
 * Image path correction script
 * 
 * This script automatically fixes all image paths in articles.md to match 
 * the actual files in the public/images/blog directory
 */
import fs from 'fs';
import path from 'path';

// Paths
const ARTICLES_PATH = './articles.md';
const IMAGES_DIR = './public/images/blog';
const BACKUP_PATH = './articles.md.bak';

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

// List all images in the directory
const listActualImages = () => {
  try {
    return fs.readdirSync(IMAGES_DIR);
  } catch (error) {
    console.error(`Error reading images directory: ${error.message}`);
    return [];
  }
};

// Find the closest match for an image path
const findClosestMatch = (imagePath, actualImages) => {
  // Extract the filename from the path
  const filename = path.basename(imagePath);
  const filenameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
  
  // First check: exact match
  if (actualImages.includes(filename)) {
    return filename;
  }
  
  // Second check: underscore variant
  const underscoreVariant = filenameWithoutExt.replace(/-/g, '_');
  
  // Try different extensions with underscore variant
  const jpgUnderscoreVariant = `${underscoreVariant}.jpg`;
  const jpegUnderscoreVariant = `${underscoreVariant}.jpeg`;
  
  if (actualImages.includes(jpgUnderscoreVariant)) {
    return jpgUnderscoreVariant;
  }
  
  if (actualImages.includes(jpegUnderscoreVariant)) {
    return jpegUnderscoreVariant;
  }
  
  // Third check: hyphen variant
  const hyphenVariant = filenameWithoutExt.replace(/_/g, '-');
  
  // Try different extensions with hyphen variant
  const jpgHyphenVariant = `${hyphenVariant}.jpg`;
  const jpegHyphenVariant = `${hyphenVariant}.jpeg`;
  
  if (actualImages.includes(jpgHyphenVariant)) {
    return jpgHyphenVariant;
  }
  
  if (actualImages.includes(jpegHyphenVariant)) {
    return jpegHyphenVariant;
  }
  
  // No match found
  return null;
};

// Fix image paths in content
const fixImagePaths = (content, actualImages) => {
  // Create a backup of the original file
  fs.writeFileSync(BACKUP_PATH, content, 'utf8');
  console.log(`Created backup at ${BACKUP_PATH}`);
  
  // Find and replace all image paths
  let fixedContent = content;
  const regex = /Image: (\/images\/blog\/[^\n]+)/g;
  let match;
  let fixCount = 0;
  let errorCount = 0;
  
  // Collect all replacements first to avoid regex issues with overlapping matches
  const replacements = [];
  
  while ((match = regex.exec(content)) !== null) {
    const fullMatch = match[0];
    const imagePath = match[1];
    const filename = path.basename(imagePath);
    
    // Find the closest match
    const correctFilename = findClosestMatch(imagePath, actualImages);
    
    if (correctFilename) {
      if (correctFilename !== filename) {
        const correctPath = `/images/blog/${correctFilename}`;
        const newText = `Image: ${correctPath}`;
        
        replacements.push({
          original: fullMatch,
          replacement: newText
        });
        
        console.log(`Will fix: ${filename} → ${correctFilename}`);
        fixCount++;
      }
    } else {
      console.error(`No match found for: ${filename}`);
      errorCount++;
    }
  }
  
  // Apply all replacements
  replacements.forEach(({ original, replacement }) => {
    fixedContent = fixedContent.replace(original, replacement);
  });
  
  // Write the fixed content
  fs.writeFileSync(ARTICLES_PATH, fixedContent, 'utf8');
  
  return { fixCount, errorCount };
};

// Main function
const main = () => {
  // Read the articles content
  const content = readArticles();
  if (!content) return;
  
  // List actual images
  const actualImages = listActualImages();
  console.log(`Found ${actualImages.length} images in ${IMAGES_DIR}`);
  
  // Fix image paths
  const { fixCount, errorCount } = fixImagePaths(content, actualImages);
  
  // Summary
  console.log('\nSummary:');
  console.log(`Fixed paths: ${fixCount}`);
  console.log(`Could not fix: ${errorCount}`);
  console.log(`Done! Check ${ARTICLES_PATH} for the updated content.`);
};

// Run the script
main(); 