import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CodingHero,
  SEOHero,
  DigitalMarketingHero,
  GMBHero,
  AdsHero,
  SocialMediaHero
} from './EnhancedHeros';

/*
  ServicePage v2.2 — Enhanced with creative hero variants
  - Rich gradient accents (per-page configurable via hero.accentFrom/To)
  - Smoother spring animations
  - Works with reduced content (few features/steps)
  - New creative hero variants for different service types
*/

const Container = ({ children, className = '' }) => (
  <div className={`container-max ${className}`}>{children}</div>
);

const getAccent = (hero) => ({
  from: hero?.accentFrom || 'from-primary-600',
  to: hero?.accentTo || 'to-secondary-600',
});

const Stars = ({ count = 5 }) => (
  <div className="flex justify-center space-x-1.5 text-yellow-300">
    {Array.from({ length: count }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05, type: 'spring', stiffness: 140, damping: 10 }}
      >
        ★
      </motion.span>
    ))}
  </div>
);

const PatternBackground = ({ meshColors = ['from-primary-500/20', 'to-secondary-500/20'] }) => (
  <>
    <div className="absolute inset-0 pattern-grid opacity-10" />
    <motion.div
      className={`absolute top-16 left-8 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br ${meshColors[0]}`}
      animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className={`absolute bottom-16 right-8 w-96 h-96 rounded-full blur-3xl bg-gradient-to-tr ${meshColors[1] || meshColors[0]}`}
      animate={{ y: [0, 10, 0], scale: [1.05, 1, 1.05] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
  </>
);

const ShapeDivider = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] rotate-180" aria-hidden>
    <svg className="relative block w-[calc(100%+1.3px)] h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white" />
    </svg>
  </div>
);

const HeroTitle = ({ hero }) => {
  const accent = getAccent(hero);
  return (
    <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 leading-tight">
      {hero?.title}{' '}
      {hero?.highlight ? (
        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${accent.from} ${accent.to}`}>
          {hero.highlight}
        </span>
      ) : null}
    </h1>
  );
};

const Badge = ({ badge }) =>
  badge ? (
    <span className="inline-flex items-center px-5 py-2.5 bg-white/25 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 border border-white/40 shadow-lg">
      {badge.icon}
      <span className="ml-2">{badge.text}</span>
    </span>
  ) : null;

const HeroCentered = ({ hero, badge }) => (
  <motion.section className="relative min-h-[65vh] bg-mesh-gradient flex items-center justify-center">
    <PatternBackground meshColors={hero?.meshColors} />
    <Container className="text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 90, damping: 16 }}>
        <Badge badge={badge} />
        <div className="mt-5" />
        <HeroTitle hero={hero} />
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{hero?.subtitle}</p>
      </motion.div>
    </Container>
  </motion.section>
);

const HeroSplit = ({ hero, badge }) => (
  <section className="relative bg-mesh-gradient">
    <div className="absolute inset-0">
      <PatternBackground meshColors={hero?.meshColors} />
    </div>
    <Container className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[65vh] ${hero?.splitReverse ? 'lg:[&>div:nth-child(1)]:order-2' : ''}`}>
      <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 90, damping: 16 }}>
        <Badge badge={badge} />
        <div className="mt-5" />
        <HeroTitle hero={hero} />
        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">{hero?.subtitle}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 90, damping: 16 }}>
        <motion.div
          className="relative mx-auto w-full max-w-xl aspect-[4/3] rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        >
          <motion.div className="absolute top-6 left-6 right-6 h-24 rounded-xl bg-white/80 shadow-xl" animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute top-36 left-6 w-40 h-28 rounded-xl bg-primary-500/70 shadow-xl" animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
          <motion.div className="absolute top-32 right-6 w-56 h-36 rounded-xl bg-secondary-500/70 shadow-xl" animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }} />
        </motion.div>
      </motion.div>
    </Container>
  </section>
);

const HeroDiagonal = ({ hero, badge }) => (
  <section className="relative bg-mesh-gradient overflow-hidden">
    <PatternBackground meshColors={hero?.meshColors} />
    <div className="absolute -top-10 -left-20 w-[140%] h-72 bg-white/30 rotate-[-6deg] blur-3xl" />
    <Container className="relative z-10 text-center py-20 md:py-28">
      <Badge badge={badge} />
      <div className="mt-5" />
      <HeroTitle hero={hero} />
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{hero?.subtitle}</p>
    </Container>
    <ShapeDivider />
  </section>
);

const PrimaryList = ({ primary }) => (
  <>
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-600 shadow-lg ring-1 ring-black/5">
        {primary?.icon}
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">{primary?.title}</h2>
        {primary?.kicker ? <p className="text-gray-600">{primary.kicker}</p> : null}
      </div>
    </div>
    <ul className="space-y-3">
      {primary?.features?.map((f, i) => (
        <li key={i} className="flex items-center space-x-3">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 inline-block" />
          <span className="text-gray-700 font-medium">{f}</span>
        </li>
      ))}
    </ul>
  </>
);

const PrimaryCards = ({ primary }) => (
  <>
    <div className="mb-6">
      <div className="flex items-center space-x-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-600 shadow-lg ring-1 ring-black/5">{primary?.icon}</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">{primary?.title}</h2>
          {primary?.kicker ? <p className="text-gray-600">{primary.kicker}</p> : null}
        </div>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      {primary?.features?.map((f, i) => (
        <div key={i} className="p-5 rounded-2xl border bg-gradient-to-br from-white to-gray-50">
          <div className="font-semibold mb-1">{f.split(':')[0]}</div>
          <div className="text-gray-600">{f.includes(':') ? f.split(':').slice(1).join(':') : 'Key capability'}</div>
        </div>
      ))}
    </div>
  </>
);

