import React from 'react';
import "../css/SideBar.css";

import CarNavigator from "./CarNavigator"

export default class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {car:{}};
    this.carSelectedParent = props.carSelectedParent;
  }

  carSelected(car){
    this.carSelectedParent(car);
    this.setState({car:car});
  }

  render() {
    return (
      <div className ="SideBar">
      <div className="clearfix">
      <div className="container" style={this.state.car.imgSrc ? {display:'none'} : {display:'block'}}>
        <p className="Garage">Garage</p>
        <button className="addNew">Add Vehicle</button>
      </div>
      <div className="container" style={this.state.car.imgSrc ? {display:'block'} : {display:'none'}}>
        <img src={this.state.car.imgSrc} alt="Car" />
      </div>
      </div>
          <CarNavigator carSelectedParent={this.carSelected.bind(this)}/>
      </div>
    );
  }
}
