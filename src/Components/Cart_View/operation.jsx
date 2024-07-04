import React, { createContext, useState } from "react";
import { data } from "../Data_Store/site_data";

const defaultCartCounter = () => {
  let count = {};
  for (let i = 1; i < data.length + 1; i++) {
    count[i] = 0;
  }
  return count;
};

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
export const CartContext = createContext(null);

export const Operations = ({ children }) => {
  //initialiatize the cart with empty object created above
  const [cart, setCart] = useState(defaultCartCounter);
  //adding item to cart
  const add_to_cart = (item_id) => {
    //state updator(setcart)
    //copy prev state
    //[item_id] this updates a property with a key(item_id) by incrementing 1
    setCart((prevState) => ({
      ...prevState,
      [item_id]: (prevState[item_id] || 0) + 1,
    }));
  };
  const remove_from_cart = (item_id) => {
    setCart((prevState) => ({
      ...prevState,
      [item_id]: prevState[item_id] - 1,
    }));
  };
  const update_cart = (item_id, new_amount) => {
    setCart((prevState) => ({ ...prevState, [item_id]: new_amount }));
  };
  const total_cost = () => {
    let total = 0;
    for (let item in cart) {
      if (cart[item] > 0) {
        let cart_item_data = data.find((item_data) => item_data.id === Number(item));
        total += cart_item_data.price * cart[item];
      }
    }
    return total.toFixed(2); 
  };
  const contextValues = {
    cart,
    add_to_cart,
    remove_from_cart,
    update_cart,
    total_cost,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
