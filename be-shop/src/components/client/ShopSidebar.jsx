import { useState } from "react";
import { CiSearch } from "react-icons/ci";

// TODO: Replace placeholder images with your actual product imports
// import viewed1 from "../../assets/images/viewed1.jpg";
// import viewed2 from "../../assets/images/viewed2.jpg";
// import viewed3 from "../../assets/images/viewed3.jpg";
// import top1 from "../../assets/images/top1.jpg";
// import top2 from "../../assets/images/top2.jpg";
// import top3 from "../../assets/images/top3.jpg";

const viewedProducts = [
  { id: 1, name: "Foundation Beshop", price: "$200.95", image: "https://placehold.co/50x50?text=P1" },
  { id: 2, name: "Lotion For Cleansing", price: "$100.90", image: "https://placehold.co/50x50?text=P2" },
  { id: 3, name: "Tony Mask", price: "$200.95", image: "https://placehold.co/50x50?text=P3" },
];

const topProducts = [
  { id: 1, name: "Spray Balm With Oat Extract", price: "$200.95", image: "https://placehold.co/50x50?text=T1" },
  { id: 2, name: "Hydrogel Patches", price: "$200.95", image: "https://placehold.co/50x50?text=T2" },
  { id: 3, name: "Detox body Cream", price: "$200.95", image: "https://placehold.co/50x50?text=T3" },
];

const categories = [
  { name: "Make up", count: 37 },
  { name: "SPA", count: 162 },
  { name: "Perfume", count: 153 },
  { name: "Nails", count: 86 },
  { name: "Skin care", count: 48 },
  { name: "Hair care", count: 54 },
];

const ShopSidebar = () => {
  const [priceValue, setPriceValue] = useState(20);
  const [search, setSearch] = useState("");

  return (
    <aside className="w-full md:w-[260px] flex-shrink-0 flex flex-col gap-8">
      {/* Search */}
      <div className="flex items-center border border-gray-200 rounded px-3 py-2 bg-white">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 text-sm outline-none text-gray-600 placeholder-gray-400"
        />
        <CiSearch className="text-gray-500 text-lg" />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-[#3a3a3a] border-b border-gray-200 pb-2 mb-4">
          Categories
        </h3>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button className="w-full flex items-center justify-between py-2 border-b border-gray-100 hover:text-pink-500 transition-colors text-sm text-gray-700 group">
                <span className="group-hover:text-pink-500 transition-colors">
                  {cat.name}
                </span>
                <span className="text-gray-400 text-xs">({cat.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold text-[#3a3a3a] border-b border-gray-200 pb-2 mb-4">
          Price
        </h3>
        <input
          type="range"
          min={0}
          max={100}
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          className="w-full accent-pink-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0$</span>
          <span>{priceValue}$</span>
        </div>
      </div>

      {/* You Have Viewed */}
      <div>
        <h3 className="text-lg font-semibold text-[#3a3a3a] border-b border-gray-200 pb-2 mb-4">
          You Have Viewed
        </h3>
        <ul className="flex flex-col gap-3">
          {viewedProducts.map((p) => (
            <li key={p.id} className="flex items-center gap-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-12 h-12 object-cover rounded flex-shrink-0 bg-gray-100"
              />
              <div className="flex flex-col">
                <span className="text-sm text-pink-500 hover:text-pink-600 cursor-pointer leading-tight">
                  {p.name}
                </span>
                <span className="text-xs text-gray-400">{p.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Top 3 For Today */}
      <div>
        <h3 className="text-lg font-semibold text-[#3a3a3a] border-b border-gray-200 pb-2 mb-4">
          Top 3 For Today
        </h3>
        <ul className="flex flex-col gap-3">
          {topProducts.map((p) => (
            <li key={p.id} className="flex items-center gap-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-12 h-12 object-cover rounded flex-shrink-0 bg-gray-100"
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-700 hover:text-pink-500 cursor-pointer leading-tight">
                  {p.name}
                </span>
                <span className="text-xs text-gray-400">{p.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ShopSidebar;
