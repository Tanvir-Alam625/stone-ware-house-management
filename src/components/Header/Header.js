import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import HeaderLogo from "../../img/logo-removebg-preview.png";
import "./Header.css";
const Header = () => {
  const [toggler, setToggler] = useState(false);
  const location = useLocation();
  const [user] = useAuthState(auth);
  // console.log(location);
  return (
    <header className="py-[10px] bg-teal-400  sticky top-0 font-mono  overflow-x-hidden z-20">
      <nav className="flex justify-between max-w-[1024px] lg:mx-auto md:mx-6 mx-2 ">
        <Link
          to="/"
          className="nav-logo cursor-pointer flex flex-col items-center justify-center"
        >
          <img src={HeaderLogo} alt="headerLogo" className="h-6" />
          <h3 className="text-xs tracking-tighter text-gray-700 z-10 font-bold">
            Stone Ware House
          </h3>
        </Link>
        {/* --------------------------- */}
        {/* nav items  */}
        {/* --------------------------- */}
        <div
          className={`nav-items lg:flex items-center fixed top-[50px] w-[100vw] duration-200 ease-in-out lg:w-auto h-full lg:h-auto justify-center left-0 bg-teal-400 lg:static ${
            toggler ? "flex" : "hidden "
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center ">
            <li
              onClick={() => setToggler(!toggler)}
              className=" relative  pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6  after:h-2  text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/home"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/home"
              >
                Home
              </Link>
            </li>

            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/inventory"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/inventory"
              >
                Inventory
              </Link>
            </li>
            <li
              onClick={() => setToggler(!toggler)}
              className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
            >
              <Link
                className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                  location.pathname === "/blog"
                    ? "active text-gray-900 "
                    : "text-gray-600"
                }`}
                to="/blog"
              >
                Blogs
              </Link>
            </li>
            {user && (
              <>
                <li
                  onClick={() => setToggler(!toggler)}
                  className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
                >
                  <Link
                    className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                      location.pathname === "/add"
                        ? "active text-gray-900 "
                        : "text-gray-600"
                    }`}
                    to="/add"
                  >
                    Add Item
                  </Link>
                </li>
                <li
                  onClick={() => setToggler(!toggler)}
                  className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
                >
                  <Link
                    className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                      location.pathname === "/manage"
                        ? "active text-gray-900 "
                        : "text-gray-600"
                    }`}
                    to="/manage"
                  >
                    Manage Inventory
                  </Link>
                </li>
                <li
                  onClick={() => setToggler(!toggler)}
                  className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
                >
                  <Link
                    className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                      location.pathname === "/myItem"
                        ? "active text-gray-900 "
                        : "text-gray-600"
                    }`}
                    to="/myItem"
                  >
                    My Item
                  </Link>
                </li>
              </>
            )}
            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="py-1 px-3 border rounded-md  text-xl ml-2"
              >
                SignOut
              </button>
            ) : (
              <li
                onClick={() => setToggler(!toggler)}
                className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer"
              >
                <Link
                  className={`active-link hover:text-gray-900 px-2 lg:px-0 ${
                    location.pathname === "/signup"
                      ? "active text-gray-900 "
                      : "text-gray-600"
                  }`}
                  to="/signup"
                >
                  SignUp
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div
          onClick={() => setToggler(!toggler)}
          className={`  mt-2 h-16 w-20 overflow-x-hidden  relative flex  justify-center items-center cursor-pointer lg:hidden ${
            toggler ? "toggle" : ""
          }`}
        >
          <div className="w-4 h-2 bg-black mb-2 rounded-full duration-200 ease-linear "></div>
          <div className="w-4  h-2 bg-black mb-2 rounded-full"></div>
          <div className="w-4 h-2 bg-black mb-2 rounded-full duration-200 ease-linear"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
