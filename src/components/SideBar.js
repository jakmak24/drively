import React from 'react';
import "../css/SideBar.css";

import CarNavigator from "./CarNavigator"

export default class SideBar extends React.Component {
  render() {
    return (
      <div className ="SideBar">
        <div>Garage</div>
        <CarNavigator />
      </div>
      
    );
  }
}
