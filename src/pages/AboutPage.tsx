import { AboutSection } from '../components';
import { aboutContent } from '../data/siteContent';

export function AboutPage() {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
            About
          </h1>
        </div>
      </section>

      {/* About Content */}
      <AboutSection
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
        paragraphs={aboutContent.paragraphs}
        image={aboutContent.image}
        imageAlt={aboutContent.imageAlt}
        stats={aboutContent.stats}
      />
    </main>
  );
}
