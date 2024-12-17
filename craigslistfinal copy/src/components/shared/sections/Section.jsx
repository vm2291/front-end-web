import React from "react";
import "./Section.css"; 
import saveIcon from "../../../assets/home/saveIcon.svg";

const Section = ({ title, items, seeMoreUrl }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="card-container">
        {items.map((item, index) => (
          <div className="result-card-1" key={index}>
            <div className="result-image">
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.title || "No Image Available"}
              />
            </div>
            <div className="result-details">
              <h3>{item.title || "No Title Available"}</h3>
              <p>{item.location || "Unknown"}</p>
              <p className="price">{item.price || item.date || "Unavailable"}</p>
            </div>
          </div>
        ))}
        <div className="result-card see-more">
          <a
            href={seeMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>See More</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
