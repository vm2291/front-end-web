import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Banner from "../components/pages/Home/Banner";
import Section from "../components/shared/sections/Section";
import JobsSection from '../components/pages/Home/JobsSection';
import TestingAPI from '../components/shared/testingAPI/TestingAPI';
import Footer from "../components/shared/footer/Footer";


const Home1 = () => {
  const Housing = [
    {
      image: "https://via.placeholder.com/200",
      title: "Cozy Studio",
      location: "East Village",
      price: "$3000/month",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Modern Condo",
      location: "Downtown",
      price: "$4500/month",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Luxury Apartment",
      location: "Brooklyn",
      price: "$2500/month",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Spacious Loft",
      location: "Queens",
      price: "$3500/month",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Penthouse Suite",
      location: "Manhattan",
      price: "$7000/month",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Family Home",
      location: "Staten Island",
      price: "$4000/month",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Modern Duplex",
      location: "Harlem",
      price: "$5000/month",
    },
  ];

  const eventItems = [
    {
      image: "https://via.placeholder.com/200",
      title: "Music Festival",
      location: "Central Park",
      date: "22-23 December",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Art Expo",
      location: "Gallery District",
      date: "21 December",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Food Fair",
      location: "Downtown",
      date: "18 December",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Tech Conference",
      location: "Midtown",
      date: "20 December",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Comedy Show",
      location: "East Village",
      date: "22 December",
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Book Launch",
      location: "Upper East Side",
      date: "23 December",
    },
    {
      image: "https://via.placeholder.com/200",
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
