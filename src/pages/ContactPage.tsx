import { ContactSection } from '../components';
import { contactContent } from '../data/siteContent';

export function ContactPage() {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
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
