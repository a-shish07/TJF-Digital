import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop';

// Core pages - load immediately for better UX
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Lazy load other pages for better performance
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Lazy load service detail pages
const WebDesignDevelopment = React.lazy(() => import('./pages/services/WebDesignDevelopment'));
const WordPressWebsite = React.lazy(() => import('./pages/services/WordPressWebsite'));
const CodingWebsite = React.lazy(() => import('./pages/services/CodingWebsite'));
const DigitalMarketing = React.lazy(() => import('./pages/services/DigitalMarketing'));
const SEO = React.lazy(() => import('./pages/services/SEO'));
const GMB = React.lazy(() => import('./pages/services/GMB'));
const PaidAds = React.lazy(() => import('./pages/services/PaidAds'));
const GoogleAds = React.lazy(() => import('./pages/services/GoogleAds'));
const LinkedInAds = React.lazy(() => import('./pages/services/LinkedInAds'));
const MetaAds = React.lazy(() => import('./pages/services/MetaAds'));
const SocialMediaMarketing = React.lazy(() => import('./pages/services/SocialMediaMarketing'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route 
            path="about" 
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            } 
          />

          {/* Services index and detail routes */}
          <Route 
            path="services" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            } 
          />
          <Route 
            path="services/web-design" 
            element={
              <Suspense fallback={<PageLoader />}>
                <WebDesignDevelopment />
              </Suspense>
            } 
          />
          <Route 
            path="services/web-design/wordpress" 
            element={
              <Suspense fallback={<PageLoader />}>
                <WordPressWebsite />
              </Suspense>
            } 
          />
          <Route 
            path="services/web-design/coding" 
            element={
              <Suspense fallback={<PageLoader />}>
                <CodingWebsite />
              </Suspense>
            } 
          />
          <Route 
            path="services/digital-marketing" 
            element={
              <Suspense fallback={<PageLoader />}>
                <DigitalMarketing />
              </Suspense>
            } 
          />
          <Route 
            path="services/seo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SEO />
              </Suspense>
            } 
          />
          <Route 
            path="services/gmb" 
            element={
              <Suspense fallback={<PageLoader />}>
                <GMB />
              </Suspense>
            } 
          />
          <Route 
            path="services/paid-ads" 
            element={
              <Suspense fallback={<PageLoader />}>
                <PaidAds />
              </Suspense>
            } 
          />
          <Route 
            path="services/paid-ads/google" 
            element={
              <Suspense fallback={<PageLoader />}>
                <GoogleAds />
              </Suspense>
            } 
          />
          <Route 
            path="services/paid-ads/linkedin" 
            element={
              <Suspense fallback={<PageLoader />}>
                <LinkedInAds />
              </Suspense>
            } 
          />
          <Route 
            path="services/paid-ads/meta" 
            element={
              <Suspense fallback={<PageLoader />}>
                <MetaAds />
              </Suspense>
            } 
          />
          <Route 
            path="services/social-media-marketing" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SocialMediaMarketing />
              </Suspense>
            } 
          />

          <Route 
            path="blog" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Blog />
              </Suspense>
            } 
          />
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            } 
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
