import React from 'react';
import "../css/CarNavigator.css";

import CarAvatar from "./CarAvatar";

export default class CarNavigator extends React.Component {
  render() {
    return (
      <div className ="CarNavigator">
        <div className ="Filters">
          <select className="Select">
            <option value="Status">Status</option>
          </select>
          <select className="Select">
            <option value="Favorites">Favorites</option>
          </select>
        </div>
        <div>
          <input className="Search" type="text" id="vehicleFilter" placeholder="Search for vehicles.."></input>
          <button className="Search">O</button>
        </div>

        <CarAvatar />
        <CarAvatar />
        <CarAvatar />
        <br />
      </div>
    );
  }
}
