import type { GallerySection as GallerySectionType } from '../data/siteContent';
import { ImageGrid } from './ImageGrid';

interface GallerySectionProps {
  section: GallerySectionType;
  columns?: 2 | 3 | 4;
}

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
        <ImageGrid images={section.images} columns={columns} aspectRatio={section.aspectRatio} />
      </div>
    </section>
  );
}
