import React from "react";
import { Dynamic_nav } from "../Home_View/dynamic_nav";
import "./reach_out.css";

export const Contact = () => {
  return (
    <div className="w-fit mx-auto sm:w-full">
      <Dynamic_nav />
      <div className="contact-container">
        <h1>Contact Crux Bliss Comfort</h1> 
        <div className="address-text">
          
          <p>For any queries, please contact us at</p>
          <p><strong className="underline text-blue-600">cruxblisscomfort@gmail.com</strong></p>
          <p>or</p>
          <p>Call us at <strong className="underline text-blue-600" >+91 9876543210</strong></p>
        </div>
        <div className="address-container">
          <div className="address">
            <h2>Main Branch</h2>
            <p>Thika Main Street</p>
            <p>Thika Town, CA 12345</p>
          </div>
          <div className="address">
          <h2>Sub Branch</h2>
            <p>Nairobi Main Street</p>
            <p>Nairobi Town, OA 45</p>
          </div>
        </div>
        <div className="message">
          <h2>Send Message</h2>
          <p className="w-fit text-center mx-auto text-[0.8em]">You are allowed to give your opinions on our services</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="w-fit mx-auto text-center">
          <strong><i>Disclaimer:</i></strong><i> The information provided on this website
            is designed to support, not replace, the relationship that exists between a patient/site visitor and his
            / her existing physician.</i>
        </div>
      </div>
    </div>
  );
};
