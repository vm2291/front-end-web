import React from "react";
import "./BlueRibbon.css";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import plusIcon from "../../../assets/plus-icon.svg";

const BlueRibbon = () => {
  return (
    <div className="blue-ribbon">
      {/* Location */}
      <div className="location">
        <FaMapMarkerAlt className="icon" />
        <span>Set location</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for items, jobs, events, etc"
          className="search-input-br"
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Post an Ad */}
      <div className="post-ad">
        <img src={plusIcon} alt="Plus Icon" className="plus-icon" />
        <span className="post-ad-text">Post an ad</span>
      </div>
    </div>
  );
};

export default BlueRibbon;
