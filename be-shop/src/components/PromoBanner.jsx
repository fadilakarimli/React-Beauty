import promoImage from '../assets/images/discount-bg.jpg';

const PromoBanner = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: `url(${promoImage})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-xl mr-12 px-6">
        
        <p className="text-[#cc7a8b] font-serif text-xl italic mb-6">
          Discount
        </p>

        <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Get Your
          <span className="text-[#cc7a8b] block">50% Off</span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
        </p>

        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded transition-colors duration-300 text-lg">
          GET NOW!
        </button>

      </div>
    </div>
  );
};

export default PromoBanner;
