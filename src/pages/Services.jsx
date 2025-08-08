import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creating modern, responsive websites that engage visitors and drive conversions with seamless user experience.',
      icon: '🎨',
      features: [
        'Responsive Design',
        'User-Friendly Interface',
        'Modern Layouts',
        'Cross-Browser Compatibility',
        'Mobile Optimization',
        'Fast Loading Speed'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and reach your target audience effectively.',
      icon: '📱',
      features: [
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Online Reputation Management',
        'Lead Generation',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'SEO Services',
      description: 'Improve your search engine rankings and increase organic traffic with our proven SEO strategies.',
      icon: '🔍',
      features: [
        'On-Page SEO',
        'Off-Page SEO',
        'Keyword Research',
        'Technical SEO',
        'Local SEO',
        'SEO Audits'
      ]
    },
    {
      title: 'Graphics Design',
      description: 'Professional visual designs that communicate your brand message effectively and create lasting impressions.',
      icon: '✨',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'Web Graphics',
        'Print Design',
        'Social Media Graphics'
      ]
    },
    {
      title: 'Paid Advertisement',
      description: 'Strategic advertising campaigns that maximize ROI and drive targeted traffic to your business.',
      icon: '🎯',
      features: [
        'Google Ads',
        'Facebook Advertising',
        'YouTube Advertising',
        'PPC Management',
        'Campaign Optimization',
        'Performance Tracking'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your business needs and goals through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a customized strategy tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize for the best possible results.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer comprehensive digital solutions designed to help your business succeed in the digital landscape. From web design to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary inline-flex items-center">
                    Get Started
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-primary-50 p-8 rounded-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">{service.icon}</div>
                      <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">Professional solutions tailored to your needs</p>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Starting from</div>
                        <div className="text-2xl font-bold text-primary-600">Contact for Quote</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure the success of every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss your project and how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <a href="tel:+918340429258" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;