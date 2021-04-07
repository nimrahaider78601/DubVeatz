import React, { Component } from "react";
import "./FavRestaurants.scss";

export default class Three extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="three">
          <h5 className="font-weight-bold py-2">Sort by</h5>
          <p className="line">
            <span>
              <i className="fa fa-thumbs-up px-2" aria-hidden="true"></i>
            </span>
            <span className="px-1">Best Match</span>
          </p>
          <p className="line">
            <span>
              <i className="fa fa-sort-alpha-asc px-2" aria-hidden="true"></i>
            </span>
            <span className="px-1">Alphabetical</span>
          </p>
          <p className="line">
            <span>
              <i className="fa fa-star-o px-2" aria-hidden="true"></i>
            </span>
            <span className="px-1">Ratings</span>
          </p>
          <p className="line">
            <span>
              <i className="fa fa-user px-2" aria-hidden="true"></i>
            </span>
            <span className="px-1">Min order value</span>
          </p>
          <p className="line">
            <span>
              <i className="fa fa-usd px-2" aria-hidden="true"></i>
            </span>
            <span className="px-1">Delivery free</span>
          </p>
          <p className="line">
            <span>
              <i className="fa fa-forward px-2" aria-hidden="true"></i>
            </span>
            <span className="px-1">Fastest delivery</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
