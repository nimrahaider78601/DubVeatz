import React, { Component } from "react";

export default class TabPane2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <form className="row p-4 border" method="">
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                EMAIL
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                MOBILE
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                LANDLINE
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <div className="form-group col-md-12 text-left">
              <label className="label" htmlFor="lname">
                P.O.BOX
              </label>
              <input
                type="text"
                className="form-control text-decoration-none"
                name="lname"
              />
            </div>
            <h3 className="font-weight-bold">
              Receive Update on Offers, Promotions and Discounts
            </h3>

            <div className="form-group col-md-12 text-left pt-4 onoff">
              <div className="row">
                <div className="col-6">
                  <p>Subscribe to SMS</p>
                </div>
                <div className="onoffradio col-6 text-right">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <hr />
            </div>
            <div className="form-group col-md-12 text-left pb-4 onoff">
              <div className="row">
                <div className="col-6">
                  <p>Subscribe to SMS</p>
                </div>
                <div className="onoffradio col-6 text-right">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <hr />
            </div>
            <div className="text-center endpara col-md-12">
              <p>
                By creating an account you agree to the
                <span className="text-danger">
                  <ins> Privancy policy</ins>
                </span>
                and to the
                <span className="text-danger">
                  <ins> Terms of use.</ins>
                </span>
              </p>
            </div>
            <div className="form-group text-center pt-4 col-md-12">
              <button className="btn text-white text-decoration-none">
                Create account
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
