/**
 * @file ContactPage.tsx
 * @description Contact page — photographer contact details and social links.
 */
import { ContactSection, SEO } from "../components";
import { contactContent } from "../data/siteContent";

/**
 * Route: `/contact`
 *
 * Renders a page header and the {@link ContactSection} component populated
 * with data from {@link contactContent} in `siteContent.ts`.
 */
export function ContactPage() {
  return (
    <main className="pt-20">
      <SEO
        title="Contact – Book a Photography Session"
        description="Get in touch with Sadik Visuals. Based in St. Louis, MO. Currently accepting bookings for 2026. Reach out to discuss your portrait, lifestyle, or documentary photography project."
        path="/contact"
      />
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-gray-900">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <ContactSection
        title={contactContent.title}
        subtitle={contactContent.subtitle}
        description={contactContent.description}
        email={contactContent.email}
        phone={contactContent.phone}
        location={contactContent.location}
        availability={contactContent.availability}
        socialLinks={contactContent.socialLinks}
      />
    </main>
  );
}
