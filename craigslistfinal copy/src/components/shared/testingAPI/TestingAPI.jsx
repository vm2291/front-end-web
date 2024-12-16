import React, { useState, useEffect } from "react";
import saveIcon from "../../../assets/home/saveIcon.svg";
import "./TestingAPI.css";

const TestingAPI = () => {
  const [data, setData] = useState([]); 
  const [detailedData, setDetailedData] = useState([]); 
  const [loading, setLoading] = useState(true);

  const fetchDetailedData = async (url) => {
    const detailsUrl = "https://craigslist5.p.rapidapi.com/getProductByURL";
    const options = {
      method: "GET",
      headers: {
 		'x-rapidapi-key': 'af54725380msh185d67ef1945cf3p1d83c9jsn7a49f38994',
		'x-rapidapi-host': 'craigslist5.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(`${detailsUrl}?url=${encodeURIComponent(url)}`, options);
      const result = await response.json();
      return result; 
    } catch (error) {
      console.error("Error fetching detailed data:", error);
      return null; 
    }
  };

  const fetchData = async () => {
    const url = "https://craigslist-data.p.rapidapi.com/for-sale";
    const options = {
      method: "POST",
      headers: {
        'x-rapidapi-key': 'af54725380msh185d67ef1945cf3p1d83c9jsn7a49f38994',
        'x-rapidapi-host': 'craigslist-data.p.rapidapi.com',
        'Content-Type': 'application/json'      
      },
      body: JSON.stringify({
        query: "general",
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
      console.log("Fetched data:", result);

      if (result && result.data && result.data.length > 0) {
        const products = result.data.slice(0, 3); 
        setData(products); 

    
        const detailedProducts = await Promise.all(
          products.map(async (item) => {
            if (item.url) {
              return await fetchDetailedData(item.url);
            }
            return null; 
          })
        );

        setDetailedData(detailedProducts); 
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
                    src={detailedData[index]?.image?.[0] || "https://via.placeholder.com/150"} 
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
            <div className="result-card see-more">
  <a
    href="https://newyork.craigslist.org/search/sss#search=1~gallery~0~0" 
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <p>See More</p>
  </a>
</div>

          </>
        )}
      </div>
    </div>
  );
};

export default TestingAPI;