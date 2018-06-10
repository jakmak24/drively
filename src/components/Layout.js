import React from 'react';

import Header from "./Header"
import SideBar from "./SideBar"
import MainView from "./MainView"

export default class Layout extends React.Component {
  constructor(props){
    super(props);
  }

  carSelected(car){
    console.log("Change view");
  }

  render() {
    return (
      <div className = "Layout">
        <Header />
        <div className = "Body">
          <SideBar carSelectedParent={this.carSelected}/>
          <MainView />
        </div>
      </div>
    );
  }
}
