import React from "react";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./profile.css";

export const User_Profile = () => {
  const username = JSON.parse(localStorage.getItem("ahhh@gmail.com"));
  const name = username.username;
  return (
    <div className="profile w-full h-screen">
      <Link to={"/"}>
        <FaArrowLeft className="arrow-left" />
      </Link>
      <h1 className="text-2xl font-bold text-center w-full bg-slate-950 text-white py-4 rounded-b-2xl rounded-tr-2xl fixed mt-10">
        User Profile
      </h1>
      <div className="user-profile">
        <div className="important-credentials">
          <FaUserCircle className="user-icon" />
          <h2>Username: [ {name} ]</h2>
          <h2>Age: [ 23 ]</h2>
          <h2>Location: [ Thika ]</h2>
          <h2>Country: [ Kenya ]</h2>
        </div> 
        <div className="other-info-wrapper">
        <div className="other-info">
          <h2>Order ID: 12345</h2>
          <h2>
            <strong>Date:</strong> July 1, 2023
          </h2>
          <h2>
            <strong>Product:</strong> Bed
          </h2>
          <h2>
            <strong>Quantity:</strong> 1
          </h2>
          <h2>
            <strong>Price:</strong> $25.00
          </h2>
          <h2>
            <strong>Total:</strong> $25.00
          </h2>
        </div>
        <div className="other-info">
          <h2>Order ID: 122345</h2>
          <h2>
            <strong>Date:</strong> Apr 1, 2024
          </h2>
          <h2>
            <strong>Product:</strong> Couch
          </h2>
          <h2>
            <strong>Quantity:</strong> 1
          </h2>
          <h2>
            <strong>Price:</strong> $250.00
          </h2>
          <h2>
            <strong>Total:</strong> $1000.00
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};
