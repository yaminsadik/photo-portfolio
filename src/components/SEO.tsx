/**
 * @file SEO.tsx
 * @description Reusable SEO component for per-page meta tags.
 * Uses react-helmet-async to inject title, meta description,
 * Open Graph, Twitter Card, and canonical link into <head>.
 */
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://photo-portfolio-grri.onrender.com";
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
    <Helmet>
      {/* Primary */}
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
