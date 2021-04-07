import React, { Component } from "react";

import Tabpane1 from "./Tabpane1";
import TabPane2 from "./TabPane2";

export default class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-6 p-5">
          <h3 className="font-weight-bold text-center">REGISTER</h3>
          <div className="testing row">
            <div className="col-xs-12 ">
              <nav className="tabs">
                <div
                  className="nav nav-tabs nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    1
                  </a>
                  <span
                    className="nav-item nav-link cursor-pointer"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    2
                  </span>
                </div>
              </nav>
              <div
                className="tab-content py-3 px-3 px-sm-0"
                id="nav-tabContent"
              >
                <Tabpane1 />
                <TabPane2 />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
