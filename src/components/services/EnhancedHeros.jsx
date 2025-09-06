import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Sparkles, 
  Search, 
  Target, 
  Megaphone,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Chrome,
  BarChart3,
  Smartphone,
  Monitor,
  YoutubeIcon,
  Instagram,
  InstagramIcon,
  LucideYoutube,
  Twitter
} from 'lucide-react';


const Container = ({ children, className = '' }) => (
  <div className={`container-max ${className}`}>{children}</div>
);

const Badge = ({ badge }) =>
  badge ? (
    <motion.span 
      className="inline-flex items-center px-5 py-2.5 bg-white/25 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 border border-white/40 shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120, damping: 12 }}
    >
      {badge.icon}
      <span className="ml-2">{badge.text}</span>
    </motion.span>
  ) : null;

// Coding/Development Hero - Futuristic code matrix style
export const CodingHero = ({ hero, badge }) => {
  const codeLines = [
     'const website = () => {',
  '  return <Amazing />;',
  'export default Success;',
  'const greet = (TJF DIGITAL) => {',
  // '  console.log(`Hello, ${Family}!`);',
  ];

  const floatingWords = [
  'digital',
  'react',
  'coding',
  'AI',
  'frontend',
  'UX',
  'next.js',
  'node',
  'typescript',
  'hacker',
  'neural',
  'backend',
  'firewall',
  'console.log()',
  'cyber',
  'blockchain',
  'debug',
  'exploit',
  'malware',
  'terminal'
];

  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden text-white">
      {/* Matrix-style floating binary and words */}
      <div className="absolute inset-0 z-0 pointer-events-none">
  {Array.from({ length: 80 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-xs font-mono"
      initial={{
        x: Math.random() * 1200,
        y: Math.random() * 800,
        opacity: 0,
      }}
      animate={{
        y: [Math.random() * 500, -100],
        opacity: [0, 0.2, 0],
      }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: 'linear',
      }}
      style={{
        color: 'white',
        opacity: 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {floatingWords[Math.floor(Math.random() * floatingWords.length)]}
    </motion.div>
  ))}
</div>


      {/* Floating Code Snippets */}
      <div className="absolute inset-0 z-0">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-md px-4 py-2 text-green-300 font-mono text-sm shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0.7, 1, 0.7],
              x: [null, Math.random() * 100 - 100],
              y: [null, Math.random() * 50 - 25],
            }}
            transition={{
              delay: i * 0.5,
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <Container className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 12 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-emerald-500 drop-shadow">
              {hero?.title}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              {hero?.highlight}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {hero?.subtitle}
          </motion.p>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[Code, Globe, Smartphone, Monitor].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${20 + i * 20}%`,
                  right: `${10 + i * 10}%`,
                }}
              >
                <Icon className="w-8 h-8 text-green-400/20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

import {
  Settings as Gear,
  Cloud,
  
} from 'lucide-react';


export const WordPressHero = ({ hero, badge }) => {
  const backgroundIcons = [
    { Icon: Smartphone, size: 48, color: '#3498db', label: 'Mobile' },
    { Icon: Gear, size: 48, color: '#7f8c8d', label: 'Settings' },
    { Icon: Cloud, size: 48, color: '#bdc3c7', label: 'Cloud' },
    { Icon: Code, size: 48, color: '#2ecc71', label: 'Code' },
  ];

  return (
    <section className="relative min-h-[80vh] bg-black text-white overflow-hidden">
      {/* Background WordPress logo and tech icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
       
        {/* Floating tech icons */}
        {backgroundIcons.map(({ Icon, size, color, label }, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center select-none"
            style={{
              top: `${15 + i * 15}%`,
              left: `${60 + (i % 2) * 15}%`,
              color,
              fontSize: size,
              filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.5))',
              userSelect: 'none',
            }}
            animate={{
              y: [0, 15, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
          >
            <Icon size={size} />
            <span className="mt-1 text-xs font-semibold text-white/70">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <Container className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <Badge badge={badge} />
          <div className="mt-8" />

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 12 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-emerald-500 drop-shadow">
              {hero?.title}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              {hero?.highlight || 'Custom themes, plugins & solutions'}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-200 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {hero?.subtitle || 'Build your site with power and flexibility.'}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};




// SEO Hero - Search results animation style
export const SEOHero = ({ hero, badge }) => {
  const searchResults = [
    "Your Business - #1 Result",
    "Top Local Company - Your Business",
    "Best Service Provider - Your Business"
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Search Interface Mockup - Hidden on mobile, shown on desktop */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center">
        <motion.div
          className="w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >

          {/* Search Results */}
          <div className="space-y-4 ml-60">
            {searchResults.map((result, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-200"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.3 }}
                whileHover={{ scale: 1.01, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded mr-3 font-bold">
                    #{i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-700">{result}</div>
                    <div className="text-sm text-gray-600">Top ranking • High authority • Local favorite</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Container className="relative z-10 h-full flex items-center py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge badge={badge} />
            <div className="mt-8" />
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">{hero?.title}</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                {hero?.highlight}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              {hero?.subtitle}
            </p>

            {/* Mobile-friendly search results */}
            <div className="block lg:hidden mb-8">
              <div className="grid gap-3">
                {searchResults.slice(0, 2).map((result, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-emerald-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  >
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded mr-2 font-bold">
                        #{i + 1}
                      </div>
                      <div className="font-semibold text-emerald-700 text-sm">{result.split(' - ')[0]}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ranking Animation */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="flex items-center bg-emerald-100 rounded-full px-4 py-2">
                <BarChart3 className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-emerald-700 font-semibold">Rankings ↗ 250%</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* This space is used by the search interface on desktop */}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Digital Marketing Hero - Social media feed style
export const DigitalMarketingHero = ({ hero, badge }) => {
  const posts = [
    { platform: 'facebook', likes: '2.4K', comments: '156' },
    { platform: 'instagram', likes: '3.2K', comments: '89' },
    { platform: 'Youtube', likes: '890', comments: '34' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-pink-100 via-white to-rose-100 overflow-hidden">
      {/* Floating Social Cards - Hidden on mobile, shown on desktop */}
      <div className="absolute inset-0 hidden lg:block">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-2xl shadow-xl p-6 border-2"
            style={{
              top: `${20 + i * 25}%`,
              right: `${5 + i * 10}%`,
              borderColor: post.platform === 'facebook' ? '#1877F2' : 
                          post.platform === 'instagram' ? '#E4405F' : '#0077B5'
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="flex items-center mb-4">
              {post.platform === 'facebook' && <Facebook className="w-6 h-6 text-blue-600" />}
              {post.platform === 'instagram' && <InstagramIcon className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />}
              {post.platform === 'Youtube' && <YoutubeIcon className="w-6 h-6 text-blue-700" />}
              <span className="ml-2 font-semibold capitalize">{post.platform}</span>
            </div>
            <div className="h-20 bg-gray-100 rounded-lg mb-4"></div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 h-full flex items-center py-16">
        <motion.div
          className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            {hero?.subtitle}
          </p>

          {/* Mobile-friendly social platforms showcase */}
          <div className="block lg:hidden mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 shadow-lg"
                  style={{
                    borderColor: post.platform === 'facebook' ? '#1877F2' : 
                                post.platform === 'instagram' ? '#E4405F' : '#0077B5'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    {post.platform === 'facebook' && <Facebook className="w-6 h-6 text-blue-600" />}
                    {post.platform === 'instagram' && <InstagramIcon className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />}
                    {post.platform === 'Youtube' && <YoutubeIcon className="w-6 h-6 text-blue-700" />}
                    <span className="ml-2 font-semibold capitalize">{post.platform}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics Animation */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            {['Reach +300%', 'Engagement +150%', 'Conversions +200%'].map((metric, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {metric}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// GMB/Local SEO Hero - Map and local business style
export const GMBHero = ({ hero, badge }) => {
  const businesses = [
    { name: 'Your Business', rating: 5.0, reviews: '200+' },
    { name: 'Competitor A', rating: 4.2, reviews: '150+' },
    { name: 'Competitor B', rating: 3.8, reviews: '100+' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-emerald-100 via-white to-teal-100 overflow-hidden">
      {/* Map Background */}
     <div className="absolute inset-0 opacity-100">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      {/* Grid pattern */}
      <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#10B981" strokeWidth="0.5"/>
      </pattern>

      {/* Arrowhead definition */}
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
      </marker>
    </defs>

    {/* Grid background */}
    <rect width="100" height="100" fill="url(#map-grid)" />

    {/* Growth line */}
    <polyline 
      points="10,90 30,70 50,75 80,30" 
      fill="none" 
      stroke="#10B981" 
      strokeWidth=".5"
      markerEnd="url(#arrowhead)"
    >
      <animate 
        attributeName="stroke-dasharray"
        from="0, 200"
        to="200, 0"
        dur="2s"
        fill="freeze"
      />
    </polyline>
  </svg>
</div>


      {/* Floating Business Cards - Hidden on mobile, shown on desktop */}
      <div className="absolute inset-0 hidden lg:block">
        {businesses.map((business, i) => (
          <motion.div
            key={i}
            className={`absolute bg-white rounded-xl shadow-2xl p-4 border-l-4 ${
              i === 0 ? 'border-emerald-500' : 'border-gray-300'
            }`}
            style={{
              top: `${30 + i * 20}%`,
              right: `${10 + i * 15}%`,
              transform: `scale(${i === 0 ? 1.1 : 0.9})`
            }}
            animate={{
              y: [0, -8, 0],
              scale: i === 0 ? [1.1, 1.15, 1.1] : [0.9, 0.95, 0.9]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3
            }}
            whileHover={{ scale: i === 0 ? 1.2 : 1.0 }}
          >
            <div className="flex items-center mb-2">
              <MapPin className={`w-5 h-5 ${i === 0 ? 'text-emerald-600' : 'text-gray-400'} mr-2`} />
              <span className={`font-semibold ${i === 0 ? 'text-emerald-700' : 'text-gray-600'}`}>
                {business.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-500">{'★'.repeat(Math.floor(business.rating))}</span>
                <span className="ml-2 text-sm font-medium">{business.rating}</span>
              </div>
              <span className="text-xs text-gray-500">{business.reviews}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 h-full flex items-center py-16">
        <motion.div
          className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            {hero?.subtitle}
          </p>

          {/* Mobile-friendly business comparison */}
          <div className="block lg:hidden mb-8">
            <div className="space-y-3">
              {businesses.slice(0, 1).map((business, i) => (
                <motion.div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-emerald-500 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                      <span className="font-semibold text-emerald-700">{business.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-lg">{'★'.repeat(Math.floor(business.rating))}</span>
                      <span className="ml-2 font-medium">{business.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Local Stats */}
          <motion.div 
            className="bg-emerald-50 border border-emerald-200 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-600">#1</div>
                <div className="text-sm text-gray-600">Local Ranking</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">5.0★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">+75%</div>
                <div className="text-sm text-gray-600">More Calls</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// Ads Hero - Ad dashboard style
export const AdsHero = ({ hero, badge, adType = 'Google' }) => {
  const metrics = [
    { label: 'CTR', value: '8.5%', change: '+25%' },
    { label: 'CPC', value: '₹12', change: '-30%' },
    { label: 'ROAS', value: '450%', change: '+180%' }
  ];

  const platforms = {
    Google: { color: 'from-blue-600 to-green-600', icon: Chrome },
    Meta: { color: 'from-blue-600 to-purple-600', icon: Facebook },
    LinkedIn: { color: 'from-blue-600 to-blue-800', icon: Linkedin }
  };

  const platform = platforms[adType] || platforms.Google;

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <Container className="relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] py-16">
          {/* Headlines/Content Column - Now First */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge badge={badge} />
            <div className="mt-8" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-gray-900">{hero?.title}</span>
              <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${platform.color}`}>
                {hero?.highlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
              {hero?.subtitle}
            </p>

            {/* Performance Indicators */}
            <div className="flex flex-wrap gap-4">
              {['ROI 450%', 'CPC -30%', 'CTR +25%'].map((stat, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-r ${platform.color} text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg text-sm md:text-base`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {stat}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Column - Now Second */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-gray-200 mx-auto max-w-md lg:max-w-none">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center">
                  <platform.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mr-2 md:mr-3" />
                  <span className="text-lg md:text-xl font-bold text-gray-900">{adType} Ads Dashboard</span>
                </div>
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-2 md:p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${platform.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div className="text-xs text-green-600 font-semibold">{metric.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="h-16 md:h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-end justify-around p-2 md:p-4">
                {Array.from({ length: 7 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`bg-gradient-to-t ${platform.color} rounded-t`}
                    style={{ width: '6px', maxWidth: '8px' }}
                    initial={{ height: 0 }}
                    animate={{ height: `${20 + Math.random() * 40}px` }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

// Social Media Hero - Social feed animation
export const SocialMediaHero = ({ hero, badge }) => {
  const socialPosts = [
    { type: 'image', engagement: '2.1K', platform: 'Instagram',icon: <InstagramIcon className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" /> },
    { type: 'video', engagement: '5.4K', platform: 'Facebook',icon: <Facebook className="w-6 h-6 text-blue-600" /> },
    { type: 'story', engagement: '1.8K', platform: 'Youtube',icon: <LucideYoutube className="w-6 h-6 text-blue-700" /> },
    { type: 'post', engagement: '3.3K', platform: 'LinkedIn',icon: <Linkedin className="w-6 h-6 text-blue-800" /> },
    { type: 'poll', engagement: '1.2K', platform: 'Twitter',icon: <Twitter className="w-6 h-6 text-sky-600" /> },
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 overflow-hidden">
      {/* Social Media Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-8 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>

      {/* Floating Social Cards - Hidden on mobile, shown on desktop */}
      <div className="absolute inset-0 hidden lg:block">
        {socialPosts.map((post, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-2xl shadow-xl p-4 border-2 border-pink-200"
            style={{
              top: `${10 + i * 15}%`,
              right: `${5 + i * 7}%`,
              width: '200px'
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            whileHover={{ scale: 1.1, rotate: 8 }}
          >
            {/* <div className="h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-3"></div> */}
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-gray-900">{post.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{post.platform}</span>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">❤️</span>
                <span>{post.engagement}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 h-full flex items-center py-16">
        <motion.div
          className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            {hero?.subtitle}
          </p>

          {/* Mobile-friendly social platforms showcase */}
          <div className="block lg:hidden mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socialPosts.slice(0, 6).map((post, i) => (
                <motion.div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-pink-200 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-lg mb-1">{post.icon}</span>
                    <span className="text-xs font-semibold text-gray-700">{post.platform}</span>
                    <div className="flex items-center text-xs text-gray-600 mt-1">
                      <span className="mr-1">❤️</span>
                      <span>{post.engagement}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Metrics */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">150%</div>
                <div className="text-sm text-gray-600">Engagement ↗</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">50K+</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">25%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default {
  CodingHero,
  WordPressHero,
  SEOHero,
  DigitalMarketingHero,
  GMBHero,
  AdsHero,
  SocialMediaHero
};