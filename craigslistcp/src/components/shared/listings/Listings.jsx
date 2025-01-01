import React from 'react';
import './Listings.css';

const Listings = ({ title, items }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="card-container">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-location">{item.location}</p>
            </div>
            <div className="card-footer">
              <p className="card-price">{item.price || item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
