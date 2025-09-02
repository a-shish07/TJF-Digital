import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Monitor,  Smartphone, Sparkles } from 'lucide-react';

const WordPressWebsite = () => {
  const features = [
    'Custom WordPress theme development',
    'WooCommerce e-commerce integration',
    'Plugin development & customization',
    'SEO optimization & performance',
    'Mobile-responsive design',
    'Content management system (CMS)',
    'Website maintenance & support',
    'Security hardening & backups',
  ];

  const tech = ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Elementor', 'ACF'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="WordPress Website Development"
        description="Professional WordPress websites with custom themes, WooCommerce integration, and powerful CMS functionality. Easy to manage and SEO optimized."
        keywords={["wordpress development", "wordpress website", "cms", "woocommerce", "custom themes", "plugin development"]}
      />

      <ServicePage
        hero={{
          title: 'WordPress',
          highlight: 'Websites',
          subtitle: 'Professional, user-friendly websites built on the world\'s most popular CMS.',
          meshColors: ['from-blue-300/25', 'to-purple-300/25'],
          accentFrom: 'from-blue-600',
          accentTo: 'to-purple-600',
          variant: 'coding',
          splitReverse: false,
        }}
        primary={{
          icon: <Monitor className="h-8 w-8 text-white" />,
          title: 'Power & Simplicity Combined',
          kicker: 'Easy to manage. Powerful to scale. Beautiful to behold.',
          features: [
            'Custom WordPress theme development',
            'WooCommerce e-commerce integration',
            'Easy content management system',
          ],
          chips: undefined,
          variant: 'cards',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-blue-600 to-purple-600',
          // icon: <Wordpress className="h-10 w-10" />,
          title: 'WordPress Excellence',
          subtitle: 'Custom themes, plugins, and CMS solutions for every business need.',
          stars: 5,
          foot: (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-base font-semibold">
                <Smartphone size={18} /> CMS • E-commerce • SEO
              </div>
            </div>
          ),
        }}
        ribbon={{ items: [
          { label: 'WordPress Sites Built', value: '300+' },
          { label: 'Client Satisfaction', value: '98%' },
          { label: 'Avg. Load Time', value: '≤ 2.5s' },
          { label: 'SEO Score', value: '95+' },
        ]}}
        logos={{ items: tech }}
        showcase={{
          title: 'What Makes Our WordPress Sites Special',
          items: [
            { title: 'Custom Themes', note: 'Tailored designs, no templates' },
            { title: 'WooCommerce Ready', note: 'Full e-commerce integration' },
            { title: 'Plugin Development', note: 'Custom functionality' },
            { title: 'SEO Optimized', note: 'Search engine friendly' },
            { title: 'Security First', note: 'Hardened & protected' },
            { title: 'Easy Management', note: 'User-friendly admin' },
          ],
        }}
        about={{
          title: 'WordPress Development Services',
          subtitle:
            'We create professional WordPress websites that are easy to manage, SEO-optimized, and built to scale. From simple business websites to complex e-commerce stores, we leverage WordPress\'s flexibility to deliver exactly what your business needs.',
          rightTitle: 'Perfect for Indian businesses',
          rightText:
            'WordPress powers 40% of the web for good reason - it\'s flexible, cost-effective, and easy to manage. We create WordPress sites optimized for Indian market needs, with fast loading times, mobile-first design, and local SEO optimization.',
        }}
        problemSolution={{
          before: [
            'Generic templates that look like everyone else',
            'Slow loading times affecting user experience',
            'Difficult to update content without technical help',
            'Poor SEO performance and low search rankings',
          ],
          deliver: [
            'Custom WordPress themes designed for your brand',
            'Optimized performance with caching and CDN',
            'User-friendly CMS for easy content updates',
            'SEO-ready structure with schema markup',
          ],
          impact: [
            'Unique brand presence that stands out',
            'Faster loading sites improve user engagement',
            'Independent content management saves time/money',
            'Better SEO rankings drive organic traffic',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Discovery & Planning', desc: 'Brand analysis, content strategy, feature planning' },
            { step: '02', title: 'Design & Wireframe', desc: 'Custom design mockups and user experience planning' },
            { step: '03', title: 'Theme Development', desc: 'Custom WordPress theme coding and functionality' },
            { step: '04', title: 'Content & SEO Setup', desc: 'Content migration, SEO optimization, plugin setup' },
            { step: '05', title: 'Testing & Launch', desc: 'Quality assurance, training, and go-live support' },
          ],
        }}
        pricing={{
          title: 'WordPress Packages',
          tiers: [
            { name: 'Business Website', price: '₹15,000–₹35,000', features: ['5-10 pages', 'Custom design', 'Mobile responsive', 'Basic SEO setup'], cta: { label: 'Start Project', to: '/contact' } },
            { name: 'E-commerce Store', price: '₹35,000–₹75,000', features: ['WooCommerce setup', 'Payment gateway', 'Product management', 'Order tracking'], cta: { label: 'Get Quote', to: '/contact' } },
            { name: 'Enterprise Solution', price: 'Custom', features: ['Multi-site management', 'Advanced integrations', 'Custom plugins', '24/7 support'], cta: { label: 'Book Consultation', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↓ Management Time 70%', note: 'Easy content updates' },
            { kpi: '↑ Page Speed 40%', note: 'Optimized performance' },
            { kpi: '↑ SEO Rankings 60%', note: 'Search engine friendly' },
          ],
        }}
        testimonials={{
          title: 'Client Success Stories',
          items: [
            { quote: 'Managing our website content is now so easy, even our non-tech team can do it!', author: 'Priya M.', role: 'Marketing Head' },
            { quote: 'Our WordPress e-commerce store increased sales by 40% in 3 months.', author: 'Rajesh K.', role: 'Online Store Owner' },
            { quote: 'Professional design with the flexibility we needed. Great support too!', author: 'Amit S.', role: 'Business Owner' },
          ],
        }}
        faqs={{
          items: [
            { q: 'Why choose WordPress over other platforms?', a: 'WordPress is flexible, SEO-friendly, easy to manage, and has a huge ecosystem of plugins and themes. It\'s perfect for businesses that want to manage their own content.' },
            { q: 'Will my WordPress site be secure?', a: 'Yes, we implement security best practices including regular updates, security plugins, SSL certificates, and secure hosting configurations.' },
            { q: 'Can you migrate my existing website to WordPress?', a: 'Absolutely! We handle complete website migrations including content, design improvements, and SEO preservation.' },
            { q: 'Do you provide WordPress training?', a: 'Yes, we provide comprehensive training on managing your WordPress website, including content updates, plugin management, and basic troubleshooting.' },
          ],
        }}
        cta={{
          title: 'Ready to build your professional WordPress website?',
          subtitle: 'Let\'s create a website that\'s beautiful, functional, and easy to manage.',
          to: '/contact',
          label: 'Start Your WordPress Project',
        }}
      />
    </div>
  );
};

export default WordPressWebsite;