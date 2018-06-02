import React from 'react';
import "../css/CarNavigator.css";

export default class CarNavigator extends React.Component {
  render() {
    return (
      <div className ="CarNavigator">
        <div className ="Filters">
          <button >
            Status <i class="fa fa-caret-down"></i>
          </button>
          <button >
            Favorite <i class="fa fa-caret-down"></i>
          </button>
        </div>
        <div>
          <input type="text" id="vehicleFilter" onkeyup="myFunction()" placeholder="Search for vehicles.."></input>
        </div>
      </div>
    );
  }
}
