import React from 'react';
import brandImage from '../../assets/images/discount-bg.jpg'; // şəkili özün import et

const SuccessStory = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${brandImage})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div></div>

          <div className="space-y-6 text-left">
            <p className="text-pink-500 font-dancing text-3xl md:text-4xl italic">
              Success Story
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
              BeShop Develops<br />Its Own Brands
            </h2>

            <p className="text-gray-700 text-lg font-medium max-w-xl">
              The BeShope network is being developed and improved, taking into account all consumer.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Forming the range of stores, we, above all, strive not only to meet the format of "home shop", offering each customer the most basic household goods, but also to create a unique space of beauty and care. BeShope stores offer their customers the widest and highest quality selection of products from world-renowned manufacturers.
            </p>

            <button className="bg-black text-white px-10 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
