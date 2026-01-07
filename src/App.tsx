import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { HomePage, WorkPage, AboutPage, ContactPage, PrivacyPolicyPage, TermsOfServicePage } from './pages';
import { siteMetadata, navigation, footerContent } from './data/siteContent';

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
