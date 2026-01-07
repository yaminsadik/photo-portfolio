import { useState } from 'react';
import type { GalleryImage } from '../data/siteContent';
import { LightboxModal } from './LightboxModal';

interface ImageGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'auto' | 'mixed';
}

export function ImageGrid({ images, columns = 3, aspectRatio = 'portrait' }: ImageGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  const aspectClass = {
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square',
    auto: '',
    mixed: '',
  };

  // Bento grid: landscape images span 2 columns, others span 1
  if (aspectRatio === 'mixed') {
    return (
      <>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`group relative overflow-hidden bg-gray-100 cursor-pointer ${
                image.isLandscape ? 'col-span-2 aspect-[3/2]' : 'col-span-1 aspect-square'
              }`}
              onClick={() => handleImageClick(index)}
            >
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}

              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(index)}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <LightboxModal
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </>
    );
  }

  // Use masonry-style columns layout for auto aspect ratio
  if (aspectRatio === 'auto') {
    return (
      <>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative mb-4 md:mb-6 overflow-hidden bg-gray-100 cursor-pointer break-inside-avoid"
              onClick={() => handleImageClick(index)}
            >
              {/* Loading placeholder */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}

              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(index)}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <LightboxModal
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </>
    );
  }

  return (
    <>
      <div className={`grid ${columnClass[columns]} gap-4 md:gap-6`}>
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`group relative ${aspectClass[aspectRatio]} overflow-hidden bg-gray-100 cursor-pointer`}
            onClick={() => handleImageClick(index)}
          >
            {/* Loading placeholder */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(index)}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <LightboxModal
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
}
