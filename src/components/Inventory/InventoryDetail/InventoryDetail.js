import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import delivery from "../../../img/truck8.png";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../Spinner/Spinner";

const InventoryDetail = () => {
  const { id } = useParams();
  const [stone, setStone] = useState({});
  const [largeSpinner, setLargeSpinner] = useState(true);
  // for delivery btn
  const [deliverySpinner, setDeliverySpinner] = useState(false);
  //for stone quantity set

  const [setSpinner, setSetSpinner] = useState(false);
  useEffect(() => {
    // setLargeSpinner(true);
    fetch(`http://localhost:5000/inventoryDetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStone(data);
        setLargeSpinner(false);
      });
  }, [id, stone]);
  // --------------------------
  //set  delivery quantity for form
  // --------------------------
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newQuantity = parseInt(event.target.quantity.value);
    stone.quantity = newQuantity;
    console.log(newQuantity);
    setSetSpinner(true);
    const url = `http://localhost:5000/setQuantity/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(stone),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Set Quantity Successfully! ✔", {
          position: "bottom-left",
          autoClose: 3000,
        });
        setSetSpinner(false);
      });
  };
  // --------------------------
  //delivery stone quantity
  // --------------------------
  const handleDeliveryBtn = () => {
    const url = `http://localhost:5000/delivery/${id}`;
    const decreaseQuantity = stone.quantity - 1;
    stone.quantity = decreaseQuantity;
    console.log(decreaseQuantity);
    setDeliverySpinner(true);
    if (stone.quantity > 0) {
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(stone),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success("Delivery Successfully! ✔", {
            position: "bottom-left",
            autoClose: 3000,
          });
          setDeliverySpinner(false);
        });
    } else {
      toast.error("Your Product is not Available! ", {
        position: "bottom-left",
        autoClose: 3000,
      });
      setTimeout(() => {
        toast.info("Please before Stock Product then Delivery!", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }, 3000);
      setDeliverySpinner(false);
    }
  };

  const { name, img, price, quantity, supllier, description } = stone;
  return (
    <>
      {largeSpinner ? (
        <Spinner />
      ) : (
        <section className="min-h-screen max-w-[1100px] font-mono text-gray-600 mx-auto md:my-12 my-6 px-2">
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
              <div className="delivered  py-4 flex justify-start ">
                <button
                  onClick={handleDeliveryBtn}
                  disabled={deliverySpinner ? true : false}
                  className={`flex md:text-2xl text-xl overflow-hidden py-2 px-4 md:px-12 rounded-md border shadow-lg  items-center bg-white text-teal-500 hover:opacity-[0.7] duration-150 ease-in-out hover:bg-teal-50${
                    deliverySpinner ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {deliverySpinner ? (
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
            </div>
            <div className="detail-img md:w-[50%] w-full flex justify-center mb-8 md:mb-0 md:justify-end items-center order-1 md:order-2">
              <img
                src={img}
                alt="detail-img"
                className="img-animation h-[200px] md:h-[400px] object-cover rounded-md shadow-lg"
              />
            </div>
          </div>

          <div className="set-stone-quantity my-4 p-4 md:my-8 md:py-8  flex justify-center items-center">
            <form
              onSubmit={handleFormSubmit}
              className="bg-[#FFFFFF] p-2 md:p-4 shadow-xl rounded-md"
            >
              <div className="input-group w-full my-3">
                <label
                  htmlFor="quantity"
                  className="  text-xl md:text-4xl font-semibold text-teal-400"
                >
                  Set Stone Quantity
                </label>
                <br />
                <br />
                <br />
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  max={500}
                  className="w-full outline-0 px-2 border-b-2 bg-transparent border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500"
                  required
                  placeholder="Enter Your Value"
                  autoComplete="off"
                />
              </div>
              <div className=" mt-12 btn items-end">
                <button
                  type="submit"
                  disabled={setSpinner ? true : false}
                  className=" shadow-lg btn-hover w-full px-6 md:px-12 duration-200 ease-in-out py-2 rounded-md text-sm md:text-xl font-bol text-teal-400 hover:text-white border-2 border-teal-400 cursor-pointer"
                >
                  {setSpinner ? (
                    <div class="lds-ellipsis cursor-progress">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    <>Set</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default InventoryDetail;
