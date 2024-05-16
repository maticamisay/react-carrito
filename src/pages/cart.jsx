import React, { useState } from "react";
import useCart from "../cart.store";

const cart = () => {
  const { cart, remove, decreaseOne } = useCart();
  const [formCustomer, setFormCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form", formCustomer);
    await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: formCustomer,
        products: cart.map((product) => ({
          id: product.id,
          quantity: product.quantity,
        })),
      }),
    });
  };
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formCustomer.name}
          onChange={(e) =>
            setFormCustomer({ ...formCustomer, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formCustomer.email}
          onChange={(e) =>
            setFormCustomer({ ...formCustomer, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formCustomer.phone}
          onChange={(e) =>
            setFormCustomer({ ...formCustomer, phone: e.target.value })
          }
        />
        <button>Buy</button>
      </form>
    </div>
  );
};

export default cart;
