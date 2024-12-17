/*import React, { useState, useEffect } from "react";
import saveIcon from "../../../assets/home/saveIcon.svg";
import "./MainContent.css";

const MainContent = ({ isActive }) => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://craigslist-data.p.rapidapi.com/for-sale";
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key": "5685d9df4amsh46f0e471702cd4ap19b114jsn5684ad429f",
          "x-rapidapi-host": "craigslist-data.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "furniture",
          gl: "newyork",
          hl: "en",
          has_pic: true,
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result.data.slice(0, 10)); // Fetch first 10 items
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`main-content ${isActive ? "active" : "hidden"}`}>
      <div className="content-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <div className="content-card" key={index}>
              <div className="content-image">
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.title || "No Title"}
                />
                <img src={saveIcon} className="content-save-icon" alt="Save" />
              </div>
              <div className="content-details">
                <h3>{item.title || "No Title Available"}</h3>
                <p>{item.location || "Unknown Location"}</p>
                <p className="content-price">{item.price || "Unavailable"}</p>
              </div>
            </div>
          ))
        )}
      </div>

 
    </div>
  );
};

export default MainContent;
*/