import React, { Component } from "react";
import "./Login.scss";
import Register from "./Register";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login container">
          <div className="texts text-center py-5">
            <p>
              HOME / <span>MY ACCOUNT</span>
            </p>
            <h2 className="text-uppercase font-weight-bold">MY ACCOUNT</h2>
          </div>
          <div className="forms">
            <div className="row">
              <div className="col-md-6 p-5">
                <h3 className="font-weight-bold text-center pb-5">LOGIN</h3>
                <div className="pt-2"></div>
                <form className="row p-4 border" method="">
                  <div className="form-group col-md-12 text-left">
                    <label className="label" htmlFor="fname">
                      username or email address*
                    </label>
                    <input type="text" name="fname" className="form-control" />
                  </div>
                  <div className="form-group col-md-12 text-left">
                    <label className="label" htmlFor="lname">
                      Password*
                    </label>
                    <input
                      type="password"
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
                        htmlFor="defaultCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="form-group flex-right pt-2 text-right col-md-6">
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Lost You Password?
                      </label>
                    </div>
                  </div>
                  <div className="form-group text-center pt-4 col-md-12">
                    <button
                      className="btn text-white text-decoration-none"
                      name="login"
                    >
                      login
                    </button>
                  </div>

                  <div className="social text-center col-md-12">
                    <p className="py-4 ">Login with</p>
                    <button
                      className="social1 mx-2 btn text-left text-white text-decoration-none"
                      name="login-facebook"
                    >
                      <img src="./images/social1.png" alt="" />
                      <span className="px-2">Facebook</span>
                    </button>
                    <button
                      className="social2 mx-2 btn text-left text-white text-decoration-none"
                      name="login-gmail"
                    >
                      <img src="./images/social2.png" alt="" />
                      <span className="px-2">Gmail</span>
                    </button>
                  </div>
                </form>
              </div>
              <Register />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
