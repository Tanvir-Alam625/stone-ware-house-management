import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";
import Reset from "./components/SignUp/Reset";
import { HelmetProvider } from "react-helmet-async";
import InventoryDetail from "./components/Inventory/InventoryDetail/InventoryDetail";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import AddItem from "./components/AddItem/AddItem";
import { toast, ToastContainer } from "react-toastify";
import MyItem from "./components/Inventory/MyItem/MyItem";
import Blogs from "./components/Blogs.js/Blogs";
function App() {
  // const [check,setCheck]=useState()
  const checkOnline = navigator.onLine;
  useEffect(() => {
    const handleOnlineMessage = () => {
      if (checkOnline) {
        toast.success("Successfully Connection!✔", {
          position: "bottom-left",
          autoClose: 3000,
        });
      } else {
        toast.error("Your Connection Lost!❌", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }
    };
    handleOnlineMessage();
  }, [checkOnline]);

  return (
    <div className="bg-[#F0F2F5]">
      <HelmetProvider>
        <Header />
        {/* toast container  */}
        <ToastContainer />
        {/* ------------------------ */}
        {/* My all Routes code  */}
        {/* ------------------------ */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/blog" element={<Blogs />} />
          <Route
            path="/myItem"
            element={
              <RequireAuth>
                <MyItem />
              </RequireAuth>
            }
          />
          <Route
            path="/add"
            element={
              <RequireAuth>
                <AddItem />
              </RequireAuth>
            }
          />
          <Route
            path="/manage"
            element={
              <RequireAuth>
                <ManageInventory />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/inventory/:id"
            element={
              <RequireAuth>
                <InventoryDetail />
              </RequireAuth>
            }
          />

          {/* Not Found Route  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
