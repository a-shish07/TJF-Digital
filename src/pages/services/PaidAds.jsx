import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Target, LineChart, Sparkles } from 'lucide-react';

const PaidAds = () => {
  const features = [
    'Full-funnel PPC strategy (TOFU/MOFU/BOFU)',
    'Conversion tracking & attribution (GA4, CAPI)',
    'Creative testing and scaling (hooks, angles)',
    'Budget optimization & smart bidding',
    'Weekly reporting & insights',
    'Landing page feedback & CRO notes',
  ];

  const platforms = ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads', 'Performance Max'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Paid Ads Management"
        description="ROAS-focused paid advertising across Google, Meta, and LinkedIn with rigorous testing and attribution."
        keywords={["paid ads", "ppc", "google ads", "meta ads", "linkedin ads", "roas"]}
      />

      <ServicePage
        hero={{
          title: 'Performance',
          highlight: 'Paid Ads',
          subtitle: 'Profitable acquisition across Google, Meta, LinkedIn.',
          meshColors: ['from-violet-300/25', 'to-indigo-300/25'],
          accentFrom: 'from-violet-600',
          accentTo: 'to-indigo-600',
          variant: 'google-ads',
        }}
        primary={{
          icon: <Target className="h-8 w-8 text-white" />,
          title: 'Scale What Works',
          kicker: 'Creative • Targeting • Bids',
          features: [
            'Full-funnel PPC framework',
            'Tracking & attribution hygiene',
            'Systematic creative testing',
          ],
          chips: undefined,
          variant: 'steps',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-violet-600 to-indigo-600',
          icon: <LineChart className="h-10 w-10" />,
          title: 'ROAS-Driven Execution',
          subtitle: 'Test. Learn. Scale on profitable signals.',
          stars: 5,
        }}
        ribbon={{ items: [
          { label: 'Avg. CAC Reduction', value: '↓ 18–40%' },
          { label: 'Speed to First Wins', value: '14–21 days' },
          { label: 'Creative Iterations', value: '10–20/mo' },
          { label: 'Attribution Hygiene', value: 'Server‑side' },
        ]}}
        logos={{ items: platforms }}
        showcase={{
          title: 'Testing Ladders',
          items: [
            { title: 'Hooks & Angles', note: 'Systematic creative iteration' },
            { title: 'Audience Sculpting', note: 'Signals, exclusions, LTV' },
            { title: 'Budget Pacing', note: 'Guardrails to protect ROAS' },
            { title: 'Landing Alignment', note: 'Speed + message match' },
            { title: 'Attribution', note: 'CAPI, offline imports' },
            { title: 'Scale Mechanics', note: 'Winners, not noise' },
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Audit & Data', desc: 'Accounts, tracking, ICP' },
            { step: '02', title: 'Plan', desc: 'Offers, structure, budgets' },
            { step: '03', title: 'Launch', desc: 'Signals, creatives, QA' },
            { step: '04', title: 'Optimize', desc: 'Kill losers, scale winners' },
            { step: '05', title: 'Report', desc: 'Insights & next tests' },
          ],
        }}
        pricing={{
          title: 'Management Plans',
          tiers: [
            { name: 'Starter', price: '₹20,000/mo', features: ['Single platform', 'Weekly insights', 'Tracking setup'], cta: { label: 'Get Started', to: '/contact' } },
            { name: 'Growth', price: '₹35,000/mo', features: ['2 platforms', 'Creative iteration', 'CAPI/Offline imports'], cta: { label: 'Scale Now', to: '/contact' } },
            { name: 'Pro', price: 'Custom', features: ['3–4 platforms', 'Experiment roadmap', 'BI & guardrails'], cta: { label: 'Talk to Us', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↓ CAC 28% in 60 days', note: 'Meta + landing page CRO' },
            { kpi: '↑ ROAS 2.7x', note: 'Google Search + PMax structure' },
            { kpi: '↑ Qualified Leads 54%', note: 'Lead scoring + exclusions' },
          ],
        }}
        testimonials={{
          title: 'Performance Wins',
          items: [
            { quote: 'ROAS turned positive by month two with clear guardrails.', author: 'Kriti G.', role: 'D2C' },
            { quote: 'Finally, clean tracking—made decisions easy.', author: 'Saurabh V.', role: 'Services' },
            { quote: 'We scaled spend 3x without efficiency drop.', author: 'Neha P.', role: 'Lead‑gen' },
          ],
        }}
        faqs={{
          items: [
            { q: 'Minimum ad spend?', a: 'We recommend spend based on industry benchmarks and CAC goals.' },
            { q: 'Do you produce creatives?', a: 'Yes—or we provide frameworks and collaborate with your team.' },
            { q: 'Attribution setup?', a: 'We implement end‑to‑end tracking including CAPI and offline imports.' },
            { q: 'How fast can we scale?', a: 'We scale only on profitable signals with guardrails to protect ROAS.' },
          ],
        }}
        cta={{
          title: 'Ready to scale efficient acquisition?',
          subtitle: 'Let’s align on your goals and build a paid engine that prints results—not just clicks.',
          to: '/contact',
          label: 'Contact Us',
        }}
      />
    </div>
  );
};

export default PaidAds;