import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavSecond.scss";

export default class NavSecond extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mobile container">
          <div className="NavbarMob text-white">
            <Link to="/" className="text-white text-decoration-none px-1">
              <img
                src="./images/food.png"
                alt=""
                data-toggle="tooltip"
                data-placement="top"
                title="HOME"
              />

              <span className="px-2">HOME</span>
            </Link>
            <span className="px-1">
              <img
                src="./images/food1.png"
                alt=""
                data-toggle="tooltip"
                data-placement="top"
                title="ABOUT"
              />
              <span className="px-2">ABOUT</span>
            </span>
            <Link
              to="/favrestaurant"
              className="text-white text-decoration-none px-1"
            >
              <img
                src="./images/food2.png"
                alt=""
                data-toggle="tooltip"
                data-placement="top"
                title="FAVORITE RESTAURANTS"
              />

              <span className="px-2">Favorite Restaurants</span>
            </Link>
            <span className="px-1">
              <img
                src="./images/food3.png"
                alt=""
                data-toggle="tooltip"
                data-placement="top"
                title="FAVORITE  MEALS"
              />

              <span className="px-2">FAVORITE MEALS</span>
            </span>
            <Link
              to="/register"
              className="text-white text-decoration-none px-1"
            >
              <img
                src="./images/food4.png"
                alt=""
                data-toggle="tooltip"
                data-placement="top"
                title="MY PROFILE"
              />

              <span className="px-2">MY PROFILE</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
