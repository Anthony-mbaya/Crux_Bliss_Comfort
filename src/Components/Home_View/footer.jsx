import React from "react";
import { MdHotel } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import './home_view.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="company_info">
        <div className="details">
          <span>
            <MdHotel className="shopping-cart-icon" />
            <h1>Crux_Bliss_Comfort</h1>
          </span>

          <p>
            Crux_Bliss_Comfort is a leading manufacturer of mattresses, pillows,
            and other sleep products. We are committed to providing our
            customers with the best possible sleep experience.
          </p>
        </div>
        <div className="handles">
          <ul>
            <li>
              <FaFacebook className="handles-icon" />{" "}
            </li>
            <li>
              <FaInstagram className="handles-icon" />{" "}
            </li>
            <li>
              <FaTiktok className="handles-icon" />{" "}
            </li>
            <li>
              <FaTwitter className="handles-icon" />{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Our Products</li>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Products</h2>
          <ul>
            <li>Bedding</li>
            <li>Curtain</li>
            <li>Tables</li>
            <li>Couch</li>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Support</h2>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
