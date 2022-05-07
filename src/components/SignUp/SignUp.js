import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleImg from "../../img/Google-Icon-PNG-768x768-removebg-preview.png";
import MyHelmet from "../MyHelmet/MyHelmet";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
const SignUp = () => {
  const [check, setCheck] = useState(false);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // signup with google
  if (userGoogle || user) {
    navigate("/");
  }

  if (errorGoogle) {
    console.error(errorGoogle);
  }
  const handleFormSubmitData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      console.log(name, email, password, confirmPassword);
      createUserWithEmailAndPassword(email, password);
      setErrorMessage(" ");
    } else {
      setErrorMessage("Your Password Not match! ");
    }
  };
  // input style
  const inputStyle =
    " w-full outline-0 px-2 border-b-2 border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500";
  return (
    <section className="max-w-[1100px] font-mono text-gray-600 mx-auto min-h-screen flex justify-center items-center px-2">
      <MyHelmet title="signup" />
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
              placeholder="Your Answer"
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
              // autoComplete="off"
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
            <label htmlFor="confirmPassword" className=" text-sm md:text-xl">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={inputStyle}
              required
              placeholder="****"
              autoComplete="off"
            />
          </div>
          <div className="group-condition w-full my-3 flex items-start md:items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="condition"
              className="mr-2"
              onClick={() => setCheck(!check)}
            />
            <label for="condition" className="text-xs">
              Accept all trams & condition stone ware house{" "}
            </label>
          </div>
          <br></br>
          <p className="text-red-400 md:text-xl text-sm ">
            {errorMessage?.message}
            {error?.message}
            {errorGoogle?.message}
          </p>
          <button
            type="submit"
            disabled={!check ? true : false}
            className={`w-full  duration-200 ease-in-out py-2 rounded-md text-sm md:text-xl font-bold ${
              check
                ? "bg-teal-400 hover:bg-teal-500 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading || loadingGoogle ? (
              <div class="lds-ellipsis cursor-progress">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <>Sign Up</>
            )}
          </button>
        </form>
        <div className="w-full my-3 flex justify-between">
          <Link
            to="/signin"
            className="text-sm  text-left text-teal-400 hover:text-teal-500"
          >
            Already signUp?
          </Link>
          <Link to="/reset" className="text-sm  text-left  hover:text-teal-500">
            Forget Password?
          </Link>
        </div>
        <div className="signup-social w-full">
          <button
            onClick={() => signInWithGoogle()}
            className="capitalize w-full justify-center border tex-sm md:text-xl rounded-md py-2 flex items-center"
          >
            <img src={GoogleImg} alt="GoogleImg" className="h-6 md:h-10 mr-2" />
            SignUp with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
