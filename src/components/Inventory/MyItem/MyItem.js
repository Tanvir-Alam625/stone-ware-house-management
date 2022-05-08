import React from "react";

const MyItem = () => {
  return (
    <section className="max-w-[1100px]  mx-auto font-mono min-h-screen my- text-gray-600 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col md:flex-row bg-[#FFFFFF] p-2 border rounded-md ">
          <div className="img-container w-full md:w-2/5">
            <img src="s" alt="item-img" />
          </div>
          <div className="item-container md:pl-2 pl-0">
            <h2 className="text-xl font-bold md:text-2xl lg:text-4xl ">Name</h2>
            <h5 className="text-sm font-semibold md:text-xl ">Supplier</h5>
            <small
              //   title={description}
              className="tracking-tighter text-sx md:text-sm"
            >
              {/* {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description} */}
            </small>
            <p className="md:text-xl text-sm">Quantity</p>
            <p className="md:text-xl text-sm text-teal-400">Quantity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyItem;
