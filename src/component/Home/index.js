import React from "react";
import Navbar from "./navbar/index";
import NavSeccond from "./navbar/NavSecond";
import Header from "./Header/index";
import FoodNav from "./FoodNav/FoodNav";
import TopDeals from "./TopDeals/TopDeals";
import Cuisine from "./Cuisine/Cuisine";
import Restaurants from "./Restaurants/Restaurants";
import Footer from "./Footer/Footer";

const Home = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <NavSeccond />
      <Header />
      <FoodNav />
      <TopDeals />
      <Cuisine />
      <Restaurants />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
