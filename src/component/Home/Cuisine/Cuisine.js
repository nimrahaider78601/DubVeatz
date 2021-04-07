import React, { Component } from "react";
import "./Cuisine.scss";

export default class Cuisine extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cuisine py-5">
          <div className="container">
            <div className="texts pb-3">
              <h2 className="text-uppercase">Browse by cuisine</h2>
              <p>Discover restaurant by type of meal</p>
            </div>
            <div className="row foods bg-white py-4 px-5 text-center">
              <div className="col-2">
                <img src="./images/foods1.png" alt="" />
                <p className="foodtext pt-2 font-weight-bold">BB.Q</p>
              </div>
              <div className="col-2">
                <img src="./images/foods2.png" alt="" />
                <p className="foodtext pt-2 font-weight-bold">BB.BEEF ROAST</p>
              </div>
              <div className="col-2">
                <img src="./images/foods3.png" alt="" />
                <p className="foodtext pt-2 font-weight-bold">CHICKEN ROAST</p>
              </div>
              <div className="col-2">
                <img src="./images/foods4.png" alt="" />
                <p className="foodtext pt-2 font-weight-bold">CUPCAKE</p>
              </div>
              <div className="col-2">
                <img src="./images/foods5.png" alt="" />
                <p className="foodtext pt-2 font-weight-bold">DOUGHNUT</p>
              </div>
              <div className="col-2">
                <img src="./images/foods6.png" alt="" />
                <p className="foodtext pt-2 font-weight-bold">TEA</p>
              </div>
            </div>
            <div className="texts pt-5 pb-3">
              <h2 className="text-uppercase">
                Popular locaalities in and around geelong
              </h2>
              <p>Explore restaurants, bars, and cafes by locality</p>
            </div>
            <div className="row foods bg-white py-4 px-5 justify-content-center">
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    England <span>(65 places)</span>
                  </li>
                  <li>
                    Berkshire <span>(16 places)</span>
                  </li>
                  <li>
                    Bedfordshire <span>(8 places)</span>
                  </li>
                  <li>
                    Scotland <span>(7 places)</span>
                  </li>
                  <li>
                    Cheshire <span> (4 places)</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    Cambridgeshire <span>(3 places)</span>
                  </li>
                  <li>
                    Devon <span>(3 places)</span>
                  </li>
                  <li>
                    Fowey <span>(3 places)</span>
                  </li>
                  <li>
                    Kent <span>(2 places)</span>
                  </li>
                  <li>
                    Maidstone <span>(2 places)</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    Bedford <span>(1 places)</span>
                  </li>
                  <li>
                    Bridport <span>(1 places)</span>
                  </li>
                  <li>
                    Bude <span>(1 places)</span>
                  </li>
                  <li>
                    County Down <span>(1 places)</span>
                  </li>
                  <li>
                    Crewe <span>(1 places)</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    Huntingdon <span>(1 places)</span>
                  </li>
                  <li>
                    Wales <span>(1 places)</span>
                  </li>
                  <li>
                    Honiton <span>(0 places)</span>
                  </li>
                  <li>
                    Stony Stratford <span>(0 places)</span>
                  </li>
                </ul>
              </div>
              <button className="btn my-3" name="see_more">
                SEE MORE LOCATIONS
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
