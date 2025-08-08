import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creating modern, responsive websites that engage visitors and drive conversions.',
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to boost your online presence and reach.',
      icon: '📱'
    },
    {
      title: 'SEO Services',
      description: 'Improve your search rankings and increase organic traffic to your website.',
      icon: '🔍'
    },
    {
      title: 'Graphics Design',
      description: 'Professional visual designs that communicate your brand message effectively.',
      icon: '✨'
    },
    {
      title: 'Paid Advertisement',
      description: 'Strategic ad campaigns that maximize ROI and drive targeted traffic.',
      icon: '🎯'
    }
  ];

  const stats = [
    { number: '1500+', label: 'Projects Completed' },
    { number: '1200+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '8+', label: 'Years Experience' }
  ];

  const features = [
    'Professional Team',
    '24/7 Support',
    'Best in Market',
    'High Customer Rating'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Professional Digital Solutions for Your Business
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We help businesses grow online with expert web development, digital marketing, and design services. Transform your digital presence with TJF Digital.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get Started Today
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ready to Grow?</h3>
                <p className="text-gray-600">Let's build something amazing together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business succeed online
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  About TJF Digital
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Since 2015, TJF IT Solution has been a leading digital marketing and web development company. We have successfully assisted numerous brands in achieving substantial growth through our expertise in digital marketing, SEO, and web development.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Users className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">Dedicated professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Award className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Work</h4>
                      <p className="text-gray-600">Excellence in every project</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <TrendingUp className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Growth Focus</h4>
                      <p className="text-gray-600">Results that matter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help your business grow online. Get in touch with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <a href="tel:+918340429258" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;