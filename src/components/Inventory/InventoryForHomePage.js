import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";

const InventoryForHomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/stonesHomePage")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className="md:my-8 my-4 text-gray-600 font-mono max-w-[1100px] mx-auto">
      <h1 className="section-heading md:text-6xl text-center text-4xl font-bold tracking-tighter my-6 ">
        Our Items
      </h1>
      <div className="inventory-items mt-8 mb-8 md:mt-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4">
        {products.map((product) => (
          <Item key={product._id} data={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/inventory"
          className="btn-hover flex items-center  border hover:text-white duration-500 ease-in-out border-teal-400 text-teal-400  text-sm md:text-xl  mx-auto py-1 px-4 shadow rounded-md"
        >
          View More <ArrowNarrowRightIcon className="h-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default InventoryForHomePage;
