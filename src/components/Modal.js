import React from 'react';
import PropTypes from 'prop-types';
import jquery from 'jquery';
import ReminderModal from "./ReminderModal";
import OperationModal from './OperationModal';

import "../css/modal.css"

class Modal extends React.Component {

closeModal(){

}

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
// onClick={this.closeModal.bind(this)}
    return (
      <div id="outside" className="modal" style={{margin:'0px'}}>
        <div id="inside" className="modal-content" >
        <h3>Add operation / reminder</h3>
        <div className = "form-element">
          <label className="form-label">Vehicle</label>
          <div className = "input-div">
            <select >
            <option value="Bemka">Bemka</option>
            </select>
          </div>
        </div>

        <div className = "form-element">
          <label className="form-label">Category</label>
          <div className = "input-div">
            <select >
            <option value="Service">Service</option>
            </select>
          </div>
        </div>
        <div className="clearfix">
          <OperationModal />
          <ReminderModal />
        </div>

          <div className = "modal-footer">
            <button className ="save-btn" onClick={this.props.onClose}>
              Save
            </button>
            <button className="close" onClick={this.props.onClose}>
              Close
            </button>

          </div>
        </div>
      </div>
    );
  }
}

// jquery('#inside').click(function(event){
//   //debugger;
//     event.stopPropagation();
// });
// jquery('#outside').click(function(event){
//   //debugger;
//   console.log('test');
//   //self.props.onClose;
// });

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,

};

export default Modal;
