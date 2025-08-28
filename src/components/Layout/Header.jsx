import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Sparkles, 
  Globe, 
  Award,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import Logo from '../Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Award },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Sparkles,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Design', href: '/services' },
        { name: 'Digital Marketing', href: '/services' },
        { name: 'SEO Services', href: '/services' },
        { name: 'Graphics Design', href: '/services' },
        { name: 'Paid Advertisement', href: '/services' },
        { name: 'Video Marketing', href: '/services' },
        { name: 'Influencer Marketing', href: '/services' }
      ]
    },
    { name: 'Blog', href: '/blog', icon: Award },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const headerVariants = {
    initial: { y: -100 },
    animate: { 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const dropdownVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  return (
    <>
      

      {/* Main Navigation */}
      <motion.header 
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'glass-effect shadow-2xl shadow-primary-500/20' 
      : 'bg-white/95 backdrop-blur-sm shadow-lg'
  }`}
  variants={headerVariants}
  initial="initial"
  animate="animate"
>

        <nav className="container-max">
          <div className="flex justify-between items-center py-6 mx-4 md:mx-2">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center group">
                <Logo size="lg" theme="dark" showText={true} />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 ">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Link
                        to={item.href}
                        className={` flex items-center space-x-2 font-semibold transition-all duration-300 py-2 px-4 rounded-xl group relative ${
                          isActive(item.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                        }`}
                      >
                        {/* <Icon size={16} className=" group-hover:scale-110 transition-transform duration-300 " /> */}
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                          <ChevronDown 
                            size={14} 
                            className={`transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                        
                      </Link>
                    </motion.div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.hasDropdown && activeDropdown === item.name && (
                        <motion.div
                          className=" absolute top-full left-0 mt-2 w-64 glass-effect rounded-2xl shadow-2xl  z-500"
                          variants={dropdownVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          {item.dropdownItems.map((dropItem, dropIndex) => (
                            <motion.div
                              key={dropItem.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dropIndex * 0.05 }}
                            >
                              <Link
                                to={dropItem.href}
                                className=" flex items-center justify-between px-6 py-3 text-gray-700 hover:text-primary-600  transition-all duration-300 group bg-white"
                              >
                                <span className="font-medium">{dropItem.name}</span>
                                <ArrowUpRight 
                                  size={14} 
                                  className=" opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link to="/contact" className="btn-glow group">
                <span>Start Your Project</span>
                <ArrowUpRight 
                  size={28} 
                  className="ml- group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div 
              className="lg:hidden"
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 bg-primary-50 hover:bg-primary-100 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-primary-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-primary-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden border-t border-gray-200/50 glass-effect-dark rounded-b-2xl"
                variants={mobileMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="py-6 space-y-2">
                  {navigation.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 font-semibold transition-all duration-300 py-3 px-4 rounded-xl group ${
                            isActive(item.href)
                              ? 'text-white bg-primary-600 shadow-glow'
                              : 'text-gray-300 hover:text-white hover:bg-primary-600/20'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigation.length * 0.1 }}
                    className="pt-4"
                  >
                    <Link
                      to="/contact"
                      className="btn-glow w-full justify-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>Start Your Project</span>
                      <ArrowUpRight size={18} className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;