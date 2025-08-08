import React from 'react';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and success in the digital landscape.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading digital marketing agency that transforms businesses through cutting-edge technology and creative strategies.'
    },
    {
      icon: Award,
      title: 'Our Goals',
      description: 'To deliver exceptional results, build lasting partnerships, and help our clients achieve their digital objectives.'
    }
  ];

  const features = [
    'Expert team of professionals',
    'Proven track record since 2015',
    '1500+ successful projects',
    '1200+ satisfied clients',
    '100% client satisfaction rate',
    '24/7 customer support',
    'Innovative solutions',
    'Results-driven approach'
  ];

  const stats = [
    { number: '8+', label: 'Years of Experience' },
    { number: '1500+', label: 'Projects Completed' },
    { number: '1200+', label: 'Happy Clients' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About TJF Digital
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a leading digital marketing and web development company with a track record of excellence since 2015. Our expertise spans across various domains, helping numerous brands achieve substantial growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                TJF IT Solution Private Limited
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Since our establishment in 2015, TJF IT Solution has been at the forefront of digital innovation. We have successfully assisted numerous brands in achieving substantial growth through our comprehensive digital solutions.
                </p>
                <p>
                  Our expertise spans across various domains, including digital marketing, SEO, web development, and graphic design. With a dedicated team of professionals, we strive to deliver exceptional results that drive business success.
                </p>
                <p>
                  We believe in creating engaging websites and implementing effective digital marketing strategies that propel brands to new heights. Our commitment to excellence and client satisfaction has made us a trusted partner for businesses across industries.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to serving our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose TJF Digital?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choose TJF Digital for innovative strategies, personalized solutions, and a dedicated team that drives your brand's growth and online success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Excellence in Service</h3>
                  <p className="text-gray-600">
                    We are committed to delivering the highest quality of service and ensuring complete client satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help transform your digital presence and drive your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="tel:+918340429258" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;