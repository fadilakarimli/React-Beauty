import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import image1 from '../assets/images/insta-photo1.jpg';
import image2 from '../assets/images/insta-photo2.jpg';
import image3 from '../assets/images/insta-photo3.jpg';
import image4 from '../assets/images/insta-photo4.jpg';
import image5 from '../assets/images/insta-photo5.jpg';
import image6 from '../assets/images/insta-photo6.jpg';

const BeautyGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 }
  ];

  return (
    <div className="flex gap-0">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="relative w-64 h-64 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src={image.src} 
            alt={`Beauty ${image.id}`}
            className="w-full h-full object-cover"
          />
          
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${
            hoveredIndex === index ? 'opacity-100' : 'opacity-0'
          }`}>
            <FaInstagram className="text-white text-5xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeautyGallery;