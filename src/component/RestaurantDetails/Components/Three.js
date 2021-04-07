import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Three extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="three">
          <h5 className="font-weight-bold py-2 border-bottom">
            <i className="pr-2 fa fa-shopping-basket" aria-hidden="true"></i>
            Your Order
          </h5>
          {/* Radios */}
          <div className="form-group col-md-12 text-left border-bottom">
            <div className="row radios">
              <div className="col-6">
                <label>
                  <input type="radio" name="dark" />
                  <span className="design"></span>
                  <p className="text"> Pickup</p>
                  <p className="para2">£15.00 </p>
                </label>
              </div>
              <div className="col-6 text-left">
                <label>
                  <input type="radio" name="dark" />
                  <span className="design"></span>
                  <span className="text">Delivery </span>
                  <p className="para2">£10.00 </p>
                </label>
              </div>
            </div>
          </div>
          {/* OrdersCount1 */}
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
          {/* OrdersCount2 */}
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
          {/* OrdersCount3 */}
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
          {/* OrdersCount4 */}
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
          <div className="subtotal py-3">
            <div className="d-flex justify-content-between align-content-center">
              <p>Subtotal</p>
              <p>£18.00</p>
            </div>
            <div className="d-flex justify-content-between align-content-center">
              <p>Delivery fee</p>
              <p>£10.00</p>
            </div>
            <div className="pb-4 d-flex justify-content-between align-content-center">
              <p>VAT (13%)</p>
              <p>£3.46</p>
            </div>
            <div className="main  p-2 d-flex justify-content-between align-content-center">
              <p>Total</p>
              <p>£31.64</p>
            </div>
          </div>
          {/* Radios */}
          <div className="form-group col-md-12 text-left border-bottom">
            <div className="row radio">
              <div className="col-6">
                <label>
                  <input type="radio" name="dark" />
                  <span className="design"></span>
                  <p className="text">
                    {" "}
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <span className="para2">£15.00 </span>
                  </p>
                </label>
              </div>
              <div className=" col-6 text-left">
                <label>
                  <input type="radio" name="dark" />
                  <span className="design"></span>
                  <span className="text">
                    <i className="fa fa-credit-card" aria-hidden="true"></i>{" "}
                    <span className="para2">£10.00 </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* Date */}
          <div className="input-group form-group text-left">
            <input
              type="text"
              className="form-control text-decoration-none"
              name="lname"
            />
            <div className="input-group-append">
              <p className="input-group-text">
                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="btn input-group form-group text-center pt-2">
            <Link to="/cart" className="text-decoration-none text-white">
              <button className="form-control btn text-white text-decoration-none">
                CONFIRM ORDER
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
