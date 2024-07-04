import React, { useEffect, useState } from "react";
import { MdHotel } from "react-icons/md";
import { FaShoppingCart, FaTimesCircle } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./home_view.css";

export const Navbar = ({ setSelectedCategory, setSearch }) => {
  const [menu, setMenu] = useState(false);
  const toggle_menu = () => {
    setMenu(!menu);
  };
  const options = [
    "All Items",
    "Beddings",
    "Sittings",
    "Curtaining",
    "Tabling",
  ];

  return (
    <div className="navbar">
      <div className="logo-menu">
        <div className="logo">
          <MdHotel className="logo-icon" />
          <h1>Crux Bliss Comfort</h1>
        </div>
        <div className="menu-toggler" onClick={toggle_menu}>
          {menu ? (
            <FaTimesCircle className="menu-icon hidden" />
          ) : (
            <AiOutlineMenuUnfold className="menu-icon" />
          )}
        </div>
      </div>
      <div className="link-menu">
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="" disabled>
                  Select Catogory
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <Link to={"/location"}>Track_us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact_us</Link>
            </li>
          </ul>
          
        </div>
        
        <div className="user_cart">
          <div className="cart">
            <Link to={"/cart"}>
              {" "}
              <FaShoppingCart className="shopping-cart-icon" />
            </Link>
          </div>
          <div className="user">
            <ul>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/user_profile"}>User</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="search-bar">
      <input
            type="text"
            placeholder="Search Your Prefered Item e.g(bed)..."
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          </div>
      <div id="toggle-bar-wrapper" className={menu ? "block" : "hidden"}>
        <div className="toggle-bar">
          <div className="menu-toggler" onClick={toggle_menu}>
            {menu ? (
              <FaTimesCircle className="menu-icon" />
            ) : (
              <AiOutlineMenuUnfold className="menu-icon hidden" />
            )}
          </div>
          <ul className="toggle-bar-list">
            <li>
              <Link to={"/location"}>Track_us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact_us</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/user_profile"}>User</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
