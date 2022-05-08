import { TrashIcon } from "@heroicons/react/solid";
import React from "react";

const MyAddedItem = ({ data, handleDeleteItem }) => {
  const { name, img, supllier, description, quantity, price, _id } = data;
  return (
    <div className="myItem flex flex-col md:flex-row relative bg-[#FFFFFF] p-2 font-mono text-gray-600 border rounded-md ">
      <div className="img-container w-full md:w-2/5">
        <img src={img} alt="item-img rounded-md h-auto md:h-full" />
      </div>
      <div className="item-container md:pl-2 pl-0 ">
        <h2 className="text-xl font-bold md:text-2xl lg:text-4xl ">{name}</h2>
        <h5 className="text-sm font-semibold md:text-xl ">{supllier}</h5>
        <small
          title={description}
          className="tracking-tighter text-sx md:text-sm"
        >
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </small>
        <p className="md:text-xl text-sm">Quantity:{quantity}</p>
        <p className="md:text-xl text-sm text-teal-400">$ {price}</p>
      </div>
      <TrashIcon
        onClick={() => handleDeleteItem(_id)}
        className="h-8 deleteItem  hover:text-red-500 cursor-pointer duration-200 ease-in-out p-1 rounded-md border shadow-md bg-slate-100 "
      />
    </div>
  );
};

export default MyAddedItem;
