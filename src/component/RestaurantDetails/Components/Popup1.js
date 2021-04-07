import React, { Component } from "react";

export default class Popup1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="popup1 modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title font-weight-bold">Extras</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <h5 className="font-weight-bold py-2">Drunks</h5>
                <div className=" py-2 d-flex justify-content-between align-content-center">
                  <span className="span1">
                    <input type="checkbox" className="text-decoration-none" />

                    <span className="text px-2">Apple Juice </span>
                  </span>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      className="form-control input-number"
                      defaultValue="1"
                      min="1"
                      max="10"
                    />
                    <span className="input-group-btn">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <span className="text px-4">£1.50 </span>
                </div>
                {/* List2 */}
                <div className=" py-2 d-flex justify-content-between align-content-center">
                  <span className="span1">
                    <input type="checkbox" className="text-decoration-none" />

                    <span className="text px-2">Red Bull </span>
                  </span>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      className="form-control input-number"
                      defaultValue="1"
                      min="1"
                      max="10"
                    />
                    <span className="input-group-btn">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <span className="text px-4">£2.50 </span>
                </div>
                {/* List 3 */}

                <div className=" py-2 d-flex justify-content-between align-content-center">
                  <span className="span1">
                    <input type="checkbox" className="text-decoration-none" />

                    <span className="text px-2">Chillies </span>
                  </span>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      className="form-control input-number"
                      defaultValue="1"
                      min="1"
                      max="10"
                    />
                    <span className="input-group-btn">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <span className="text px-4">£3.50 </span>
                </div>
                <div className="text-center py-4">
                  <button className="btn btn-rounded px-4">ADD EXTRAS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
