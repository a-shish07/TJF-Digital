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
  Chrome,
  BarChart3,
  Smartphone,
  Monitor
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
    '  return <Amazing />',
    '}',
    'export default Success'
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Code Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-green-400/20"
            initial={{ 
              x: Math.random() * 1200, 
              y: Math.random() * 800,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100], 
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Floating Code Blocks */}
      <div className="absolute inset-0">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg p-3 text-green-400 font-mono text-sm"
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0.8, 1, 0.8], 
              x: [null, Math.random() * 200 - 100],
              y: [null, Math.random() * 50 - 25]
            }}
            transition={{
              delay: i * 0.5,
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 12 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              {hero?.title}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
              {hero?.highlight}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {hero?.subtitle}
          </motion.p>

          {/* Floating tech icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[Code, Globe, Smartphone, Monitor].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                style={{
                  top: `${20 + i * 20}%`,
                  right: `${10 + i * 10}%`
                }}
              >
                <Icon className="w-8 h-8 text-blue-400/30" />
              </motion.div>
            ))}
          </div>
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
      {/* Search Interface Mockup */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Search Bar */}
          <motion.div 
            className="bg-white rounded-full shadow-2xl p-4 mb-8 border"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center">
              <Search className="w-6 h-6 text-gray-400 ml-4" />
              <motion.span 
                className="text-gray-700 ml-4 text-lg"
                transition={{ delay: 0, duration: 1 }}
              >
                "Best Service Near Me"
              </motion.span>
            </div>
          </motion.div>

          {/* Search Results */}
          <div className="space-y-4">
            {searchResults.map((result, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-200"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.3 }}
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

      <Container className="relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge badge={badge} />
            <div className="mt-8" />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">{hero?.title}</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                {hero?.highlight}
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              {hero?.subtitle}
            </p>

            {/* Ranking Animation */}
            <motion.div 
              className="mt-8 flex items-center space-x-4"
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
            {/* This space is used by the search interface */}
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
    { platform: 'linkedin', likes: '890', comments: '34' }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-pink-100 via-white to-rose-100 overflow-hidden">
      {/* Floating Social Cards */}
      <div className="absolute inset-0">
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
              {post.platform === 'instagram' && <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />}
              {post.platform === 'linkedin' && <Linkedin className="w-6 h-6 text-blue-700" />}
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

      <Container className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
            {hero?.subtitle}
          </p>

          {/* Metrics Animation */}
          <div className="flex flex-wrap gap-4">
            {['Reach +300%', 'Engagement +150%', 'Conversions +200%'].map((metric, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold"
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
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#10B981" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#map-grid)" />
        </svg>
      </div>

      {/* Floating Business Cards */}
      <div className="absolute inset-0">
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

      <Container className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
            {hero?.subtitle}
          </p>

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
      {/* Dashboard Background */}
      <div className="absolute inset-0 flex items-center justify-end mr-16">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200 max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <platform.icon className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-gray-900">{adType} Ads Dashboard</span>
            </div>
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${platform.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                <div className="text-xs text-green-600 font-semibold">{metric.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-end justify-around p-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-t ${platform.color} rounded-t`}
                style={{ width: '8px' }}
                initial={{ height: 0 }}
                animate={{ height: `${20 + Math.random() * 60}px` }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <Container className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${platform.color}`}>
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
            {hero?.subtitle}
          </p>

          {/* Performance Indicators */}
          <div className="flex flex-wrap gap-4">
            {['ROI 450%', 'CPC -30%', 'CTR +25%'].map((stat, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-r ${platform.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}
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
      </Container>
    </section>
  );
};

// Social Media Hero - Social feed animation
export const SocialMediaHero = ({ hero, badge }) => {
  const socialPosts = [
    { type: 'image', engagement: '2.1K', platform: 'Instagram' },
    { type: 'video', engagement: '5.4K', platform: 'Facebook' },
    { type: 'story', engagement: '1.8K', platform: 'LinkedIn' }
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

      {/* Floating Social Cards */}
      <div className="absolute inset-0">
        {socialPosts.map((post, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-2xl shadow-xl p-4 border-2 border-pink-200"
            style={{
              top: `${25 + i * 20}%`,
              right: `${5 + i * 15}%`,
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
            <div className="h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-3"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">{post.platform}</span>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">❤️</span>
                <span>{post.engagement}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge badge={badge} />
          <div className="mt-8" />
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="text-gray-900">{hero?.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {hero?.highlight}
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
            {hero?.subtitle}
          </p>

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
  SEOHero,
  DigitalMarketingHero,
  GMBHero,
  AdsHero,
  SocialMediaHero
};