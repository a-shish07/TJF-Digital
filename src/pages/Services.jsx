import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import { 
  ArrowRight, 
  CheckCircle, 
  Palette, 
  Megaphone, 
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Award,
  Zap,
  Eye,
  Star,
  Rocket,
  Monitor,
  Smartphone,
  Clock,
  Shield,
  Phone,
  Video,
  Users2
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      shortDesc: 'Stunning, conversion-focused websites',
      description: 'We craft extraordinary digital experiences that captivate your audience and drive measurable results. From dynamic websites to responsive designs, we create digital masterpieces that perform.',
      icon: Monitor,
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Dynamic Website Development',
        'Landing Page Design',
        'Website Redesign Services',
        'Responsive Website Design',
        'Static Website Creation',
        'Website Maintenance',
        'WordPress Web Development',
        'E-commerce Web Development'
      ],
      subServices: [
        'React Web Development',
        'Angular Web Development', 
        'Backend Web Development',
        'Progressive Web Apps (PWA)'
      ],
      technologies: ['React', 'Angular', 'WordPress', 'Node.js'],
      price: 'Contact for Quote',
      timeline: '2-6 weeks'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      shortDesc: 'Data-driven growth strategies',
      description: 'Transform your brand into a digital powerhouse with our comprehensive marketing strategies that deliver exceptional ROI and sustainable growth across all digital channels.',
      icon: Megaphone,
      gradient: 'from-pink-500 to-rose-600',
      features: [
        'Google Profile Creation & Setup',
        'Facebook Lead Generation',
        'PPC Management',
        'Google Ad Campaign',
        'Reputation Management',
        'Social Media Optimization',
        'Google My Business Ranking',
        'Content Marketing Strategy'
      ],
      subServices: [
        'Social Media Management',
        'Email Marketing Campaigns',
        'Influencer Marketing',
        'Brand Strategy Development'
      ],
      technologies: ['Google Ads', 'Facebook Business', 'Google Analytics', 'Hootsuite'],
      price: 'Starting ₹15,000/mo',
      timeline: 'Ongoing'
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      shortDesc: 'Dominate search rankings',
      description: 'Achieve unparalleled search visibility with our advanced SEO strategies that drive qualified organic traffic and establish your brand as an industry authority.',
      icon: Search,
      gradient: 'from-green-500 to-teal-600',
      features: [
        'On Page SEO',
        'Keyword Research',
        'SEO Audit',
        'E-commerce SEO',
        'National SEO',
        'Local SEO',
        'Technical SEO',
        'Link Building Strategies'
      ],
      subServices: [
        'Google My Business Optimization',
        'Schema Markup Implementation',
        'Core Web Vitals Optimization',
        'Competitor Analysis'
      ],
      technologies: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog'],
      price: 'Starting ₹12,000/mo',
      timeline: '3-6 months'
    },
    {
      id: 'graphics',
      title: 'Graphics Design',
      shortDesc: 'Memorable brand experiences',
      description: 'Create a powerful brand identity that resonates with your audience and stands out in the marketplace with our award-winning design expertise.',
      icon: Palette,
      gradient: 'from-orange-500 to-yellow-600',
      features: [
        'Logo Design (2D & 3D)',
        'Product Cover Design',
        'Flyer Design',
        'Letterhead Design',
        'Booklet Design',
        'Brochure Design',
        'Banner Design',
        'Brand Identity Systems'
      ],
      subServices: [
        'Social Media Graphics',
        'Print Design',
        'Packaging Design',
        'Motion Graphics'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Canva', 'After Effects'],
      price: 'Starting ₹5,000',
      timeline: '1-2 weeks'
    },
    {
      id: 'ads',
      title: 'Paid Advertisement',
      shortDesc: 'High-performance ad campaigns',
      description: 'Maximize your advertising ROI with our data-driven approach to paid campaigns across all major platforms, delivering qualified leads and measurable growth.',
      icon: Target,
      gradient: 'from-purple-500 to-indigo-600',
      features: [
        'Google Ad Audit',
        'Remarketing / Retargeting',
        'YouTube Advertising',
        'Facebook Advertising',
        'Google Ads Management',
        'Campaign Optimization',
        'Conversion Tracking',
        'Performance Analytics'
      ],
      subServices: [
        'LinkedIn Advertising',
        'Instagram Ads',
        'Shopping Campaigns',
        'Display Advertising'
      ],
      technologies: ['Google Ads', 'Facebook Business', 'LinkedIn Ads', 'Microsoft Advertising'],
      price: 'Starting ₹10,000/mo',
      timeline: 'Ongoing'
    },
      {
    id: 'video-marketing',
    title: 'Video Marketing',
    shortDesc: 'Engaging video content for impact',
    description:
      'Boost engagement and conversions with high-quality, storytelling-driven video content tailored to your audience and brand identity.',
    icon: Video,
    gradient: 'from-red-500 to-pink-600',
    features: [
      'Promotional Video Creation',
      'YouTube Channel Management',
      'Animated Explainer Videos',
      'Corporate Videos',
      'Product Demonstration Videos',
      'Video Editing & Post-Production',
      'Short-form Social Media Videos',
      'Live Streaming Setup'
    ],
    subServices: [
      'Drone Videography',
      'Tutorial & Educational Videos',
      'Event Coverage Videos',
      'Storyboarding & Scriptwriting'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Final Cut Pro'],
    price: 'Starting ₹8,000',
    timeline: '1-3 weeks'
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    shortDesc: 'Leverage influencer reach for brand growth',
    description:
      'Collaborate with trusted influencers to amplify your brand’s voice, reach niche audiences, and drive authentic engagement.',
    icon: Users2, 
    gradient: 'from-rose-500 to-orange-500',
    features: [
      'Influencer Discovery & Selection',
      'Campaign Strategy & Planning',
      'Content Collaboration',
      'Performance Tracking & Analytics',
      'Micro & Macro Influencer Campaigns',
      'Platform-specific Campaign Execution',
      'Influencer Relationship Management',
      'Hashtag & Trend Strategy'
    ],
    subServices: [
      'Instagram Influencer Marketing',
      'YouTube Influencer Campaigns',
      'TikTok Collaboration',
      'Cross-platform Promotion'
    ],
    technologies: ['Hootsuite', 'BuzzSumo', 'Upfluence', 'Sprout Social'],
    price: 'Starting ₹15,000/campaign',
    timeline: '2-4 weeks'
  }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, target audience, and competitive landscape to craft the perfect strategy.',
      icon: Eye,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Bring your vision to life with cutting-edge design and development practices that exceed expectations.',
      icon: Sparkles,
      duration: '2-4 weeks'
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and optimization ensure peak performance and user experience .',
      icon: Zap,
      duration: '1-2 weeks'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Strategic launch with ongoing optimization and growth initiatives to maximize your success.',
      icon: Rocket,
      duration: '1-2 weeks'
    }
  ];

  const stats = [
    { number: 100, label: 'Projects Completed', icon: Award, suffix: '+' },
    { number: 30, label: 'Happy Clients', icon: Users, suffix: '+' },
    { number: 100, label: 'Client Satisfaction', icon: Star, suffix: '%' },
    { number: 8, label: 'Years Experience', icon: Shield, suffix: '+' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative py-16 bg-mesh-gradient flex items-center justify-center"
        // style={{ y, opacity }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-base font-medium text-gray-800 border border-black/90">
                <Sparkles className="mr-2 h-5 w-5 text-primary-600" />
                Premium Digital Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-title text-gray-900 mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Extraordinary 
              <span className=" block mt-3 mb-3 text-primary-800">Digital Services</span>
              That Drive Results
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 lg:mb-12 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We don't just create digital solutions—we craft extraordinary experiences that transform businesses and captivate audiences. Every project is a masterpiece of innovation, strategy, and expert execution.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/contact" className="btn-glow group px-8 py-4">
                <span>Start Your Transformation</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-semibold border-2 border-white">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">500+ Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container-max relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group relative"
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-gradient-alt">
                    <AnimatedCounter
                      end={stat.number}
                      duration={3}
                      delay={index * 0.3}
                      suffix={stat.suffix || ''}
                      className="text-gradient-alt"
                    />
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title  mb-6">
              Our Premium Services
            </h2>
            <p className="section-subtitle">
              Each service is crafted with precision, powered by innovation, and delivered with excellence. We don't just meet expectations—we shatter them.
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-center space-x-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold font-serif text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-lg text-gray-600 font-medium">{service.shortDesc}</p>
                        </div>
                      </motion.div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3 group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-gray-700 font-medium ">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Link 
                          to={(() => {
                            const pathMap = {
                              'web-design': '/services/web-design',
                              'digital-marketing': '/services/digital-marketing',
                              'seo': '/services/seo',
                              'ads': '/services/paid-ads',
                            };
                            return pathMap[service.id] || '/contact';
                          })()}
                          className="btn-primary group"
                        >
                          <span>Get Started</span>
                          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Clock size={16} />
                            <span>{service.timeline}</span>
                          </div>
                          <div className="text-primary-600 font-semibold">{service.price}</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <motion.div 
                    className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} relative group`}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} shadow-2xl overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 pattern-dots opacity-20"></div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity }}
                      />
                      
                      <div className="relative z-10 text-white text-center space-y-6">
                        <motion.div
                          className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <Icon className="h-10 w-10" />
                        </motion.div>
                        
                        <h4 className="text-2xl font-bold">{service.title}</h4>
                        <p className="text-white/90 leading-relaxed">
                          Experience the difference that expert craftsmanship makes. Every detail is optimized for maximum impact.
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="text-sm text-white/70 mb-1">Starting from</div>
                          <div className="text-2xl font-bold">{service.price}</div>
                        </div>
                        
                        <motion.div
                          className="flex justify-center space-x-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </motion.div>
                      </div>
                      
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50"></div>
        <div className="container-max relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Our Proven Process
            </h2>
            <p className="section-subtitle">
              Every masterpiece follows a methodical approach. Our process ensures excellence at every stage, from conception to completion.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  
                  <motion.div
                    className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-200 z-10"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <motion.div
                          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white text-xl font-bold shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          {step.step}
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl mx-auto">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-primary-50 rounded-full text-sm font-medium text-primary-600">
                          <Clock size={14} className="mr-2" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], x: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        <div className="container-max text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Rocket className="h-16 w-16 text-primary-400 mx-auto mb-6" />
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                Ready to Create Something
                <span className="text-gradient-alt block mt-2">Extraordinary?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Don't settle for ordinary. Let's craft a digital masterpiece that sets your brand apart and drives unprecedented results.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn-glow bg-white text-gray-900 hover:bg-gray-100 shadow-2xl group">
                <span>Start Your Project Today</span>
                <Rocket size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
              
              <a 
                href="tel:+918340429258" 
                className="btn-ghost border-white text-white hover:bg-white hover:text-gray-900 group"
              >
                <Phone size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call for Immediate Consultation</span>
              </a>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center space-x-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <Shield size={16} />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} />
                <span>Award-Winning Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;