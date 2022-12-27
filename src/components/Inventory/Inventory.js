import React, { useEffect, useState } from "react";
import MyHelmet from "../MyHelmet/MyHelmet";
import Spinner from "../Spinner/Spinner";
import Item from "./Item/Item";

const Inventory = () => {
  const [spinner, setSpinner] = useState(true);
  const [stone, setStone] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [pagination, setPagination] = useState(0);
  //DBS data Count Effect
  useEffect(() => {
    const url = "https://warehouse-management-system625.onrender.com/countData";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pages = Math.round(data / 10);
        setPageCount(pages);
      });
  }, []);
  // data load from mongodb server with pagination
  useEffect(() => {
    const url = `https://warehouse-management-system625.onrender.com/inventory?page=${pagination}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStone(data);
        setSpinner(false);
      });
  }, [pagination]);
  return (
    <>
      {/* page title  */}
      <MyHelmet title="inventory" />
      {spinner ? (
        <Spinner />
      ) : (
        <section className=" min-h-screen w-full max-w-[1100px] mx-auto ">
          {/* inventory items container  */}
          <div className="inventory-items mt-8 mb-8 md:mt-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4">
            {stone.map((product) => (
              <Item key={product._id} data={product} />
            ))}
          </div>
          {/* pagination button container  */}
          <div
            className="pagination flex
             justify-center items-center my-6"
          >
            <div className="pagination-btn py-2 px-4 rounded bg-[#FFFF]">
              <button
                onClick={() => setPagination(0)}
                className={`py-1 px-2  border border-teal-400 ${
                  pagination === 0
                    ? "bg-teal-500 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                0
              </button>
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => setPagination(number + 1)}
                  className={`py-1 px-2  border border-teal-400 
                  ${
                    pagination === number + 1
                      ? "bg-teal-500 text-white"
                      : "bg-white text-gray-600"
                  }
                  `}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Inventory;
