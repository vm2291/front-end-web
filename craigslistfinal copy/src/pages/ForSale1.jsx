import React from 'react'; 
import BlueRibbon from '../components/shared/blueRibbon/BlueRibbon'
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";


const ForSale = () => {
  return (
    <div className="for-sale-page">
        <Navbar />
      <BlueRibbon />
      {/* Other components will go here */}
    </div>
  );
};

export default ForSale;
