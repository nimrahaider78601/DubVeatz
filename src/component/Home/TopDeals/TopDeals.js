import React, { Component } from "react";
import "./TopDeals.scss";

export default class TopDeals extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container deals pb-5">
          <div className="text-center py-4">
            <h2 className="text-uppercase">Top Deals</h2>
            <p>Explore restaurants, bars, and cafes by locality</p>
          </div>
          <div className="row py-4">
            <div className="col-md-6">
              <div className="bg-secondary">
                <img src="./images/deals1.png" alt="" />
              </div>
            </div>
            <div className="second col-md-3 col-sm-6">
              <div className="bg-success">
                <img src="./images/deals2.png" alt="" />
              </div>
              <div className="bg-warning">
                <img src="./images/deals3.png" alt="" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="bg-danger">
                <img src="./images/deals4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
