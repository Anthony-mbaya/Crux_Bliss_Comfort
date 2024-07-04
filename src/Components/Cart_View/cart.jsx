import React, { useContext } from "react";
import { CartContext } from "./operation";
import { useNavigate } from "react-router-dom";
import { data } from "../Data_Store/site_data";
import { Link } from "react-router-dom";
import "./cart_view.css";
import "../Home_View/home_view.css";

export const Cart = () => {
  const { cart, total_cost, add_to_cart, update_cart, remove_from_cart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const cost = total_cost();
  return (
    <div className="cart-wrapper">
      <h1>Cart</h1>
      <div className="cart-container">
        <div className="items_display">
          {data.map((item, index) => {
            if (cart[item.id] > 0) {
              return (
                <div className="item" key={index}>
                  <img
                    src={item.image}
                    className="item-image"
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="cart-adjust">
                    <button
                      onClick={() => add_to_cart(item.id)}
                      className="add-cart-btn"
                    >
                      +
                    </button>
                    <input
                      value={cart[item.id]}
                      onChange={(e) =>
                        update_cart(item.id, Number(e.target.value))
                      }
                    />
                    <button
                      onClick={() => remove_from_cart(item.id)}
                      className="add-cart-btn"
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {cost > 0 ? (
          <div className="cart-total">
            <h3>Total Cost: <strong> ${cost}</strong></h3>
            <p className="text-lg text-center">Total Cost: <strong className="text-xl"> ${cost}</strong></p>
            <button className="checkout">
              <Link to={"/checkout"}>Checkout </Link>
            </button>
            <button onClick={() => navigate("/")} className="shop-more">Shop More!</button>
          </div>
        ) : (
          <div className="no-items">
            <p>
              <strong>No available items in your cart!</strong>
            </p>
            <button onClick={() => navigate("/")}>Go Shop!</button>
          </div>
        )}
      </div>
    </div>
  );
};
