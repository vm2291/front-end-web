import React from 'react'; 
import './ForSale.css'
import BlueRibbon from '../components/shared/blueRibbon/BlueRibbon'
import Navbar from "../components/shared/navbar/Navbar";
import Sidebar from "../components/pages/ForSale/Sidebar"
import Footer from "../components/shared/footer/Footer";


const ForSale = () => {
  return (
    <div className="for-sale-page">
        <Navbar />
      <BlueRibbon />
      <Sidebar/>
    </div>
  );
};

export default ForSale;
