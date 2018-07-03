import React from 'react';
import '../css/CarView.css';

import QuickAdd from "./QuickAdd";
import History from "./History0";
import Upcoming from "./Upcoming0";

export default class CarView extends React.Component{

  constructor(props){
    super(props);

    this.state = {};
  }
  ShowCar(car){
    this.setState(car);
  }

  render(){
    return(
      <div className="CarView">

        <div className="CarNavBar clearfix">
          <ul>
            <li><a href="#">Info</a></li>
            <li><a href="#">Operations</a></li>
            <li><a href="#">Reminders</a></li>
          </ul>
        </div>

        <div className="CarInfo">

          <div className="GenInfo">
            <h3>General Info</h3>
            <div className="InfoLeft">

              <img src={this.state.imgSrc} alt="car"></img>
            </div>
            <div className="InfoRight">
              <div className="InfoRight-col1">
                <p><b>Name: </b>Bemka</p>
                <p><b>Brand: </b>BMW</p>
                <p><b>Model: </b>Z3</p>
                <p><b>Year: </b>1992</p>
                <p><b>Color: </b>Niebieski</p>

              </div>
              <div className="InfoRight-col2">
                <p><b>Engine: </b>1.2</p>
                <p><b>Fuel type: </b>benzyna</p>
                <p><b>Odometer: </b>120 000</p>
                <p><b>Plate: </b>SK 123123</p>
              </div>

            </div>
          </div>

          <div className = "QuickUpcomingGroup">
            <QuickAdd/>
            <Upcoming/>
          </div>
          <History/>

        </div>



        <div className="Operations" style={{display:'none'}}>
        </div>
        <div className="Reminders" style={{display:'none'}}>
        </div>
      </div>
    );
  }
}
