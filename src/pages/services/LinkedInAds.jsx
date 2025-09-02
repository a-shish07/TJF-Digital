import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Linkedin, Users, Sparkles, Target } from 'lucide-react';

const LinkedInAds = () => {
  const features = [
    'Advanced B2B targeting with firmographic precision',
    'Lead Generation Forms with instant capture',
    'Account-Based Marketing (ABM) campaigns',
    'Thought leadership content promotion',
    'Multi-stage retargeting sequences',
    'CRM integration and lead nurturing',
    'ROI tracking and attribution modeling',
    'Competitor audience targeting',
  ];

  const tools = ['LinkedIn Campaign Manager', 'Sales Navigator', 'Lead Gen Forms', 'Matched Audiences', 'LinkedIn Insight Tag'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        title="LinkedIn Ads Management Services"
        description="Reach high-value B2B decision-makers with strategic LinkedIn advertising. Advanced targeting, lead generation, and ABM campaigns that drive quality conversions."
        keywords={["linkedin ads", "b2b marketing", "lead generation", "account based marketing", "linkedin advertising", "b2b lead gen", "professional networking ads"]}
      />

      <ServicePage
              hero={{
          title: 'LinkedIn Ads',
          highlight: 'Mastery',
          subtitle: 'Connect with decision-makers where business relationships begin.',
          meshColors: ['from-blue-300/25', 'to-indigo-300/25'],
          accentFrom: 'from-blue-600',
          accentTo: 'to-indigo-700',
          variant: 'linkedin-ads',
          splitReverse: true,
        }}
        primary={{
          icon: <Linkedin className="h-8 w-8 text-white" />,
          title: 'Target the Right Professionals',
          kicker: 'Precision targeting meets professional intent.',
          features: [
            'Firmographic and demographic precision',
            'Instant lead capture with native forms',
            'Multi-touch ABM campaign sequences',
          ],
          chips: undefined,
          variant: 'cards',
          cta: { label: 'Launch B2B Campaigns', to: '/contact' },
          ctaSecondary: { label: 'Explore All Ads Services', to: '/services/paid-ads' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
          icon: <Target className="h-10 w-10" />,
          title: 'B2B Lead Generation Engine',
          subtitle: 'Where professionals make business decisions.',
          stars: 5,
          foot: (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-base font-semibold">
                <Users size={18} /> B2B • ABM • Lead Gen
              </div>
            </div>
          ),
        }}
        ribbon={{ items: [
          { label: 'Lead Quality Score', value: '4.8/5' },
          { label: 'B2B Conversion Rate', value: '12%+' },
          { label: 'Cost per Lead Reduction', value: '45%' },
          { label: 'Pipeline Velocity', value: '2.3x' },
        ]}}
        logos={{ items: tools }}
        showcase={{
          title: 'Why LinkedIn Ads Drive B2B Success',
          items: [
            { title: 'Precision Targeting', note: 'Job titles, company size, industry filters' },
            { title: 'Native Lead Forms', note: 'Pre-filled forms for instant conversion' },
            { title: 'Account-Based Marketing', note: 'Target specific companies and roles' },
            { title: 'Thought Leadership', note: 'Build authority with content promotion' },
            { title: 'Professional Context', note: 'Reach users in business mindset' },
            { title: 'High-Intent Audience', note: 'Decision-makers actively networking' },
          ],
        }}
        about={{
          title: 'LinkedIn Advertising Excellence',
          subtitle:
            'LinkedIn isn\'t just social media—it\'s the world\'s largest professional network where business decisions are made. Our LinkedIn advertising strategies connect you with qualified decision-makers who have the authority and intent to purchase your B2B solutions.',
          rightTitle: 'Perfect for Indian B2B companies',
          rightText:
            'From IT services in Bangalore to manufacturing in Pune, we understand the Indian B2B landscape. Our campaigns target the growing professional community in India while also reaching global markets for export businesses and international expansion.',
        }}
        problemSolution={{
          before: [
            'Struggling to reach B2B decision-makers',
            'High cost per lead with low-quality prospects',
            'Generic messaging failing to resonate',
            'Long sales cycles with poor conversion rates',
          ],
          deliver: [
            'Laser-focused targeting of key decision-makers',
            'Native lead generation forms for instant capture',
            'Personalized messaging for different buyer personas',
            'Multi-stage nurturing campaigns and retargeting',
          ],
          impact: [
            'Direct access to C-suite and department heads',
            'Higher quality leads with better conversion rates',
            'Shortened sales cycles through better qualification',
            'Improved ROI with strategic campaign optimization',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'B2B Strategy & Research', desc: 'ICP definition, buyer persona mapping, competitor analysis' },
            { step: '02', title: 'Campaign Architecture', desc: 'Targeting setup, ad creative development, landing page optimization' },
            { step: '03', title: 'Lead Generation Setup', desc: 'Form optimization, CRM integration, lead scoring configuration' },
            { step: '04', title: 'ABM & Retargeting', desc: 'Account-based sequences, multi-touch campaigns, exclusion lists' },
            { step: '05', title: 'Optimize & Scale', desc: 'Performance analysis, A/B testing, budget reallocation' },
          ],
        }}
        pricing={{
          title: 'LinkedIn Ads Management Packages',
          tiers: [
            { name: 'B2B Starter', price: '₹25,000–₹45,000/mo', features: ['Basic targeting setup', 'Lead gen form creation', 'Monthly reporting', 'Ad spend up to ₹1L'], cta: { label: 'Start B2B Journey', to: '/contact' } },
            { name: 'Professional Growth', price: '₹50,000–₹85,000/mo', features: ['Advanced ABM campaigns', 'Multi-stage retargeting', 'CRM integration', 'Ad spend up to ₹3L'], cta: { label: 'Scale B2B Growth', to: '/contact' } },
            { name: 'Enterprise ABM', price: 'Custom', features: ['Full ABM strategy', 'Account intelligence', 'Sales team training', 'Unlimited ad spend'], cta: { label: 'Enterprise Solution', to: '/contact' } },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↑ Lead Quality 65%', note: 'Better targeting precision' },
            { kpi: '↓ Cost per SQL 45%', note: 'Optimized conversion paths' },
            { kpi: '↑ Pipeline Value 3x', note: 'Higher-value prospects' },
          ],
        }}
        testimonials={{
          title: 'B2B Success Stories',
          items: [
            { quote: 'Our LinkedIn campaigns generated 40% of our sales pipeline. The quality is unmatched.', author: 'Rajesh Kumar', role: 'VP Sales, SaaS Company' },
            { quote: 'Finally reaching C-level executives! Our deal size increased 3x with better targeting.', author: 'Priya Sharma', role: 'Marketing Director, B2B Services' },
            { quote: 'Lead gen forms converted at 12% - way better than any other platform we tried.', author: 'Amit Gupta', role: 'Founder, Consulting Firm' },
          ],
        }}
        faqs={{
          items: [
            { q: 'Why is LinkedIn more expensive than other platforms?', a: 'LinkedIn targets high-value professionals with business intent. While cost-per-click is higher, the lead quality and lifetime value typically provide better ROI for B2B companies.' },
            { q: 'What industries work best for LinkedIn ads?', a: 'B2B SaaS, professional services, manufacturing, healthcare, education, and any business selling to other businesses. It\'s particularly effective for high-value, complex sales.' },
            { q: 'How do Lead Gen Forms work?', a: 'LinkedIn pre-fills forms with users\' professional information, making it easy for them to convert. This results in higher conversion rates and better lead quality.' },
            { q: 'Can you target specific companies?', a: 'Yes! We can target employees at specific companies, create lookalike audiences, and build account-based marketing campaigns targeting your ideal customer profiles.' },
          ],
        }}
        cta={{
          title: 'Ready to reach B2B decision-makers?',
          subtitle: 'Let\'s create LinkedIn campaigns that connect you with qualified prospects who can say "yes."',
          to: '/contact',
          label: 'Launch LinkedIn Strategy',
        }}
      />
    </div>
  );
};

export default LinkedInAds;