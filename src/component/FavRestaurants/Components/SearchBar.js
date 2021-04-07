import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="searchbar container">
          <div className="d-flex justify-content-center align-items-center">
            <form
              action=""
              method=""
              className="row main-form my-4 mx-5 px-1 py-1"
            >
              <div className="form-group text-left">
                <input
                  type="text"
                  name="name"
                  className="fst form-control px-3"
                  placeholder="Restaurant name"
                />
              </div>
              <div className="border-left input-group form-group text-left">
                <input
                  type="text"
                  name="address"
                  className="second form-control px-3"
                  placeholder="&#xf041; &nbsp; All Locations "
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-crosshairs" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <button className="btn" name="search">
                Search
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
