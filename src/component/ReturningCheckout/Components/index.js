import React, { Component } from "react";
import "./ReturningCheckout.scss";
import One from "./One";
import Two from "./Two";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container returningcus">
          <div className="texts py-5">
            <p>
              HOME / <span>CART</span>
            </p>
            <h2 className="text-uppercase font-weight-bold">checkout</h2>
          </div>
          <p className="ret py-4 text-center text-uppercase">
            RETURNING CUSTOMER? <span>click here to login</span>
          </p>
          <div className="row py-3">
            <div className="col-md-9">
              <One />
            </div>
            <div className="col-md-3">
              <Two />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
