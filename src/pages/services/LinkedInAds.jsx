import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Linkedin, Target, CheckCircle, Rocket, Sparkles, Star } from 'lucide-react';

const LinkedInAds = () => {
  const features = [
    'B2B targeting with firmographics (company, job seniority)',
    'Lead Gen Forms & retargeting (in-platform + site)',
    'Thought leadership & content ads (Document, Video)',
    'ABM campaigns and sequencing with exclusions',
  ];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="LinkedIn Ads"
        description="Acquire high-quality B2B leads using LinkedIn’s precise targeting, in-platform lead gen and account-based strategies."
        keywords={["linkedin ads", "b2b marketing", "lead gen forms", "abm"]}
      />
      <motion.section className="relative min-h-[60vh] bg-mesh-gradient flex items-center justify-center">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="container-max text-center relative z-10">
          <div className="mb-4 flex justify-center">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Paid Ads', to: '/services/paid-ads' }, { label: 'LinkedIn Ads', to: '/services/paid-ads/linkedin' }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-white/30 shadow-lg mb-6">
              <Sparkles className="mr-2 h-5 w-5 text-primary-600" />
              LinkedIn Ads Management
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              LinkedIn <span className="text-primary-700">Ads</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Reach decision-makers with precise B2B targeting and high-intent lead flows.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-700 shadow-lg">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Acquire Quality B2B Leads</h2>
                <p className="text-gray-600">Pinpoint targeting, message match, and lead capture.</p>
              </div>
            </div>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                <span>Request LinkedIn Plan</span>
                <Target size={18} className="ml-2" />
              </Link>
              <Link to="/services/paid-ads" className="btn-ghost">Back to Paid Ads</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-700 shadow-2xl overflow-hidden text-white text-center">
              <div className="absolute inset-0 pattern-dots opacity-20" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <Linkedin className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">B2B Growth Engine</h3>
                <p className="text-white/90">Engage accounts with tailored content and efficient lead capture.</p>
                <div className="flex justify-center space-x-2 text-yellow-300">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={18} className="fill-current" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInAds;