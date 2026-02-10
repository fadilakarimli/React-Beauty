import React, { useState } from 'react';

import newsletterImg from '../../assets/images/subscribe-img.png';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-transparent"></div>
              <img
                src={newsletterImg}
                alt="Newsletter"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12 space-y-6">
              <div className="space-y-3">
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
                  Stay In Touch
                </h2>
                <p className="text-gray-600 text-lg">
                  Nourish your skin with toxin-free cosmetic products.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg uppercase text-sm font-semibold tracking-wider hover:bg-gray-800 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;