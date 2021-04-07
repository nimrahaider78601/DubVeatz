import React, { Component } from "react";
import "./FavRestaurants.scss";
import SearchBar from "./SearchBar";
import Foundres from "./Foundres";

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="FavRestaurants">
          <SearchBar />
          <Foundres />
        </div>
      </React.Fragment>
    );
  }
}
