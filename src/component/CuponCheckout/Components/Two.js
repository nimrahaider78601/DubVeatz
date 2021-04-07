import React, { Component } from "react";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="two">
          <div className="d-flex justify-content-between align-content-center border-bottom py-2 pt-4">
            <h5>Product</h5>
            <h5>Total</h5>
          </div>
          {/* Ordercount 1 */}
          <div className="row order-count border-bottom">
            <div className="col-7 py-2 pb-3">
              <p className="">Chicken Tandoori Special 12" Deep Pan</p>
            </div>
            <div className="col-3 py-2 pb-3">
              <span className="span1">£4.50 </span>
            </div>
            <div className="col-2 py-1">
              <span className="span2">
                <i className="fa fa-close p-2"></i>
              </span>
            </div>
          </div>
          {/* Ordercount 2 */}
          <div className="row order-count border-bottom">
            <div className="col-7 py-2 pb-3">
              <p className="">Chicken Tandoori Special 12" Deep Pan</p>
            </div>
            <div className="col-3 py-2 pb-3">
              <span className="span1">£4.50 </span>
            </div>
            <div className="col-2 py-1">
              <span className="span2">
                <i className="fa fa-close p-2"></i>
              </span>
            </div>
          </div>
          {/* Ordercount 3 */}
          <div className="row order-count border-bottom">
            <div className="col-7 py-2 pb-3">
              <p className="">Chicken Tandoori Special 12" Deep Pan</p>
            </div>
            <div className="col-3 py-2 pb-3">
              <span className="span1">£4.50 </span>
            </div>
            <div className="col-2 py-1">
              <span className="span2">
                <i className="fa fa-close p-2"></i>
              </span>
            </div>
          </div>
          {/* Ordercount 4 */}
          <div className="row order-count border-bottom">
            <div className="col-7 py-2 pb-3">
              <p className="">Chicken Tandoori Special 12" Deep Pan</p>
            </div>
            <div className="col-3 py-2 pb-3">
              <span className="span1">£4.50 </span>
            </div>
            <div className="col-2 py-1">
              <span className="span2">
                <i className="fa fa-close p-2"></i>
              </span>
            </div>
          </div>
          {/*   Sub-total */}
          <div className="subtotal py-3 border-bottom">
            <div className="d-flex justify-content-between align-content-center">
              <p>Subtotal</p>
              <p>£106.00</p>
            </div>
            <div className="d-flex justify-content-between align-content-center">
              <p>Shipping</p>
              <p>FREE SHIPPING</p>
            </div>
            <div className="pb-4 d-flex justify-content-between align-content-center">
              <p>Total</p>
              <p className="font-weight-bold">£106.94</p>
            </div>
          </div>
          {/* Cash on Deliver */}
          <div className="cash py-2 border-bottom">
            <p>Cash on delivery</p>
            <p>Pay with cash upon delivery</p>
          </div>
          {/* Have Cupon */}
          <div className="cupon cash py-4">
            <p className="three ">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="text-danger">
                <ins>privacy policy.</ins>
              </span>
            </p>
          </div>
          {/* Button */}
          <div className="btn input-group form-group text-center pt-2">
            <button className="form-control btn text-white text-decoration-none">
              PLACE ORDER
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
