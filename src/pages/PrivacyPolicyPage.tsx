import { privacyPolicyContent } from '../data/siteContent';

export function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900 mb-8">
            {privacyPolicyContent.title}
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last updated: {privacyPolicyContent.lastUpdated}
          </p>

          <div className="prose prose-gray max-w-none">
            {privacyPolicyContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-medium text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
