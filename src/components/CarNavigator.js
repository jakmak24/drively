import React from 'react';
import "../css/CarNavigator.css";

import CarAvatar from "./CarAvatar";

export default class CarNavigator extends React.Component {
  constructor(props){
    super(props);
    this.carList = [];
    this.carList.push({
      key:0,
      name:"Twarzówa",
      brand: "Fait",
      model: "Mltipla",
      year: 2017,
      imgSrc: "/assets/mltpa.jpg"
    });
    this.carList.push({
      key:1,
      name:"Maluch",
      brand: "Fait",
      model: "126p",
      year: 1961,
      imgSrc: "/assets/maluch.jpg"
    });
    this.carList.push({
      key:2,
      name:"Audi",
      brand: "Audi",
      model: "A2",
      year: 2015,
      imgSrc: "/assets/a2.jpg"
    });

    this.carSelected = props.carSelectedParent;
  }

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

        {this.carList.map(item => <CarAvatar
          key={item.key}
          name={item.name}
          brand={item.brand}
          model={item.model}
          year={item.year}
          imgSrc={item.imgSrc}
          carSelectedParent={this.carSelected} />)}
        <br />
      </div>
    );
  }
}
