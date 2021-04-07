import React, { Component } from "react";
import "./CuponCheckout.scss";
import One from "./One";
import Two from "./Two";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container cupondetail">
          <div className="texts py-5">
            <p>
              HOME / <span>CART</span>
            </p>
            <h2 className="text-uppercase font-weight-bold">checkout</h2>
          </div>
          {/* Returning Cupons */}
          <div className="row">
            <div className="col-md-6">
              <p className="ret py-4 text-center text-uppercase">
                RETURNING CUSTOMER? <span>click here to login</span>
              </p>
            </div>
            <div className="col-md-6">
              <p className="ret py-4 text-center text-uppercase">
                HAVE A CUPON? <span>click here to enter your code</span>
              </p>
            </div>
          </div>
          <div className="havecupon py-4">
            <p>If you have a cupon code, please apply it below.</p>
            <div className="py-4 d-flex justify-content-start align-content-center">
              <div className="form-group text-left">
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                  placeholder="Cupon code"
                />
              </div>
              <div className="form-group text-center px-4">
                <button className="btn text-white text-decoration-none px-3">
                  Apply cupon
                </button>
              </div>
            </div>
          </div>
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
