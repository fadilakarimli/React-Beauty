import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
const ShopProductCard = ({
  image,       
  name,       
  oldPrice,   
  newPrice,   
  isSale = false,
  isNew = false,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col group">
      <div
        className="relative bg-[#f3f3f3] overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute top-0 right-0 flex flex-col z-10">
          {isSale && (
            <span className="bg-[#8bc34a] text-white text-xs font-semibold px-3 py-1 tracking-wide">
              SALE
            </span>
          )}
          {isNew && (
            <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 tracking-wide">
              NEW
            </span>
          )}
        </div>

        <img
          src={image}
          alt={name}
          className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 bg-white/20 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/40 hover:bg-white transition-colors">
            <CiSearch className="text-gray-700 text-lg" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-50 transition-colors shadow">
            <CiHeart className="text-gray-700 text-lg" />
          </button>
          <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors shadow">
            <FaBasketShopping className="text-white text-sm" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col items-center pt-4 pb-2 gap-1">
        <h3 className="text-base font-medium text-[#3a3a3a] text-center">{name}</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400 line-through">{oldPrice}</span>
          <span className="text-[#3a3a3a] font-semibold">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
