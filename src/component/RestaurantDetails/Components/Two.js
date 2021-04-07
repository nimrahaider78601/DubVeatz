import React, { Component } from "react";
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
import { Link } from "react-router-dom";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="two px-2">
          <h5 className="font-weight-bold py-2">
            <span className="span1">
              <i className="fa fa-apple" aria-hidden="true">
                {" "}
              </i>{" "}
              Menu
            </span>
            <span className="px-5 span2">
              <i className="fa fa-commenting" aria-hidden="true">
                {" "}
              </i>{" "}
              Reviews
            </span>
          </h5>
          <div className="pt-3 input-group form-group text-left border-bottom">
            <input
              type="text"
              name="address"
              className="second form-control px-3"
              placeholder="Search food item"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          {/* Food-item1 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <Link
                to="./fooddetails"
                className="text-decoration-none text-dark"
              >
                <img src="./images/fooditem1.png" alt="" />
              </Link>
            </div>
            <div className="col-6 py-3 resp">
              <Link
                to="./fooddetails"
                className="text-decoration-none text-dark"
              >
                <h5 className="font-weight-bold">
                  Chicken Tandoori Special 12" Deep Pan
                </h5>
              </Link>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span
                className="span2 pl-4"
                data-toggle="modal"
                data-target="#myModal"
              >
                <i className="fa fa-plus p-2"></i>
              </span>
              <Popup1 />
            </div>
          </div>
          {/* Food-item2 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem2.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span
                className="span2 pl-4"
                data-toggle="modal"
                data-target="#myModal1"
              >
                <i className="fa fa-plus p-2"></i>
              </span>
              <Popup2 />
            </div>
          </div>
          {/* Food-item3 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem3.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <Link to="/cuponcheckout" className="text-decoration-none">
                <span className="span2 pl-4">
                  <i className="fa fa-plus p-2"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Food-item4 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem4.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span className="span2 pl-4">
                <i className="fa fa-plus p-2"></i>
              </span>
            </div>
          </div>
          {/* Food-item5 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem5.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span className="span2 pl-4">
                <i className="fa fa-plus p-2"></i>
              </span>
            </div>
          </div>
          {/* Food-item6 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem1.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span className="span2 pl-4">
                <i className="fa fa-plus p-2"></i>
              </span>
            </div>
          </div>
          {/* Food-item7 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem2.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span className="span2 pl-4">
                <i className="fa fa-plus p-2"></i>
              </span>
            </div>
          </div>
          {/* Food-item8 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem4.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span className="span2 pl-4">
                <i className="fa fa-plus p-2"></i>
              </span>
            </div>
          </div>
          {/* Food-item9 */}
          <div className="row food-items border-bottom py-2">
            <div className="col-2">
              <img src="./images/fooditem3.png" alt="" />
            </div>
            <div className="col-6 py-3 resp">
              <h5 className="font-weight-bold">
                Chicken Tandoori Special 12" Deep Pan
              </h5>
              <p className="py-1">Cheese, tomatoes and italian herbs.</p>
            </div>
            <div className="col-3 py-3 resp">
              <span className="span1 px-2">£4.50 </span>
              <span className="span2 pl-4">
                <i className="fa fa-plus p-2"></i>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
