import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  const { product } = useSelector((state) => state.products);
  const { filterProduct } = useSelector((state) => state.products);

  return (
    <>
      <div className="md:mx-24 mt-10">
        <div className="flex items-center justify-around flex-wrap">
          {product.map((productItem) => {
            console.log('jfj', productItem)
            return (
              <div key={productItem.id}>
                <ProductCard product={productItem} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
