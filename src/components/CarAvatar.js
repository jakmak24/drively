import React from 'react';
import "../css/CarAvatar.css";

export default class CarAvatar extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
      return (
        <div className="CarAvatar clearfix">
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
