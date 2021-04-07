import React, { Component } from "react";

export default class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div
            className="py-3 nav nav-tabs nav-fill"
            id="nav-tab"
            role="tablist"
          >
            <a
              className="nav-item nav-link active"
              id="nav-all-tab"
              data-toggle="tab"
              href="#nav-all"
              role="tab"
              aria-controls="nav-all"
              aria-selected="true"
            >
              ALL
            </a>
            <a
              className="nav-item nav-link"
              id="nav-fastfood-tab"
              data-toggle="tab"
              href="#nav-fastfood"
              role="tab"
              aria-controls="nav-fastfood"
              aria-selected="false"
            >
              FASTFOOD
            </a>
            <a
              className="nav-item nav-link"
              id="nav-thai-tab"
              data-toggle="tab"
              href="#nav-thai"
              role="tab"
              aria-controls="nav-thai"
              aria-selected="false"
            >
              THAI
            </a>
            <a
              className="nav-item nav-link"
              id="nav-chinese-tab"
              data-toggle="tab"
              href="#nav-chinese"
              role="tab"
              aria-controls="nav-chinese"
              aria-selected="false"
            >
              CHINESE
            </a>
            <a
              className="nav-item nav-link"
              id="nav-italian-tab"
              data-toggle="tab"
              href="#nav-italian"
              role="tab"
              aria-controls="nav-italian"
              aria-selected="false"
            >
              ITALIAN
            </a>
            <a
              className="nav-item nav-link"
              id="nav-arabic-tab"
              data-toggle="tab"
              href="#nav-arabic"
              role="tab"
              aria-controls="nav-arabic"
              aria-selected="false"
            >
              ARABIC
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
