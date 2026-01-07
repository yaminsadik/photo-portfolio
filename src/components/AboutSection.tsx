interface AboutSectionProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  stats?: { label: string; value: string }[];
}

export function AboutSection({
  title,
  subtitle,
  paragraphs,
  image,
  imageAlt,
  stats,
}: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
              {title}
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-8">
              {subtitle}
            </h2>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="mt-12 grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl md:text-3xl font-light text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-wider text-gray-500 uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
