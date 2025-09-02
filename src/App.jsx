import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

// Service detail pages
import WebDesignDevelopment from './pages/services/WebDesignDevelopment';
import WordPressWebsite from './pages/services/WordPressWebsite';
import CodingWebsite from './pages/services/CodingWebsite';
import DigitalMarketing from './pages/services/DigitalMarketing';
import SEO from './pages/services/SEO';
import GMB from './pages/services/GMB';
import PaidAds from './pages/services/PaidAds';
import GoogleAds from './pages/services/GoogleAds';
import LinkedInAds from './pages/services/LinkedInAds';
import MetaAds from './pages/services/MetaAds';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Services index and detail routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/web-design" element={<WebDesignDevelopment />} />
          <Route path="services/web-design/wordpress" element={<WordPressWebsite />} />
          <Route path="services/web-design/coding" element={<CodingWebsite />} />
          <Route path="services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="services/seo" element={<SEO />} />
          <Route path="services/gmb" element={<GMB />} />
          <Route path="services/paid-ads" element={<PaidAds />} />
          <Route path="services/paid-ads/google" element={<GoogleAds />} />
          <Route path="services/paid-ads/linkedin" element={<LinkedInAds />} />
          <Route path="services/paid-ads/meta" element={<MetaAds />} />
          <Route path="services/social-media-marketing" element={<SocialMediaMarketing />} />

          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
