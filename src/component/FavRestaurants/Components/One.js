import React, { Component } from "react";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="one">
          <div className="border-top border-bottom d-flex align-items-center py-2 my-3">
            <img src="./images/cuisineimg.png" alt="" />
            <h5 className="px-1">Cuisines</h5>
          </div>
          <div className="more-cuisines">
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Apple Juice </span>
              </span>
              <span className="text flex-right">(3)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">BB. Q </span>
              </span>
              <span className="text flex-right">(4)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Beef Roast </span>
              </span>
              <span className="text flex-right">(3)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Carrot Juice </span>
              </span>
              <span className="text flex-right">(4)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Cheese Burger </span>
              </span>
              <span className="text flex-right">(0)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Chicken Roast </span>
              </span>
              <span className="text flex-right">(2)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Chicken Soup </span>
              </span>
              <span className="text flex-right">(3)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Cold Coffee </span>
              </span>
              <span className="text flex-right">(2)</span>
            </div>
            <p className="cuip py-2">See more cuisines</p>

            {/* Opening Status */}
            <div className="border-top border-bottom d-flex align-items-center py-2 my-3">
              <img src="./images/cuisineimg1.png" alt="" />
              <h5 className="px-1">Opening Status</h5>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Open Now </span>
              </span>
              <span className="text flex-right">(8)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Closed Now </span>
              </span>
              <span className="text flex-right">(5)</span>
            </div>

            {/* Pre Orders */}
            <div className="border-top border-bottom d-flex align-items-center py-2 my-3">
              <img src="./images/cuisineimg2.png" alt="" />
              <h5 className="px-1">Pre Orders</h5>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Yes </span>
              </span>
              <span className="text flex-right">(9)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">No </span>
              </span>
              <span className="text flex-right">(4)</span>
            </div>

            {/* Specials */}

            <div className="border-top border-bottom d-flex align-items-center py-2 my-3">
              <img src="./images/cuisineimg3.png" alt="" />
              <h5 className="px-1">Specials</h5>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Deals </span>
              </span>
              <span className="text flex-right">(9)</span>
            </div>
            <div className="py-2 d-flex align-content-center justify-content-between">
              <span className="">
                <input type="checkbox" className="text-decoration-none" />

                <span className="text px-2">Free Delivery </span>
              </span>
              <span className="text flex-right">(12)</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
