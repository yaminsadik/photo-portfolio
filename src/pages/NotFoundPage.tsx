/**
 * @file NotFoundPage.tsx
 * @description 404 Not Found page — shown for any unmatched route.
 */
import { Link } from "react-router-dom";
import { siteMetadata } from "../data/siteContent";

/**
 * Route: `*` (catch-all)
 *
 * A branded full-screen 404 page maintaining the site's minimal aesthetic.
 */
export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4">
      <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">
        404 — Page Not Found
      </p>
      <h1 className="text-6xl md:text-8xl font-serif font-light italic text-white mb-8">
        {siteMetadata.name}
      </h1>
      <p className="text-gray-400 font-light mb-12 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-3 border border-white/30 text-white/70 text-sm tracking-wider hover:border-white hover:text-white transition-all duration-300"
      >
        Back to Home
      </Link>
    </main>
  );
}
