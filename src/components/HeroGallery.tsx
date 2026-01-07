import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { GalleryImage } from '../data/siteContent';

interface HeroGalleryProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  images: GalleryImage[];
}

export function HeroGallery({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  images,
}: HeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
              index === currentIndex ? 'scale-105' : 'scale-100'
            }`}
            onLoad={() => index === 0 && setIsLoaded(true)}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-4 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wider mb-4">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-8">
          {subheadline}
        </p>
        <Link
          to={ctaLink}
          className="px-8 py-3 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          {ctaText}
        </Link>
      </div>

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs tracking-widest rotate-90 origin-center mb-8">
            SCROLL
          </span>
          <div className="w-px h-16 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
