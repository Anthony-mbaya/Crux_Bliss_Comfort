import React from "react";
import { MdHotel } from "react-icons/md";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home_view.css";

export const Dynamic_nav = () => {
  return (
    <div className="dynamic-nav">
      <div className="dynamic-nav-header">
        <div className="back-arrow">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <div className="logo">
          <MdHotel className="logo-icon" />
          <h1>Crux Bliss Comfort</h1>
        </div>
      </div>
      <div className="link-menu">
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/location"}>Track_us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact_us</Link>
            </li>
            <li>
              <Link to={"/checkout"}>Checkout</Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <FaShoppingCart className="shopping-cart-icon" />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
