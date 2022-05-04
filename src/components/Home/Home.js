import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/stonesHomePage")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((p) => (
        <div>
          <h2>{p.name}</h2>
          <h2>{p.supplier}</h2>
          <h2>{p.description}</h2>
          <h2>{p.quantity}</h2>
          <h2>{p.price}</h2>
          <img src={p.img} alt="product-img" />
        </div>
      ))}
    </div>
  );
};

export default Home;
