import React from 'react';
import Image from 'next/image';

// Local fallback images for offline use
const FALLBACK_IMAGES = [
  '/assets/new_launches/pcw.jpg',
  '/assets/new_launches/kids.png', 
  '/assets/new_launches/neronew.png',
  '/assets/new_launches/vistanew.png',
  '/assets/new_launches/AneliaBlack.png',
  '/assets/new_launches/marker_blue.png',
  '/assets/new_launches/Outline-Marker-Purple.png',
  '/assets/new_launches/Broadtip Marker.png',
  '/assets/new_launches/Fineliner.png',
  '/assets/new_launches/Elan.png',
];

export const getOfflineImage = (index = 0) => {
  return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
};

export const isOffline = () => {
  return !navigator.onLine || typeof window === 'undefined';
};

export const OfflineImage = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [useFallback, setUseFallback] = React.useState(false);

  React.useEffect(() => {
    // Check if offline or if image fails to load
    if (isOffline() || useFallback) {
      setImgSrc(getOfflineImage(0));
      setUseFallback(true);
    }
  }, [useFallback]);

  const handleError = () => {
    if (!useFallback) {
      setUseFallback(true);
      setImgSrc(getOfflineImage(Math.floor(Math.random() * FALLBACK_IMAGES.length)));
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};
