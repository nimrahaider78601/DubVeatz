import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FoodDetails.scss";
import One from "./One";
import Two from "./Two";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container fooddetailpage">
          <div className="texts py-4">
            <Link
              to="./restaurantdetail"
              className="text-decoration-none text-dark"
            >
              <h5 className="font-weight-bold">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                <span className="px-2">Back</span>
              </h5>
            </Link>
          </div>

          <div className="row py-3">
            <div className="col-md-6">
              <One />
            </div>
            <div className="col-md-6">
              <Two />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
