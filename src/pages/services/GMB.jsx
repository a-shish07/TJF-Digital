import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { MapPin, Star, Sparkles, Navigation } from 'lucide-react';

const GMB = () => {
  const features = [
    'Complete Google Business Profile setup & optimization',
    'Strategic local citations & NAP consistency across web',
    'Reviews management system with automated workflows',
    'Engaging local content & promotional posts',
    'Maps ranking boost through proximity optimization',
    'Professional photos, services, and Q&A management',
    'Local SEO integration for maximum visibility',
    'Competitor analysis and market positioning',
  ];

  const tools = ['Google Business Profile', 'Local Schema Markup', 'Citation Building', 'Review Management', 'Local Analytics'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Google My Business & Local SEO Services"
        description="Dominate local search results with comprehensive GMB optimization, strategic review management, and powerful local SEO strategies that drive foot traffic and calls."
        keywords={["google my business", "gmb optimization", "local seo", "google maps", "local citations", "review management", "local search"]}
      />

      <ServicePage
        hero={{
          title: 'Local SEO &',
          highlight: 'GMB Mastery',
          subtitle: 'Dominate your local market and become the go-to choice in your neighborhood.',
          meshColors: ['from-emerald-300/25', 'to-teal-300/25'],
          accentFrom: 'from-emerald-600',
          accentTo: 'to-teal-600',
          variant: 'gmb',
          splitReverse: false,
        }}
        primary={{
          icon: <MapPin className="h-8 w-8 text-white" />,
          title: 'Be Found When It Matters',
          kicker: 'Turn local searches into loyal customers.',
          features: [
            'Complete GMB profile optimization',
            'Strategic review management system',
            'Local content that converts searchers',
          ],
          chips: undefined,
          variant: 'cards',
          cta: { label: 'Dominate Local Search', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600',
          icon: <Navigation className="h-10 w-10" />,
          title: 'Local Market Domination',
          subtitle: 'From invisible to indispensable in your local area.',
          stars: 5,
          foot: (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-base font-semibold">
                <Star size={18} /> Maps • Reviews • Local Rankings
              </div>
            </div>
          ),
        }}
        ribbon={{ items: [
          { label: 'Local Calls Increase', value: '↑ 75%' },
          { label: 'Map Pack Rankings', value: 'Top 3' },
          { label: 'Review Rating Boost', value: '+1.5★' },
          { label: 'Local Visibility', value: '300%+' },
        ]}}
        logos={{ items: tools }}
        showcase={{
          title: 'What Makes Our GMB Strategy Unique',
          items: [
            { title: 'Complete Profile Mastery', note: 'Every field optimized for maximum impact' },
            { title: 'Review Automation', note: 'Smart systems for consistent 5-star reviews' },
            { title: 'Local Content Engine', note: 'Regular posts that engage and convert' },
            { title: 'Citation Powerhouse', note: 'Consistent NAP across 50+ directories' },
            { title: 'Competitor Intelligence', note: 'Stay ahead of local competition' },
            { title: 'Performance Tracking', note: 'Clear metrics on calls, directions & visits' },
          ],
        }}
        about={{
          title: 'Transform Your Local Presence',
          subtitle:
            'We don\'t just optimize your Google My Business profile—we create a complete local marketing ecosystem that makes your business the obvious choice for customers in your area. From strategic review generation to compelling local content, we ensure you dominate every local search.',
          rightTitle: 'Perfect for local Indian businesses',
          rightText:
            'Whether you\'re a restaurant in Delhi, a clinic in Mumbai, or a retail store in Bangalore, we understand the unique challenges of Indian local markets. Our strategies are tailored for Indian customer behavior, local competition, and regional search patterns.',
        }}
        problemSolution={{
          before: [
            'Invisible in local search results',
            'Poor or inconsistent customer reviews',
            'Competitors getting all the local traffic',
            'Missing calls and walk-ins from Google searches',
          ],
          deliver: [
            'Comprehensive GMB profile optimization',
            'Strategic review management and generation',
            'Regular engaging local content and posts',
            'Multi-platform citation building and consistency',
          ],
          impact: [
            'Dominate local search and map pack rankings',
            'Consistent flow of positive customer reviews',
            'Increased calls, directions, and website visits',
            'Stronger local brand presence and trust',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Local Market Analysis', desc: 'Competition research, keyword analysis, local opportunity mapping' },
            { step: '02', title: 'Profile Optimization', desc: 'Complete GMB setup, category selection, description optimization' },
            { step: '03', title: 'Review Strategy Setup', desc: 'Review generation systems, response templates, monitoring setup' },
            { step: '04', title: 'Content & Citations', desc: 'Local content calendar, citation building, schema markup' },
            { step: '05', title: 'Monitor & Scale', desc: 'Performance tracking, ongoing optimization, expansion strategies' },
          ],
        }}
        pricing={{
          title: 'Local SEO & GMB Packages',
          tiers: [
            { name: 'Local Starter', price: '₹8,000–₹15,000/mo', features: ['GMB setup & optimization', 'Basic review management', 'Monthly local posts', 'Core citations'], cta: { label: 'Start Local Journey', to: '/contact' } },
            { name: 'Local Pro', price: '₹18,000–₹35,000/mo', features: ['Advanced GMB optimization', 'Automated review system', 'Weekly content & posts', '50+ citations & monitoring'], cta: { label: 'Dominate Locally', to: '/contact' } },
            { name: 'Multi-Location', price: 'Custom', features: ['Enterprise GMB management', 'Multi-location strategy', 'Advanced analytics', 'Dedicated account manager'], cta: { label: 'Scale Your Presence', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↑ Local Calls 75%', note: 'More qualified inquiries' },
            { kpi: '↑ Directions 120%', note: 'Increased foot traffic' },
            { kpi: '5★ Rating Average', note: 'Consistent review flow' },
          ],
        }}
        testimonials={{
          title: 'Local Success Stories',
          items: [
            { quote: 'Our restaurant bookings doubled within 2 months. The GMB optimization was incredible!', author: 'Rahul Sharma', role: 'Restaurant Owner, Delhi' },
            { quote: 'From 2.8 to 4.7 stars and consistent patient flow. Best investment for our clinic.', author: 'Dr. Priya Patel', role: 'Dental Clinic, Mumbai' },
            { quote: 'Footfall increased 300% and we\'re now the top-rated store in our area.', author: 'Ankur Singh', role: 'Electronics Store, Pune' },
          ],
        }}
        faqs={{
          items: [
            { q: 'How quickly will I see results from GMB optimization?', a: 'Initial improvements in visibility typically appear within 2-4 weeks. Significant increases in calls and directions usually occur within 4-8 weeks of implementation.' },
            { q: 'Do you handle multiple business locations?', a: 'Yes! We specialize in multi-location GMB management with consistent NAP data, coordinated review strategies, and location-specific content optimization.' },
            { q: 'What if my business has negative reviews?', a: 'We implement comprehensive reputation management including professional response templates, review generation strategies, and ongoing monitoring to improve your overall rating.' },
            { q: 'Is GMB optimization suitable for service-based businesses?', a: 'Absolutely! Service areas, home services, consultants, and B2B companies all benefit significantly from optimized GMB profiles and local SEO strategies.' },
          ],
        }}
        cta={{
          title: 'Ready to dominate your local market?',
          subtitle: 'Let\'s make your business the first choice when customers search locally.',
          to: '/contact',
          label: 'Start Local Domination',
        }}
      />
    </div>
  );
};

export default GMB;