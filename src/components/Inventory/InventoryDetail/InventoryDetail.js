import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import delivery from "../../../img/truck8.png";
import "react-toastify/dist/ReactToastify.css";

const InventoryDetail = () => {
  const { id } = useParams();
  const [stone, setStone] = useState({});
  const [btnSpinner, setBtnSpinner] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/inventoryDetail/${id}`)
      .then((res) => res.json())
      .then((data) => setStone(data));
  }, [id]);

  const handleDeliveryBtn = () => {
    const url = `http://localhost:5000/inventoryDetail/${id}`;
    const decreaseQuantity = stone.quantity - 1;
    stone.quantity = decreaseQuantity;
    console.log(decreaseQuantity);
    setBtnSpinner(true);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(stone),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Update Successfully! ✔", {
          position: "bottom-left",
          autoClose: 3000,
        });
        setBtnSpinner(false);
      });
  };

  const { name, img, price, quantity, supllier, description } = stone;
  return (
    <section className="min-h-screen max-w-[1100px] font-mono text-gray-600 mx-auto md:my-12 my-6">
      {/* // notification  */}
      <ToastContainer />

      {/* ------------------ */}
      {/* details inventory  */}
      {/* ------------------ */}
      <div className="detail flex-col md:flex-row flex justify-center items-center pt-8 ">
        <div className="detail-info md:w-[50%] w-full order-2 md:order-1">
          <h2 className="text-2xl md:text-6xl font-bold tracking-tighter md:my-6 my-4">
            {name}
          </h2>
          <p className=" text-xl md:text-2xl font-light tracking-tighter my-2 ">
            Supplier: <span className="text-teal-400">{supllier}</span>
          </p>
          <p className="text-xs md:text-sm my-2">{description}</p>
          <p className=" my-2 text-sm md:text-xl tracking-tighter font-extralight  ">
            Quantity: <span className="text-teal-400"> {quantity}</span>
          </p>
          <p className="text-xl md:text-2xl  font-light">
            Price: <span className="text-teal-400">${price}</span>
          </p>
        </div>
        <div className="detail-img md:w-[50%] w-full flex justify-center mb-8 md:mb-0 md:justify-end items-center order-1 md:order-2">
          <img
            src={img}
            alt="detail-img"
            className="img-animation h-[200px] md:h-[400px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="delivered my-12 p-4 flex justify-center ">
        <button
          onClick={handleDeliveryBtn}
          disabled={btnSpinner ? true : false}
          className={`flex md:text-2xl text-xl overflow-hidden py-2 px-4 md:px-12 rounded-md border shadow-lg  items-center bg-white text-teal-500 hover:opacity-[0.7] duration-150 ease-in-out hover:bg-teal-50${
            btnSpinner ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {btnSpinner ? (
            <div class="lds-ellipsis cursor-progress">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
              Delivered
              <img src={delivery} alt="delivery" className="h-6 ml-2" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default InventoryDetail;
