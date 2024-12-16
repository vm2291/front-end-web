import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Explore. Find. Enjoy.</h1>
        
        <div className="search-container">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search for items, jobs, events, etc"
              className="search-input"
            />
            <div className="divider"></div>
            <input 
              type="text" 
              placeholder="Enter city, state or zip code"
              className="location-input"
            />
            <button className="search-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span class="search-text">Search</span>
            </button>
          </div>
        </div>

        <div className="post-section">
          <p>Here to post an ad?</p>
          <button className="post-button">Start posting</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
