import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Megaphone, BarChart3, Sparkles } from 'lucide-react';

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

      <ServicePage
        hero={{
          title: 'Digital',
          highlight: 'Marketing',
          subtitle: 'Data-driven growth without the guesswork.',
          meshColors: ['from-pink-300/25', 'to-rose-300/25'],
          accentFrom: 'from-pink-600',
          accentTo: 'to-rose-600',
          variant: 'digital-marketing',
          splitReverse: true,
        }}
        primary={{
          icon: <Megaphone className="h-8 w-8 text-white" />,
          title: 'Grow with Performance',
          kicker: 'Plan • Launch • Scale',
          features: [
            'Channel strategy & testing',
            'CRO + landing page alignment',
            'Attribution & reporting hygiene',
          ],
          chips: undefined,
          variant: 'cards',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-pink-600 to-rose-600',
          icon: <BarChart3 className="h-10 w-10" />,
          title: 'ROI-Focused Campaigns',
          subtitle: 'Clear goals. Transparent reporting. Continuous optimization.',
          stars: 5,
        }}
        ribbon={{ items: [
          { label: 'Avg. CPL Reduction', value: '↓ 25–45%' },
          { label: 'Lead Volume Increase', value: '↑ 2–4x' },
          { label: 'Attribution Accuracy', value: '95%+' },
          { label: 'Retention Impact', value: '↑ LTV' },
        ]}}
        logos={{ items: channels }}
        showcase={{
          title: 'Plays That Move the Needle',
          items: [
            { title: 'Offer Testing Systems', note: 'Hooks, angles, formats' },
            { title: 'Landing Page CRO', note: 'Message–market match' },
            { title: 'Content Engines', note: 'Distribution, not just posting' },
            { title: 'Lifecycle Programs', note: 'Email, WhatsApp, CRM' },
            { title: 'Attribution Hygiene', note: 'UTMs, CAPI, server‑side' },
            { title: 'Creative Ops', note: 'Processes to scale winners' },
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Audit & Goals', desc: 'Gaps, ICP, KPIs' },
            { step: '02', title: 'Plan', desc: 'Channels, messaging, offers' },
            { step: '03', title: 'Launch', desc: 'Experiments & tracking' },
            { step: '04', title: 'Scale', desc: 'Double‑down on winners' },
            { step: '05', title: 'Report', desc: 'Transparent insights' },
          ],
        }}
        pricing={{
          title: 'Engagement Options',
          tiers: [
            { name: 'Starter', price: '₹25,000/mo', features: ['1–2 channels', 'Weekly reporting', 'Foundational tracking'], cta: { label: 'Start Now', to: '/contact' } },
            { name: 'Growth', price: '₹45,000/mo', features: ['3–4 channels', 'CRO support', 'Experiment roadmap'], cta: { label: 'Scale Growth', to: '/contact' } },
            { name: 'Pro', price: 'Custom', features: ['Omnichannel', 'Creative ops', 'Attribution & BI'], cta: { label: 'Talk to Us', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↓ CPL 38% in 60 days', note: 'D2C, Meta + Google synergy' },
            { kpi: '↑ SQLs 2.4x in 90 days', note: 'B2B, LinkedIn + retargeting' },
            { kpi: '↑ Revenue 65% QoQ', note: 'Omnichannel + CRO' },
          ],
        }}
        testimonials={{
          title: 'Growth Stories',
          items: [
            { quote: 'Predictable lead flow within 45 days—finally.', author: 'Devika P.', role: 'Real Estate' },
            { quote: 'Our CAC dropped while revenue climbed. Clear strategy.', author: 'Aman J.', role: 'D2C' },
            { quote: 'B2B pipeline quality improved dramatically.', author: 'Nilesh T.', role: 'IT Services' },
          ],
        }}
        faqs={{
          items: [
            { q: 'Minimum budgets?', a: 'We recommend budgets by industry & goals; we’re efficient at any scale.' },
            { q: 'Do you support B2B & B2C?', a: 'Yes—frameworks tailored to each buying cycle.' },
            { q: 'How fast are results?', a: 'Initial traction in 30–45 days; compounding impact from month 2–3.' },
            { q: 'Contracts?', a: 'Flexible; 3‑month commitment suggested to realize compounding effects.' },
          ],
        }}
        cta={{
          title: 'Want predictable growth—without guesswork?',
          subtitle: 'Talk to us about a performance plan tailored to your goals and market.',
          to: '/contact',
          label: 'Contact Us',
        }}
      />
    </div>
  );
};

export default DigitalMarketing;