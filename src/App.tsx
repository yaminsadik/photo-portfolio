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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  HomePage,
  WorkPage,
  AboutPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
} from "./pages";
import { siteMetadata, navigation, footerContent } from "./data/siteContent";

/**
 * Root layout component.
 *
 * Renders a full-height flex column containing:
 * - A fixed {@link Navbar} at the top
 * - A flex-growing `<div>` hosting the active {@link Route}
 * - A {@link Footer} at the bottom
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar siteName={siteMetadata.name} links={navigation} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
          </Routes>
        </div>

        <Footer
          siteName={siteMetadata.name}
          copyright={siteMetadata.copyright}
          text={footerContent.text}
          links={footerContent.links}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
