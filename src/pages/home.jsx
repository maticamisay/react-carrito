import React from "react";
import products from "../products.json";
import useCart from "../cart.store";

const home = () => {
  const { add } = useCart();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - $ {product.price}
            <button onClick={() => add(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default home;
