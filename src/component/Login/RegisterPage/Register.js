import React, { Component } from "react";
import RegisterPage from "./Components/index";
import Navbar from "../../FileMixins/navbar/Navbar";
import Footer from "../../FileMixins/Footer/index";

export default class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <RegisterPage />
        <Footer />
      </React.Fragment>
    );
  }
}
