import { useState } from 'react';
import { GallerySection } from '../components';
import { gallerySections } from '../data/siteContent';

export function WorkPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const filteredSections = activeSection
    ? gallerySections.filter((s) => s.id === activeSection)
    : gallerySections;

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-4">
            Selected Work
          </h1>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            A curated collection of photographs capturing life's authentic moments.
          </p>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection(null)}
              className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                activeSection === null
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 text-gray-600 hover:border-gray-900'
              }`}
            >
              All
            </button>
            {gallerySections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'border border-gray-300 text-gray-600 hover:border-gray-900'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {filteredSections.map((section) => (
        <GallerySection key={section.id} section={section} columns={3} />
      ))}
    </main>
  );
}
