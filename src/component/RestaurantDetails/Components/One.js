import React, { Component } from "react";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="one pl-3">
          <div className=" d-flex align-items-center">
            <img src="./images/Resdetail1.png" alt="" />
            <h4 className="px-1 font-weight-bold">Categories</h4>
          </div>
          <p className="text-danger font-weight-bold pt-2">Pizzas</p>
          <p className="border-bottom py-2">Calzone</p>
          <p className="border-bottom py-2">Garlic Bread</p>
          <p className="border-bottom py-2">Kebabs</p>
          <p className="border-bottom py-2">Burgers</p>
          <p className="border-bottom py-2">Specials</p>
          <p className="border-bottom py-2">Wraps</p>
          <p className="border-bottom py-2">Chicken</p>
          <p className="border-bottom py-2">Paninis</p>
          <p className="border-bottom py-2">Jacket Potatoes</p>
          <p className="border-bottom py-2">Starters</p>
          <p className="border-bottom py-2">Traditional Curries</p>
          <p className="border-bottom py-2">Biryani Dishes</p>
          <p className="border-bottom py-2">Vegetarian Dishes</p>
          <p className="border-bottom py-2">Rice</p>
          <p className="border-bottom py-2">Bread</p>
          <p className="border-bottom py-2">Sauces</p>
        </div>
      </React.Fragment>
    );
  }
}
