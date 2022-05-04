import React from "react";
import { Link } from "react-router-dom";
import GoogleImg from "../../img/Google-Icon-PNG-768x768-removebg-preview.png";
import "./SignUp.css";
const SignUp = () => {
  const handleFormSubmitData = (event) => {
    event.preventDefault();
  };
  // input style
  const inputStyle =
    " w-full outline-0 px-2 border-b-2 border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500";
  return (
    <div className="max-w-[1100px] font-mono text-gray-600 mx-auto min-h-screen flex justify-center items-center px-2">
      <div className="form w-full md:w-2/3 lg:w-2/5 flex flex-col items-center bg-white my-4 rounded-md shadow-md border px-4 md:px-6 lg:px-6 py-4 lg:py-8">
        <h2 className="text-2xl md:text-4xl font-bold  lg:text-6xl my-4  lg:my-8">
          SignUp Now
        </h2>
        <form
          onSubmit={handleFormSubmitData}
          className="flex flex-col items-center  w-full"
        >
          <div className="form-group1 my-3 w-full">
            <label htmlFor="name" className=" text-sm md:text-xl">
              User Name
            </label>{" "}
            <br />
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Answer"
              className={inputStyle}
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-3">
            <label htmlFor="email" className=" text-sm md:text-xl">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
              placeholder="Your Answer"
              className={inputStyle}
            />
          </div>
          <div className="form-group w-full my-3">
            <label htmlFor="password" className=" text-sm md:text-xl">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className={inputStyle}
              required
              placeholder="****"
              autoComplete="off"
            />
          </div>
          <div className="form-group w-full my-3">
            <label htmlFor="confirm-password" className=" text-sm md:text-xl">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className={inputStyle}
              required
              placeholder="****"
              autoComplete="off"
            />
          </div>
          <div className="group-condition w-full my-3 flex items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="condition"
              className="mr-2"
            />
            <label for="condition" className="text-xs">
              Accept all trams & condition stone ware house{" "}
            </label>
          </div>
          <br></br>
          <button
            type="submit"
            className="w-full bg-teal-400 py-2 rounded-md text-sm md:text-xl font-bold"
          >
            Sign Up
          </button>
        </form>
        <div className="w-full my-3">
          <Link
            to="/signin"
            className="text-sm md:text-xl text-left text-teal-400 hover:text-teal-500"
          >
            Already signUp
          </Link>
        </div>
        <div className="signup-social w-full">
          <button className="capitalize w-full justify-center border rounded-md py-2 flex items-center">
            <img src={GoogleImg} alt="GoogleImg" className="h-10 mr-2" />
            SignUp with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
