import React from 'react';
import "../css/QuickAdd.css";


export default class QuickAdd extends React.Component {
  render() {
    return (
      <div className ="QuickAdd clearfix">
        <p className="Title">QuickAdd</p>
        <div className="QuickOptions">
          <p>Refuel</p>
          <img src={window.location.origin + '/icons/refuel.svg'} alt="Refuel"></img>
        </div>
        <div className="QuickOptions">
          <p>Service</p>
          <img src={window.location.origin + '/icons/service.svg'} alt="Service"></img>
        </div>
        <div className="QuickOptions">
          <p>Payment</p>
          <img src={window.location.origin + '/icons/payment.svg'} alt="Payment"></img>
        </div>
        <div className="QuickOptions">
          <p>Reminder</p>
          <img src={window.location.origin + '/icons/reminder.png'} alt="Reminder"></img>
        </div>
      </div>
    );
  }
}
