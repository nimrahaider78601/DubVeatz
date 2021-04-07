import React, { Component } from "react";

export default class Popup2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="popup2 modal" id="myModal1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title font-weight-bold">Extras</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <h5 className="font-weight-bold py-2">Drinks</h5>
                <p>
                  <i
                    className="fa fa-check-circle text-danger"
                    aria-hidden="true"
                  ></i>{" "}
                  <span className="px-2">Cold Drink - £1.50</span>
                </p>
                <div className="d-flex justify-content-around align-content-center py-4">
                  <button className="btn px-2">ADD TO MENU</button>
                  <button className="btn px-2">RESET FIELDS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
