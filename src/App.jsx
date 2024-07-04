import React from "react";
import { Landing_Page } from "./Components/Home_View/landing_page";
import { Location } from "./Components/Reach_Outs/location";
import { Contact } from "./Components/Reach_Outs/contact";
import { Cart } from "./Components/Cart_View/cart";
import { Checkout } from "./Components/Cart_View/check_out";
import { Login } from "./Components/Verification_View/login";
import { Register } from "./Components/Verification_View/register";
import { User_Profile } from "./Components/Profile_View/user_profile";
import { Operations } from "./Components/Cart_View/operation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Operations>
        <Router>
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user_profile" element={<User_Profile />} />
          </Routes>
        </Router>
      </Operations>
    </div>
  );
};
