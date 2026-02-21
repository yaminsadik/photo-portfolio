/**
 * @file WorkPage.tsx
 * @description Work / portfolio page — displays all gallery sections with a
 * category filter toolbar.
 */
import { useState } from "react";
import { GallerySection, SEO } from "../components";
import { gallerySections } from "../data/siteContent";

/**
 * Route: `/work`
 *
 * Renders a page header, a set of category filter buttons (one per
 * {@link GallerySection}), and the filtered gallery sections.
 *
 * Selecting "All" resets the filter and shows every section.
 * Selecting a category label shows only that section's image grid.
 */
export function WorkPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const filteredSections = activeSection
    ? gallerySections.filter((s) => s.id === activeSection)
    : gallerySections;

  const totalImages = gallerySections.reduce(
    (sum, s) => sum + s.images.length,
    0,
  );

  const handleFilterChange = (id: string | null) => {
    if (id === activeSection) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveSection(id);
      setIsVisible(true);
    }, 180);
  };

  return (
    <main className="pt-20">
      <SEO
        title="Selected Work – Photography Portfolio"
        description="Browse Sadik Visuals' full photography portfolio. Portraits, landscapes, and documentary photography from St. Louis, MO. Candid, environmental, and lifestyle work."
        path="/work"
      />
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-gray-900 mb-4">
            Selected Work
          </h1>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            A curated collection of photographs capturing life's authentic
            moments.
          </p>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleFilterChange(null)}
              className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                activeSection === null
                  ? "bg-gray-900 text-white"
                  : "border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              All
              <span
                className={`ml-2 text-xs ${
                  activeSection === null ? "text-white/60" : "text-gray-400"
                }`}
              >
                ({totalImages})
              </span>
            </button>
            {gallerySections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleFilterChange(section.id)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {section.title}
                <span
                  className={`ml-2 text-xs ${
                    activeSection === section.id
                      ? "text-white/60"
                      : "text-gray-400"
                  }`}
                >
                  ({section.images.length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <div
        className="transition-opacity duration-200"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {filteredSections.map((section) => (
          <GallerySection key={section.id} section={section} columns={3} />
        ))}
      </div>
    </main>
  );
}
