import React from 'react';
import PropTypes from 'prop-types';

import "../css/modal.css"

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    return (
      <div className="modal" >
        <div className="modal-content" >
          <div className="modal-form">
            <h3>Add operation</h3>

            <div className = "form-element">
              <label className="form-label">Vehicle</label>
              <div className = "input-div">
                <select >Bemka</select>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Category</label>
              <div className = "input-div">
                <select >Service</select>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Date</label>
              <div className = "input-div">
                <input type="text"></input>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Name</label>
              <div className = "input-div">
                <select>Wymiana opon</select>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Cost</label>
              <div className = "input-div">
                <input type="text"></input>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Place</label>
              <div className = "input-div">
                <input type="text"></input>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Odometer</label>
              <div className = "input-div">
                <input type="text"></input>
              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Reminder</label>
              <div className = "input-div">
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label>

              </div>
            </div>

            <div className = "form-element">
              <label className="form-label">Notes</label>
              <div className = "input-div">
                <input type="text"></input>
              </div>
            </div>

          </div>

          <div className = "modal-footer">
            <button className="close" onClick={this.props.onClose}>
              Close
            </button>
            <button type="submit" >
              Save
            </button>
          </div>

        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,

};

export default Modal;
