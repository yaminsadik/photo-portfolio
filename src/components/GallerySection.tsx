/**
 * @file GallerySection.tsx
 * @description Wrapper component that renders a titled section header above an {@link ImageGrid}.
 */
import type { GallerySection as GallerySectionType } from "../data/siteContent";
import { ImageGrid } from "./ImageGrid";

/**
 * Props for the {@link GallerySection} component.
 */
interface GallerySectionProps {
  /** The {@link GallerySection} data object sourced from `siteContent`. */
  section: GallerySectionType;
  /**
   * Number of columns in the image grid.
   * @defaultValue `3`
   */
  columns?: 2 | 3 | 4;
}

/**
 * Renders a named gallery section: a centred heading, an optional description,
 * and an {@link ImageGrid} containing the section's images.
 *
 * Used on the Work page to display each category (People, Places, Presence).
 */
export function GallerySection({ section, columns = 3 }: GallerySectionProps) {
  return (
    <section id={section.id} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-4">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              {section.description}
            </p>
          )}
        </div>

        {/* Image Grid */}
        <ImageGrid
          images={section.images}
          columns={columns}
          aspectRatio={section.aspectRatio}
        />
      </div>
    </section>
  );
}
