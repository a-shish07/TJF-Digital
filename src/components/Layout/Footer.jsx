import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Web Design',
    'Digital Marketing',
    'SEO Services',
    'Graphics Design',
    'Paid Advertisement',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61568551536877' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/99875829/admin/dashboard/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@THEJOINTFAMILIES' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/tjfdigital_/' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              TJF<span className="text-primary-400">Digital</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              TJFDigital is a digital marketing agency specializing in innovative strategies to elevate your online presence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+918340429258" className="text-gray-300 hover:text-primary-400 transition-colors">
                    +91 8340429258
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@tjfitsolution.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                    info@tjfitsolution.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>B-9, B-10 Dharampali Palace, 2nd Floor</p>
                  <p>Near Vinayak Hospital, Sector – 27</p>
                  <p>Noida, 201301</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © 2025 | Powered by TJFDigital
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;