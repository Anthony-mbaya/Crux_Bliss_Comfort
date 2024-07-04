import React from "react";
import { Dynamic_nav } from "../Home_View/dynamic_nav";
import './reach_out.css'

export const Location = () => {
  return (
    <div>
      <Dynamic_nav />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15956.56128893232!2d37.097503!3d-1.0562858499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1719879534942!5m2!1sen!2ske"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="location-frame"
      ></iframe>
    </div>
  );
};
