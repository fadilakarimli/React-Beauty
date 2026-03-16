import ShopHero from "../../components/client/ShopHero";
import ShopSidebar from "../../components/client/ShopSidebar";
import ShopFilters from "../../components/client/ShopFilters";
import ShopProductCard from "../../components/client/ShopProductCard";
import ShopPagination from "../../components/client/ShopPagination";

// TODO: Replace these placeholder images with your actual product images
// import product1 from "../../assets/images/product1.jpg";
// import product2 from "../../assets/images/product2.jpg";
// import product3 from "../../assets/images/product3.jpg";

const products = [
  {
    id: 1,
    name: "Hydrogel Patches",
    oldPrice: "$249.95",
    newPrice: "$200.95",
    isSale: true,
    isNew: true,
    image: "https://placehold.co/400x280?text=Product+1", // TODO: replace with your import
  },
  {
    id: 2,
    name: "Spray Balm With Oat Extract",
    oldPrice: "$249.95",
    newPrice: "$200.95",
    isSale: true,
    isNew: true,
    image: "https://placehold.co/400x280?text=Product+2", // TODO: replace with your import
  },
  {
    id: 3,
    name: "Detox Body Cream",
    oldPrice: "$249.95",
    newPrice: "$200.95",
    isSale: true,
    isNew: false,
    image: "https://placehold.co/400x280?text=Product+3", // TODO: replace with your import
  },
];

const ShopPage = () => {
  return (
    <div>
      <ShopHero />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        <ShopSidebar />

        <div className="flex-1">
          <ShopFilters />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ShopProductCard key={product.id} {...product} />
            ))}
          </div>
          <ShopPagination totalPages={2} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
