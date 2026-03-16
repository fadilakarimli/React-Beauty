import shopBannerImg from "../../assets/images/shopbannerjpg.jpg"; 

const ShopHero = () => {
  return (
    <div
      className="relative w-full h-[280px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${shopBannerImg})`,
      }}
    >
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <h1 className="text-4xl font-light tracking-widest text-[#3a3a3a]">
          Shop
        </h1>

        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-500 hover:text-pink-500 transition-colors">
            Home
          </a>
          <span className="text-gray-400">-</span>
          <span className="text-pink-500 font-medium">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
