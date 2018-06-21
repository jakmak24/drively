import React from 'react';
import "../css/SideBar.css";

import CarNavigator from "./CarNavigator"

export default class SideBar extends React.Component {
  constructor(props){
    super(props);
    //debugger;
    this.test = props.carSelectedParent;
    //this.carSelected = props.carSelectedParent;
  }

  carSelected(car){
    debugger;
    //this.test();
    console.log(this);
  }

  render() {
    return (
      <div className ="SideBar">
      <div className="clearfix">
        <p className="Garage">Garage</p>
        <button className="addNew">Add Vehicle</button>
      </div>
          <CarNavigator carSelectedParent={this.carSelected}/>
      </div>
    );
  }
}
