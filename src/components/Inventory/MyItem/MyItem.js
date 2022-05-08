import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";
import MyAddedItem from "./MyAddedItem";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const [restoreStone, setRestoreStone] = useState(false);
  const [loadSpinner, setLoadSpinner] = useState(true);

  useEffect(() => {
    const onLoadItems = () => {
      const email = user.email;
      const url = `http://localhost:5000/myItem?email=${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setLoadSpinner(false);
        });
    };
    onLoadItems();
  }, [user, restoreStone]);
  const handleDeleteItem = (id) => {
    const condition = window.confirm("Are you sure!");
    const url = `http://localhost:5000/stone/${id}`;
    if (condition) {
      fetch(url, { method: "DELETE" })
        .then((res) => res.json)
        .then((result) => {
          toast.warn("One Item Delete Successfully! ✔", {
            position: "bottom-left",
            autoClose: 3000,
          });
          setRestoreStone(!restoreStone);
        });
    }
  };
  return (
    <section className="max-w-[1100px]  mx-auto font-mono min-h-screen my- text-gray-600 md:my-12">
      {loadSpinner ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <MyAddedItem
              data={item}
              handleDeleteItem={handleDeleteItem}
              key={data._id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyItem;
