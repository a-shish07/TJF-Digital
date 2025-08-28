import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useInView as useIntersectionObserver } from "react-intersection-observer";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroBackgroundVideo from "../components/HeroBackgroundVideo";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Clock,
  Sparkles,
  Rocket,
  Star,
  Globe,
  Zap,
  Target,
  Shield,
  Monitor,
  Palette,
  Search,
  Megaphone,
  Eye,
  Play,
  ChevronRight,
  Heart,
  Building,
  Code,
  Lightbulb,
  Trophy,
  Phone,
} from "lucide-react";
// Use public URLs for assets in Vite/React. Do not import from public.
// Place your file at public/video/hero.mp4 and reference as "/video/hero.mp4".
import Video2 from "../../public/video/video2.mp4";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);

  const services = [
    {
      title: "Web Design & Development",
      description:
        "Create extraordinary digital experiences with our cutting-edge web solutions. From dynamic websites to e-commerce platforms, we build digital masterpieces that perform.",
      icon: Monitor,
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Dynamic Website Development",
        "Landing Page Design",
        "E-commerce Development",
        "Progressive Web Apps",
      ],
      stats: "500+ Websites Built",
      price: "Starting ₹25,000",
    },
    {
      title: "Digital Marketing",
      description:
        "Transform your brand into a digital powerhouse with our comprehensive marketing strategies that deliver exceptional ROI and sustainable growth.",
      icon: Megaphone,
      gradient: "from-pink-500 to-rose-600",
      features: [
        "Google Profile Setup",
        "Facebook Lead Generation",
        "PPC Management",
        "Social Media Optimization",
      ],
      stats: "300% Average ROI",
      price: "Starting ₹15,000/mo",
    },
    {
      title: "SEO Optimization",
      description:
        "Dominate search rankings and drive qualified organic traffic with our advanced SEO strategies that establish your brand as an industry authority.",
      icon: Search,
      gradient: "from-green-500 to-teal-600",
      features: [
        "On Page SEO",
        "Keyword Research",
        "Technical SEO",
        "Local SEO",
      ],
      stats: "Top 3 Rankings Guaranteed",
      price: "Starting ₹12,000/mo",
    },
    {
      title: "Graphics Design",
      description:
        "Create a powerful brand identity that resonates with your audience and stands out in the marketplace with our award-winning design expertise.",
      icon: Palette,
      gradient: "from-orange-500 to-yellow-600",
      features: [
        "Logo Design (2D & 3D)",
        "Brochure Design",
        "Banner Design",
        "Brand Identity Systems",
      ],
      stats: "1000+ Designs Created",
      price: "Starting ₹5,000",
    },
    {
      title: "Paid Advertisement",
      description:
        "Maximize your advertising ROI with our data-driven approach to paid campaigns across all major platforms, delivering qualified leads and measurable growth.",
      icon: Target,
      gradient: "from-purple-500 to-indigo-600",
      features: [
        "Google Ads Management",
        "Facebook Advertising",
        "YouTube Advertising",
        "Campaign Optimization",
      ],
      stats: "500% ROAS Average",
      price: "Starting ₹10,000/mo",
    },
    {
      title: "Video Marketing",
      description:
        "Maximize your advertising ROI with our data-driven approach to video campaigns across all major platforms, delivering qualified leads and measurable growth.",
      icon: Target,
      gradient: "from-purple-500 to-indigo-600",
      features: [
        "YouTube Ads Management",
        "Video SEO",
        "Social Media Video Ads",
        "Campaign Optimization",
      ],
      stats: "500% ROAS Average",
      price: "Starting ₹10,000/mo",
    },
    {
      title: "Influencer Marketing",
      description:
        "Maximize your advertising ROI with our data-driven approach to influencer campaigns across all major platforms, delivering qualified leads and measurable growth.",
      icon: Target,
      gradient: "from-purple-500 to-indigo-600",
      features: [
        "Influencer Outreach",
        "Campaign Management",
        "Performance Analytics",
        "Brand Partnerships",
      ],
      stats: "500% ROAS Average",
      price: "Starting ₹10,000/mo",
    },
  ];

  const stats = [
    { number: 100, label: "Projects Completed", icon: Award, suffix: "+" },
    { number: 30, label: "Happy Clients", icon: Users, suffix: "+" },
    { number: 98, label: "Client Satisfaction", icon: Star, suffix: "%" },
    { number: 8, label: "Years Experience", icon: Trophy, suffix: "+" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "TJF Digital transformed our online presence completely. Their strategic approach and attention to detail exceeded our expectations.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content:
        "Outstanding results! Our website traffic increased by 300% and conversions by 150% within 6 months of working with TJF Digital.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Emma Rodriguez",
      role: "Startup Founder",
      content:
        "The team at TJF Digital is phenomenal. They understand business goals and translate them into exceptional digital experiences.",
      rating: 5,
      image: "👩‍🚀",
    },
  ];

  const features = [
    {
      title: "Expert Team",
      icon: Users,
      description: "Certified professionals with years of experience",
    },
    {
      title: "24/7 Support",
      icon: Clock,
      description: "Round-the-clock assistance for all your needs",
    },
    {
      title: "Best in Market",
      icon: Award,
      description: "Award-winning solutions that deliver results",
    },
    {
      title: "Proven Results",
      icon: TrendingUp,
      description: "Track record of successful project outcomes",
    },
  ];

  const process = [
    {
      title: "Discover",
      icon: Eye,
      description: "Understanding your goals and requirements",
    },
    {
      title: "Design",
      icon: Lightbulb,
      description: "Creating innovative solutions tailored to you",
    },
    {
      title: "Develop",
      icon: Code,
      description: "Building with cutting-edge technologies",
    },
    {
      title: "Deploy",
      icon: Rocket,
      description: "Launching and optimizing for success",
    },
  ];

  // Clients and partners showcased in the "Our Digital Family" section
  const clients = [
    {
      name: "Aadil",
      logo: new URL("../assets/agancia.jpg", import.meta.url).href,
    },
    {
      name: "Abdul",
      logo: new URL("../assets/foodie.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/gulmohar.jpg", import.meta.url).href,
    },
    {
      name: "Aadil",
      logo: new URL("../assets/keptown.jpg", import.meta.url).href,
    },
    {
      name: "Abdul",
      logo: new URL("../assets/maa janki.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/morbon.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo1.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo2.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo3.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo4.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo5.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo6.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo7.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo8.jpg", import.meta.url).href,
    },
    {
      name: "React",
      logo: new URL("../assets/photo9.jpg", import.meta.url).href,
    },
  ];

  // Reusable marquee row for smooth, infinite scrolling logos (enhanced large cards)

  const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
    const isLeft = direction === "left";

    return (
      <div className="relative overflow-hidden w-full">
        {/* Edge fades for premium look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex items-center gap-10 md:gap-12 min-w-max"
          animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate the items twice to make infinite loop seamless */}
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="relative group flex items-center gap-5 md:gap-6 px-8 md:px-10 py-5 md:py-6 rounded-3xl shadow-lg bg-white/90 backdrop-blur-xl border border-white/60"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(99,102,241,.6), rgba(236,72,153,.6)) border-box",
                border: "6px solid transparent",
              }}
            >
              {/* Logo only */}
              <div className="relative">
                <img
                  src={item.logo}
                  alt="Client logo"
                  className="relative h-24 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain rounded-2xl ring-2 ring-white/80 shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const [statsRef, statsInView] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen bg-[#abcef9] flex flex-col justify-between"
      >
        {/* Background Video */}
        <HeroBackgroundVideo
          mp4Src="/video/video2.mp4"
          poster="/video/hero-poster.jpg"
          // blurPx={2}
          overlayClass="bg-black/50"
          playbackRate={1}
        />
        <div className="absolute inset-0 pattern-grid opacity-20"></div>

        {/* Headline at top (under header) */}
        <div className="relative z-10 w-full text-center mt-4">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif   text-white leading-none"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Transform Your Business with Extraordinary
            <span className="block mt-2 mb-2"> Digital Solutions </span>
            {/* <span className="block">Solutions</span> */}
          </motion.h1>
        </div>

        {/* Paragraph at bottom */}
        <div className="relative z-10 w-full text-center mb-6 px-6">
          <motion.p
            className="text-base md:text-xl text-white max-w-4xl mx-auto leading-tight font-medium text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We don't just build websites and run campaigns—we craft DIGITAL
            MASTERPIECES that captivate audiences, drive growth, and establish
            market dominance. Every project is a testament to innovation and
            expertise.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 bg-gradient-secondary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl "
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20 ">
                <TrendingUp className="mr-2 h-4 w-4 text-green-400" />
                Proven Track Record
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-alt">
              Our Impact Speaks Volumes
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl md:mx-auto mx-3">
              Numbers that showcase our commitment to excellence and the trust
              our clients place in us
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8  m-4 sm:m-0">
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
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-0">
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl mb-6 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-100 backdrop-blur-sm border border-white/10"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </motion.div>

                    <div className="text-4xl lg:text-4xl font-bold mb-3 text-white">
                      <AnimatedCounter
                        end={stat.number}
                        duration={3}
                        delay={index * 0.3}
                        suffix={stat.suffix || ""}
                        className="text-gradient-alt"
                      />
                    </div>

                    <div className="text-gray-300 font-bold  text-lg sm:text-2xl">
                      {stat.label}
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      style={{
                        background:
                          "linear-gradient(white, white) padding-box, linear-gradient(135deg, #6366f1, #ec4899) border-box",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">
              Ready to become our next success story?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Rocket
                size={20}
                className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
              <span>Start Your Project</span>
              <ArrowRight
                size={20}
                className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Digital Family */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background accents */}
        <motion.div
          className="absolute -top-10 -left-10 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 10, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-56 h-56 bg-secondary-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -12, 0], y: [0, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 pattern-grid opacity-5"></div>

        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">
              <Users className="mr-2 h-4 w-4 text-primary-600" />
              Our Digital Family
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-3 text-gray-900">
              Trusted by Ambitious Brands
            </h2>
            <p className="text-gray-600 max-w-2xl md:mx-auto mx-4 text-base md:text-xl">
              Partners who grow with us. Here are some of the clients and
              businesses we’ve proudly worked with.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Row 1 - left to right */}
            <MarqueeRow items={clients} direction="left" speed={60} />
            {/* Row 2 - right to left */}
            <MarqueeRow
              items={[...clients].reverse()}
              direction="right"
              speed={60}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50 ">
        <div className="container-max">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Services That Define Excellence
            </h2>
            <p className="section-subtitle">
              Each service is a masterclass in digital innovation, designed to
              propel your business to new heights of success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -10 }}
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-200 overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 shadow-lg`}
                      // Gentle continuous oscillation for touch devices
                      animate={{ rotate: [0, 6, 0] }}
                      transition={{ rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                      // Desktop interaction
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      // Touch interaction
                      whileTap={{ scale: 1.05, rotate: 10 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.1,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/services"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold "
                      >
                        <span>Learn More</span>
                        <ChevronRight
                          size={16}
                          className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </motion.div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      initial={false}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="btn-glow group text-lg px-10 py-5">
              <span>Explore All Services</span>
              <ArrowRight
                size={20}
                className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-5"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-max relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-sm font-semibold text-primary-600 border border-primary-200">
                <Zap className="mr-2 h-4 w-4" />
                Streamlined Workflow
              </span>
            </motion.div>
            <h2 className="section-title  mb-6">Our Proven Process</h2>
            <p className="section-subtitle">
              A methodical approach that ensures exceptional results every time,
              from concept to completion.
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 relative z-10">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center group relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {/* Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary-200 relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        {/* Step Number */}
                        <motion.div
                          className="relative mb-6"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300 relative z-10">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          {/* Animated Ring */}
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                          className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-all duration-300 shadow-md"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="h-8 w-8 text-primary-600" />
                        </motion.div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        initial={false}
                      />
                    </div>

                    {/* Arrow for larger screens */}
                    {index < process.length - 1 && (
                      <motion.div
                        className="hidden lg:block absolute top-[45%] -right-9 transform -translate-y-1/2 z-20"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-9 h-9 bg-white rounded-full shadow-lg border border-primary-200 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-primary-600" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-6 text-lg">
              Ready to experience our proven process?
            </p>
            <Link to="/contact" className="btn-glow group px-8 py-4">
              <span>Let's Get Started</span>
              <ArrowRight
                size={20}
                className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <u> */}
            <h2 className="section-title  mb-6">What Our Clients Say</h2>
            {/* </u> */}
            <p className="section-subtitle">
              Real stories from real clients who achieved extraordinary results.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-2xl text-center"
            >
              <div className="flex justify-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-primary-600 w-8"
                      : "bg-gray-300 hover:bg-primary-300"
                  }`}
                />
              ))}
            </div>
          </div>
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
                <Heart className="h-16 w-16 text-red-400 mx-auto mb-6 animate-pulse-slow" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                Ready to Build Something
                <span className="text-gradient-alt block mt-2">
                  Extraordinary?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Join 1200+ successful businesses who chose TJF Digital to
                transform their digital presence. Your success story starts
                here.
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group text-lg"
              >
                <Rocket
                  size={22}
                  className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
                <span>Start Your Journey Today</span>
                <ArrowRight
                  size={22}
                  className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>

              <a
                href="tel:+918340429258"
                className="inline-flex items-center justify-center bg-transparent text-white px-10 py-5 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 group text-lg"
              >
                <Phone
                  size={20}
                  className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Call for Free Consultation</span>
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
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock size={16} />
                <span>24/7 Expert Support</span>
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

export default Home;
