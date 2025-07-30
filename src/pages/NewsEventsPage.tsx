// pages/NewsEventsPage.tsx
import React from 'react';
import Card from '../components/Card';

const NewsEventsPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'Top 10 Trekking Routes in Nepal',
      excerpt: 'Discover the most breathtaking trails in the Himalayas for all skill levels.',
      date: 'May 15, 2023',
      category: 'Trekking'
    },
    {
      title: 'Cultural Festivals to Experience in Nepal',
      excerpt: 'Immerse yourself in Nepal\'s vibrant cultural celebrations throughout the year.',
      date: 'April 28, 2023',
      category: 'Culture'
    },
    {
      title: 'Sustainable Travel Practices in the Himalayas',
      excerpt: 'Learn how to minimize your environmental impact while exploring Nepal.',
      date: 'April 10, 2023',
      category: 'Sustainability'
    },
    {
      title: 'Wildlife Spotting in Chitwan National Park',
      excerpt: 'A guide to the incredible biodiversity of Nepal\'s premier wildlife reserve.',
      date: 'March 22, 2023',
      category: 'Wildlife'
    }
  ];

  const events = [
    {
      title: 'Kathmandu Heritage Walk',
      date: 'June 10, 2023',
      location: 'Kathmandu, Nepal'
    },
    {
      title: 'Annapurna Conservation Area Cleanup',
      date: 'July 5-10, 2023',
      location: 'Annapurna Region'
    },
    {
      title: 'Travel Photography Workshop',
      date: 'August 15, 2023',
      location: 'Pokhara, Nepal'
    },
    {
      title: 'Nepali Cooking Class',
      date: 'September 3, 2023',
      location: 'Online Event'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">News, Events & Blogs</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest travel insights, events, and stories from MazzakoTrip
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Latest Blog Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-cyan-500">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-cyan-500 font-medium hover:text-cyan-600 transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-50 transition-colors duration-300">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Upcoming Events</h2>
          
          <div className="max-w-3xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 mb-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-gray-600">
                      <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for travel tips, special offers, and event updates
          </p>
          <div className="flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow px-4 py-3 mb-2 sm:mb-0 sm:mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;