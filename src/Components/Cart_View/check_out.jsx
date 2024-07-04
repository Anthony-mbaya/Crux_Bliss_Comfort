import React, { useContext, useEffect, useState } from "react";
import { Dynamic_nav } from "../Home_View/dynamic_nav";
import { CartContext } from "./operation";
import "./cart_view.css";

export const Checkout = () => {
  const { total_cost } = useContext(CartContext);
  const [click_mpesa, setClickMpesa] = useState(false);
  const [click_bank, setClickBank] = useState(false);
  const [click_paypal, setClickPaypal] = useState(false);
  const cost = total_cost();
  const clickDisplayMpesa = () => {
    setClickMpesa(true);
    setClickBank(false);
    setClickPaypal(false);
  };
  const clickDisplayBank = () => {
    setClickMpesa(false);
    setClickBank(true);
    setClickPaypal(false);
  };
  const clickDisplayPaypal = () => {
    setClickMpesa(false);
    setClickBank(false);
    setClickPaypal(true);
  };
  return (
    <div className="w-full mx-auto sm:w-full">
      <Dynamic_nav />
      <div className="checkout-container">
        <h1 className="w-fit mx-auto text-center text-[1.4em] font-bold">
          Checkout
        </h1>

        <ul className="checkout-options">
          <li className="mpesa" onClick={clickDisplayMpesa}>
            Mpesa
          </li>
          <li className="bank" onClick={clickDisplayBank}>
            Bank
          </li>
          <li className="paypal" onClick={clickDisplayPaypal}>
            Paypal
          </li>
        </ul>
        <div className="payment-details">
          <h1>Payment Amount</h1>
          <h2>
            Total = <strong>Sh. {cost}</strong>
          </h2>
          <div className="dynamic-pay">
            <div id="pay" className={click_mpesa ? "block" : "hidden"}>
              <h1>Via Mpesa</h1>
              <form action="">
                <input type="text" placeholder="Enter Mpesa Number" required />
                <input type="text" placeholder="Enter Mpesa Pin" required />
                <button className="pay" type="submit">
                  Pay
                </button>
              </form>
            </div>
            <div id="pay" className={click_bank ? "block" : "hidden"}>
              <h1>Via Bank</h1>
              <form action="">
                <input
                  type="text"
                  placeholder="Enter Account Number"
                  required
                />
                <input type="text" placeholder="Enter Account Pin" required />
                <button className="pay" type="submit">
                  Pay
                </button>
              </form>
            </div>
            <div id="pay" className={click_paypal ? "block" : "hidden"}>
              <h1>Via PayPal</h1>
              <form action="">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
                <input type="text" placeholder="Enter Account Pin" required />
                <button className="pay" type="submit">
                  Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
