import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Megaphone, Target, BarChart3, CheckCircle, Rocket, Sparkles, Star } from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    'Full-funnel strategy & execution',
    'Performance tracking & analytics (GA4, Looker)',
    'Content + Social strategy (organic + paid synergy)',
    'Lead generation & nurturing (CRM handoff)',
    'CRO and landing page optimization',
    'Marketing automation & email flows',
  ];

  const channels = ['Google', 'Meta', 'LinkedIn', 'YouTube', 'Email', 'WhatsApp'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Digital Marketing"
        description="Full-funnel digital marketing to grow traffic, leads, and revenue across paid, owned, and earned channels."
        keywords={["digital marketing", "performance marketing", "social media", "email", "content"]}
      />
      <motion.section className="relative min-h-[70vh] bg-mesh-gradient flex items-center justify-center">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" animate={{ scale: [1,1.2,1], x: [0, 60, 0] }} transition={{ duration: 18, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" animate={{ scale: [1.2,1,1.2], x: [0,-60,0] }} transition={{ duration: 22, repeat: Infinity }} />

        <div className="container-max text-center relative z-10">
          <div className="mb-4 flex justify-center">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Digital Marketing', to: '/services/digital-marketing' }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-white/30 shadow-lg mb-6">
              <Sparkles className="mr-2 h-5 w-5 text-primary-600" />
              Digital Marketing Excellence
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Digital <span className="text-primary-700">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Data-driven strategies across paid, owned, and earned channels to grow traffic, leads, and revenue.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Grow with Performance</h2>
                <p className="text-gray-600">Plan, execute, measure, optimize.</p>
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
              {channels.map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                <span>Get a Growth Plan</span>
                <Rocket size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-ghost">Explore All Services</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-2xl overflow-hidden text-white text-center">
              <div className="absolute inset-0 pattern-dots opacity-20" />
              <motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl" animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity }} />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <BarChart3 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">ROI-Focused Campaigns</h3>
                <p className="text-white/90">Clear goals, transparent reporting, and continuous optimization.</p>
                <div className="flex justify-center space-x-2 text-yellow-300">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={18} className="fill-current" />)}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/70 mb-1">Performance Targeting</div>
                  <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                    <Target size={18} /> Scale What Works
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;