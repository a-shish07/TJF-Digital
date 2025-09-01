import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { MapPin, BadgeCheck, Route, CheckCircle, Rocket, Sparkles, Star } from 'lucide-react';

const GMB = () => {
  const features = [
    'Google Business Profile setup & optimization',
    'Local citations & NAP consistency',
    'Reviews strategy & automation (templates + flows)',
    'Local content & posts (offers/events)',
    'Maps ranking improvements (proximity, prominence)',
    'Photos, services, and Q&A optimization',
  ];

  const tools = ['Google Business Profile', 'Local Schema', 'Citations', 'Reviews', 'UTM tracking'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="GMB / Local SEO"
        description="Dominate local search and Maps with Google Business Profile optimization, reviews strategy, and local content."
        keywords={["gmb", "google my business", "local seo", "maps", "citations"]}
      />
      <motion.section className="relative min-h-[70vh] bg-mesh-gradient flex items-center justify-center">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" animate={{ scale: [1,1.2,1], x: [0, 60, 0] }} transition={{ duration: 18, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" animate={{ scale: [1.2,1,1.2], x: [0,-60,0] }} transition={{ duration: 22, repeat: Infinity }} />

        <div className="container-max text-center relative z-10">
          <div className="mb-4 flex justify-center">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'GMB / Local SEO', to: '/services/gmb' }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-white/30 shadow-lg mb-6">
              <Sparkles className="mr-2 h-5 w-5 text-primary-600" />
              Google My Business (GMB)
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Local SEO <span className="text-primary-700">& GMB</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Dominate local search and Maps results to capture high-intent customers in your area.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Be Found Locally</h2>
                <p className="text-gray-600">Rank higher in local packs and Maps.</p>
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
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                <span>Boost Local Presence</span>
                <BadgeCheck size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-ghost">Explore All Services</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl overflow-hidden text-white text-center">
              <div className="absolute inset-0 pattern-dots opacity-20" />
              <motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl" animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity }} />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <Route className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">Win the Map Pack</h3>
                <p className="text-white/90">Visibility where it matters most—nearby customers ready to buy.</p>
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

export default GMB;