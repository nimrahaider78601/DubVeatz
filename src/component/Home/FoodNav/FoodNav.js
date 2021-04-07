import React, { Component } from "react";
import "./FoodNav.scss";

export default class FoodNav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="foodnav container">
          <div className="img">
            <img
              className="py-2 px-5 bg-white"
              src="./images/deals.png"
              alt=""
            />
            <div className="after mt-4">
              <span></span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
