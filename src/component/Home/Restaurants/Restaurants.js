import React, { Component } from "react";
import "./Restaurants.scss";
import Links from "./components/Links";
import TabPane1 from "./components/TabPane1";
import TabPane2 from "./components/TabPane2";
import TabPane3 from "./components/TabPane3";
import TabPane4 from "./components/TabPane4";
import TabPane5 from "./components/TabPane5";
import TabPane6 from "./components/TabPane6";

export default class Restaurants extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="restaurants container py-5">
          <div className="texts pb-3 text-center">
            <h2 className="text-uppercase">top restaurants</h2>
            <p>Explore restaurants, bars, and cafes by locality</p>
          </div>
          <div className="row tabs">
            <div className="itemz">
              <Links />
            </div>
            <div className="row">
              <div className="col-xs-12 ">
                <div
                  className="tab-content pt-5 px-3 px-sm-0"
                  id="nav-tabContent"
                >
                  <TabPane1 />
                  <TabPane2 />
                  <TabPane3 />
                  <TabPane4 />
                  <TabPane5 />
                  <TabPane6 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
