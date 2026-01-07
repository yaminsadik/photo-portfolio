import { Link } from 'react-router-dom';
import { HeroGallery, ImageGrid } from '../components';
import {
  heroContent,
  homePageFeatured,
  gallerySections,
} from '../data/siteContent';

export function HomePage() {
  // Get featured images either from manual selection or from a gallery section
  const featuredImages = homePageFeatured.useManualSelection
    ? homePageFeatured.manualSelection
    : gallerySections.find((s) => s.id === homePageFeatured.featuredSectionId)?.images || [];

  return (
    <main>
      {/* Hero Section */}
      <HeroGallery
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        ctaText={heroContent.ctaText}
        ctaLink={heroContent.ctaLink}
        images={heroContent.images}
      />

      {/* Featured Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-4">
              {homePageFeatured.sectionTitle}
            </h2>
            <p className="text-gray-600 font-light">
              {homePageFeatured.sectionSubtitle}
            </p>
          </div>

          {/* Image Grid */}
          <ImageGrid images={featuredImages} columns={3} aspectRatio="mixed" />

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/work"
              className="inline-block px-8 py-3 border border-gray-900 text-gray-900 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
