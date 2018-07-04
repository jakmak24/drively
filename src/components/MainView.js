import React from 'react';
import "../css/MainView.css";

import QuickAdd from "./QuickAdd";
import History from "./History";
import Upcoming from "./Upcoming";

export default class MainView extends React.Component {
  render() {
    return (
      <div className ="MainView clearfix">
        <QuickAdd/>
        <History/>
        <Upcoming/>
      </div>
    );
  }
}
