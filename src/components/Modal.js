import React from 'react';
import PropTypes from 'prop-types';
import jquery from 'jquery';
import ReminderModal from "./ReminderModal";
import OperationModal from './OperationModal';

import "../css/modal.css"

class Modal extends React.Component {

constructor(props){
  super(props);

  this.state = {
    isReminder: false
  }
}

toggleReminder(isShow){

  this.setState({
    isReminder: isShow
  });
}

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div id="outside" className="modal" style={{margin:'0px'}}>
        <div id="inside" className="modal-content" style={{margin:'0px', 'margin-top':'15%',
    'margin-left': '25%'}}>
        <h3>Add operation</h3>
        <div className="topOptions">
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
              <option value="refuel" selected={this.props.modalType.indexOf("refuel") > -1 ? "selected" : ""} >Refuel</option>
              <option value="service" selected={this.props.modalType.indexOf("service") > -1 ? "selected" : ""} >Service</option>
              <option value="payment" selected={this.props.modalType.indexOf("payment") > -1 ? "selected" : ""} >Payment</option>
              </select>
            </div>
          </div>
        </div>

        <div className="clearfix">
        <div className="ModalContainer" style={{display: this.props.modalType.indexOf("reminder") > -1 ? "none" : "block"}}>
            <OperationModal toggleReminder={this.toggleReminder.bind(this)}/>
          </div>
          <div className="ModalContainer" style={{display: (this.props.modalType.indexOf("reminder") > -1 || this.state.isReminder) ? "block":"none"}}>
            <ReminderModal />
          </div>
        </div>

          <div className = "modal-footer">
            <div className="button-div">
              <button className="close" onClick={this.props.onClose}>
                Cancel
              </button>
            <button className ="save-btn" onClick={this.props.onClose}>
              Save
            </button>

            </div>
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
  modalType: PropTypes.string
};

export default Modal;
