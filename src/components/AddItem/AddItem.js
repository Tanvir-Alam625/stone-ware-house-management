import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyHelmet from "../MyHelmet/MyHelmet";

const AddItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // input style
  const inputStyle =
    " w-full outline-0 px-2 border-b-2 border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500";

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supllier = event.target.supplier.value;
    const quantity = parseInt(event.target.quantity.value);
    const price = parseInt(event.target.price.value);
    const img = event.target.img.value;
    const description = event.target.description.value;
    const email = user.email;
    const newStone = {
      name,
      supllier,
      quantity,
      price,
      img,
      description,
      email,
    };
    const url = "https://warehouse-management-system625.onrender.com/AddStone";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStone),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully one Data Added! ✔", {
          position: "bottom-left",
          autoClose: 3000,
        });
        navigate("/manage");
      });
  };
  return (
    <section className="min-h-screen max-w-[1100px] mx-auto text-gray-600 font-mono flex justify-center items-center px-2">
      {/* page title  */}
      <MyHelmet title="AddItem" />

      <div className="add-item w-full md:w-2/3 lg:w-2/5 md:p-4 p-2 rounded-md shadow-lg border bg-[#FFFFFF]">
        <div className="heading mb-6">
          <h2 className="text-2xl font-semibold md:text-6xl my-8 text-center text-teal-400">
            Add Stone
          </h2>
        </div>
        <form onSubmit={handleAddItem}>
          <div className="form-group w-full my-3">
            <label htmlFor="name" className=" text-sm md:text-xl">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className={inputStyle}
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-3">
            <label htmlFor="supplier" className=" text-sm md:text-xl">
              Supplier Name
            </label>
            <br />
            <input
              type="text"
              name="supplier"
              id="supplier"
              className={inputStyle}
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-3">
            <label htmlFor="quantity" className=" text-sm md:text-xl">
              Quantity
            </label>
            <br />
            <input
              type="number"
              name="quantity"
              id="quantity"
              className={inputStyle}
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-3">
            <label htmlFor="price" className=" text-sm md:text-xl">
              Price
            </label>
            <br />
            <input
              type="number"
              name="price"
              id="price"
              className={inputStyle}
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-4">
            <label htmlFor="img" className=" text-sm md:text-xl">
              Image Url
            </label>
            <br />
            <input
              type="text"
              name="img"
              id="img"
              className={inputStyle}
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-4">
            <label htmlFor="img" className=" text-sm md:text-xl">
              Description
            </label>
            <br />
            <textarea
              type="text"
              name="description"
              id="description"
              className="w-full outline-0 px-2 border-2 rounded-md border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500"
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className={`w-full  duration-200 ease-in-out py-2 hover:text-white rounded-md bg-teal-400 hover:bg-teal-500 cursor-pointer text-sm md:text-xl font-bold mt-4 `}
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
