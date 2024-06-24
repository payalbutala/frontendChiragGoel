import Counter from "./Counter";

// we usually send props as attribute but here we know we want onlu name so we destructure it.
const ProductRevision = ({ name, quantity }) => {
  return (
    <div className="product">
      {name} <Counter initialCount={quantity} />
    </div>
  );
};

export default ProductRevision;
