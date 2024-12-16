import React, { useState, useEffect } from "react";
import saveIcon from "../../../assets/home/saveIcon.svg";
import "./TestingAPI.css";

const TestingAPI = () => {
  const [data, setData] = useState([]); // Array for product data
  const [detailedData, setDetailedData] = useState([]); // Array for detailed product data
  const [loading, setLoading] = useState(true);

  const fetchDetailedData = async (url) => {
    const detailsUrl = "https://craigslist5.p.rapidapi.com/getProductByURL";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "19022889ffmsh2d4af048f1787e1p1a636bjsn91823eee6d9",
        "x-rapidapi-host": "craigslist5.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(`${detailsUrl}?url=${encodeURIComponent(url)}`, options);
      const result = await response.json();
      return result; // Return the detailed data
    } catch (error) {
      console.error("Error fetching detailed data:", error);
      return null; // Return null on error
    }
  };

  const fetchData = async () => {
    const url = "https://craigslist-data.p.rapidapi.com/for-sale";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "745a2c2e16mshf8571b0dc46b9bdp151db4jsnf45f20204fd",
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
      console.log("Fetched data:", result); // Log the fetched data

      if (result && result.data && result.data.length > 0) {
        const products = result.data.slice(0, 3); // Get only the first 3 products
        setData(products); // Set the product data

        // Fetch detailed data for each product
        const detailedProducts = await Promise.all(
          products.map(async (item) => {
            if (item.url) {
              return await fetchDetailedData(item.url);
            }
            return null; // Return null if no URL
          })
        );

        setDetailedData(detailedProducts); // Set the detailed data
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="testing-api">
      <h2>For Sale</h2>
      {loading && <p>Loading...</p>}
      <div className="card-container">
        {data.length > 0 && (
          <>
            {data.map((item, index) => (
              <div className="result-card" key={index} onClick={() => window.open(item.url, "_blank")}>
                <div className="result-image">
                  <img
                    src={detailedData[index]?.image?.[0] || "https://via.placeholder.com/150"} // Use detailed image
                    alt={item.title}
                  />
                  <img src={saveIcon} className="save-icon" alt="Save" />
                </div>
                <div className="result-details">
                  <h3>{item.title || "No Title Available"}</h3>
                  <p>{item.location || "Unknown"}</p>
                  <p className="price">{item.price || "Unavailable"}</p>
                </div>
              </div>
            ))}
            {/* Blank card with "See More" */}
            <div className="result-card see-more">
              <div className="result-image">
                <p>See More</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestingAPI;