import React, { Component } from "react";
import "./FavRestaurants.scss";
import { Link } from "react-router-dom";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="two">
          <div className="texts">
            <h4 className="font-weight-bold">13 Restaurant's Found</h4>
            <p className="py-2">
              <span className="span1">"129",</span>
              <span className="span2 px-3">Reset</span>
            </p>
          </div>
          <div className="restaurantz py-4">
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants1.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row2 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants2.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row3 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants3.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row4 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants4.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row5 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants15.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row6 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants19.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row7 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants1.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row8 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants24.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row9 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants31.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row10 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants14.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row11 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants27.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
            {/* Row12 */}
            <div className="row pb-4 py-4">
              <Link
                to="/restaurantdetail"
                className="text-white col-md-3 col-sm-3 col-xs-3"
              >
                <img src="./images/restaurants10.png" alt="" />
                <span className="bg-suc px-3 py-1">Open</span>
              </Link>
              <div className="col-md-6 col-sm-6 col-xs-6 col-xs-6">
                <p>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1 checked text-warning"></span>
                  <span className="fa fa-star mr-1"></span>
                  <span className="fa fa-star mr-1"></span>
                </p>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <h5 className="font-weight-bold pt-2">
                    Golden Chick Fries
                    <small className="font-weight-bold">Sponsored</small>
                  </h5>
                </Link>
                <p className="small-head">
                  Type of food : Doughnut, Hot Dogs, Ice Cream
                </p>
                <div className="location">
                  <img src="./images/location1.png" alt="" />
                  <img src="./images/location2.png" alt="" />
                  <span>Leyton, Greater London</span>
                </div>
                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
              <div className="heartdiv col-md-3 col-sm-3 col-xs-3 d-flex justify-content-center align-items-center">
                <i className="fa fa-heart-o text-success p-1"></i>

                <Link
                  to="/restaurantdetail"
                  className="text-decoration-none text-dark"
                >
                  <button className="btn ml-2">VIEW MENU</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
