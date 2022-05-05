import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Item = ({ data }) => {
  const { name, img, description, price, supllier, quantity, _id } = data;
  return (
    <div className="bg-white p-2 border shadow rounded-md ">
      <img src={img} alt="item-img" />
      <h2>{name}</h2>
      <h4>Supplier: {supllier}</h4>
      <small title={description}>
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </small>
      <p>Quantity: {quantity ? quantity : "Out Stock"}</p>
      <p>Price: ${price}</p>
      <button className="btn-hover flex py-2 items-center px-4 rounded-md  border border-white  md:text-xl text-sm">
        Update
        <ArrowNarrowRightIcon className="h-6 ml-2" />
      </button>
    </div>
  );
};

export default Item;
