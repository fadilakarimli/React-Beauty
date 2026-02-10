import { useGetHeroBannersQuery } from "../../services";

const HeroBanner = () => {
  const { data: banners = [], isLoading: loading, error } = useGetHeroBannersQuery();
  const heroBanner = banners.length > 0 ? banners[0] : null;

  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: heroBanner?.imageUrl ? `url(${heroBanner.imageUrl})` : 'none',
        backgroundColor: heroBanner?.imageUrl ? 'transparent' : '#f5f5f5'
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 py-24">
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
            </div>
          ) : error ? (
            <p className="text-red-500">Məlumat yüklənmədi</p>
          ) : !heroBanner ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl mb-4">Hero banner məlumatı yoxdur</p>
              <p className="text-gray-400 text-sm">Admin paneldən hero banner əlavə edin</p>
            </div>
          ) : (
            <>
              {heroBanner.subtitle && (
                <p className="text-pink-500 italic text-lg mb-2">
                  {heroBanner.subtitle}
                </p>
              )}

              <h1 className="text-6xl font-light leading-tight mb-6">
                {heroBanner.title}
              </h1>

              {heroBanner.description && (
                <p className="text-gray-600 max-w-md mb-8">
                  {heroBanner.description}
                </p>
              )}
            </>
          )}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default HeroBanner;
