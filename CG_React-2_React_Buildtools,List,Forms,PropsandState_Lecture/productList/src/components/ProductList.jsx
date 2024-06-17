import { Product } from "./Product";
import Counter from "./Counter";
import { useState } from "react";

const ProductList = () => {
  const [productItem, setProducts] = useState([
    { name: "Product1", id: 1, availability: true },
    { name: "Product2", id: 2, availability: true },
    { name: "Product3", id: 3, availability: false },
    { name: "Product4", id: 4, availability: true },
    { name: "Product5", id: 5, availability: false },
    { name: "Product6", id: 6, availability: false },
    { name: "Product7", id: 7, availability: true },
  ]);
  return (
    <div>
      {[...products].map((product) => {
        return product.availability ? (
          <Product key={product.id} name={product.name} />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default ProductList;
