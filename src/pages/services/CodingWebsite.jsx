import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Monitor, Code, Smartphone, Sparkles } from 'lucide-react';

const CodingWebsite = () => {
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

  const tech = ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Next.js', 'TypeScript'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Custom Coding Website Development"
        description="Fast, conversion-focused websites built with modern stacks. SEO-ready, accessible, and optimized for Core Web Vitals."
        keywords={["custom web development", "react development", "next.js", "tailwind", "landing pages", "progressive web apps"]}
      />


      <ServicePage
        hero={{
          title: 'Custom Coding',
          highlight: 'Websites',
          subtitle: 'Fast, beautiful, conversion-focused websites built from scratch.',
          meshColors: ['from-indigo-300/25', 'to-blue-300/25'],
          accentFrom: 'from-indigo-600',
          accentTo: 'to-blue-600',
          variant: 'coding',
        }}
        primary={{
          icon: <Monitor className="h-8 w-8 text-white" />,
          title: 'Built for Performance',
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
          gradient: 'bg-gradient-to-br from-indigo-600 to-blue-600',
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
          { label: 'Custom Projects', value: '200+' },
          { label: 'Client Satisfaction', value: '98%' },
          { label: 'A/B Test Win Rate', value: '63%' },
        ]}}
        logos={{ items: tech }}
        showcase={{
          title: 'What Makes Our Custom Builds Different',
          items: [
            { title: 'Modern Stack', note: 'React, Next.js, TypeScript' },
            { title: 'CRO Architecture', note: 'Offers, forms, trust, UX' },
            { title: 'Headless & CMS', note: 'Scale content with speed' },
            { title: 'Accessibility', note: 'WCAG‑friendly experiences' },
            { title: 'Analytics Ready', note: 'Events, UTM, heatmaps' },
            { title: 'Future‑proof', note: 'Scalable & maintainable' },
          ],
        }}
        about={{
          title: 'Custom Website Development',
          subtitle:
            'We build modern, responsive websites engineered for speed, clarity, and conversion—purpose-built to turn visitors into customers. From landing pages to full-scale applications, we design for outcomes, not just aesthetics.',
          rightTitle: 'Built for the future',
          rightText:
            'Using cutting-edge technologies like React, Next.js, and modern deployment strategies, we create websites that are fast, secure, and scalable. Perfect for businesses that need unique functionality and superior performance.',
        }}
        problemSolution={{
          before: [
            'Slow load times and poor performance',
            'Generic templates that lack uniqueness',
            'Limited functionality and scalability',
            'Poor SEO and mobile optimization',
          ],
          deliver: [
            'Lightning-fast custom-coded websites',
            'Unique designs tailored to your brand',
            'Advanced features and integrations',
            'SEO-optimized, mobile-first architecture',
          ],
          impact: [
            'Faster sites → better SEO & conversions',
            'Unique presence → stronger brand identity',
            'Custom features → competitive advantage',
            'Scalable code → future-proof investment',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Discovery', desc: 'Brand, goals, users, competitors' },
            { step: '02', title: 'UX & Architecture', desc: 'IA, wireframes, tech stack planning' },
            { step: '03', title: 'Visual Design', desc: 'High-fidelity UI & component systems' },
            { step: '04', title: 'Development', desc: 'Custom coding, performance optimization' },
            { step: '05', title: 'Launch & Scale', desc: 'QA, deployment, monitoring setup' },
          ],
        }}
        pricing={{
          title: 'Custom Development Packages',
          tiers: [
            { name: 'Landing Page', price: '₹35,000–₹65,000', features: ['Single page, high‑converting', 'Custom animations & interactions', 'Speed & SEO optimization'], cta: { label: 'Start Project', to: '/contact' } },
            { name: 'Business Website', price: '₹75,000–₹2.5L', features: ['Multi-page custom build', 'CMS integration', 'Advanced tracking & analytics'], cta: { label: 'Get Quote', to: '/contact' } },
            { name: 'Web Application', price: 'Custom', features: ['Complex functionality', 'Database integration', 'User authentication & dashboards'], cta: { label: 'Book Discovery', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↓ Bounce 40–60%', note: 'Superior performance' },
            { kpi: '↑ Conversions 35–70%', note: 'Custom UX optimization' },
            { kpi: '≤ 1.2s LCP', note: 'On landing pages' },
          ],
        }}
        testimonials={{
          title: 'What Clients Say',
          items: [
            { quote: 'Our custom-built site outperforms all competitors in speed and conversions.', author: 'Rohit S.', role: 'B2B SaaS Founder' },
            { quote: 'The unique features they built gave us a huge competitive advantage.', author: 'Sakshi K.', role: 'D2C Brand' },
            { quote: 'Clean code, lightning fast, and perfectly designed for our needs.', author: 'Vivek P.', role: 'Tech Startup' },
          ],
        }}
        faqs={{
          items: [
            { q: 'How long does custom development take?', a: 'Custom projects typically take 4–12 weeks depending on complexity and feature requirements.' },
            { q: 'What technologies do you use?', a: 'We use modern technologies like React, Next.js, TypeScript, Tailwind CSS, and Node.js for optimal performance.' },
            { q: 'Will my site be SEO-ready?', a: 'Absolutely! We implement best-practice SEO structure, metadata, schema markup, and Core Web Vitals optimization.' },
            { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance packages and can scale your website as your business grows.' },
          ],
        }}
        cta={{
          title: 'Ready to build something extraordinary?',
          subtitle: 'Let\'s create a custom website that sets you apart from the competition.',
          to: '/contact',
          label: 'Start Your Custom Project',
        }}
      />
    </div>
  );
};

export default CodingWebsite;