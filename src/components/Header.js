import React from 'react';
import "../css/Header.css";
import 'font-awesome/css/font-awesome.min.css';

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {dashboardActive : true,
    vehiclesActive : false,
    operationsActive : false,
    statisticsActive : false
  }
    //this.activate = this.activate.bind(this);
  }

  activate(state){
let dashboardActive = false;
let vehiclesActive = false;
let operationsActive = false;
let statisticsActive = false;

if(state.indexOf("dashboard")>-1)
  dashboardActive = true;
else if(state.indexOf("vehicles")>-1)
  vehiclesActive = true;
else if(state.indexOf("operations")>-1)
  operationsActive = true;
else if(state.indexOf("statistics")>-1)
    statisticsActive = true;

    this.setState({dashboardActive : dashboardActive,
    vehiclesActive : vehiclesActive,
    operationsActive : operationsActive,
    statisticsActive : statisticsActive
  });
    // this.dashboardActive = false;
    // this.vehiclesActive = false;
    // this.operationsActive = false;
    // this.statisticsdActive = false;

  }

  render() {
    return (
      <div className="Header">

        <div className="Logo">
        <br />
            <span className="span1">Drive</span>
            <span className="span2">ly</span>
        </div>
        <div className="Main-menu">
          <ul>
          <li><a className={this.state.dashboardActive ? "active NavItem" : "NavItem"} onClick={() => this.activate("dashboard")} href="#/Dashboard">Dashboard</a></li>
          <li><a className={this.state.vehiclesActive ? "active NavItem" : "NavItem"} onClick={() => this.activate("vehicles")} href="#/Vehicles">Vehicles</a></li>
          <li><a className={this.state.operationsActive ? "active NavItem" : "NavItem"} onClick={() => this.activate("operations")} href="#/Operations">Operations</a></li>
          <li><a className={this.state.statisticsActive ? "active NavItem" : "NavItem"} onClick={() => this.activate("statistics")} href="#/Statistics">Statistics</a></li>
          </ul>
          <div className="ManageAccont">
          <br />
            <a href="#"><i className="fa fa-user-circle"></i><i className="fa fa-caret-down"></i></a>
            <a href="#"><i className="fa fa-cog"></i><i className="fa fa-caret-down"></i></a>
          </div>
        </div>
      </div>
    );
  }
}
