import { TrashIcon } from "@heroicons/react/solid";
import React from "react";

const ManageItem = ({ data, handleDeleteItem }) => {
  const { img, name, quantity, price, _id } = data;

  return (
    <tr className="hover:bg-white duration-300 ease-in-out hover:text-teal-400">
      <td className="border-2 border-teal-400 ">
        <img
          src={img}
          alt="stone"
          title={name}
          className="h-6 rounded-md object-cover mx-auto"
        />
      </td>
      <td className="border-2 border-teal-400 text-start  pl-1">{name}</td>
      <td className="border-2 border-teal-400 text-center ">{quantity}</td>
      <td className="border-2 border-teal-400 text-center">${price}</td>
      <td className="border-2 border-teal-400 text-center ">
        <TrashIcon
          onClick={() => handleDeleteItem(_id)}
          className="md:h-6 h-4 lg:h-12 mx-auto hover:text-red-500 duration-300 ease-in-out cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default ManageItem;
