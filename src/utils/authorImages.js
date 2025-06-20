/**
 * Utility لمعالجة صور المؤلفين
 */

// تحويل اسم المؤلف إلى اسم ملف الصورة
export const getAuthorImageFilename = (authorName) => {
  if (!authorName) return 'default-author.png';
  
  // إزالة الألقاب مثل د. أو م.
  const cleanName = authorName.replace(/^(د\.|م\.|أ\.|المهندس|الدكتور|الأستاذ)\s*/g, '');
  
  // تحويل الاسم إلى تنسيق الملف
  const filename = cleanName
    .trim()
    .replace(/\s+/g, '_') // استبدال المسافات بـ underscore
    .replace(/[^\u0621-\u064A\u0660-\u0669a-zA-Z0-9_]/g, '') // إزالة الأحرف الخاصة
    + '.png';
  
  return filename;
};

// الحصول على مسار صورة المؤلف
export const getAuthorImagePath = (authorName) => {
  const filename = getAuthorImageFilename(authorName);
  return `/images/authors/${filename}`;
};

// خريطة أسماء المؤلفين إلى ملفات الصور
export const authorImageMap = {
  'د. خالد الاقتصادي': 'Mohammed_Alomari.png',
  'م. عبد العزيز الشرقي': 'Fahad_Alotaibi.png',
  'م. سلطان القحطاني': 'Sultan_Alqahtani.png',
  'د. سارة الأحمدي': 'Sara_Alqahtani.png',
  'سارة القحطاني': 'Sara_Alqahtani.png',
  'تركي الحربي': 'Turki_Alharbi.png',
  'فهد العتيبي': 'Fahad_Alotaibi.png',
  'علياء الراشد': 'Alya_Alrashid.png',
  'نورة الشمري': 'Noura_Alshammari.png',
  'ريم السعيد': 'Reem_Alsaeed.png',
  'محمد العمري': 'Mohammed_Alomari.png'
};

// الحصول على صورة المؤلف مع fallback
export const getAuthorImage = (authorName) => {
  if (!authorName) return '/images/authors/default-author.png';
  
  // البحث في الخريطة أولاً
  const mappedImage = authorImageMap[authorName];
  if (mappedImage) {
    return `/images/authors/${mappedImage}`;
  }
  
  // محاولة إنشاء اسم الملف من اسم المؤلف
  const generatedPath = getAuthorImagePath(authorName);
  
  // إرجاع المسار المولد أو الافتراضي
  return generatedPath || '/images/authors/default-author.png';
};

// التحقق من وجود صورة المؤلف
export const checkAuthorImageExists = async (authorName) => {
  const imagePath = getAuthorImage(authorName);
  
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// مكون React لعرض صورة المؤلف
export const AuthorImage = ({ name, className = '', alt = '' }) => {
  const imageSrc = getAuthorImage(name);
  const altText = alt || `صورة ${name}`;
  
  return (
    <img
      src={imageSrc}
      alt={altText}
      className={className}
      onError={(e) => {
        e.target.src = '/images/authors/default-author.png';
      }}
    />
  );
}; 