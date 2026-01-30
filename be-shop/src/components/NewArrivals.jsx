import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import productImg1 from '../assets/images/product-img1.jpg';
import productImg2 from '../assets/images/product-img2.jpg';
import productImg3 from '../assets/images/product-img3.jpg';
import productImg5 from '../assets/images/product-img5.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: 'Tony Mask',
    price: 200.95,
    originalPrice: 549.95,
    image: productImg1,
    badge: 'NEW',
    badgeColor: 'rose'
  },
  {
    id: 2,
    name: 'Detox Body Cream',
    price: 200.95,
    originalPrice: 249.95,
    image: productImg2,
    badge: 'SALE',
    badgeColor: 'green',
    secondaryBadge: 'NEW'
  },
  {
    id: 3,
    name: 'Spray Balm With Oat Extract',
    price: 200.95,
    originalPrice: 249.95,
    image: productImg3,
    badge: 'NEW',
    badgeColor: 'rose'
  },
  {
    id: 4,
    name: 'Hydrogel Patches',
    price: 200.95,
    originalPrice: 249.95,
    image: productImg5,
    badge: 'NEW',
    badgeColor: 'rose'
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-50 mb-6">
        <div className="relative h-[380px] w-[150]">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.badge && (
              <span className={`
                px-4 py-1.5 text-xs font-semibold tracking-wider text-white
                ${product.badgeColor === 'rose' ? 'bg-rose-400' : 'bg-emerald-400'}
                shadow-sm
              `}>
                {product.badge}
              </span>
            )}
            {product.secondaryBadge && (
              <span className="px-4 py-1.5 text-xs font-semibold tracking-wider text-white bg-rose-400 shadow-sm">
                {product.secondaryBadge}
              </span>
            )}
          </div>

          <div className={`
            absolute inset-0 bg-black transition-opacity duration-300
            ${isHovered ? 'opacity-5' : 'opacity-0'}
          `} />
        </div>
      </div>

      <div className="text-center space-y-3">
        <h3 className="text-lg font-medium text-gray-800 tracking-wide">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-3">
          <span className="text-gray-400 line-through text-sm">
            ${product.originalPrice}
          </span>
          <span className="text-xl font-semibold text-gray-900">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      Math.min(PRODUCTS.length - itemsPerPage, prev + 1)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="font-serif italic text-rose-400 text-xl tracking-wide">
            Cosmetics
          </p>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              w-12 h-12 rounded-full bg-white shadow-lg
              flex items-center justify-center
              transition-all duration-300 hover:scale-110
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
            `}
          >
            <IoChevronBack className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= PRODUCTS.length - itemsPerPage}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              w-12 h-12 rounded-full bg-white shadow-lg
              flex items-center justify-center
              transition-all duration-300 hover:scale-110
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
            `}
          >
            <IoChevronForward className="w-6 h-6 text-gray-600" />
          </button>

          <div className="overflow-hidden px-12">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: PRODUCTS.length - itemsPerPage + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${currentIndex === idx ? 'w-8 bg-rose-400' : 'w-2 bg-gray-300'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;