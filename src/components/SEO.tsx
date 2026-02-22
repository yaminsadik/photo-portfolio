/**
 * @file SEO.tsx
 * @description Reusable SEO component for per-page meta tags.
 * Uses React 19's built-in document metadata hoisting — no external
 * library needed. React 19 automatically moves <title>, <meta>, and
 * <link> elements rendered in components up into <head>.
 */

const SITE_URL = "https://sadikvisuals.vercel.app";
const SITE_NAME = "Sadik Visuals";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero/hero-1.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Relative path, e.g. '/about'. Defaults to '/'. */
  path?: string;
  /** Absolute URL of the OG image. Defaults to hero image. */
  image?: string;
  /** Schema.org JSON-LD object. Pass null to omit. */
  jsonLd?: object | null;
}

export function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd,
}: SEOProps) {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <>
      {/* Primary — React 19 hoists these to <head> automatically */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  );
}
