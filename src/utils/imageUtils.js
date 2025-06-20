/**
 * Utility functions for handling image paths in the blog
 */

/**
 * Gets the blog post image path based on slug
 * @param {string} slug - The blog post slug
 * @param {string} extension - Optional image extension (defaults to jpg)
 * @returns {string} The complete image path
 */
export const getBlogImagePath = (slug, extension = 'jpg') => {
  return `/images/blog/${slug}.${extension}`;
};

/**
 * Corrects image paths by trying alternative file extensions if the original fails to load
 * @param {string} imagePath - Original image path
 * @param {Function} handleImageLoad - Callback when image loads successfully
 * @returns {string} The correct image path
 */
export const correctImagePath = (imagePath) => {
  // If image path has jpeg extension, try jpg as fallback and vice versa
  if (imagePath.endsWith('.jpg')) {
    const jpegPath = imagePath.replace('.jpg', '.jpeg');
    return jpegPath;
  } else if (imagePath.endsWith('.jpeg')) {
    const jpgPath = imagePath.replace('.jpeg', '.jpg');
    return jpgPath;
  }
  
  // If it doesn't have a recognized extension, return default
  return '/images/blog/default-blog-post.jpg';
};

/**
 * Converts between hyphen and underscore in file names
 * @param {string} path - The image path
 * @returns {string} - The path with converted separators
 */
export const convertFileSeparators = (path) => {
  // Skip if path is not a string or empty
  if (!path || typeof path !== 'string') {
    return path;
  }
  
  // Extract the file name part
  const lastSlashIndex = path.lastIndexOf('/');
  if (lastSlashIndex === -1) {
    return path;
  }
  
  const basePath = path.substring(0, lastSlashIndex + 1);
  const fileName = path.substring(lastSlashIndex + 1);
  
  // Always convert hyphens to underscores as our actual files use underscores
  if (fileName.includes('-')) {
    return basePath + fileName.replace(/-/g, '_');
  }
  
  return path;
};

/**
 * Gets the correct blog image URL with proper extension
 * @param {string} imageUrl - The original image URL from article data
 * @returns {string} - The URL with the correct extension
 */
export const getCorrectBlogImageUrl = (imageUrl) => {
  // If image URL is not defined or empty, return default
  if (!imageUrl) {
    console.warn('No image URL provided, using default');
    return '/images/blog/default-blog-post.jpg';
  }
  
  // Make a copy of the original URL for logging changes
  const originalUrl = imageUrl;
  
  // Fix common URL issues
  
  // Remove any "/public" prefix that might be in the URL
  // This is a common error when paths are built incorrectly
  if (imageUrl.includes('/public/')) {
    console.warn(`Found /public/ prefix in image URL: ${imageUrl}`);
    imageUrl = imageUrl.replace('/public/', '/');
    console.log(`Removed /public/ prefix: ${imageUrl}`);
  }
  
  // Fix any '/blob/' used instead of '/blog/' - common typo
  if (imageUrl.includes('/blob/')) {
    console.warn(`Found /blob/ instead of /blog/ in image URL: ${imageUrl}`);
    imageUrl = imageUrl.replace('/blob/', '/blog/');
    console.log(`Fixed blob to blog: ${imageUrl}`);
  }
  
  // Handle paths that don't start with slash
  if (imageUrl.charAt(0) !== '/' && !imageUrl.startsWith('http')) {
    console.warn(`Image URL missing leading slash: ${imageUrl}`);
    imageUrl = '/' + imageUrl;
    console.log(`Added leading slash: ${imageUrl}`);
  }
  
  // Generate all possible path variations
  const pathVariations = convertFileSeparators(imageUrl);
  console.log(`Generated ${pathVariations.length} path variations for ${imageUrl}`);
  
  // Return the first path in our variations list (original or fixed path)
  // The BlogPostCard component will handle trying all variations if the first one fails
  return pathVariations[0];
};

/**
 * Gets the author image path based on author name
 * @param {string} authorName - The author's name
 * @returns {string} The complete author image path
 */
export const getAuthorImagePath = (authorName) => {
  // Convert spaces to underscores for file path
  const authorSlug = authorName.replace(/\s+/g, '_');
  return `/images/authors/${authorSlug}.png`;
};

/**
 * Checks if an image exists at the given path
 * @param {string} imagePath - The image path to check
 * @returns {Promise<boolean>} Whether the image exists
 */
export const imageExists = async (imagePath) => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking image existence:', error);
    return false;
  }
};

/**
 * Gets a fallback image path if the primary image is not available
 * @param {string} type - The type of image ('blog' or 'author')
 * @returns {string} The fallback image path
 */
export const getFallbackImagePath = (type) => {
  if (type === 'author') {
    return '/images/authors/default-author.png';
  }
  return '/images/blog/default-blog-post.jpg';
};