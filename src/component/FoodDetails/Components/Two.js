import React, { Component } from "react";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="two pb-5">
          <div className="texts">
            <h4 className="font-weight-bold">Chicken Tandori Special </h4>
            <p className="py-2">
              Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with
              letture, tomato, house BBQ & ranch.
            </p>
          </div>
          {/* Calories */}
          <div className="calories d-flex justify-content-start align-content-center">
            <div className="calorie mr-2 text-center px-3 py-2">
              <p>ENERGY</p>
              <p className="pb-1">490 Cal</p>

              <p className="pt-1">DI*</p>
              <p>25%</p>
            </div>
            <div className="calorie mr-2 text-center px-3 py-2">
              <p>PROTIEN</p>
              <p className="pb-1">29 g</p>

              <p className="pt-1">DI*</p>
              <p>58%</p>
            </div>{" "}
            <div className="calorie mr-2 text-center px-3 py-2">
              <p>FAT</p>
              <p className="pb-1">14 g</p>

              <p className="pt-1">DI*</p>
              <p>18%</p>
            </div>{" "}
            <div className="calorie mr-2 text-center px-3 py-2">
              <p>SAT FAT</p>
              <p className="pb-1">2.0 g</p>

              <p className="pt-1">DI*</p>
              <p>10%</p>
            </div>{" "}
            <div className="calorie mr-2 text-center px-3 py-2">
              <p>CARBS</p>
              <p className="pb-1">47 g</p>

              <p className="pt-1">DI*</p>
              <p>17%</p>
            </div>
          </div>
          {/* Protiendes */}
          <p className="protiendes py-2">
            *DI: Recommended Daily intake based on 2000 calories diet
          </p>
          {/* Heartbeat */}
          <p className="heartbeat">
            <i className="fa fa-heartbeat text-danger" aria-hidden="true"></i>{" "}
            <span className="px-2">Allergens: Milk, Eggs, Soy</span>
          </p>
          {/* Buttons */}
          <div className="buttons py-4">
            <p className="pb-3">SIZE</p>
            <button className="btn btn-warning px-4 mx-2 text-white">
              Small
            </button>
            <button className="btn btn-light px-4 mx-2">Large</button>
          </div>
          {/* Extra Topping div */}
          <h3 className="font-weight-bold">
            <small className="font-weight-bold">$</small>12.99
          </h3>
          <div className="toppings py-2">
            <form>
              <fieldset className="wells">
                <legend className="well-legend">
                  <p className="font-weight-bold">EXTRA TOPPINGS</p>
                </legend>
                <div className="row">
                  {/* topping1 */}
                  <div className="col-6 my-1">
                    <div className="span1 px-4 py-3">
                      <input type="checkbox" className="text-decoration-none" />
                      <span className="text px-2 text-uppercase">
                        MOZZARELLA (<small>$</small>
                        2.00)
                      </span>
                    </div>
                  </div>
                  {/* Topping2 */}
                  <div className="col-6 my-1">
                    <div className="span1 px-4 py-3">
                      <input type="checkbox" className="text-decoration-none" />
                      <span className="text px-2 text-uppercase">
                        BACON (<small>$</small>
                        2.00)
                      </span>
                    </div>
                  </div>
                  {/* Topping3 */}
                  <div className="col-6 my-1">
                    <div className="span1 px-4 py-3">
                      <input type="checkbox" className="text-decoration-none" />
                      <span className="text px-2 text-uppercase">
                        MUSHROOMS (<small>$</small>
                        1.00)
                      </span>
                    </div>
                  </div>
                  {/* Topping4 */}
                  <div className="col-6 my-1">
                    <div className="span1 px-4 py-3">
                      <input type="checkbox" className="text-decoration-none" />
                      <span className="text px-2 text-uppercase">
                        PEPPERONI (<small>$</small>
                        1.50)
                      </span>
                    </div>
                  </div>
                  {/* Topping5 */}
                  <div className="col-6 my-1">
                    <div className="span1 px-4 py-3">
                      <input type="checkbox" className="text-decoration-none" />
                      <span className="text px-2 text-uppercase">
                        CHEDDAR (<small>$</small>
                        1.00)
                      </span>
                    </div>
                  </div>
                  {/* Topping6 */}
                  <div className="col-6 my-1">
                    <div className="span1 px-4 py-3">
                      <input type="checkbox" className="text-decoration-none" />
                      <span className="text px-2 text-uppercase">
                        TOMATO SLICES (<small>$</small>
                        0.60)
                      </span>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          {/* Order Count */}
          <div className="order-count py-2 d-flex justify-content-start align-content-center">
            {/* Count */}
            <div className="input-group">
              <div className="input-group-prepend">
                <p className="input-group-text">
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </p>
              </div>
              <input
                type="text"
                name="quant[1]"
                className="form-control input-number py-4"
                defaultValue="1"
                min="1"
                max="10"
              />
              <div className="input-group-append">
                <p className="input-group-text">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </p>
              </div>
            </div>
            {/* Button */}
            <div className="button">
              <button className="btn px-5 py-2 mx-3">ORDER</button>
              <span>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-check-circle-o text-success"></i>
              </span>
            </div>
          </div>
          {/*   Categories */}
          <div className="categories py-4">
            <p>
              Categories: <span className="px-2">By The Slice</span>.
              <span className="mx-2 px-1">Deep Dish</span>.
              <span className="mx-2 px-1">Pizza</span>.
              <span className="mx-2 px-1">Thin Crust</span>
              SKU : N/A
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
