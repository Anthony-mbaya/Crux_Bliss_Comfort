import React, { useContext, useEffect, useState } from "react";
import { data } from "../Data_Store/site_data";
import { CartContext } from "../Cart_View/operation";
import './home_view.css';

export const Items_Display = ({ selectedCategory, search }) => {
  const { cart, add_to_cart } = useContext(CartContext);
  const [displayed_data, setDisplayed_data] = useState([]);
  useEffect(() => {
    if (searched_items.length > 0) {
      categorised_data = false;
      setDisplayed_data(searched_items);
    }
  }, [search]);
  useEffect(() => {
    if (categorised_data.length > 0) {
      searched_items = false;
      setDisplayed_data(categorised_data);
    }
  }, [selectedCategory]);

  let categorised_data =
    selectedCategory && selectedCategory !== "All Items"
      ? data.filter((item) => item.category === selectedCategory)
      : data.map((item) => item);

  let searched_items =
    search && search !== "" && search.length > 0
      ? data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : data.map((item) => item);
  return (
    <div className="items_display_container">
    <div className="items_display">
      {displayed_data.length > 0 ? (
        displayed_data.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img src={item.image} className="item-image" alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => add_to_cart(item.id)} className="add-cart-btn">
                Add-To-Cart{" "}  {cart[item.id] > 0 && <span>[ {cart[item.id]} ] </span>}{" "}
              </button>
            </div>
          );
        })
      ) : (
        <h3 className="bg-slate-400 text-red-600">No items found</h3>
      )}
    </div>
    </div>
  );
};
