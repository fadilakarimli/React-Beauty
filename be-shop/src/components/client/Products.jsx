import ProductCard from "./ProductCard";

import p1 from "../../assets/images/product-img1.jpg";
import p2 from "../../assets/images/product-img2.jpg";
import p3 from "../../assets/images/product-img3.jpg";
import p4 from "../../assets/images/product-img4.jpg";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
      
      <ProductCard
        image={p1}
        title="Foundation Beshop"
        badge="SALE"
        badgeType="sale"
      />

      <ProductCard
        image={p2}
        title="Lotion For Cleansing"
        badge="SALE"
        badgeType="sale"
      />

      <ProductCard
        image={p3}
        title="Tony Mask"
        badge="NEW"
        badgeType="new"
      />

      <ProductCard
        image={p4}
        title="Spray Balm With Oat"
        badge="SALE"
        badgeType="sale"
      />

    </div>
  );
};

export default Products;
