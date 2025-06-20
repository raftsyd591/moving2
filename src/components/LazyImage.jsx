import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage component that uses native browser lazy loading
 * without triggering intervention warnings
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder = '/images/placeholder.jpg',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef(null);
  const placeholderRef = useRef(null);

  // Set explicit dimensions to avoid layout shifts
  const imageStyle = {
    width: width || '100%',
    height: height || 'auto',
    display: isLoaded ? 'block' : 'none',
  };

  const placeholderStyle = {
    width: width || '100%',
    height: height || '200px', // Fallback height if not provided
    backgroundColor: '#f0f0f0',
    display: isLoaded ? 'none' : 'block',
  };

  // Handle image load success
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image load error
  const handleError = () => {
    setHasError(true);
    if (imageRef.current && placeholder) {
      imageRef.current.src = placeholder;
    }
  };

  // Use Intersection Observer for better performance
  useEffect(() => {
    // Only observe if the browser supports Intersection Observer
    if ('IntersectionObserver' in window && imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            // When image is about to enter viewport, set the real src
            if (entry.isIntersecting && imageRef.current) {
              // Native lazy loading still works, this just helps with performance
              if (imageRef.current.dataset.src) {
                imageRef.current.src = imageRef.current.dataset.src;
                delete imageRef.current.dataset.src;
              }
              // Stop observing once loaded
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '200px', // Start loading when image is 200px from viewport
          threshold: 0.01
        }
      );
      
      observer.observe(imageRef.current);
      
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }
  }, []);

  return (
    <div className="image-wrapper" style={{ position: 'relative' }}>
      {/* Placeholder */}
      <div 
        ref={placeholderRef}
        className={`image-placeholder ${className}`}
        style={placeholderStyle}
        aria-hidden="true"
      />
      
      {/* Actual image */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        style={imageStyle}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default LazyImage; 