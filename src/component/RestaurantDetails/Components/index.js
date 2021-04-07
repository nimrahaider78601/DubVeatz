import React, { Component } from "react";
import "./RestaurantDetails.scss";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container detailpage">
          <div className="heading d-flex justify-content-between align-content-center">
            <div className="row py-4  px-3">
              <div className="col-md-3">
                <img src="./images/restaurants1.png" alt="" />
              </div>
              <div className="col-md-9 px-5">
                <h2 className="font-weight-bold pt-2">Golden Chick Fries </h2>
                <p className="small-head">Doughnut, Hot Dogs, Ice Cream</p>
                <p className="timing">
                  <span className="span1">Today : </span>
                  <span className="span2">11:00 am - 11:00 pm</span>
                  <span>
                    {" "}
                    <i className="fa fa-chevron-down"></i>
                  </span>
                </p>
              </div>
            </div>
            <p className="rightpara pt-5 px-3">
              DubVeatz Delivery fee: £10.00 <br />
              Min Order : £10.00 <br />
              Max Order : £50.00en Chick Fries
            </p>
          </div>

          <div className="row py-3">
            <div className="col-md-2">
              <One />
            </div>
            <div className="col-md-7">
              <Two />
            </div>
            <div className="col-md-3">
              <Three />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
