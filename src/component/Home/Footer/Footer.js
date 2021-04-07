import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="texts text-center">
            <h2 className="text-uppercase">
              <span>DubVeatz</span> In Your Mobile! Get Our App
            </h2>
            <p>Get our app, it's the fastest way to order food on the go.</p>
          </div>
          <div className="inner d-flex justify-content-center align-items-center">
            <img className="mx-2" src="./images/footer2.png" alt="" />
            <img className="mx-2" src="./images/footer1.png" alt="" />
          </div>
          <div className="inner1 d-flex justify-content-center align-items-center">
            <img src="./images/footer3.png" alt="" />
          </div>
          <div className="copyright d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="float-left col-md-6 col-xs-12">
                  <img src="./images/1.png" alt="" />
                  <img src="./images/2.png" alt="" />
                  <img src="./images/3.png" alt="" />
                  <img src="./images/4.png" alt="" />
                  <img src="./images/5.png" alt="" />
                  <img src="./images/6.png" alt="" />
                </div>
                <div className="float-right col-md-6 col-xs-12">
                  <p className="text-right">
                    DubVeatz | © 2019 All rights reserved!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
