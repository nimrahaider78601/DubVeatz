import React, { Component } from "react";
import $ from "jquery";

export default class Tabpane1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <form className="row p-4 border">
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                USER NAME*
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                PASSWORD*
              </label>
              <input
                type="password"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                CONFIRM PASSWORD*
              </label>
              <input
                type="password"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                FIRST NAME*
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                LAST NAME
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>

            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                DOB
              </label>
              <input
                type="date"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                Gender
              </label>
              <div className="row radios ">
                <div className="col-6">
                  <label>
                    <input type="radio" name="dark" defaultChecked />
                    <span className="design"></span>
                    <span className="text"> MALE</span>
                  </label>
                </div>
                <div className="col-6 text-left">
                  <label>
                    <input type="radio" name="dark" />
                    <span className="design"></span>
                    <span className="text">FEMALE </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group text-center pt-4 col-md-12">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log($);

                  $("#nav-profile-tab").trigger("click");
                }}
                className="btn text-white text-decoration-none"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
