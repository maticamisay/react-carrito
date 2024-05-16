import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import ProductDetails from "./pages/product-detail";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:idProduct" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
