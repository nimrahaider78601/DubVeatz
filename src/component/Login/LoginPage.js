import React, { Component } from "react";
import Navbar from "../FileMixins/navbar/Navbar";
import Footer from "../FileMixins/Footer";
import Login from "./Components/Login";

export default class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Login />
        <Footer />
      </React.Fragment>
    );
  }
}
