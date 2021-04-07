import React, { Component } from "react";
import Favorite from "./Components/index";
import Navbar from "../FileMixins/navbar/Navbar";
import Footer from "../FileMixins/Footer";
export default class FavRestaurants extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Favorite />
        <Footer />
      </React.Fragment>
    );
  }
}
