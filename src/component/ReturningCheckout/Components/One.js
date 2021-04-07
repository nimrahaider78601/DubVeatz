import React, { Component } from "react";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="one">
          <h3 className="py-3">Billing details</h3>

          <div className="form">
            <form action="" className="py-4">
              <div className="form-group text-left">
                <label className="label" for="lname">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group text-left">
                <label className="label" for="lname">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group text-left">
                <label className="label" for="lname">
                  Street Address:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group text-left">
                <label className="label" for="lname">
                  Town/City:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group text-left">
                <label className="label" for="lname">
                  State/county:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group text-left">
                <label className="label" for="lname">
                  Phone:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group text-left">
                <label className="label" for="lname">
                  Email Address:
                </label>
                <input
                  type="text"
                  className="form-control text-decoration-none"
                  name="lname"
                />
              </div>
              <div className="form-group flex-left col-md-6 ">
                <div className="form-check">
                  <input
                    className="form-check-input text-decoration-none"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label
                    className="form-check-label px-3 pt-2 text-uppercase"
                    for="defaultCheck1"
                  >
                    Create an account?
                  </label>
                </div>
              </div>
              <div className="onoffradio form-group flex-left col-md-6 ">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                  <p className="onofftext">Ship to a difference address?</p>
                </label>
              </div>
              <div className="form-group text-left">
                <label className="label" for="fname">
                  Order notes (optional)
                </label>
                <textarea type="text" name="fname" className="form-control" />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
