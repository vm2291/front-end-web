import React, { useState } from "react";
import "./ForSale.css";
import BlueRibbon from "../components/shared/blueRibbon/BlueRibbon";
import Navbar from "../components/shared/navbar/Navbar";
import Sidebar from "../components/pages/ForSale/Sidebar";
//import MainContent from "../components/pages/ForSale/MainContent"; 

const ForSale = () => {
  const [activeCategory, setActiveCategory] = useState("Today's picks");

  return (
    <div className="for-sale-page">
      <Navbar />
      <BlueRibbon />
      <Sidebar setActiveCategory={setActiveCategory} /> 
      {activeCategory === "Today's picks" }
    </div>
  );
};

export default ForSale;
