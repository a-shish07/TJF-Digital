import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Search, LineChart, Sparkles } from 'lucide-react';

const SEO = () => {
  const features = [
    'Technical SEO (CWV, crawlability, indexation)',
    'On-page + Content Optimization (entities & EEAT)',
    'Keyword research & topical maps (clusters & intent)',
    'Local & Multi-location SEO (GBP, citations)',
    'Backlink & authority building (white-hat only)',
    'Structured data & schema implementation',
  ];

  const tools = ['GSC', 'GA4', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'PageSpeed Insights'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="SEO Services"
        description="Technical, on-page, and content-led SEO to grow qualified organic traffic and conversions."
        keywords={["seo", "search engine optimization", "technical seo", "local seo", "schema"]}
      />

      <ServicePage
        hero={{
          title: 'Search Engine',
          highlight: 'Optimization',
          subtitle: 'Rank higher. Grow qualified traffic.',
          meshColors: ['from-emerald-300/25', 'to-teal-300/25'],
          accentFrom: 'from-emerald-600',
          accentTo: 'to-teal-600',
          variant: 'seo',
        }}
        primary={{
          icon: <Search className="h-8 w-8 text-white" />,
          title: 'Win Organic Search',
          kicker: 'Technical + content authority.',
          features: [
            'Technical SEO & CWV',
            'On-page + internal linking',
            'Content strategy & topical maps',
          ],
          chips: undefined,
          variant: 'steps',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600',
          icon: <LineChart className="h-10 w-10" />,
          title: 'Sustainable Organic Growth',
          subtitle: 'Technical fixes + content that compounds.',
          stars: 5,
        }}
        ribbon={{ items: [
          { label: 'Avg. Time to Traction', value: '90–120 days' },
          { label: 'Indexed Pages Fixed', value: '2k+' },
          { label: 'CWV Pass Rate', value: '85%+' },
          { label: 'Keyword Growth', value: '↑ 50–200%' },
        ]}}
        logos={{ items: tools }}
        showcase={{
          title: 'SEO Pillars We Deploy',
          items: [
            { title: 'CWV & Tech Hygiene', note: 'Faster, crawlable, indexable' },
            { title: 'On‑page Entities', note: 'Topical strength + internal links' },
            { title: 'Content Roadmaps', note: 'Clusters, briefs, calendars' },
            { title: 'Local SEO', note: 'GBP, citations, reviews' },
            { title: 'Schema & Rich Results', note: 'Enhanced SERP presence' },
            { title: 'White‑hat Links', note: 'Authority that compounds' },
          ],
        }}
        about={{
          title: 'What This Service Is',
          subtitle: 'Technical, on‑page, and content‑led SEO to build authority, rank for meaningful keywords, and convert organic traffic.',
          rightTitle: 'India‑first SEO that compounds',
          rightText:
            'We prioritize local search behavior, device constraints, and multi‑language content needs common to Indian audiences—without cutting corners on technical quality.',
        }}
        problemSolution={{
          before: [
            'Plateaued traffic, volatile rankings',
            'Crawl/indexation issues, slow pages',
            'Thin content, weak topical authority',
            'Random backlinks, no strategy',
          ],
          deliver: [
            'Technical SEO: CWV, architecture, schema',
            'On‑page: entities, internal linking, meta, UX',
            'Topic clusters + content roadmap',
            'Local & multi‑location SEO; white‑hat links',
          ],
          impact: [
            'Durable, compounding growth',
            'Higher intent traffic that converts',
            'Stronger authority vs competitors',
            'Transparent progress with KPIs',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Audit & Research', desc: 'Tech, content, competitors' },
            { step: '02', title: 'Quick Wins', desc: 'Indexation, meta, internal links' },
            { step: '03', title: 'Content Strategy', desc: 'Clusters, briefs, publishing' },
            { step: '04', title: 'Authority Building', desc: 'Digital PR & relevant links' },
            { step: '05', title: 'Measure & Iterate', desc: 'KPIs, dashboards, updates' },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↑ Organic 72% in 120 days', note: 'Non‑brand traffic growth' },
            { kpi: '↑ Top‑10 Keywords 58%', note: 'Entity‑driven on‑page' },
            { kpi: '↑ Leads 41% from SEO', note: 'Local & content synergy' },
          ],
        }}
        testimonials={{
          title: 'SEO Wins Our Clients Love',
          items: [
            { quote: 'From 0 to 30k organic in 9 months—clean, compounding growth.', author: 'Ananya M.', role: 'E‑com Founder' },
            { quote: 'Tech SEO fixes alone lifted conversions 34%.', author: 'Prakash R.', role: 'Healthcare' },
            { quote: 'Local SEO made our clinic the #1 choice in the area.', author: 'Dr. Kiran', role: 'Clinic' },
          ],
        }}
        faqs={{
          items: [
            { q: 'How long to see results?', a: 'Expect strong traction in 3–6 months with compounding effects thereafter.' },
            { q: 'Do you write content?', a: 'Yes—from strategy to briefs to publishing with internal link maps.' },
            { q: 'Do you guarantee rankings?', a: 'We don’t game algorithms; we build durable growth with best practices.' },
            { q: 'What about local SEO?', a: 'We implement GBP, citations, local content, and review strategies.' },
          ],
        }}
        cta={{
          title: 'Want stable, compounding organic growth?',
          subtitle: 'Talk to us about a comprehensive SEO audit and 90‑day roadmap.',
          to: '/contact',
          label: 'Contact Us',
        }}
      />
    </div>
  );
};

export default SEO;