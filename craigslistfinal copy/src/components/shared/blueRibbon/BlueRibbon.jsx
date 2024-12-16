import React from "react";
import "./BlueRibbon.css"; // Updated styles
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import plusIcon from "../../../assets/plus-icon.svg";

const BlueRibbon = () => {
  return (
    <div className="blue-ribbon">
      {/* Location Section */}
      <div className="location">
        <FaMapMarkerAlt className="icon" />
        <span>Set location</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for items, jobs, events, etc"
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Post an Ad Button */}
      <div className="post-ad">
      <img src={plusIcon} alt="Plus Icon" className="plus-icon" />
        <span className="post-ad-text">Post an ad</span>
      </div>
    </div>
  );
};

export default BlueRibbon;
