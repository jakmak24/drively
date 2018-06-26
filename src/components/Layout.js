import React from 'react';

import Header from "./Header"
import SideBar from "./SideBar"
import MainView from "./MainView"
import CarView from "./CarView"

export default class Layout extends React.Component {
  constructor(props){
    super(props);

    this.child = React.createRef();

    this.state = {
      MvVisibility: {display:"block"},
      CvVisibility: {display:"none"}
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  carSelected(car){
    this.child.current.ShowCar(car);
    this.setState({
      MvVisibility: {display:"none"},
      CvVisibility: {display:"block"}
    }, ()=>{
      console.log('Show car');
    });
  }

  render() {
    return (
      <div className = "Layout">
        <Header />
        <div className = "Body">
          <SideBar carSelectedParent={this.carSelected.bind(this)} />
          <div className="container" style={this.state.MvVisibility}>
            <MainView />
          </div>
          <div className="container" style={this.state.CvVisibility}>
            <CarView ref={this.child} />
          </div>
        </div>
      </div>
    );
  }
}
