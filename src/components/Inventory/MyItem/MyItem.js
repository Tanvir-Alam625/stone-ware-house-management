import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyAddedItem from "./MyAddedItem";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const onLoadItems = () => {
      const email = user.email;
      const url = `http://localhost:5000/myItem?email=${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        });
    };
    onLoadItems();
  }, [user]);
  return (
    <section className="max-w-[1100px]  mx-auto font-mono min-h-screen my- text-gray-600 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MyAddedItem data={item} key={data._id} />
        ))}
      </div>
    </section>
  );
};

export default MyItem;
