import React from 'react';
import "../css/QuickAdd.css";


import Modal from './Modal';




export default class QuickAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
  }

  render() {
    return (
      <div className ="QuickAdd clearfix">
        <h3 className="Title">QuickAdd</h3>
        <div className="QuickOptions" id="refuelButton" onClick={this.toggleModal}>
          <p>Refuel</p>
          <img src={window.location.origin + '/icons/refuel.svg'} alt="Refuel"></img>
        </div>
        <div className="QuickOptions" id="serviceButton" onClick={this.toggleModal}>
          <p>Service</p>
          <img src={window.location.origin + '/icons/service.svg'} alt="Service"></img>
        </div>
        <div className="QuickOptions" id="paymentButton" onClick={this.toggleModal}>
          <p>Payment</p>
          <img src={window.location.origin + '/icons/payment.svg'} alt="Payment"></img>
        </div>
        <div className="QuickOptions" id="reminderButton" onClick={this.toggleModal}>
          <p>Reminder</p>
          <img src={window.location.origin + '/icons/reminder.png'} alt="Reminder"></img>
        </div>

        <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            Here's some content for the modal
          </Modal>
      </div>



    );
  }
}
