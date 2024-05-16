import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/products/${idProduct}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [idProduct]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>ProductDetails: {idProduct}</h1>
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductDetails;
