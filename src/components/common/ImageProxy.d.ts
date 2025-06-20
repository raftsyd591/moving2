import React from 'react';

interface ImageProxyProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string[];
  defaultSrc?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

declare const ImageProxy: React.FC<ImageProxyProps>;

export default ImageProxy; 