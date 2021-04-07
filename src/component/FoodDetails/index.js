import React, { Component } from "react";
import Navbar from "../FileMixins/navbar/Navbar";
import Footer from "../FileMixins/Footer";
import Details from "./Components/index";
export default class FoodtDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Details />
        <Footer />
      </React.Fragment>
    );
  }
}
