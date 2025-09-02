import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Monitor, Code, Smartphone, Sparkles } from 'lucide-react';

const WebDesignDevelopment = () => {
  const features = [
    'Responsive, mobile-first design',
    'High-performance, SEO-ready code',
    'Landing pages and multi-page sites',
    'E-commerce and CMS (WordPress/Headless)',
    'Accessibility and Core Web Vitals focused',
    'Conversion-optimized UI/UX',
    'SSG/ISR-ready builds for speed (where applicable)',
    'Analytics, heatmaps, and event tracking setup',
  ];

  const tech = ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'WordPress', 'Next.js'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Web Design & Development"
        description="Fast, conversion-focused websites built with modern stacks. SEO-ready, accessible, and optimized for Core Web Vitals."
        keywords={["web design", "web development", "react", "next.js", "tailwind", "landing pages"]}
      />

      <ServicePage
        hero={{
          title: 'Web Design &',
          highlight: 'Development',
          subtitle: 'Fast, beautiful, conversion-focused websites.',
          meshColors: ['from-blue-300/25', 'to-purple-300/25'],
          accentFrom: 'from-blue-600',
          accentTo: 'to-purple-600',
          variant: 'coding',
          splitReverse: false,
        }}
        primary={{
          icon: <Monitor className="h-8 w-8 text-white" />,
          title: 'Build for Impact',
          kicker: 'Design that delights. Code that performs.',
          features: [
            'Responsive, mobile-first design',
            'High-performance, SEO-ready code',
            'Conversion-optimized UI/UX',
          ],
          chips: undefined,
          variant: 'cards',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-blue-600 to-purple-600',
          icon: <Code className="h-10 w-10" />,
          title: 'Lightning-Fast Websites',
          subtitle: 'Core Web Vitals + delightful UX on every device.',
          stars: 5,
          foot: (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-base font-semibold">
                <Smartphone size={18} /> Mobile-first • A11y • SEO
              </div>
            </div>
          ),
        }}
        ribbon={{ items: [
          { label: 'Avg. LCP on LPs', value: '≤ 1.5s' },
          { label: 'Projects Delivered', value: '100+' },
          { label: 'Client Satisfaction', value: '98%' },
          { label: 'A/B Test Win Rate', value: '63%' },
        ]}}
        logos={{ items: tech }}
        showcase={{
          title: 'What Makes Our Builds Different',
          items: [
            { title: 'Component Libraries', note: 'Design systems for consistency' },
            { title: 'CRO Architecture', note: 'Offers, forms, trust, UX' },
            { title: 'Headless & CMS', note: 'Scale content with speed' },
            { title: 'Accessibility', note: 'WCAG‑friendly experiences' },
            { title: 'Analytics Ready', note: 'Events, UTM, heatmaps' },
            { title: 'Future‑proof', note: 'Clear roadmaps & handover' },
          ],
        }}
        about={{
          title: 'What This Service Is',
          subtitle:
            'We build modern, responsive websites engineered for speed, clarity, and conversion—purpose-built to turn visitors into customers. From landing pages to full-scale sites, we design for outcomes, not just aesthetics.',
          rightTitle: 'India-first, for every business model',
          rightText:
            'Whether you’re an MSME, D2C brand, local service business, clinic, or B2B firm, we craft interfaces and user journeys that match Indian buyer behavior, mobile usage patterns, and price sensitivity—without compromising quality.',
        }}
        problemSolution={{
          before: [
            'Slow load, high bounce, low trust',
            'Generic templates that don’t convert',
            'Poor mobile UX and unclear messaging',
            'No analytics clarity or SEO foundation',
          ],
          deliver: [
            'UX strategy, wireframes, brand-consistent design',
            'High-performance builds (Core Web Vitals)',
            'Conversion architecture (offers, forms, CTAs)',
            'CMS/Headless, SEO-ready, analytics & event tracking',
          ],
          impact: [
            'Faster sites → better SEO & conversions',
            'Clear messaging → higher trust & inquiries',
            'Scalable architecture → easier updates',
            'Actionable analytics → smarter decisions',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Discovery', desc: 'Brand, goals, users, competitors' },
            { step: '02', title: 'UX & Content', desc: 'IA, wireframes, copy strategy' },
            { step: '03', title: 'Visual Design', desc: 'High-fidelity UI & components' },
            { step: '04', title: 'Build & Optimize', desc: 'Performance, SEO, tracking' },
            { step: '05', title: 'Launch & Iterate', desc: 'QA, analytics, CRO' },
          ],
        }}
        pricing={{
          title: 'Flexible Packages',
          tiers: [
            { name: 'Landing Page', price: '₹15,000–₹35,000', features: ['Single page, high‑converting', 'Copy & design templates', 'Speed & SEO fundamentals'], cta: { label: 'Start Project', to: '/contact' } },
            { name: 'Business Website', price: '₹45,000–₹1.5L', features: ['5–12 pages + blog', 'CMS/WordPress', 'Tracking + SEO best‑practices'], cta: { label: 'Get Quote', to: '/contact' } },
            { name: 'E‑commerce / Headless', price: 'Custom', features: ['Catalog & checkout', 'Scalable architecture', 'CRO, analytics & feeds'], cta: { label: 'Book Discovery', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↓ Bounce 30–50%', note: 'Mobile-first performance' },
            { kpi: '↑ Conversions 25–60%', note: 'Clear offers + UX' },
            { kpi: '≤ 1.5s LCP', note: 'On key landing pages' },
          ],
        }}
        testimonials={{
          title: 'What Clients Say',
          items: [
            { quote: 'Our new site halved load times and doubled demo requests.', author: 'Rohit S.', role: 'B2B SaaS Founder' },
            { quote: 'Design quality and CRO guidance were top‑notch.', author: 'Sakshi K.', role: 'D2C Brand' },
            { quote: 'Clean build, easy to manage, great Lighthouse scores.', author: 'Vivek P.', role: 'Clinic Owner' },
          ],
        }}
        faqs={{
          items: [
            { q: 'How long does it take?', a: 'Typical builds take 2–6 weeks depending on scope and integrations.' },
            { q: 'Do you provide content?', a: 'We can write copy and produce visuals or collaborate with your team.' },
            { q: 'Will my site be SEO-ready?', a: 'Best-practice structure, metadata, schema (where relevant), and CWV focus.' },
            { q: 'Do you handle maintenance?', a: 'Available as a retainer or ad‑hoc support after launch.' },
          ],
        }}
        cta={{
          title: 'Ready to turn your website into a growth engine?',
          subtitle: 'Let’s scope the build and timelines that fit your goals.',
          to: '/contact',
          label: 'Contact Us',
        }}
      />
    </div>
  );
};

export default WebDesignDevelopment;