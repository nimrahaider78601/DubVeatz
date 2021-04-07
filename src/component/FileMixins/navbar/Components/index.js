import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbars navbar-expand-md bg-white">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active text-center">
                  <span className="left-nav nav-link px-4">
                    <p>Order Online or Call Now</p>
                    <span className="font-weight-bold">
                      <i className="fa fa-phone" aria-hidden="true"></i> +555
                      234 765 1
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="togg mx-auto order-0">
              <Link to="/" className="navbar-brand mx-auto">
                <img src="./images/logo2.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item text-center font-weight-bold">
                  <span className="right left-nav nav-link px-4">
                    <Link className="text-dark" to="/registerpage">
                      <i className="fa fa-user-o" aria-hidden="true"></i>
                    </Link>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <span className="badge">1</span>
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    <span className="badge">4</span>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
