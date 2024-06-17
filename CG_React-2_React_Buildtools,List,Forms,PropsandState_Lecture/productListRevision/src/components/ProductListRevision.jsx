// import Counter from "./Counter";
import ProductRevision from "./ProductRevision";
import { useState } from "react";

const ProductListRevision = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", availability: true, quantity: 1 },
    { id: 2, name: "Product 2", availability: true, quantity: 2 },
    { id: 3, name: "Product 3", availability: true, quantity: 8 },
    { id: 4, name: "Product 4", availability: true, quantity: 4 },
    { id: 5, name: "Product 5", availability: false, quantity: 1 },
    { id: 6, name: "Product 6", availability: false, quantity: 5 },
    { id: 7, name: "Product 7", availability: true, quantity: 7 },
    { id: 8, name: "Product 8", availability: false, quantity: 3 },
  ]);

  const handleProductAdd = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      const ipValue = e.target.value;
      const newProduct = {
        name: ipValue,
        id: Math.random(),
        availability: true,
        quantity: 1,
      };

      setProducts([newProduct, ...products]);
    }
    return;
  };

  return (
    <div>
      <input placeholder="Add Product" onKeyDown={handleProductAdd} />
      {products.map((item) => {
        return item.availability ? (
          <ProductRevision name={item.name} quantity={item.quantity} />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default ProductListRevision;
