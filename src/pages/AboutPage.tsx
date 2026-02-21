/**
 * @file AboutPage.tsx
 * @description About page — photographer bio, portrait image, and stats.
 */
import { AboutSection, SEO } from "../components";
import { aboutContent } from "../data/siteContent";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sadik Visuals",
    url: "https://photo-portfolio-grri.onrender.com/about",
    image:
      "https://photo-portfolio-grri.onrender.com/images/about/photographer.jpg",
    description:
      "Professional photographer with 8+ years of experience based in St. Louis, MO. Specialising in candid portraits, lifestyle, and documentary photography. 200+ stories captured, 150+ happy clients.",
    jobTitle: "Professional Photographer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Louis",
      addressRegion: "MO",
      addressCountry: "US",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Photographer",
      description:
        "Creates visual narratives through candid, environmental, and lifestyle photography.",
      occupationLocation: {
        "@type": "City",
        name: "St. Louis",
      },
    },
  },
};

/**
 * Route: `/about`
 *
 * Renders a page header and the {@link AboutSection} component populated
 * with data from {@link aboutContent} in `siteContent.ts`.
 */
export function AboutPage() {
  return (
    <main className="pt-20">
      <SEO
        title="About – The Story Behind the Lens"
        description="Meet the photographer behind Sadik Visuals. 8+ years of experience, 200+ stories captured, 150+ happy clients. Based in St. Louis, MO, specialising in candid, lifestyle, and documentary photography."
        path="/about"
        image="https://photo-portfolio-grri.onrender.com/images/about/photographer.jpg"
        jsonLd={aboutJsonLd}
      />
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-gray-900">
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
