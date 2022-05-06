import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Inventory from "./components/Inventory/Inventory";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";
import Reset from "./components/SignUp/Reset";
import { HelmetProvider } from "react-helmet-async";
import InventoryDetail from "./components/Inventory/InventoryDetail/InventoryDetail";
import RequireAuth from "./components/RequireAuth/RequireAuth";
function App() {
  return (
    <div className="bg-[#F0F2F5]">
      <HelmetProvider>
        <Header />
        {/* ------------------------ */}
        {/* My all Routes code  */}
        {/* ------------------------ */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inventory" element={<Inventory />} />
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