const PrimarySteps = ({ primary }) => (
  <>
    <div className="mb-6">
      <div className="flex items-center space-x-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-600 shadow-lg ring-1 ring-black/5">{primary?.icon}</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">{primary?.title}</h2>
          {primary?.kicker ? <p className="text-gray-600">{primary.kicker}</p> : null}
        </div>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      {primary?.features?.map((f, i) => (
        <div key={i} className="p-5 rounded-2xl border bg-white">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-medium">{f}</span>
          </div>
        </div>
      ))}
    </div>
  </>
);

const Panel = ({ panel }) => (
  <motion.div
    className={`${panel?.variant === 'banner' ? 'p-10' : 'p-8'} relative rounded-3xl ${panel?.gradient || 'bg-gradient-to-br from-primary-500 to-secondary-600'} shadow-2xl overflow-hidden text-white text-center ring-1 ring-white/20`}
    whileHover={{ scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 160, damping: 18 }}
  >
    <div className="absolute inset-0 pattern-dots opacity-15" />
    <motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl" animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }} transition={{ duration: 12, repeat: Infinity }} />
    <div className="relative z-10 space-y-6">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-2 ring-1 ring-white/30">
        {panel?.icon}
      </div>
      <h3 className="text-2xl font-bold">{panel?.title}</h3>
      <p className="text-white/90">{panel?.subtitle}</p>
      <Stars count={panel?.stars || 5} />
      {panel?.foot}
    </div>
  </motion.div>
);

const ServicePage = ({
  badge,
  hero,
  primary,
  panel,
  about,
  problemSolution,
  process,
  outcomes,
  faqs,
  cta,
}) => {
  const heroVariant = hero?.variant || 'centered';

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      {heroVariant === 'coding' ? (
        <CodingHero hero={hero} badge={badge} />
      ) : heroVariant === 'seo' ? (
        <SEOHero hero={hero} badge={badge} />
      ) : heroVariant === 'digital-marketing' ? (
        <DigitalMarketingHero hero={hero} badge={badge} />
      ) : heroVariant === 'gmb' ? (
        <GMBHero hero={hero} badge={badge} />
      ) : heroVariant === 'google-ads' ? (
        <AdsHero hero={hero} badge={badge} adType="Google" />
      ) : heroVariant === 'meta-ads' ? (
        <AdsHero hero={hero} badge={badge} adType="Meta" />
      ) : heroVariant === 'linkedin-ads' ? (
        <AdsHero hero={hero} badge={badge} adType="LinkedIn" />
      ) : heroVariant === 'social-media' ? (
        <SocialMediaHero hero={hero} badge={badge} />
      ) : heroVariant === 'split' ? (
        <HeroSplit hero={hero} badge={badge} />
      ) : heroVariant === 'diagonal' ? (
        <HeroDiagonal hero={hero} badge={badge} />
      ) : (
        <HeroCentered hero={hero} badge={badge} />
      )}

      {/* Primary Feature + Panel */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30">
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 16 }} viewport={{ once: true }}>
            {primary?.variant === 'cards' ? (
              <PrimaryCards primary={primary} />
            ) : primary?.variant === 'steps' ? (
              <PrimarySteps primary={primary} />
            ) : (
              <PrimaryList primary={primary} />
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {primary?.cta ? (
                <Link to={primary.cta.to} className="btn-primary inline-flex items-center">
                  <span>{primary.cta.label}</span>
                </Link>
              ) : null}
              {primary?.ctaSecondary ? (
                <Link to={primary.ctaSecondary.to} className="btn-ghost">{primary.ctaSecondary.label}</Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 16 }} viewport={{ once: true }}>
            <Panel panel={panel || {}} />
          </motion.div>
        </Container>
      </section>

      {/* About / Value Prop (optional) */}
      {about ? (
        <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">{about.title}</h2>
              <p className="text-gray-700">{about.subtitle}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{about.rightTitle}</h3>
              <p className="text-gray-700">{about.rightText}</p>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Problem → Solution / Impact (optional) */}
      {problemSolution ? (
        <section className="py-14 bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: 'Before', list: problemSolution.before, bg: 'bg-gray-50' },
              { title: 'We Deliver', list: problemSolution.deliver },
              { title: 'Impact', list: problemSolution.impact, bg: 'bg-gray-50' },
            ].map((col, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl border border-gray-200 ${col.bg || ''}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h3 className="text-xl font-bold mb-2">{col.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {col.list?.map((item, idx) => (
                    <li className="flex items-start gap-2" key={idx}>
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Container>
        </section>
      ) : null}

      {/* Process (optional) */}
      {process ? (
        <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {process.steps?.map((s, i) => (
                <motion.div key={i} className="p-6 rounded-2xl border bg-white text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
                  <div className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">{s.step}</div>
                  <div className="text-lg font-bold mb-1">{s.title}</div>
                  <div className="text-gray-600">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Outcomes (optional) */}
      {outcomes ? (
        <section className="py-14 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Results You Can Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.cards?.map((r, i) => (
                <motion.div key={i} className="p-6 rounded-2xl border bg-gradient-to-br from-white to-gray-50 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
                  <div className="text-2xl font-bold mb-1">{r.kpi}</div>
                  <div className="text-gray-600">{r.note}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* CTA (optional) */}
      {cta ? (
        <section className="py-16 bg-gradient-secondary text-white text-center">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{cta.title}</h2>
            <p className="text-white/90 mb-6">{cta.subtitle}</p>
            <Link to={cta.to} className="btn-glow inline-flex items-center justify-center">
              <span>{cta.label}</span>
            </Link>
          </Container>
        </section>
      ) : null}
    </div>
  );
};

export default ServicePage;