import React from 'react';
import "../css/Body.css";

import SideBar from "./SideBar";
import MainView from "./MainView";

export default class Body extends React.Component {
  render() {
    return (
      <div className = "Body">
        <SideBar />
        <MainView />
      </div>
    );
  }
}
