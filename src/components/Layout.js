import React from 'react';

import Header from "./Header"
import SideBar from "./SideBar"
import MainView from "./MainView"

export default class Layout extends React.Component {


  render() {
    return (
      <div className = "Layout">
        <Header />
          <SideBar/>
          <MainView />
      </div>
    );
  }
}
