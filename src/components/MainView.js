import React from 'react';
import "../css/MainView.css";

import QuickAdd from "./QuickAdd"
import History from "./History"

export default class MainView extends React.Component {
  render() {
    return (
      <div className ="MainView">
        <QuickAdd/>
        <History/>
        <div>Upcoming</div>
      </div>
    );
  }
}
