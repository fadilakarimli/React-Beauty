import React from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import bgImage from '../assets/images/detail-main-bg.jpg';

const AboutHero = () => {
  const features = [
    {
      icon: <FaTruck className="text-3xl text-gray-700" />,
      title: 'Free Shipping',
      description: 'World wide'
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-gray-700" />,
      title: 'Helpline',
      description: '+1 345 99 71 345'
    },
    {
      icon: <FaUserTie className="text-3xl text-gray-700" />,
      title: 'Customer Support',
      description: 'Finish!'
    }
  ];

  return (
    <div 
      className="relative min-h-[500px] flex flex-col items-center justify-between overflow-hidden pb-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-pink-100/70"></div>
      
      <div className="relative z-10 text-center mt-20">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">About</h1>
        
        <div className="flex items-center justify-center gap-3 text-lg">
          <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">
            Home
          </Link>
          <span className="text-gray-500">-</span>
          <span className="text-pink-500 font-medium">About</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-5 flex items-center gap-3 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
