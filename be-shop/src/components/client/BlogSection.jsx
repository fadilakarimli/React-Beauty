import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import blogImg1 from '../../assets/images/blog-img1.jpg';
import blogImg2 from '../../assets/images/blog-img2.jpg';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Perfumes, perfumed or eau de toilette?',
    description: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can\'t refuse.',
    image: blogImg1,
    date: {
      month: 'June',
      day: '21'
    }
  },
  {
    id: 2,
    title: 'Best multi-step skin care treatment',
    description: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can\'t refuse.',
    image: blogImg2,
    date: {
      month: 'June',
      day: '21'
    }
  }
];

const BlogCard = ({ post }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 text-center min-w-[70px]">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{post.date.month}</p>
          <p className="text-2xl font-bold text-gray-900">{post.date.day}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-medium text-gray-900 group-hover:text-rose-400 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {post.description}
        </p>
        
        <button className="inline-flex items-center gap-2 text-rose-400 font-medium uppercase text-sm tracking-wider hover:gap-3 transition-all duration-300">
          READ MORE
          <IoArrowForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="font-serif italic text-rose-400 text-xl tracking-wide">
            Our Blog
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900">
            The Latest News At BeShop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gray-900 text-white px-12 py-4 rounded-md uppercase text-sm font-semibold tracking-wider hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
            READ BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;