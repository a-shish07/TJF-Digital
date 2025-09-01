import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import AnimatedCounter from '../components/AnimatedCounter';
import { 
  CheckCircle, 
  Target, 
  Eye, 
  Award,
  Users,
  TrendingUp,
  Heart,
  Lightbulb,
  Rocket,
  Star,
  Trophy,
  Shield,
  Clock,
  Building,
  Code,
  Palette,
  Search,
  Megaphone,
  Sparkles,
  Phone,
  ArrowRight,
  Globe,
  Zap,
  Diamond,
  Crown,
  Compass,
  User,
  Stethoscope,
  Calendar,
  GraduationCap
} from 'lucide-react';
import AbdulPhoto from "../assets/abdul.jpg";
import Aadil from "../assets/aadil.jpg";

const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      subtitle: 'Purpose-Driven Excellence',
      description: 'To revolutionize the digital landscape by crafting extraordinary experiences that transform businesses and captivate audiences worldwide.',
      color: 'from-blue-500 to-cyan-600',
      stats: '2000+ Lives Transformed'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      subtitle: 'Future-Forward Thinking',
      description: 'To become the global standard for digital innovation, where every project sets new benchmarks for creativity, technology, and measurable impact.',
      color: 'from-purple-500 to-pink-600',
      stats: 'Leading 50+ Markets'
    },
    {
      icon: Crown,
      title: 'Our Values',
      subtitle: 'Excellence Without Compromise',
      description: 'Integrity, innovation, and impact guide every decision. We believe in creating digital masterpieces that not only look stunning but deliver unprecedented results.',
      color: 'from-orange-500 to-red-600',
      stats: '98% Client Retention'
    }
  ];

  const trustees = [
  {
    name: "Abdul Quadir",
    role: "Director",
    specialization: "Digital Marketing Specialist",
    experience: "10+ Years",
    education: "MBA (Marketing), Delhi University",
    image: AbdulPhoto,
    description:
      "Dr. Abdul Quadir is a dynamic force behind our digital marketing initiatives. As Secretary and Co-Founder, he spearheads awareness campaigns and community outreach programs, blending marketing insight with strategic vision to create lasting impact on public well-being.",
  },
  {
    name: "Aadil Saan",
    role: "Director",
    specialization: "",
    experience: "10+ Years",
    education: "Btech (ECE), Punjab University",
    image: Aadil,
    description:
      "Aadil Saan ensures financial transparency and operational excellence within the trust. With deep roots in social work and community engagement, he is instrumental in building trust with donors and driving grassroots-level change through effective resource management.",
  }
];

const TrusteeImage = ({ src, alt, name, className = "" }) => {
    const [imageError, setImageError] = React.useState(false);

    if (imageError || !src || src.includes("/api/placeholder")) {
      return (
        <DefaultAvatar name={name} className={`rounded-xl ${className}`} />
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-xl object-contain w-full h-full ${className}`}
        onError={() => setImageError(true)}
      />
    );
  };

  const teamMembers = [
    {
      name: 'Anup Kumar',
      role: 'Team Manager',
      expertise: 'Strategic Leadership & Innovation',
    },
    {
      name: 'Amit Singh',
      role: 'Digital Marketing Executive',
      expertise: 'Website Developer & Google Ads Specialist',
    },
    {
      name: 'Kajal',
      role: 'HR Manager',
      expertise: 'Employee Engagement',
    },
    {
      name: 'Siddhant Singh',
      role: 'Marketing Strategist',
      expertise: 'Video Editor & E-Commerce Specialist',
    },
     {
      name: 'Ravi Ranjan Kumar',
      role: 'Digital Marketing Executive',
      expertise: 'Video Editor & E-Commerce Specialist',
    },
     {
      name: 'Gautam Kumar',
      role: 'Graphic Designer',
      expertise: 'Visual Design & Branding',
    },
     {
      name: 'Ehtesham Ali',
      role: 'Graphic Designer',
      expertise: 'Visual Design & Branding',
    },
  ];

  const achievements = [
    { icon: Trophy, title: 'Best Digital Agency 2024', organization: 'Digital Excellence Awards' },
    { icon: Star, title: 'Top Rated Service Provider', organization: 'Google & Facebook Business' },
    { icon: Award, title: 'Innovation in Web Design', organization: 'Web Design Awards' },
    { icon: Crown, title: 'Client Choice Award', organization: 'Industry Leaders Forum' },
    { icon: Diamond, title: 'Excellence in SEO', organization: 'Search Marketing Awards' },
    { icon: Rocket, title: 'Growth Marketing Excellence', organization: 'Marketing Innovation Awards' }
  ];

  const features = [
    { title: 'World-Class Expertise', description: 'Certified professionals with proven industry experience', icon: Users },
    { title: 'Award-Winning Solutions', description: 'Recognized excellence in digital innovation', icon: Trophy },
    { title: 'Proven Success Record', description: '100+ projects delivered with outstanding results', icon: TrendingUp },
    { title: 'Client-First Approach', description: '100% satisfaction rate with personalized attention', icon: Heart },
    { title: '24/7 Premium Support', description: 'Round-the-clock assistance from our expert team', icon: Clock },
    { title: 'Cutting-Edge Technology', description: 'Latest tools and technologies for superior outcomes', icon: Code },
    { title: 'Strategic Innovation', description: 'Forward-thinking solutions for tomorrow\'s challenges', icon: Lightbulb },
    { title: 'Measurable Impact', description: 'Data-driven results that transform businesses', icon: Target }
  ];

  const stats = [
    { number: 8, label: 'Years Excellence', icon: Award, suffix: '+', color: 'text-blue-600' },
    { number: 100, label: 'Projects Delivered', icon: Rocket, suffix: '+', color: 'text-green-600' },
    { number: 30, label: 'Happy Clients', icon: Users, suffix: '+', color: 'text-purple-600' },
    { number: 98, label: 'Success Rate', icon: Star, suffix: '%', color: 'text-yellow-600' }
  ];

  const services = [
    { icon: Code, title: 'Web Development', description: 'Cutting-edge websites that convert' },
    { icon: Palette, title: 'Brand Design', description: 'Memorable identities that resonate' },
    { icon: Search, title: 'SEO Mastery', description: 'Dominate search rankings organically' },
    { icon: Megaphone, title: 'Digital Marketing', description: 'Strategic campaigns that deliver ROI' }
  ];

  const [statsRef, statsInView] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative py-10 bg-mesh-gradient flex items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <motion.div 
          className="absolute top-20 left-10 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [360, 180, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-black/30">
                <Building className="mr-2 h-5 w-5 text-primary-600" />
                Established 2015 • Award-Winning Digital Excellence
                <Trophy className="ml-2 h-4 w-4 text-yellow-500" />
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-title text-gray-900 mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Crafting Digital
              <span className="text-primary-800 block mt-2">Excellence</span>
              <span className="block">Since 2015</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 lg:mb-12 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              We are the <strong className="text-primary-600">VISIONARY ARCHITECTS</strong> of digital transformation. 
              Every project we touch becomes a testament to innovation, creativity, and measurable success. 
              <span className="block mt-4 text-lg text-gray-600">
                <strong>30+ Businesses</strong> trust us to turn their digital dreams into extraordinary realities.
              </span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <Link to="/contact" className="btn-glow group text-lg px-10 py-5">
                <Heart size={22} className="mr-3 text-red-400" />
                <span>Start Your Success Story</span>
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex -space-x-2">
                  {['👨‍💼', '👩‍🎨', '👨‍💻', '👩‍📊'].map((avatar, i) => (
                    <motion.div 
                      key={i} 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl border-3 border-white shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.1 + (i * 0.1), duration: 0.5 }}
                    >
                      {avatar}
                    </motion.div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={18} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-semibold">Meet Our Expert Team</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container-max relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient-alt">Our Journey in Numbers</h2>
            <p className="text-xl text-gray-300">Eight years of digital excellence and innovation</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 group-hover:bg-white/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`h-10 w-10 ${stat.color}`} />
                  </motion.div>
                  <div className={`text-5xl lg:text-6xl font-bold mb-3 ${stat.color}`}>
                    <AnimatedCounter
                      end={stat.number}
                      duration={2.5}
                      delay={index * 0.2}
                      suffix={stat.suffix || ''}
                    />
                  </div>
                  <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Our Foundation of Excellence
            </h2>
            <p className="section-subtitle">
              The core principles that drive our passion for creating extraordinary digital experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-200 overflow-hidden h-full">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl mb-8 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">{value.subtitle}</p>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <span className="text-base font-semibold text-gray-500">{value.stats}</span>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Meet Our Expert Team
            </h2>
            <p className="section-subtitle">
              The brilliant minds behind every successful project. Our team combines years of expertise with boundless creativity.
            </p>
          </motion.div>

           <div className="space-y-16">
            {trustees.map((trustee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="hover:bg-gradient-to-br from-blue-500 to-sky-500 dark:from-blue-600/20 dark:to-sky-400/20 rounded-3xl p-3 shadow-2xl transition-all duration-300">
                      {/* Image container with square dimensions */}
                      <div className="relative w-64 h-80 mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group">
                        <TrusteeImage
                          src={trustee.image}
                          alt={`${trustee.name} - ${trustee.role}`}
                          name={trustee.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Subtle overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Name badge overlay for better visual hierarchy */}
                      <div className="mt-4 text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          <User className="h-4 w-4 text-white mr-2" />
                          <span className="text-white font-semibold text-base">
                            {trustee.role}
                          </span>
                        </div>
                      </div>
                    {/* </div> */}
                  </div>
                </div>

                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {trustee.name}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {trustee.role}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Stethoscope className ="h-5 w-5 text-sky-500" />
                      <span className="text-gray-700">
                        <strong>Specialization:</strong>{" "}
                        {trustee.specialization}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">
                        <strong>Experience:</strong> {trustee.experience}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 text-cyan-600" />
                      <span className="text-gray-700">
                        <strong>Education:</strong> {trustee.education}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {trustee.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-200">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.avatar}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-base mb-4">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Awards & Recognition
            </h2>
            <p className="section-subtitle">
              Our commitment to excellence has been recognized by industry leaders worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 text-base">{achievement.organization}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900">
                  Why Industry Leaders Choose
                  <span className="text-primary-700 mt-2"> TJF Digital</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We don't just deliver projects—we create digital experiences that redefine industries and set new standards for excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-primary rounded-3xl p-12 text-white text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 pattern-dots opacity-20"></div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <div className="relative z-10 space-y-8">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🏆
                  </motion.div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Excellence Personified</h3>
                    <p className="text-lg text-white/90 leading-relaxed">
                      Every project we deliver is a masterpiece of innovation, strategy, and flawless execution. We don't just meet expectations—we redefine them.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-white/80">Premium Support</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-white/80">Satisfaction</div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="flex justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Our Expertise Domains
            </h2>
            <p className="section-subtitle">
              We master every aspect of digital excellence to deliver comprehensive solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className="h-8 w-8 text-primary-600" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="btn-glow group">
              <span>Explore All Services</span>
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.4, 1, 1.4], rotate: [360, 180, 0] }}
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
                <Compass className="h-16 w-16 text-primary-400 mx-auto mb-6 animate-bounce-slow" />
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                Ready to Join the
                <span className="text-gradient-alt block mt-2">Success Stories?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Your transformation journey begins with a single conversation. Let's create something extraordinary together.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn-glow bg-white text-gray-900 hover:bg-gray-100 shadow-2xl group text-lg px-10 py-5">
                <Heart size={22} className="mr-3 text-red-500" />
                <span>Start Your Journey</span>
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <a 
                href="tel:+918340429258" 
                className="btn-ghost border-white text-white hover:bg-white hover:text-gray-900 group text-lg px-10 py-5"
              >
                <Phone size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Our Experts</span>
              </a>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-2">
                <Shield size={16} />
                <span>Guaranteed Excellence</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe size={16} />
                <span>Global Recognition</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Trophy size={16} />
                <span>Award-Winning Results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;