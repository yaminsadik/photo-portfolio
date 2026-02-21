/**
 * @file App.tsx
 * @description Root application component.
 *
 * Wraps the application in a {@link BrowserRouter} and defines the top-level
 * route tree. The {@link Navbar} is rendered above all routes and the
 * {@link Footer} below, so both appear on every page.
 *
 * All content props (site name, nav links, footer text) are sourced from
 * {@link siteContent} so no changes to this file are needed for routine
 * content updates.
 */
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  HomePage,
  WorkPage,
  AboutPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  NotFoundPage,
} from "./pages";
import { siteMetadata, navigation, footerContent } from "./data/siteContent";

/** Scrolls to top of page on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Inner layout component that consumes the router context.
 * Applies a per-route fade-in animation by keying the content wrapper
 * on `location.key`.
 */
function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar siteName={siteMetadata.name} links={navigation} />

      <div key={location.key} className="flex-1 page-fade-in">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer
        siteName={siteMetadata.name}
        copyright={siteMetadata.copyright}
        text={footerContent.text}
        links={footerContent.links}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
