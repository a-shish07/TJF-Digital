import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Facebook, Instagram, Sparkles, Play } from 'lucide-react';

const MetaAds = () => {
  const features = [
    'Full-funnel Facebook & Instagram advertising',
    'Advanced creative testing and optimization',
    'Pixel and Conversions API implementation',
    'Lookalike and custom audience strategies',
    'Video content and Reels advertising',
    'E-commerce catalog and dynamic ads',
    'Multi-platform campaign coordination',
    'Attribution modeling and event tracking',
  ];

  const tools = ['Meta Business Manager', 'Facebook Pixel', 'Conversions API', 'Meta Creative Hub', 'Advantage+ Shopping'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Meta Ads Management Services - Facebook & Instagram"
        description="Drive massive reach and engagement with strategic Meta advertising. Advanced creative testing, audience targeting, and conversion optimization across Facebook and Instagram."
        keywords={["meta ads", "facebook advertising", "instagram ads", "social media advertising", "facebook marketing", "instagram marketing", "video ads"]}
      />

      <ServicePage
        hero={{
          title: 'Meta Ads',
          highlight: 'Facebook & Instagram',
          subtitle: 'Scale your business with the power of Facebook and Instagram advertising.',
          meshColors: ['from-blue-300/25', 'to-pink-300/25'],
          accentFrom: 'from-blue-600',
          accentTo: 'to-pink-600',
          variant: 'meta-ads',
          splitReverse: false,
        }}
        primary={{
          icon: (
            <div className="flex items-center gap-2">
              <Facebook className="h-8 w-8 text-white" />
              <Instagram className="h-8 w-8 text-white" />
            </div>
          ),
          title: 'Reach Billions of Users',
          kicker: 'Creative excellence meets audience precision.',
          features: [
            'Advanced audience targeting and lookalikes',
            'High-converting creative testing frameworks',
            'Full-funnel campaign optimization',
          ],
          chips: undefined,
          variant: 'cards',
          cta: { label: 'Scale with Meta', to: '/contact' },
          ctaSecondary: { label: 'Explore All Ads Services', to: '/services/paid-ads' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-blue-600 to-pink-600',
          icon: <Play className="h-10 w-10" />,
          title: 'Creative That Converts',
          subtitle: 'Thumb-stopping content that drives action.',
          stars: 5,
          foot: (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center gap-3 text-base font-semibold">
                <Facebook size={18} />
                <Instagram size={18} />
                Video • Stories • Feed • Reels
              </div>
            </div>
          ),
        }}
        ribbon={{
          items: [
            { label: 'Average ROAS', value: '4.5x' },
            { label: 'Creative Win Rate', value: '78%' },
            { label: 'Cost Reduction', value: '40%' },
            { label: 'Reach Potential', value: '3B+' },
          ],
        }}
        logos={{ items: tools }}
        showcase={{
          title: 'What Makes Our Meta Campaigns Different',
          items: [
            { title: 'Creative Testing Lab', note: 'Systematic A/B testing for winning ads' },
            { title: 'Audience Intelligence', note: 'Data-driven targeting and lookalikes' },
            { title: 'Video First Strategy', note: 'Reels, Stories, and video content' },
            { title: 'E-commerce Integration', note: 'Catalog ads and dynamic retargeting' },
            { title: 'Advanced Tracking', note: 'Pixel + CAPI for accurate attribution' },
            { title: 'Scale Protection', note: 'Maintain performance while growing spend' },
          ],
        }}
        about={{
          title: 'Meta Advertising Mastery',
          subtitle:
            'With over 3 billion active users across Facebook and Instagram, Meta platforms offer unparalleled reach and engagement opportunities. Our data-driven approach combines creative excellence with sophisticated targeting to deliver measurable results that scale with your business growth.',
          rightTitle: 'Built for the Indian market',
          rightText:
            'From D2C brands in tier-1 cities to local businesses expanding nationwide, we understand Indian consumer behavior on social platforms. Our campaigns leverage cultural insights, regional preferences, and local trends to create authentic connections that convert.',
        }}
        problemSolution={{
          before: [
            'High ad costs with poor creative performance',
            'Audiences getting fatigued quickly',
            'Inconsistent campaign results and ROAS',
            'Difficulty scaling without losing performance',
          ],
          deliver: [
            'Systematic creative testing and optimization',
            'Advanced audience segmentation and lookalikes',
            'Full-funnel campaign architecture',
            'Precise tracking and attribution setup',
          ],
          impact: [
            'Lower cost per acquisition with higher ROAS',
            'Fresh creative pipeline preventing audience fatigue',
            'Predictable, scalable campaign performance',
            'Clear attribution and business impact tracking',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Strategy & Setup', desc: 'Account audit, pixel implementation, audience research, competitive analysis' },
            { step: '02', title: 'Creative Development', desc: 'Ad concept creation, video production, design assets, copy testing' },
            { step: '03', title: 'Campaign Launch', desc: 'Targeting setup, budget allocation, tracking configuration, launch execution' },
            { step: '04', title: 'Optimize & Test', desc: 'Performance monitoring, A/B testing, audience optimization, creative iteration' },
            { step: '05', title: 'Scale & Expand', desc: 'Budget scaling, new audience exploration, campaign expansion, reporting' },
          ],
        }}
        pricing={{
          title: 'Meta Ads Management Packages',
          tiers: [
            {
              name: 'Growth Starter',
              price: '₹18,000–₹35,000/mo',
              features: ['Campaign setup & management', 'Basic creative testing', 'Monthly reporting', 'Ad spend up to ₹2L'],
              cta: { label: 'Start Growing', to: '/contact' },
            },
            {
              name: 'Scale Master',
              price: '₹40,000–₹75,000/mo',
              features: ['Advanced audience strategies', 'Video creative production', 'Weekly optimization', 'Ad spend up to ₹5L'],
              cta: { label: 'Scale Faster', to: '/contact' },
            },
            {
              name: 'Enterprise Growth',
              price: 'Custom',
              features: ['Full creative studio', 'Multi-brand management', 'Custom integrations', 'Unlimited ad spend'],
              cta: { label: 'Enterprise Solution', to: '/contact' },
            },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↑ ROAS 4.5x', note: 'Optimized creative & targeting' },
            { kpi: '↓ CAC by 40%', note: 'Better audience precision' },
            { kpi: '↑ Reach 300%', note: 'Expanded audience discovery' },
          ],
        }}
        testimonials={{
          title: 'Meta Success Stories',
          items: [
            {
              quote: 'Our D2C brand scaled from ₹5L to ₹50L monthly revenue with their Meta strategy. ROI is incredible!',
              author: 'Sneha Agarwal',
              role: 'Fashion Brand Founder',
            },
            {
              quote: 'Creative testing approach doubled our conversion rates. Finally found what resonates with our audience.',
              author: 'Karan Mehta',
              role: 'E-commerce Director',
            },
            {
              quote: 'Lead quality improved 3x while cost per lead dropped by 45%. Meta ads are now our primary channel.',
              author: 'Ritika Sharma',
              role: 'EdTech Marketing Head',
            },
          ],
        }}
        faqs={{
          items: [
            {
              q: 'How do you ensure consistent creative performance?',
              a: 'We use systematic A/B testing frameworks, analyze winning patterns, and maintain a continuous pipeline of fresh creative concepts to prevent audience fatigue.',
            },
            {
              q: 'Can you help with video content creation?',
              a: 'Yes! We provide end-to-end video production including Reels, Stories, feed videos, and UGC-style content optimized for Meta platforms.',
            },
            {
              q: 'What makes Meta ads different from Google ads?',
              a: "Meta excels at discovery and visual storytelling, reaching people who aren't actively searching. It's perfect for building brand awareness and impulse purchases.",
            },
            {
              q: 'How do you track conversions accurately?',
              a: 'We implement both Facebook Pixel and Conversions API for accurate attribution, plus integrate with your analytics tools for comprehensive tracking.',
            },
          ],
        }}
        cta={{
          title: 'Ready to dominate Facebook and Instagram?',
          subtitle: "Let's create Meta campaigns that turn social engagement into business growth.",
          to: '/contact',
          label: 'Launch Meta Strategy',
        }}
      />
    </div>
  );
};

export default MetaAds;
