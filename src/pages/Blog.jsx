import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
  Zap,
  Star,
  Award,
  Rocket,
  Globe,
  Users,
  MessageCircle,
  ThumbsUp,
  Bookmark,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const categories = [
    "All",
    "Web Development",
    "Digital Marketing",
    "SEO Tips",
    "Design Trends",
    "Business Growth",
    "Technology",
    "Case Studies",
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Discover the cutting-edge technologies and methodologies that will shape web development in 2025. From AI integration to advanced frameworks.",
      content:
        "Web development is evolving at an unprecedented pace. As we move into 2025, several key trends are emerging that will fundamentally change how we build and interact with websites...",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      tags: ["React", "Next.js", "AI", "Web3"],
      featured: true,
      trending: true,
      link: "https://wpengine.com/blog/web-development-trends/",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies That Actually Work in 2025",
      excerpt:
        "Learn the proven digital marketing tactics that are driving real results for businesses. From social media to email marketing.",
      content:
        "Digital marketing landscape has transformed dramatically. The strategies that worked yesterday might not work today. Here are the tactics that are actually driving results...",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Social Media", "PPC", "Content Marketing", "Analytics"],
      featured: true,
      link: "https://digitalmarketinginstitute.com/blog/digital-marketing-trends-2025",
    },
    {
      id: 3,
      title: "SEO in 2025: Complete Guide to Ranking Higher",
      excerpt:
        "Master the latest SEO techniques and algorithm updates. Learn how to optimize your website for better search engine rankings.",
      content:
        "Search engine optimization continues to be crucial for online success. With Google's latest algorithm updates, here's what you need to know...",
      category: "SEO Tips",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      tags: ["SEO", "Google", "Keywords", "Technical SEO"],
      featured: true,
      link: "https://backlinko.com/seo-checklist",
    },
  ];

  const blogPosts = [
    {
      id: 4,
      title: "How We Increased Client ROI by 400% Using Data-Driven Design",
      excerpt:
        "A detailed case study of how strategic design decisions backed by data analytics led to extraordinary business results.",
      category: "Case Studies",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      tags: ["UX Design", "Analytics", "ROI", "Case Study"],
      link: "https://vantagep.com/insights/data-driven-marketing-strategies-insights-and-best-practices/",
    },
    {
      id: 5,
      title: "10 Essential Tools Every Digital Marketer Should Use",
      excerpt:
        "Discover the must-have tools that can streamline your marketing workflow and boost campaign performance.",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      tags: ["Tools", "Marketing", "Productivity", "Automation"],
      link: "https://www.iidm.in/essential-tools-every-digital-marketer-should-master/",
    },
    {
      id: 6,
      title: "The Psychology of Color in Web Design",
      excerpt:
        "Understanding how colors influence user behavior and conversion rates in web design.",
      category: "Design Trends",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=300&fit=crop",
      tags: ["Design", "Psychology", "Colors", "UX"],
      link: "https://cosmicostudios.medium.com/the-power-of-color-psychology-in-web-design-b798e956797a",
    },
    {
      id: 7,
      title: "Building Scalable E-commerce Solutions with Modern Tech Stack",
      excerpt:
        "Learn how to build robust e-commerce platforms that can handle high traffic and complex business logic.",
      category: "Web Development",
      image:
        "https://www.webpulseindia.com/uploaded-files/category/images/thumbs/eCommerce-Web-Designing676e96e463eb2.webp",
      tags: ["E-commerce", "React", "Node.js", "Scalability"],
      link: "https://medium.com/@rohanraman6/building-a-scalable-web-application-using-a-modern-tech-stack-6ea60e6c980c",
    },
    {
      id: 8,
      title: "Local SEO: Dominating Your Local Market",
      excerpt:
        "Complete guide to local SEO strategies that help businesses rank higher in local search results.",
      category: "SEO Tips",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      tags: ["Local SEO", "Google My Business", "Local Marketing"],
      link: "https://storychief.io/blog/mastering-local-seo",
    },
    {
      id: 9,
      title: "AI in Digital Marketing: Opportunities and Challenges",
      excerpt:
        "Exploring how artificial intelligence is transforming digital marketing and what it means for businesses.",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      tags: ["AI", "Machine Learning", "Marketing Automation"],
      link: "https://unlayer.com/blog/ai-in-marketing",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: 15, label: "Blog Articles", icon: BookOpen, suffix: "+" },
    { number: 5000, label: "Monthly Readers", icon: Users, suffix: "+" },
    { number: 95, label: "Reader Satisfaction", icon: Star, suffix: "%" },
    { number: 10, label: "Expert Authors", icon: Award, suffix: "+" },
  ];

  return (
    <div className="overflow-hidden ">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-16 bg-mesh-gradient flex items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pattern-grid opacity-20"></div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            y: [0, -40, 0],
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-white/30 shadow-lg">
                <BookOpen className="mr-2 h-5 w-5 text-primary-600 animate-pulse-slow" />
                Digital Insights & Expert Knowledge
                <Sparkles className="ml-2 h-4 w-4 text-yellow-500" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-gray-900 mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Digital Marketing
              <span className="block mt-2">Blog & Insights</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Stay ahead of the curve with our expert insights, industry trends,
              and proven strategies that
              <strong className="text-primary-600">
                {" "}
                drive real business results
              </strong>
              . Learn from the best in the industry.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container-max relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient-alt">
              Our Blog Impact
            </h2>
            <p className="text-xl text-gray-300">
              Sharing knowledge that transforms businesses
            </p>
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
                    <Icon className="h-10 w-10 text-primary-400" />
                  </motion.div>
                  <div className="text-5xl lg:text-6xl font-bold mb-3 text-gradient-alt">
                    <AnimatedCounter
                      end={stat.number}
                      duration={2.5}
                      delay={index * 0.2}
                      suffix={stat.suffix || ""}
                    />
                  </div>
                  <div className="text-gray-300 font-medium text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title  mb-6">Featured Articles</h2>
            <p className="section-subtitle">
              Our most popular and impactful content, handpicked by our
              editorial team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.featured && (
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                    {post.trending && (
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center">
                        <TrendingUp size={12} className="mr-1" />
                        Trending
                      </span>
                    )}
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                 

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Latest Articles</h2>
            <p className="section-subtitle">
              Discover more insights and expert knowledge from our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                 <motion.div
                    className="mt-6 pt-6 border-t border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="btn-primary group px-8 py-4">
                <span>Load More Articles</span>
                <ChevronRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-secondary text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        {/* Floating Orbs */}
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
                <Rocket className="h-16 w-16 text-primary-400 mx-auto mb-6 animate-pulse-slow" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">
                Ready to Transform
                <span className="text-gradient-alt block mt-2">
                  Your Business?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Don't just read about success - create it! Let our expert team
                help you implement these strategies and achieve extraordinary
                results.
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
                  className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Start Your Project</span>
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
                  className="mr-3 group-hover:scale-110 transition-transform duration-300"
                />
                <span>Call for Consultation</span>
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
                <Globe size={16} />
                <span>1500+ Projects Completed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users size={16} />
                <span>1200+ Happy Clients</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award size={16} />
                <span>Award-Winning Agency</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
