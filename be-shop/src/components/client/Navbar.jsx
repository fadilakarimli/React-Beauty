import heroImg from "../../assets/images/header-logo.svg";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-[#fdf1ec]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        <div className="flex items-center gap-2">
          <img src={heroImg} alt="logo" className="h-10" />
          <span className="text-xl font-light italic"></span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <Link to="/" className="text-pink-500 hover:text-pink-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-pink-500 transition-colors">About</Link>
          <a className="hover:text-pink-500 transition-colors cursor-pointer">Shop</a>
          <a className="hover:text-pink-500 transition-colors cursor-pointer">Categories</a>
          <a className="hover:text-pink-500 transition-colors cursor-pointer">Blog</a>
          <a className="hover:text-pink-500 transition-colors cursor-pointer">Contact</a>
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
    </div>
  );
};

export default Navbar;
