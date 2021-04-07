import React, { Component } from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

export default class Foundres extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <One />
            </div>
            <div className="col-md-8">
              <Two />
            </div>
            <div className="col-md-2">
              <Three />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
