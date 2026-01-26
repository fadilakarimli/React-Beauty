const ShowcaseCard = ({ items = showcaseData }) => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {items.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
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

const showcaseData = [
  "/src/assets/images/main-logo1.svg",
  "/src/assets/images/main-logo2.svg",
  "/src/assets/images/main-logo3.svg",
  "/src/assets/images/main-logo4.svg",
  "/src/assets/images/main-logo5.svg",
];

export default ShowcaseCard;
