import React from "react";

const AddItem = () => {
  // input style
  const inputStyle =
    " w-full outline-0 px-2 border-b-2 border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500";
  return (
    <section className="min-h-screen max-w-[1100px] mx-auto text-gray-600 font-mono flex justify-center items-center px-2">
      <div className="add-item w-full md:w-2/3 lg:w-2/5 md:p-4 p-2 rounded-md shadow-lg border bg-[#FFFFFF]">
        <div className="heading mb-6">
          <h2 className="text-2xl font-semibold md:text-6xl my-8 text-center text-teal-400">
            Add Stone
          </h2>
        </div>
        <form>
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
            <label htmlFor="Supplier" className=" text-sm md:text-xl">
              Supplier Name
            </label>
            <br />
            <input
              type="text"
              name="Supplier"
              id="Supplier"
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
            <label htmlFor="img-url" className=" text-sm md:text-xl">
              Image Url
            </label>
            <br />
            <input
              type="text"
              name="img-url"
              id="img-url"
              className={inputStyle}
              required
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            // disabled={!check ? true : false}
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
