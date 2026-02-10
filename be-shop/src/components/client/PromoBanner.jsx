import { useGetPromoBannersQuery } from '../../services';

const PromoBanner = () => {
  const { data: banners = [], isLoading: loading } = useGetPromoBannersQuery();
  const banner = banners.length > 0 ? banners[0] : null;

  if (loading) {
    return (
      <div className="relative h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!banner) {
    return null; 
  }

  return (
    <div 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: `url(${banner.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-xl mr-12 px-6">
        
        <p className="text-[#cc7a8b] font-serif text-xl italic mb-6">
          {banner.discountText}
        </p>

        <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          {banner.title}
          {banner.highlightedText && (
            <span className="text-[#cc7a8b] block">{banner.highlightedText}</span>
          )}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {banner.description}
        </p>

        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded transition-colors duration-300 text-lg">
          GET NOW!
        </button>

      </div>
    </div>
  );
};

export default PromoBanner;
