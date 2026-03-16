import { useState } from "react";
import { useGetTopCategoriesQuery } from "../../services";

export default function TopCategories() {
  const [hoveredId, setHoveredId] = useState(null);
  const {
    data: categories = [],
    isLoading: loading,
    error,
  } = useGetTopCategoriesQuery();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink-500 font-cursive italic text-lg mb-2">
            Popular Collections
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Top Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can't refuse.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">Failed to load top categories</div>
        ) : categories.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No top categories available</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative w-full h-96 bg-gray-300 flex items-center justify-center overflow-hidden">
                  {category.imageUrl && (
                    <img
                      src={category.imageUrl}
                      alt={category.title || category.name || "Category"}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {hoveredId === category.id && (
                    <div className="absolute inset-0 bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center">
                      <div className="text-center text-white animate-fadeIn">
                        <h3 className="text-3xl font-bold mb-6">
                          {category.title || category.name || "CATEGORY"}
                        </h3>
                        <div className="flex items-center gap-2 justify-center hover:gap-3 transition-all duration-300">
                          <span className="text-sm tracking-widest">
                            BROWSE PRODUCTS
                          </span>
                          <span className="text-xl">→</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
