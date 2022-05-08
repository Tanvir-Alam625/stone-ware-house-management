import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen  w-full flex font-mono justify-center items-center fixed top-0  bg-teal-500 z-20">
      <div className="not-found-item flex flex-col items-center">
        <h1 className="text-center text-4xl lg:text-6xl font-bold text-white">
          OOPS...!
        </h1>
        <h4 className="text-white my-4 text-xl font-bold">
          This Page is Not Found 404
        </h4>
        <Link
          to="/"
          className="text-center hover:text-gray-300 duration-200 ease-in-out text-xl border-2 rounded-md shadow-md py-1 px-2  text-white "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
