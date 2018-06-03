import React from 'react';
import "../css/MainView.css";

import QuickAdd from "./QuickAdd"

export default class MainView extends React.Component {
  render() {
    return (
      <div className ="MainView">
        <QuickAdd/>
        <div>History</div>
        <div>Upcoming</div>
      </div>
    );
  }
}
