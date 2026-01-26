import Products from "./Products";

const TrendingProducts = () => {
  return (
    <section className="py-24 bg-white text-center">
      
      <p className="text-pink-500 italic text-lg mb-4">
        Cosmetics
      </p>

      <h2 className="text-5xl font-light mb-6">
        Trending Products
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
        Nourish your skin with toxin-free cosmetic products.
        With the offers that you can’t refuse.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <button className="px-10 py-4 bg-pink-500 text-white text-sm uppercase">
          Make Up
        </button>
        <button className="px-10 py-4 border">Spa</button>
        <button className="px-10 py-4 border">Perfume</button>
        <button className="px-10 py-4 border">Nails</button>
        <button className="px-10 py-4 border">Skin care</button>
        <button className="px-10 py-4 border">Hair care</button>
      </div>

      <Products />

    </section>
  );
};

export default TrendingProducts;
