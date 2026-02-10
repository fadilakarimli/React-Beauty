import { useGetShowcaseLogosQuery } from '../../services';

const ShowcaseCard = () => {
  const { data: logos = [], isLoading: loading } = useGetShowcaseLogosQuery();

  if (loading) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo.imageUrl}
                alt="logo"
                className="h-28 w-28 object-contain drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
