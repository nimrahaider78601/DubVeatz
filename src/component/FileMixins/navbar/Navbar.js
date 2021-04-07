import React, { Component } from "react";
import Navbarfirst from "./Components/index";
import NavSecond from "./Components/NavSecond";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbarfirst />
        <NavSecond />
      </React.Fragment>
    );
  }
}
