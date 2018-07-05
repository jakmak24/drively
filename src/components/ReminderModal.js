import React from 'react';
import "../css/modal.css"

export default class ReminderModal extends React.Component {
  render(){
    return(
      <div className="ReminderModal">
        <div className="modal-form">
          <div className = "form-element">
            <label className="form-label">Date</label>
            <div className = "input-div">
              <input type="text" value="11.06.2018"></input>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Name</label>
            <div className = "input-div">
              <select >
              <option value="opony">Wymiana opon</option>
              </select>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Cost</label>
            <div className = "input-div">
              <input type="text" value="100.00"></input>PLN
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Place</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Notes</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
