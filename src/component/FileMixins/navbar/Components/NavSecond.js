import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavSecond.scss";

export default class NavSecond extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mobiles container">
          <div className="NavbarMob text-white">
            <Link to="/" className="text-white text-decoration-none px-1">
              <img src="./images/food.png" alt="" />
              <span className="px-2">HOME</span>
            </Link>
            <span className="px-1">
              <img src="./images/food1.png" alt="" />
              <span className="px-2">ABOUT</span>
            </span>
            <Link
              to="/favrestaurant"
              className="text-white text-decoration-none px-1"
            >
              <img src="./images/food2.png" alt="" />

              <span className="px-2">Favorite Restaurants</span>
            </Link>
            <span className="px-1">
              <img src="./images/food3.png" alt="" />

              <span className="px-2">FAVORITE MEALS</span>
            </span>
            <Link
              to="/register"
              className="text-white text-decoration-none px-1"
            >
              <img src="./images/food4.png" alt="" />

              <span className="px-2">MY PROFILE</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
