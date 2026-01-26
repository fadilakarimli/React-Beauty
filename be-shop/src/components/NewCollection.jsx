import productImage from "../assets/images/info-item-img1.jpg";
import rightImg from "../assets/images/info-item-bg1.jpg"; 


export default function NewCollection() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center h-96 lg:h-full">

            <div 
              className="relative z-10 w-full h-full flex items-center justify-center shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${productImage})` }}
            >
            </div>
          </div>

          <div 
            className="relative flex flex-col justify-center space-y-8 p-8 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${rightImg})` }}
          >
            <div className="absolute inset-0 bg-opacity-95 rounded-lg"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-pink-500 font-cursive italic text-lg mb-2">
                  Check This Out
                </p>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  New Collection For Delicate Skin
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-base leading-relaxed">
                  Nourish your skin with toxin-free cosmetic products. With the
                  offers that you can't refuse.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                  anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                  reprehenderit reprehenderit culpa laboris nulla minim anim velit
                  adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit
                  reprehenderit culpa laboris nulla minim.
                </p>
              </div>

              <div>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 transition-colors duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
