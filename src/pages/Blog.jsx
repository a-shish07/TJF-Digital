import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Design: Trends to Watch in 2025',
      excerpt: 'Discover the latest web design trends that will shape the digital landscape in 2025, from AI integration to sustainable design practices.',
      author: 'TJF Digital Team',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Web Design',
      image: '🎨'
    },
    {
      id: 2,
      title: 'SEO Best Practices for Small Businesses',
      excerpt: 'Learn essential SEO strategies that can help small businesses improve their online visibility and attract more customers.',
      author: 'TJF Digital Team',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'SEO',
      image: '🔍'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies That Actually Work',
      excerpt: 'Explore proven digital marketing strategies that deliver real results and help businesses grow their online presence.',
      author: 'TJF Digital Team',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Digital Marketing',
      image: '📱'
    },
    {
      id: 4,
      title: 'The Importance of Mobile-First Design',
      excerpt: 'Why mobile-first design is crucial for modern websites and how it impacts user experience and search rankings.',
      author: 'TJF Digital Team',
      date: '2024-12-28',
      readTime: '4 min read',
      category: 'Web Design',
      image: '📱'
    },
    {
      id: 5,
      title: 'Building Brand Identity Through Visual Design',
      excerpt: 'How effective visual design can help establish a strong brand identity and connect with your target audience.',
      author: 'TJF Digital Team',
      date: '2024-12-20',
      readTime: '5 min read',
      category: 'Graphics Design',
      image: '✨'
    },
    {
      id: 6,
      title: 'Maximizing ROI with Google Ads',
      excerpt: 'Tips and strategies for creating effective Google Ads campaigns that deliver maximum return on investment.',
      author: 'TJF Digital Team',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Paid Advertisement',
      image: '🎯'
    }
  ];

  const categories = ['All', 'Web Design', 'Digital Marketing', 'SEO', 'Graphics Design', 'Paid Advertisement'];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest insights, tips, and trends in digital marketing, web development, and design.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{post.image}</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to get the latest insights and tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-gray-300">
              Our team of experts is ready to help you with your digital marketing and web development needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Consultation
              </Link>
              <Link to="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;