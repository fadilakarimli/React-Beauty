
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";

const ProductCard = ({ image, title, badge, badgeType }) => {
  return (
    <div className="group relative bg-[#f7f7f9] overflow-hidden">
      
      {badge && (
        <span
          className={`absolute top-3 right-3 z-10 px-4 py-1 text-sm text-white
          ${badgeType === "sale" ? "bg-[#b7d5a6]" : "bg-[#cc7a8b]"}`}
        >
          {badge}
        </span>
      )}

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[420px] object-contain"
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 
                        group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
          
          <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <CiHeart />
          </button>

          <button className="w-14 h-14 rounded-full bg-[#b55b75] text-white flex items-center justify-center">
            <FaShoppingBasket />
          </button>
        </div>
      </div>

      <h3 className="text-center mt-6 text-xl font-serif text-gray-800 bg-white py-4">
        {title}
      </h3>
    </div>
  );
};

export default ProductCard;
