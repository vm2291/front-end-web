import React, { useState } from "react";
import "./Sidebar.css";

import antiques from "../../../assets/forSale/categories/antiques.svg";
import appliances from "../../../assets/forSale/categories/appliances.svg";
import bikes from "../../../assets/forSale/categories/bikes.svg";
import book from "../../../assets/forSale/categories/book.svg";
import car from "../../../assets/forSale/categories/car.svg";
import clothes from "../../../assets/forSale/categories/clothes.svg";
import electronics from "../../../assets/forSale/categories/electronics.svg";
import furniture from "../../../assets/forSale/categories/furniture.svg";
import random from "../../../assets/forSale/categories/random.svg";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Today's picks");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const categories = [
    { name: "Today's picks", icon: random },
    { name: "Furniture", icon: furniture },
    { name: "Appliances", icon: appliances },
    { name: "Electronics", icon: electronics },
    { name: "Clothes", icon: clothes },
    { name: "Vehicles", icon: car },
    { name: "Bikes", icon: bikes },
    { name: "Books", icon: book },
    { name: "Antiques", icon: antiques },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      {!isSidebarOpen && (
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          Filters & Categories
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        {/* Close Button */}
        {isSidebarOpen && (
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            ×
          </button>
        )}

        <div className="filters">
          <h3>Filters</h3>
          <hr />
          <div className="filter-section price-section">
            <p>Price</p>
            <div className="price-inputs">
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" />
            </div>
          </div>

          <div className="filter-section">
            <p>Delivery method</p>
            <span>&#9662;</span>
          </div>

          <div className="filter-section">
            <p>Condition</p>
            <span>&#9662;</span>
          </div>

          <div className="filter-section more-filters">
            <p>More filters</p>
          </div>
          <hr />
        </div>

        <div className="categories">
          <h3>Categories</h3>
          <hr />
          <ul className="sidebar-list">
            {categories.map((category) => (
              <li
                key={category.name}
                className={`sidebar-item ${
                  selectedCategory === category.name ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="sidebar-icon"
                  style={{
                    filter:
                      selectedCategory === category.name
                        ? "brightness(0) invert(1)"
                        : "none",
                  }}
                />
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
          <div className="view-all">View All Categories</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
