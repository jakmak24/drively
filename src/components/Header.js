import React from 'react';
import "../css/Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">

        <div className="Logo">
          <div>
            <span className="span1">Drive</span>
            <span className="span2">ly</span>
          </div>
        </div>
        <div className="Main-menu">
          <ul>
          <li><a>Dashboard</a></li>
          <li><a>Vehicles</a></li>
          <li><a>Operations</a></li>
          <li><a>Statistics</a></li>
          </ul>
        </div>

      </div>
    );
  }
}
