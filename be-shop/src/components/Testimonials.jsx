import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import avatar1 from '../assets/images/testimonial-img.jpg'; 

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you",
      name: "Melissa Jones",
      image: avatar1
    },
    {
      id: 2,
      text: "Excellent service and amazing products! BeShop has become my go-to store for all beauty needs. Highly recommended to everyone!",
      name: "Sarah Williams",
      image: avatar1
    },
    {
      id: 3,
      text: "The quality of products at BeShop is outstanding. Customer service is top-notch and delivery is always on time. Very satisfied!",
      name: "Emma Davis",
      image: avatar1
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-pink-500 font-dancing text-3xl md:text-4xl italic mb-3">
            They Stay
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800">
            Testimonials
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 z-10 group"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-600 group-hover:text-white" />
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[350px] flex flex-col items-center justify-center text-center transition-all duration-500">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-pink-100 shadow-lg"
              />
            </div>

            <h4 className="text-xl font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </h4>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 z-10 group"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-600 group-hover:text-white" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
