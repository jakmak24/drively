import React from 'react';
import "../css/App.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">

        <div className="Logo"> <div> <span className="span1">Drive</span><span className="span2">ly</span> </div> </div>
        <div className="Main-menu">MENU</div>

      </div>
    );
  }
}
