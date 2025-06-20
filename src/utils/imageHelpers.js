/**
 * أدوات مساعدة للتعامل مع الصور
 */

/**
 * إنشاء مسارات صور بديلة بناءً على slug المقال
 * @param {string} articleSlug - الرابط المختصر للمقال
 * @returns {Array} - مصفوفة من مسارات الصور البديلة
 */
export const getAlternativeImagePaths = (articleSlug) => {
  if (!articleSlug) return [];
  
  const safeSlug = articleSlug.replace(/-/g, '_');
  const originalSlug = articleSlug;
  
  // Siempre usar rutas sin /public/ al inicio, accesibles desde el navegador
  return [
    `/images/blog/${safeSlug}.jpeg`,
    `/images/blog/${safeSlug}.jpg`,
    `/images/blog/${originalSlug}.jpeg`,
    `/images/blog/${originalSlug}.jpg`,
    `/images/blog/default-blog-post.jpeg` // Imagen de respaldo final
  ];
};

/**
 * الحصول على المسار البديل الأول للصورة
 * @param {string} articleSlug - الرابط المختصر للمقال
 * @returns {string} - المسار البديل الأول أو قيمة خالية
 */
export const getFirstAlternativeImagePath = (articleSlug) => {
  return getAlternativeImagePaths(articleSlug)[0] || null;
};

/**
 * Normaliza una ruta de imagen para asegurar que sea accesible desde el navegador
 * @param {string} imagePath - Ruta de la imagen
 * @returns {string} - Ruta normalizada
 */
export const normalizeImagePath = (imagePath) => {
  if (!imagePath) return '/images/blog/default-blog-post.jpeg';
  
  // Eliminar '/public' de las rutas si existe
  return imagePath.replace(/^\/public/, '');
};

/**
 * Verifica si una ruta de imagen es accesible desde el navegador
 * @param {string} imagePath - Ruta de la imagen
 * @returns {boolean} - true si la ruta es válida
 */
export const isValidImagePath = (imagePath) => {
  if (!imagePath) return false;
  
  // Las rutas válidas no deberían comenzar con /public/
  return !imagePath.startsWith('/public/');
};

export default {
  getAlternativeImagePaths,
  getFirstAlternativeImagePath,
  normalizeImagePath,
  isValidImagePath
}; 