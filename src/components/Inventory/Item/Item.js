import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ data }) => {
  const { name, img, description, price, supllier, quantity, _id } = data;
  const navigate = useNavigate();
  return (
    <div className="bg-white  border shadow rounded-md mb-6  hover:shadow-xl">
      <img
        src={img ? img : ""}
        alt="item-img"
        className="w-full object-fill rounded-t-md h-[350px]"
      />
      <div className="item-info p-2">
        <h2 className="md:text-3xl md:my-4 my-2 tracking-tighter text-2xl font-bold ">
          {name}
        </h2>
        <h4 className="text-1xl font-semibold tracking-tighter my-2">
          Supplier: {supllier ? supllier : ""}
        </h4>
        <small
          title={description}
          className="tracking-tighter text-sx md:text-sm"
        >
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </small>
        <p className="md:text-xl text-sm my-1 md:my-2">
          Quantity:{" "}
          <span className="text-teal-300 font-semibold">
            {quantity ? quantity : "Out of Stock"}
          </span>
        </p>
        <p className="text-xl my-2">
          Price: <span className="text-teal-300">${price ? price : "00"}</span>
        </p>
        <button
          onClick={() => navigate(`/inventory/${_id}`)}
          className="btn-hover flex py-1 mb-4 items-center px-4 rounded-md shadow  border text-teal-400 hover:text-white duration-300 ease-in-out   md:text-xl text-sm"
        >
          Update
          <ArrowNarrowRightIcon className="h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Item;
