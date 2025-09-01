import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Logo";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  ArrowRight,
  Sparkles,
  Award,
  Star,
  Heart,
  Send,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Trophy,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const services = [
    { name: "Web Design & Development", href: "/services/web-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "SEO Services", href: "/services/seo" },
    { name: "GMB (Google My Business)", href: "/services/gmb" },
    { 
      name: "Paid Advertisement", 
      href: "/services/paid-ads",
      children: [
        { name: "Google Ads", href: "/services/paid-ads/google" },
        { name: "LinkedIn Ads", href: "/services/paid-ads/linkedin" },
        { name: "Meta Ads", href: "/services/paid-ads/meta" }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Our Services", href: "/services", icon: Sparkles },
    { name: "Portfolio", href: "/blog", icon: Award },
    { name: "Contact Us", href: "/contact", icon: Phone },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61568551536877",
      color: "hover:text-blue-400",
      followers: "12K",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/99875829/admin/dashboard/",
      color: "hover:text-blue-500",
      followers: "8K",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@THEJOINTFAMILIES",
      color: "hover:text-red-500",
      followers: "15K",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/tjfdigital_/",
      color: "hover:text-pink-500",
      followers: "25K",
    },
  ];

  const awards = [
    { title: "Best Digital Agency 2024", icon: Trophy },
    { title: "Client Choice Award", icon: Heart },
    { title: "Innovation Excellence", icon: Sparkles },
  ];

  const stats = [
    { number: "20+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Star },
    { number: "24/7", label: "Support", icon: Clock },
    { number: "8+", label: "Years Experience", icon: Award },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-secondary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Footer Content */}
      <div className=" section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 pr-20">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/">
                  <Logo size="lg" theme="light" showText={true} className="md:scale-105 lg:scale-110" />
                </Link>
              </motion.div>

              <p className="text-lg text-gray-300 leading-relaxed">
                TJFDigital is a digital marketing agency specializing in
                innovative strategies to elevate your online presence. With a
                team of experts, we craft tailored solutions for success.
              </p>

              {/* Awards */}
              <div className="space-y-4 ml-2">
                <h4 className="text-lg font-semibold text-white mb-4 mt-14">
                  Awards & Recognition
                </h4>
                {awards.map((award, index) => {
                  const Icon = award.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={16} className="text-primary-400" />
                      <span className="text-sm">{award.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-primary-400" />
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="group">
                    <Link
                      to={service.href}
                      className="flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </Link>
                    {service.children && (
                      <div className="pl-3 mt-1 hidden group-hover:block">
                        {service.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 py-1.5 px-3 rounded-lg hover:bg-white/5"
                          >
                            <span className="text-sm">{child.name}</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary-400" />
              Get In Touch
            </h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <Phone size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call Us</p>
                  <a
                    href="tel:+918340429258"
                    className="text-white font-semibold hover:text-primary-400 transition-colors duration-300"
                  >
                    +91 8340429258
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors duration-300">
                  <Mail size={18} className="text-secondary-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email Us</p>
                  <a
                    href="mailto:info@tjfitsolution.com"
                    className="text-white font-semibold hover:text-secondary-400 transition-colors duration-300"
                  >
                    info@tjfdigital.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4 group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300">
                  <MapPin size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Visit Us</p>
                  <div className="text-white text-sm leading-relaxed">
                    <p>
                      Office 301, Third Floor, NK MARKET Ashiyana Digha Road
                    </p>
                    <p>Ramnagri More Near 9 to 9 Market</p>
                    <p>Patna, 800025, India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          className="flex flex-col items-center mt-16 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            Follow Our Digital Journey
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group ${social.color}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-left">
                    <div className="font-medium text-white text-sm">
                      {social.name}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container-max py-8">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Heart size={14} className="text-red-400" />
                <span>Copyright © 2025 TJF Digital. Crafted with passion.</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors duration-300 hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  to="/terms-conditions"
                  className="hover:text-white transition-colors duration-300 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <motion.div
              className="flex items-center space-x-3 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <Award size={14} className="text-yellow-500" />
              <span>Trusted by 1200+ businesses worldwide</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
