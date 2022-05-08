import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe-container  h-[400px] w-full flex flex-col justify-center items-center  font-mono">
      <h1 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-6xl mb-4">
        SubScribe Now
      </h1>
      <div className="input  w-full flex  justify-center items-center">
        <input
          className="p-2 bg-transparent outline-none border-2 w-ful md:w-1/3  shadow-md text-xl border-white text-white placeholder:text-gray-200 rounded-l-md  "
          type="email"
          name="email"
          placeholder="Email"
          id="email"
        />
        <button className="p-2 text-xl border-2 border-white rounded-r-md shadow-md text-white">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
