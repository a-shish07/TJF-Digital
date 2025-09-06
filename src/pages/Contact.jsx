import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Sparkles,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Globe,
  Users,
  Award,
  Zap,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Monitor,
  Code,
  Megaphone,
  Search,
  Target
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceDropdownOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset form function
  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  }, []);

  // Validate single field on blur
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    const fieldErrors = {};
    
    if (name === 'name' && value.trim()) {
      if (value.trim().length < 2) {
        fieldErrors.name = 'Name must be at least 2 characters long';
      } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
        fieldErrors.name = 'Name can only contain letters and spaces';
      }
    }
    
    if (name === 'email' && value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        fieldErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (name === 'phone' && value.trim()) {
      if (!/^[\+]?[0-9\s\-\(\)]{10,15}$/.test(value.trim())) {
        fieldErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    if (name === 'message' && value.trim()) {
      if (value.trim().length < 10) {
        fieldErrors.message = 'Message must be at least 10 characters long';
      }
    }
    
    setErrors(prev => ({
      ...prev,
      ...fieldErrors
    }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // Enforce character limits
    let processedValue = value;
    if (name === 'message' && value.length > 500) {
      processedValue = value.slice(0, 500);
    }
    if (name === 'name' && value.length > 50) {
      processedValue = value.slice(0, 50);
    }
    if (name === 'phone' && value.length > 15) {
      processedValue = value.slice(0, 15);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim() && !/^[\+]?[0-9\s\-\(\)]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 500) {
      newErrors.message = 'Message cannot exceed 500 characters';
    }
    
    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Focus on first error field
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.focus();
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      console.log('Submitting form:', formData);
      
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
        
      } else {
        // Handle server-side validation errors or other issues
        console.error('Server error:', result);
        setErrors({ 
          submit: result.error || 'Failed to send message. Please try again.' 
        });
      }
      
    } catch (error) {
      console.error('Network error:', error);
      
      // Check if it's a network error or server error
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setErrors({ 
          submit: 'Network error. Please check your internet connection and try again.' 
        });
      } else {
        setErrors({ 
          submit: 'Something went wrong. Please try again or contact us directly at info@tjfdigital.com' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8340429258', '+91 8556020151'],
      action: 'tel:+918340429258'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@tjfdigital.com'],
      action: 'mailto:info@tjfdigital.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'B-9, B-10 Dharampali Palace, 2nd Floor',
        'Near Vinayak Hospital, Sector – 27',
        'Noida, 201301'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 10:00 AM - 6:00 PM','Sunday: Closed']
    }
  ];

  const services = [
    { 
      name: 'Web Design & Development',
      value: 'web-design-development',
      hasSubmenu: true,
      subServices: [
        { name: 'WordPress Websites', value: 'wordpress-websites' },
        { name: 'Custom Coding Websites', value: 'custom-coding' },
        { name: 'E-commerce Development', value: 'ecommerce-development' },
        { name: 'Landing Pages', value: 'landing-pages' }
      ]   
    },
    { 
      name: 'Digital Marketing', 
      value: 'digital-marketing'
    },
    { 
      name: 'SEO Services', 
      value: 'seo-services'
    },
    { 
      name: 'GMB (Google My Business)', 
      value: 'gmb'
    },
    { 
      name: 'Social Media Marketing', 
      value: 'social-media-marketing'
    },
    { 
      name: 'Paid Advertisement', 
      value: 'paid-advertisement',
      hasSubmenu: true,
      subServices: [
        { name: 'Google Ads Management', value: 'google-ads' },
        { name: 'Facebook/Meta Advertising', value: 'facebook-ads' },
        { name: 'YouTube Advertising', value: 'youtube-ads' },
        { name: 'LinkedIn Advertising', value: 'linkedin-ads' }
      ]
    },
    { 
      name: 'Other', 
      value: 'other'
    }
  ];

  const offices = [
    {
      city: 'Noida',
      address: 'B-9, B-10 Dharampali Palace, 2nd Floor, Near Vinayak Hospital, Sector – 27, Noida, 201301'
    },
    {
      city: 'Patna',
      address: 'Office 301, Third Floor, NK MARKET Ashiyana, Digha Road Ramnagri More, Near 9to9 Market, Patna, Bihar 800025'
    },
    {
      city: 'Mohali',
      address: 'E55 Mohali Phase 8, Punjab'
    }
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative py-10 bg-mesh-gradient flex items-center justify-center"
        style={{ y }}
      >
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
              <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-white/30 shadow-lg  mt-10  mx-6 sm:mx-0">
                <MessageCircle className="mr-2 h-5 w-5 text-primary-600 animate-pulse-slow" />
                Let's Start Your Digital Journey
                <Sparkles className="ml-2 h-4 w-4 text-yellow-500" />
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-gray-900 mb-6 lg:mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Get in Touch
              <span className="block mt-2 text-primary-700">With Our Experts</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Ready to transform your digital presence? Let's discuss how we can help your business 
              <strong className="text-primary-600 font-bold"> achieve extraordinary results</strong> and dominate your market.
            </motion.p>
            
            {/* Quick Contact Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <a href="tel:+918340429258" className="btn-glow group text-lg px-8 py-4">
                <Phone size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Now: +91 8340429258</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">
                  Send Us a <span className="text-primary-600">Message</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a customized solution for your business.
                </p>
              </motion.div>
              
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Form Validation Summary */}
              {Object.keys(errors).length > 0 && !errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-red-500 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Please fix the following errors:</h3>
                      <ul className="text-red-700 space-y-1">
                        {Object.entries(errors).map(([field, error]) => (
                          <li key={field} className="text-sm">
                            • {error}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-8 bg-gray-50 p-8 rounded-3xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={50}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={errors.name ? "true" : "false"}
                      className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500 hover:border-primary-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <motion.p 
                        id="name-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                        role="alert"
                      >
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500 hover:border-primary-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <motion.p 
                        id="email-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                        role="alert"
                      >
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={15}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-invalid={errors.phone ? "true" : "false"}
                      className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.phone 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500 hover:border-primary-300'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && (
                      <motion.p 
                        id="phone-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                        role="alert"
                      >
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {errors.phone}
                      </motion.p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Interested In
                    </label>
                    
                    {/* Custom Dropdown Button */}
                    <div 
                      ref={dropdownRef}
                      className="relative"
                      onBlur={(e) => {
                        // Close dropdown when focus leaves the entire dropdown area
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setServiceDropdownOpen(false);
                        }
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                        className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 flex items-center justify-between ${
                          serviceDropdownOpen
                            ? 'border-primary-500 ring-2 ring-primary-500'
                            : 'border-gray-200 hover:border-primary-300 focus:border-primary-500 focus:ring-primary-500'
                        }`}
                        aria-haspopup="listbox"
                        aria-expanded={serviceDropdownOpen}
                      >
                        <span className={formData.service ? 'text-gray-900' : 'text-gray-500'}>
                          {formData.service 
                            ? (() => {
                                // Check main services first
                                const mainService = services.find(s => s.value === formData.service);
                                if (mainService) return mainService.name;
                                
                                // Check sub-services
                                for (const service of services) {
                                  if (service.subServices) {
                                    const subService = service.subServices.find(sub => sub.value === formData.service);
                                    if (subService) return subService.name;
                                  }
                                }
                                return 'Select a service';
                              })()
                            : 'Select a service'
                          }
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-200 ${
                            serviceDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>

                      {/* Dropdown Menu - Simple with Submenus */}
                      <AnimatePresence>
                        {serviceDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {services.map((service) => (
                              <div key={service.value} className="relative">
                                <button
                                  type="button"
                                  onMouseEnter={() => service.hasSubmenu && setActiveSubmenu(service.value)}
                                  onMouseLeave={() => !service.hasSubmenu && setActiveSubmenu(null)}
                                  onClick={() => {
                                    if (!service.hasSubmenu) {
                                      setFormData(prev => ({ ...prev, service: service.value }));
                                      setServiceDropdownOpen(false);
                                      setActiveSubmenu(null);
                                      // Clear any service-related errors
                                      if (errors.service) {
                                        setErrors(prev => ({ ...prev, service: '' }));
                                      }
                                    }
                                  }}
                                  className="w-full flex items-center justify-between px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                >
                                  <span>{service.name}</span>
                                  {service.hasSubmenu && (
                                    <ChevronRight size={16} className="text-gray-400" />
                                  )}
                                  {formData.service === service.value && (
                                    <CheckCircle size={16} className="text-primary-600" />
                                  )}
                                </button>

                                {/* Submenu */}
                                {service.hasSubmenu && activeSubmenu === service.value && (
                                  <motion.div
                                    className="absolute left-full top-0 ml-1 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.15 }}
                                    onMouseEnter={() => setActiveSubmenu(service.value)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                  >
                                    {service.subServices.map((subService) => (
                                      <button
                                        key={subService.value}
                                        type="button"
                                        onClick={() => {
                                          setFormData(prev => ({ ...prev, service: subService.value }));
                                          setServiceDropdownOpen(false);
                                          setActiveSubmenu(null);
                                          // Clear any service-related errors
                                          if (errors.service) {
                                            setErrors(prev => ({ ...prev, service: '' }));
                                          }
                                        }}
                                        className="w-full flex items-center justify-between px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                      >
                                        <span>{subService.name}</span>
                                        {formData.service === subService.value && (
                                          <CheckCircle size={16} className="text-primary-600" />
                                        )}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={500}
                    aria-describedby={errors.message ? "message-error" : "message-counter"}
                    aria-invalid={errors.message ? "true" : "false"}
                    className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500 hover:border-primary-300'
                    }`}
                    placeholder="Tell us about your project, goals, and requirements. The more details you provide, the better we can help you..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.message ? (
                      <motion.p 
                        id="message-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm flex items-center"
                        role="alert"
                      >
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {errors.message}
                      </motion.p>
                    ) : (
                      <div></div>
                    )}
                    <span 
                      id="message-counter"
                      className={`text-xs ${
                        formData.message.length < 10 ? 'text-gray-400' : 
                        formData.message.length < 450 ? 'text-green-500' : 
                        formData.message.length < 500 ? 'text-orange-500' : 'text-red-500'
                      }`}
                      aria-live="polite"
                    >
                      {formData.message.length}/500
                    </span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 items-center"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-glow w-full sm:w-auto inline-flex items-center justify-center text-lg px-8 py-4 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    } ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    aria-describedby={errors.submit ? "submit-error" : undefined}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} className="mr-3 text-white" />
                        Message Sent!
                        <CheckCircle size={20} className="ml-3 text-white" />
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-3" />
                        Send Message
                        <ArrowRight size={20} className="ml-3" />
                      </>
                    )}
                  </motion.button>
                  
                  {/* Clear Form Button */}
                  {(formData.name || formData.email || formData.phone || formData.message) && !isSubmitted && (
                    <motion.button
                      type="button"
                      onClick={resetForm}
                      className="btn-ghost text-sm px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Clear Form
                    </motion.button>
                  )}
                  
                  <div className="flex flex-col space-y-2">
                    {errors.submit && (
                      <motion.p 
                        id="submit-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm flex items-center"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {errors.submit}
                      </motion.p>
                    )}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>We'll respond within 24 hours</span>
                    </div>
                  </div>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">
                  Get in <span className="text-primary-700">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of the following channels and let's start building something amazing together.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="bg-gradient-primary p-4 rounded-xl flex-shrink-0 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="text-white" size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <div className="space-y-2">
                            {info.details.map((detail, detailIndex) => (
                              <div key={detailIndex}>
                                {info.action ? (
                                  <motion.a
                                    href={info.action}
                                    className="text-gray-600 hover:text-primary-600 transition-colors duration-300 font-medium block"
                                    whileHover={{ x: 5 }}
                                  >
                                    {detail}
                                  </motion.a>
                                ) : (
                                  <p className="text-gray-600 font-medium">{detail}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Contact */}
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Call us directly for urgent inquiries or immediate support.
                </p>
                <a
                  href="tel:+918340429258"
                  className="btn-primary inline-flex items-center px-6 py-3"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at any of our office locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-center">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{office.city}</h3>
                  <p className="text-gray-600 leading-relaxed">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Start
                <span className="text-gradient-alt block mt-2">Your Project?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Don't wait for tomorrow. Let's discuss your requirements today and create something amazing that drives real results for your business.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="tel:+918340429258" className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group text-lg">
                <Phone size={22} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Us Now</span>
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              
              <a 
                href="mailto:info@tjfitsolution.com" 
                className="inline-flex items-center justify-center bg-transparent text-white px-10 py-5 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 group text-lg"
              >
                <Mail size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>Send Email</span>
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

export default Contact;