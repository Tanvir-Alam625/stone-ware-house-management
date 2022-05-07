import { DocumentAddIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import useDataLoad from "../../hooks/useDataLoad";
import MyHelmet from "../MyHelmet/MyHelmet";
import ManageItem from "./ManageItem";

const ManageInventory = () => {
  const { stones, setStones } = useDataLoad();

  const navigate = useNavigate();
  return (
    <section className="max-w-[1100px] mx-auto font-mono  px-2">
      <MyHelmet title="manage" />
      <div className="heading my-8 py-4">
        <h2 className="section-heading md:text-6xl text-center text-4xl font-bold tracking-tighter my-6 md:my-12 ">
          Management Stones
        </h2>
      </div>
      <div className="item-add">
        <button
          onClick={() => navigate("/add")}
          className=" btn-hover flex justify-start items-center text-teal-400 border-2 border-teal-400 hover:text-white duration-300 ease-in-out rounded-md shadow-md py-1 px-2 md:text-xl text-sm"
        >
          Add
          <DocumentAddIcon className="h-6 ml-2" />
        </button>
      </div>
      <div className="manageItem my-6 ">
        <table className="w-full border-2 border-teal-400 text-gray-600">
          <thead>
            <tr className="bg-white py-2 lg:text-xl md:text-sm text-xs font-bold">
              <th className=" bg-teal-400">Image</th>
              <th className=" bg-teal-400 "> Name</th>
              <th className=" bg-teal-400 ">Quantity</th>
              <th className=" bg-teal-400">Price</th>
              <th className=" bg-teal-400">Remove Item</th>
            </tr>
          </thead>
          <tbody className="lg:text-xl md:text-sm text-xs">
            {stones.map((stone) => (
              <ManageItem key={stone._id} data={stone} />
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </section>
  );
};

export default ManageInventory;
