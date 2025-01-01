/*import React, { useState, useEffect } from "react";
import "./ForSale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const ForSale = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCraigslistData = async () => {
      const url = "https://craigslist-data.p.rapidapi.com/for-sale";
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key": "19022889ffmsh2d4af048f1787e1p1a636bjsn91823eee6d95",
          "x-rapidapi-host": "craigslist-data.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "furniture",
          gl: "newyork",
          hl: "en",
          has_pic: true,
          posted_today: false,
          show_duplicates: false,
          search_title_only: false,
          search_distance: 0,
          page: 0,
          purveyor: "",
          min_price: 0,
          max_price: 0,
          auto_make_model: "",
          crypto_currency_ok: false,
          delivery_available: false,
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        console.log(result);
        setItems(result.results.slice(0, 1)); 
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchCraigslistData();
  }, []);

  return (
    <div className="for-sale">
      <h2>For sale</h2>
      <div className="scrollable-container">
        <div className="items-container">
          {}
          {items.map((item, index) => (
            <div className="item-card" key={index}>
              <div className="item-image">
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.title}
                  className="image"
                />
                <FontAwesomeIcon icon={faBookmark} className="save-icon" />
              </div>
              <div className="item-details">
                <h3>{item.title || "No title available"}</h3>
                <p className="price">{item.price || "Price unavailable"}</p>
              </div>
            </div>
          ))}
          {}
          {Array(3 - items.length)
            .fill(0)
            .map((_, index) => (
              <div className="item-card" key={`placeholder-${index}`}>
                <div className="item-image placeholder">
                  <FontAwesomeIcon icon={faBookmark} className="save-icon" />
                </div>
                <div className="item-details">
                  <h3>Placeholder Title</h3>
                  <p className="price">$0.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ForSale;*/
