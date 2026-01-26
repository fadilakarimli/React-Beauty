import heroImg from "../assets/images/header-logo.svg";
import bannerImg from "../assets/images/banner.jpg";

import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-[#fdf1ec]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        <div className="flex items-center gap-2">
          <img src={heroImg} alt="logo" className="h-10" />
          <span className="text-xl font-light italic"></span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a className="text-pink-500">Home</a>
          <a>Pages</a>
          <a>Shop</a>
          <a>Categories</a>
          <a>Blog</a>
          <a>Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <span>
            <CiSearch />
          </span>
          <span>
            <CiUser />
          </span>
          <span>
            <CiHeart />
          </span>
          <span className="relative">
            <FaBasketShopping />

            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </span>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 py-24">
          <div>
            <p className="text-pink-500 italic text-lg mb-2">
              BeShop Professional
            </p>

            <h1 className="text-6xl font-light leading-tight mb-6">
              Beauty & Care
            </h1>

            <p className="text-gray-600 max-w-md mb-8">
              Nourish your skin with toxin-free cosmetic products. With the
              offers that you can't refuse.
            </p>

            <button className="bg-black text-white px-8 py-4 uppercase text-sm tracking-wider hover:bg-pink-500 transition">
              Shop Now
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
