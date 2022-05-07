import React from "react";
import MyHelmet from "../MyHelmet/MyHelmet";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleImg from "../../img/Google-Icon-PNG-768x768-removebg-preview.png";

const SignIn = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // navigate current route
  if (userGoogle || user) {
    navigate(from, { replace: true });
  }

  if (error || errorGoogle) {
    console.error(error, errorGoogle);
  }
  //sign in with email password
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const inputStyle =
    " w-full outline-0 px-2 border-b-2 border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500";
  return (
    <section className="max-w-[1100px] font-mono text-gray-600 mx-auto min-h-screen flex justify-center items-center px-2">
      <MyHelmet title="Signin" />{" "}
      <div className="form w-full md:w-2/3 lg:w-2/5 flex flex-col items-center bg-white my-4 rounded-md shadow-md border px-4 md:px-6 lg:px-6 py-4 lg:py-8">
        <h2 className="text-2xl md:text-4xl font-bold  lg:text-6xl my-4  lg:my-8">
          SignUp Now
        </h2>
        <form onSubmit={handleFormSubmit} className="w-full">
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
          <div className="form-group w-full mt-4 my-3">
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
          <p className="text-red-400 md:text-xl text-sm ">
            {error?.message}
            {errorGoogle?.message}
          </p>
          <button
            type="submit"
            className={`w-full mt-4  duration-300 ease-in-out py-2 rounded-md text-sm md:text-xl font-bold
            bg-teal-400 hover:bg-teal-500 cursor-pointer  hover:text-white`}
          >
            {loading || loadingGoogle ? (
              <div class="lds-ellipsis cursor-progress">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </div>
            ) : (
              <>Sign In</>
            )}
          </button>
        </form>
        <div className="reset mt-2 flex justify-between w-full">
          <Link to="/reset" className="text-teal-400  text-sm ">
            Forget Password?
          </Link>
          <Link
            to="/signup"
            className="text-teal-400  text-sm hover:text-teal-600 "
          >
            Create Account
          </Link>
        </div>
        <div className="signup-social w-full my-6">
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

export default SignIn;
