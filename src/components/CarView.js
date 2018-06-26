import React from 'react';
import '../css/CarView.css';

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
        <div className="Info">
          <div className="GenInfo">
            <div className="InfoLeft">
              <h3>General Info</h3>
              <img src={this.state.imgSrc} alt="car"></img>
            </div>
            <div className="InfoRight">
              <p>Name:Bemka</p>
            </div>
          </div>
        </div>
        <div className="Operations" style={{display:'none'}}>
        </div>
        <div className="Reminders" style={{display:'none'}}>
        </div>
      </div>
    );
  }
}
