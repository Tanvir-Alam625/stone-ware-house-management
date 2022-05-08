import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import FooterLogo from "../../img/logo-removebg-preview.png";
import Maps from "../../img/maps.jpg";

const Footer = () => {
  const [user] = useAuthState(auth);
  return (
    <footer className=" bg-teal-400  py-6 px-2">
      <div className="max-w-[1100px] font-mono text-gray-600 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="link">
          <ul className=" ">
            <li className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer">
              <Link
                className={` hover:text-gray-900 px-2 lg:px-0 `}
                to="/inventory"
              >
                Inventory
              </Link>
            </li>
            <li className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer">
              <Link className={` hover:text-gray-900 px-2 lg:px-0 `} to="/blog">
                Blogs
              </Link>
            </li>
            {user && (
              <>
                <li className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer">
                  <Link
                    className={` hover:text-gray-900 px-2 lg:px-0 `}
                    to="/add"
                  >
                    Add Item
                  </Link>
                </li>
                <li className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer">
                  <Link
                    className={` hover:text-gray-900 px-2 lg:px-0`}
                    to="/manage"
                  >
                    Manage Inventory
                  </Link>
                </li>
                <li className="relative pb-4 md:pb-8 lg:pb-0 lg:mb-0 lg:ml-6   text-xl tracking-tight  text-gray-600 hover:text-gray-900 duration-200 ease-linear cursor-pointer">
                  <Link
                    className={` hover:text-gray-900 px-2 lg:px-0 `}
                    to="/myItem"
                  >
                    My Item
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="web-info">
          <h3 className="text-xl font-bold ">Contact</h3>
          <span className="font-bold text-sm">Email:</span>
          <small>mdtanviralamht731@gmail.com</small>
          <br />
          <span className="font-bold text-sm">Phone:</span>
          <small>01704338645</small>
          <br />
          <span className="font-bold text-sm">Location:</span>
          <small>Tetulia Road, Panchagrah</small>
        </div>
        <img src={Maps} alt="google-maps" className="h-full rounded-xl  " />
      </div>
      <div className="msg  flex justify-center text-gray-500 my-4">
        <small className="text-center">Copyright © 2022 Stone ware house</small>
      </div>
    </footer>
  );
};

export default Footer;
