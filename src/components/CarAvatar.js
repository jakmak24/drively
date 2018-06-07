import React from 'react';
import "../css/CarAvatar.css";

export default class CarAvatar extends React.Component{
    render(){
      return (
        <div className="CarAvatar clearfix">
          <img className="Image" src={window.location.origin + "/assets/mltpa.jpg"} alt="Car"></img>
          <div className="Info">
            <p className="Name">Twarzowa</p>
            <p>Fiat</p>
            <p>Multipla</p>
            <p>2017</p>
          </div>
        </div>
      );
    }
}
