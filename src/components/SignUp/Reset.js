import { async } from "@firebase/util";
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyHelmet from "../MyHelmet/MyHelmet";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Sent Your Email Token.!", {
      position: "bottom-left",
      autoClose: 3000,
    });
    navigate("/signin");
  };
  return (
    <section className="max-w-[1100px] font-mono text-gray-600 mx-auto min-h-screen flex justify-center items-center px-2">
      <MyHelmet title="Forget Password" />
      <div className="form w-full md:w-2/3 lg:w-2/5 flex flex-col items-center bg-white my-4 rounded-md shadow-md border px-4 md:px-6 lg:px-6 py-4 lg:py-8">
        <form className="w-full" onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            placeholder="Your Email"
            className=" w-full outline-0 px-2 border-b-2 border-gray-400 focus:border-teal-500  valid:border-teal-500 text-sm pt-1 md:text-xl text-teal-500"
          />
          <button
            type="submit"
            className={`w-full mt-4  duration-300 ease-in-out py-2 rounded-md text-sm md:text-xl font-bold
            bg-teal-400 hover:bg-teal-500 cursor-pointer  hover:text-white`}
          >
            {sending ? (
              <div class="lds-ellipsis cursor-progress">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </div>
            ) : (
              <>Reset</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reset;
