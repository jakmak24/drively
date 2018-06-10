import React from 'react';
import "../css/CarAvatar.css";

export default class CarAvatar extends React.Component{
  constructor(props){
    super(props);

    this.car = {
      name:props.name,
      brand:props.brand,
      model:props.model,
      year:props.year,
      imgSrc:props.imgSrc
    };

    this.carSelected = props.carSelectedParent;
  }

    render(){
      return (
        <div className="CarAvatar clearfix" onClick={() => this.carSelected(this.car)} >
          <img className="Image" src={window.location.origin + this.props.imgSrc} alt="Car"></img>
          <div className="Info">
            <p className="Name">{this.props.name}</p>
            <p>{this.props.brand}</p>
            <p>{this.props.model}</p>
            <p>{this.props.year}</p>
          </div>
        </div>
      );
    }
}
