import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footers copyright  d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 col-sm-12">
                <img src="./images/1.png" alt="" />
                <img src="./images/2.png" alt="" />
                <img src="./images/3.png" alt="" />
                <img src="./images/4.png" alt="" />
                <img src="./images/5.png" alt="" />
                <img src="./images/6.png" alt="" />
              </div>
              <div className="col-md-6 col-sm-12">
                <p className="text-right">
                  DubVeatz | © 2019 All rights reserved!
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
