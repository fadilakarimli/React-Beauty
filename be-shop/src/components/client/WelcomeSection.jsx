import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const WelcomeSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { number: '2300+', label: 'Products' },
    { number: '108', label: 'Brands' },
    { number: '32', label: 'Partners' },
    { number: '618+', label: 'Customers' },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink-500 font-dancing text-3xl mb-4 italic">
            Promotion Video
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Welcome To BeShope
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Today we can offer our customers exclusive products of{' '}
            <span className="font-semibold text-pink-500">108 brands</span> marked
            'only in BeShope'
          </p>
        </div>

        <div className="relative mb-16 group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=675&fit=crop"
                alt="Beauty Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
                  aria-label="Play video"
                >
                  <FaPlay className="text-pink-500 text-2xl md:text-3xl ml-1" />
                </button>
              </div>

              <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                  <p className="text-gray-800 font-medium text-sm md:text-base">
                    Promotion Video
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-50 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50 -z-10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <h3 className="text-4xl md:text-5xl font-light text-pink-500 mb-1">
                  {stat.number}
                </h3>
                <div className="h-0.5 w-12 bg-pink-300 mx-auto group-hover:w-20 transition-all duration-300"></div>
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
