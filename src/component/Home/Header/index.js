import React, { Component } from "react";
import "./Header.scss";

var sectionStyle = {
  backgroundImage: `url(${"./images/pizza-uhd-4k-wallpaper.jpg"})`,
};

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header" style={sectionStyle}>
          <div className="text-white text-center" id="text">
            <div className="texts">
              <h1>It's The Food You Love, Delivered</h1>
              <p>Ridiculus sociosqu cursus neque cursus curae</p>
              <p>ante scelerisque vehicula</p>
            </div>
            <form
              action=""
              method=""
              className="row main-form my-4 mx-5 px-2 py-2"
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
          <div className="overlay"></div>
        </div>
      </React.Fragment>
    );
  }
}
