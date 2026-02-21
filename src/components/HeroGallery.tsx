/**
 * @file HeroGallery.tsx
 * @description Full-screen hero slideshow component displayed at the top of the Home page.
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { GalleryImage } from "../data/siteContent";

/**
 * Props for the {@link HeroGallery} component.
 */
interface HeroGalleryProps {
  /** Main headline displayed over the hero image (large white text). */
  headline: string;
  /** Supporting sentence rendered below the headline. */
  subheadline: string;
  /** Label for the call-to-action button. */
  ctaText: string;
  /** React Router path the CTA button navigates to. */
  ctaLink: string;
  /** Ordered list of images for the slideshow. Auto-advances every 5 seconds. */
  images: GalleryImage[];
}

/**
 * Full-screen auto-rotating image slideshow used as the site hero.
 *
 * Features:
 * - Background images cross-fade with a 1 s CSS transition.
 * - The active image applies a slow Ken Burns scale animation (10 s).
 * - Dot indicators at the bottom allow manual slide selection.
 * - A "SCROLL" indicator is shown in the bottom-right corner on desktop.
 * - Overlay text and CTA fade in after the first image loads.
 *
 * @example
 * ```tsx
 * <HeroGallery
 *   headline="Visual Stories"
 *   subheadline="Photography that captures..."
 *   ctaText="View Work"
 *   ctaLink="/work"
 *   images={heroContent.images}
 * />
 * ```
 */
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
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
              index === currentIndex ? "scale-105" : "scale-100"
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
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light italic tracking-wide mb-4">
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
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50">
        <span className="text-[10px] tracking-widest uppercase mb-1">Scroll</span>
        <svg
          className="w-5 h-5 scroll-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
