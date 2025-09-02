import React from 'react';
import SeoHead from '../../components/SeoHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServicePage from '../../components/services/ServicePage';
import { Users, Heart, Sparkles, Share2, TrendingUp } from 'lucide-react';

const SocialMediaMarketing = () => {
  return (
    <div className="overflow-hidden">
      <SeoHead
        title="Social Media Marketing"
        description="Grow your brand and community with high-quality content, design, and distribution across Instagram, Facebook, LinkedIn, and YouTube."
        keywords={["social media marketing", "instagram growth", "reels", "content design", "linkedin", "youtube shorts"]}
      />

      <ServicePage
        hero={{
          title: 'Social Media',
          highlight: 'Marketing',
          subtitle: 'Create. Promote. Grow your community and brand.',
          meshColors: ['from-fuchsia-300/25', 'to-cyan-300/25'],
          accentFrom: 'from-fuchsia-600',
          accentTo: 'to-cyan-600',
          variant: 'social-media',
          splitReverse: true,
        }}
        primary={{
          icon: <Users className="h-8 w-8 text-white" />,
          title: 'Audience, Content, Consistency',
          kicker: 'Design quality + distribution systems',
          features: [
            'Content calendar & posting engine',
            'Reels/Shorts, carousels, stories',
            'Community engagement & DMs',
          ],
          variant: 'cards',
          cta: { label: 'Contact Us', to: '/contact' },
          ctaSecondary: { label: 'Explore All Services', to: '/services' },
        }}
        panel={{
          gradient: 'bg-gradient-to-br from-fuchsia-600 to-cyan-600',
          icon: <Share2 className="h-10 w-10" />,
          title: 'Content That Compounds',
          subtitle: 'Design + copy + distribution that actually grows.',
          stars: 5,
          foot: (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-base font-semibold">
                <Heart size={18} /> Engagement • Reach • Community
              </div>
            </div>
          ),
        }}
        ribbon={{ items: [
          { label: 'Posting Cadence', value: '15–30/mo' },
          { label: 'Avg. Reach Lift', value: '↑ 2–5x' },
          { label: 'Format Mix', value: 'Reels • Carousels • Stories' },
          { label: 'Design Quality', value: 'Brand‑consistent' },
        ]}}
        logos={{ items: ['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Canva', 'Figma'] }}
        showcase={{
          title: 'Growth Levers We Operate',
          items: [
            { title: 'Content Engine', note: 'Calendar, hooks, angles' },
            { title: 'Design Quality', note: 'On‑brand, thumb‑stopping' },
            { title: 'Distribution', note: 'Hashtags, collabs, reposts' },
            { title: 'Community', note: 'Replies, DMs, retention' },
            { title: 'UGC + Creators', note: 'Authentic content that scales' },
            { title: 'Analytics', note: 'Dashboards & insights' },
          ],
        }}
        about={{
          title: 'What This Service Is',
          subtitle: 'We run your social end‑to‑end—content planning, on‑brand design, copy, posting, and engagement—to grow followers and drive business outcomes.',
          rightTitle: 'Not just posting—real growth',
          rightText:
            'We combine creative design, trending formats, and distribution systems to reach new audiences, deepen trust, and convert attention into action.',
        }}
        problemSolution={{
          before: [
            'Inconsistent posting; low reach',
            'Unclear brand voice & design quality',
            'No engagement or community feel',
            'No analytics or content direction',
          ],
          deliver: [
            'Content calendar + creative ops',
            'Reels/shorts + high‑quality carousels',
            'Community management system',
            'Dashboards for reach & saves',
          ],
          impact: [
            '↑ Reach & engagement velocity',
            '↑ Follower growth and retention',
            '↑ Brand memorability & trust',
          ],
        }}
        process={{
          steps: [
            { step: '01', title: 'Plan', desc: 'Audience, tone, hooks, formats' },
            { step: '02', title: 'Produce', desc: 'Design + copy + edits' },
            { step: '03', title: 'Publish', desc: 'Schedule + distribution' },
            { step: '04', title: 'Engage', desc: 'Comments + DMs + community' },
            { step: '05', title: 'Learn', desc: 'Analytics + iteration' },
          ],
        }}
        outcomes={{
          cards: [
            { kpi: '↑ Reach 3.1x', note: 'Consistent posting + Reels' },
            { kpi: '↑ Saves 2.4x', note: 'Carousel frameworks + hooks' },
            { kpi: '↑ Followers 65% in 90 days', note: 'Content + collabs' },
          ],
        }}
        testimonials={{
          title: 'Social Growth Stories',
          items: [
            { quote: 'Our Instagram went from inactive to buzzing—reels and carousels hit every week.', author: 'Tanya S.', role: 'Retail' },
            { quote: 'Design quality finally matches our brand. Engagement 2x in a month.', author: 'Aditya R.', role: 'Clinic' },
            { quote: 'Community replies and DMs made a real difference in lead quality.', author: 'Rishi K.', role: 'B2B Services' },
          ],
        }}
        faqs={{
          items: [
            { q: 'How fast to see results?', a: 'Expect reach and engagement velocity in 30–45 days with consistent posting.' },
            { q: 'Do you do reels/shorts?', a: 'Yes—hooks, scripts, editing, and posting workflows.' },
            { q: 'Design tools?', a: 'Figma/Canva pipelines with brand kits and templates.' },
            { q: 'Do you handle comments/DMs?', a: 'Yes—community management guidelines included.' },
          ],
        }}
        cta={{
          title: 'Ready to grow your social media the right way?',
          subtitle: 'Let’s build a content engine that grows reach, trust, and revenue.',
          to: '/contact',
          label: 'Contact Us',
        }}
      />
    </div>
  );
};

export default SocialMediaMarketing;