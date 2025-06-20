import React, { useState, useEffect } from 'react';
import { normalizeImagePath } from '../../utils/imageHelpers';

/**
 * Componente para mostrar imágenes con manejo de fallback automático
 * @param {Object} props - Propiedades del componente
 * @param {string} props.src - URL principal de la imagen
 * @param {string} props.alt - Texto alternativo para la imagen
 * @param {string} [props.className] - Clases CSS para aplicar a la imagen
 * @param {string[]} [props.fallbackSrc] - URLs de respaldo para intentar si la principal falla
 * @param {string} [props.defaultSrc] - URL de imagen por defecto final si todas fallan
 * @param {number|string} [props.width] - Ancho de la imagen
 * @param {number|string} [props.height] - Alto de la imagen
 */
const ImageProxy = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = [],
  defaultSrc = "/images/blog/default-blog-post.jpeg", 
  width,
  height,
  loading = "lazy",
  ...rest
}) => {
  // Normalizar la URL principal
  const normalizedSrc = normalizeImagePath(src);
  
  // Estado para la URL actual y para rastrear los intentos
  const [currentSrc, setCurrentSrc] = useState(normalizedSrc);
  const [fallbackIndex, setFallbackIndex] = useState(-1);
  const [hasError, setHasError] = useState(false);

  // Depuración - usar JSON.stringify para objetos complejos
  if (process.env.NODE_ENV === 'development') {
    console.log(`[ImageProxy] Rendering image for ${String(alt)}:`, JSON.stringify({
      originalSrc: String(src || ''),
      normalizedSrc: String(normalizedSrc || ''),
      currentSrc: String(currentSrc || ''),
    fallbackIndex,
    hasError,
      availableFallbacks: Array.isArray(fallbackSrc) ? fallbackSrc.map(f => String(f)) : []
    }, null, 2));
  }

  // Efecto para manejar fallbacks cuando cambia la URL principal
  useEffect(() => {
    setCurrentSrc(normalizedSrc);
    setFallbackIndex(-1);
    setHasError(false);
  }, [normalizedSrc]);

  // Función para manejar errores de carga
  const handleError = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[ImageProxy] Error loading image: ${String(currentSrc)}`);
    }
    const nextIndex = fallbackIndex + 1;
    
    // Intentar con la siguiente URL de respaldo
    if (nextIndex < fallbackSrc.length) {
      const nextSrc = normalizeImagePath(fallbackSrc[nextIndex]);
      if (process.env.NODE_ENV === 'development') {
        console.log(`[ImageProxy] Trying fallback #${nextIndex}: ${String(nextSrc)}`);
      }
      setCurrentSrc(nextSrc);
      setFallbackIndex(nextIndex);
    } 
    // Si fallaron todas las URLs de respaldo, usar la imagen por defecto
    else if (!hasError) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[ImageProxy] All fallbacks failed, using default: ${String(defaultSrc)}`);
      }
      setCurrentSrc(defaultSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={String(alt || '')}
      className={className}
      onError={handleError}
      width={width}
      height={height}
      loading={loading}
      {...rest}
    />
  );
};

export default ImageProxy; 