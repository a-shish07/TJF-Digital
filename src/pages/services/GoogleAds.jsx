import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Search, Target, Sparkles } from 'lucide-react';

const GoogleAds = () => {
  const features = [
    'Search, Display, Performance Max',
    'Conversion tracking & offline imports (enhanced conversions)',
    'Keyword strategy & negative lists (match types)',
    'Ad copy, extensions, and landing pages',
    'Smart bidding & budget pacing with guardrails',
  ];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Google Ads"
        description="Capture demand with high-intent Google Ads across Search, Display, and Performance Max with accurate conversion tracking."
        keywords={["google ads", "search ads", "pmax", "enhanced conversions", "sem"]}
      />

      <ServicePage
        hero={{
          title: 'Google',
          highlight: 'Ads',
          subtitle: 'Capture high-intent searches that convert.',
          meshColors: ['from-amber-300/25', 'to-red-300/25'],
          accentFrom: 'from-amber-600',
          accentTo: 'to-red-600',
          variant: 'google-ads',
        }}
        primary={{
          icon: <Search className="h-8 w-8 text-white" />,
          title: 'Capture Demand',
          kicker: 'Reach active searchers.',
          features: [
            'Search + PMax architecture',
            'Keywords, negatives, ad strength',
            'Landing page + conversions',
          ],
          variant: 'list',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Back to Paid Ads', to: '/services/paid-ads' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-amber-600 to-red-600',
          icon: <Search className="h-10 w-10" />,
          title: 'Intent-Driven Growth',
          subtitle: 'Unlock demand with precise targeting.',
          stars: 5,
        }}
        logos={{ items: ['Search', 'Display', 'PMax', 'YouTube', 'Data‑driven Attribution'] }}
        showcase={{
          title: 'How We Structure Success',
          items: [
            { title: 'Granular SKAG/Theme', note: 'Quality Score & control' },
            { title: 'Query Sculpting', note: 'Negatives + match types' },
            { title: 'Ad Strength', note: 'Assets, extensions, CTR' },
            { title: 'Landing Match', note: 'Message & speed alignment' },
            { title: 'Signals for PMax', note: 'Feeds, audiences, assets' },
            { title: 'Budget Guardrails', note: 'Pacing & profitability' },
          ],
        }}
        about={{
          title: 'What This Service Is',
          subtitle: 'High‑intent acquisition via Search, Display, and Performance Max—structured for efficiency and precision.',
          rightTitle: 'Search built for India’s demand',
          rightText:
            'We structure campaigns for Indian search behavior—regional terms, device mix, and price sensitivity—while protecting quality and scale.',
        }}
        problemSolution={{
          before: [
            'Low QS, irrelevant clicks, wasted spend',
            'Broad match chaos, poor negatives',
            'PMax with weak signals/feeds',
            'Broken conversions/attribution',
          ],
          deliver: [
            'Search, Display, PMax architectures',
            'Keyword strategy, match types, negatives',
            'Ad copy, extensions, landing alignment',
            'Enhanced conversions & offline imports',
          ],
          impact: [
            '↑ Conv. Rate 20–60% on Search',
            '↓ Wasted Spend 25–45% via negatives',
            '↑ Quality Score 15–40%',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Audit & Data', desc: 'Account hygiene, signals' },
            { step: '02', title: 'Structure', desc: 'Campaigns, ad groups, assets' },
            { step: '03', title: 'Launch', desc: 'Budgets, bids, QA' },
            { step: '04', title: 'Optimize', desc: 'Queries, ads, negatives' },
            { step: '05', title: 'Scale', desc: 'Pacing, budgets, winners' },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↑ Conv. Rate 20–60%', note: 'Keyword sculpting + landing match' },
            { kpi: '↓ CPA 18–35%', note: 'Negative lists + bidding' },
            { kpi: '↑ Share of Voice', note: 'Better QS + ad strength' },
          ],
        }}
        testimonials={{
          title: 'Search Wins',
          items: [
            { quote: 'We finally captured the right queries—CPL dropped notably.', author: 'Ritika S.', role: 'Education' },
            { quote: 'PMax started working once signals were cleaned up.', author: 'Mohit A.', role: 'E‑com' },
            { quote: 'Steady improvements in QS and ad strength every week.', author: 'Kunal V.', role: 'B2B' },
          ],
        }}
        faqs={{
          items: [
            { q: 'Ecom or Lead‑gen?', a: 'Both—structures differ; we design for your goals and data signals.' },
            { q: 'Landing pages?', a: 'We build or optimize landing pages for message match and speed.' },
            { q: 'Budgets & pacing?', a: 'We scale on profitable signals with guardrails and pacing controls.' },
            { q: 'Attribution?', a: 'Enhanced conversions, offline import, and hygiene to keep data clean.' },
          ],
        }}
        cta={{
          title: 'Capture high‑intent demand with confidence',
          subtitle: 'Get a Google Ads plan and projections tailored to your industry.',
          to: '/contact',
          label: 'Contact Us',
        }}
      />
    </div>
  );
};

export default GoogleAds;