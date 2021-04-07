import React, { Component } from "react";
import "./Register.scss";

export default class RegisterPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="register container">
          <div className="texts text-center py-5">
            <p>
              HOME / <span>MY ACCOUNT</span>
            </p>
            <h2 className="text-uppercase font-weight-bold">MY ACCOUNT</h2>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <form className="row p-4 border mb-5">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
