import React from "react";
import useCart from "../cart.store";

const cart = () => {
  const { cart, remove, decreaseOne } = useCart();
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - $ {product.price} - {product.quantity} units
            <button onClick={() => remove(product.id)}>Eliminar</button>
            <button onClick={() => decreaseOne(product.id)}>-1</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default cart;
