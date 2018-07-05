import React from 'react';
import "../css/QuickAdd.css";


import Modal from './Modal';




export default class QuickAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false,
    type: "service"};
  }

  toggleModal(value){

  this.setState({
    type: value,
    isOpen: !this.state.isOpen
  });
  }

  render() {
    return (
      <div className ="QuickAdd clearfix">
        <h3 className="Title">QuickAdd</h3>
        <div className="QuickOptions" id="refuelButton" onClick={() => {this.toggleModal("refuel")}}>
          <p>Refuel</p>
          <img src={window.location.origin + '/icons/refuel.svg'} alt="Refuel"></img>
        </div>
        <div className="QuickOptions" id="serviceButton" onClick={() => {this.toggleModal("service")}}>
          <p>Service</p>
          <img src={window.location.origin + '/icons/service.svg'} alt="Service"></img>
        </div>
        <div className="QuickOptions" id="paymentButton" onClick={() => {this.toggleModal("payment")}}>
          <p>Payment</p>
          <img src={window.location.origin + '/icons/payment.svg'} alt="Payment"></img>
        </div>
        <div className="QuickOptions" id="reminderButton" onClick={() => {this.toggleModal("reminder")}}>
          <p>Reminder</p>
          <img src={window.location.origin + '/icons/reminder.png'} alt="Reminder"></img>
        </div>

        <Modal show={this.state.isOpen}
            onClose={this.toggleModal.bind(this)}
            modalType={this.state.type}>       
          </Modal>
      </div>
    );
  }
}
