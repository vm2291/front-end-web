import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Banner from "../components/pages/Home/Banner";
import Section from "../components/shared/sections/Section";
import JobsSection from '../components/pages/Home/JobsSection';
import TestingAPI from '../components/shared/testingAPI/TestingAPI';
import Footer from "../components/shared/footer/Footer";
import centralpark from "../assets/home/events/centralpark.png";
import gallerydistrict from "../assets/home/events/gallerydistrict.jpg";
import foodfair from "../assets/home/events/foodfair.jpg";
import techconference from "../assets/home/events/techconference.jpg";
import comedy from "../assets/home/events/comedy.jpg";
import booklaunch from "../assets/home/events/booklaunch.png";
import nye from "../assets/home/events/nye.jpg";
import lux from "../assets/home/housing/lux.webp"
import coz from "../assets/home/housing/coz.jpg";
import modernDuplex from "../assets/home/housing/modernDuplex.jpg";
import spacious from "../assets/home/housing/spacious.webp";
import condo0 from "../assets/home/housing/condo0.jpg";
import penthouse from "../assets/home/housing/penthouse.jpg";
import famHome from "../assets/home/housing/famHome.jpg";



const Home1 = () => {
  const Housing = [
    {
      image: coz,
      title: "Cozy Studio",
      location: "East Village",
      price: "$3800/month",
    },
    {
      image: condo0,
      title: "Deluxe Condo",
      location: "Downtown",
      price: "$4500/month",
    },
    {
      image: lux,
      title: "Luxury Apartment",
      location: "Mahattan",
      price: "$7500/month",
    },
    {
      image: spacious,
      title: "Spacious Loft",
      location: "Queens",
      price: "$5500/month",
    },
    {
      image: penthouse,
      title: "Penthouse Suite",
      location: "Manhattan",
      price: "$7000/month",
    },
    {
      image: famHome,
      title: "Family Home",
      location: "Staten Island",
      price: "$8000/month",
    },
    {
      image: modernDuplex,
      title: "Modern Duplex",
      location: "Harlem",
      price: "$7000/month",
    },
  ];

  const eventItems = [
    {
      image: centralpark,
      title: "Rowboat Tour",
      location: "Central Park",
      date: "22-23 December",
    },
    {
      image: gallerydistrict,
      title: "Art Expo",
      location: "Gallery District",
      date: "21 December",
    },
    {
      image: foodfair,
      title: "Food Fair",
      location: "Downtown",
      date: "18 December",
    },
    {
      image:techconference,
      title: "Tech Conference",
      location: "Midtown",
      date: "20 December",
    },
    {
      image: comedy,
      title: "Comedy Show",
      location: "East Village",
      date: "22 December",
    },
    {
      image: booklaunch,
      title: "Book Launch",
      location: "Upper East Side",
      date: "23 December",
    },
    {
      image: nye,
      title: "New Year's Party",
      location: "Times Square",
      date: "31 December",
    },
  ];

  return (

    <div className="home">
      <Navbar />
      <Banner />
      <TestingAPI/>
      <Section
        title="Housing"
        items={Housing}
        seeMoreUrl="https://newyork.craigslist.org/search/sss#search=1~gallery~0~0"
      />
      <JobsSection />
      <Section
        title="Events"
        items={eventItems}
        seeMoreUrl="https://newyork.craigslist.org/search/eee#search=1~gallery~0~0"
      />
      <Footer />
    </div>
  );
};

export default Home1;
