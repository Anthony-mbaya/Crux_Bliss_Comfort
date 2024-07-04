import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Items_Display } from "./items_display";
import { Footer } from "./footer"; 

export const Landing_Page = () => {
  const [selectedCat, setSelectedCat] = useState("");
  const [searched, setSearched] = useState('');
  return (
    <div className="landing-page w-fit sm:w-full mx-auto">
      <Navbar setSelectedCategory={setSelectedCat} setSearch={setSearched} />
      <Items_Display selectedCategory={selectedCat} search={searched} />
      <Footer />
    </div>
  );
};
