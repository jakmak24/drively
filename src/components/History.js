import React from 'react';
import "../css/History.css";

export default class History extends React.Component {
  render() {
    return (
      <div className ="History">
        <div>Recent Operations</div>
        <ul>
          <li><HistoryListItem category="payment" name="mandat" car="BMW" date="14.07.2018" cost="120zł"/></li>
          <li><HistoryListItem category="refuel" name="tankowanie" car="Opel" date="13.07.2018" cost="100zł"/></li>
          <li><HistoryListItem category="service" name="tankowanie" car="Skoda" date="12.07.2018" cost="80zł"/></li>
          <li><HistoryListItem category="payment" name="mandat" car="BMW" date="14.07.2018" cost="120zł"/></li>
          <li><HistoryListItem category="refuel" name="tankowanie" car="Opel" date="13.07.2018" cost="100zł"/></li>
          <li><HistoryListItem category="service" name="tankowanie" car="Skoda" date="12.07.2018" cost="80zł"/></li>
          <li><HistoryListItem category="payment" name="mandat" car="BMW" date="14.07.2018" cost="120zł"/></li>
          <li><HistoryListItem category="refuel" name="tankowanie" car="Opel" date="13.07.2018" cost="100zł"/></li>
          <li><HistoryListItem category="service" name="tankowanie" car="Skoda" date="12.07.2018" cost="80zł"/></li>
          <li><HistoryListItem category="payment" name="mandat" car="BMW" date="14.07.2018" cost="120zł"/></li>
          <li><HistoryListItem category="refuel" name="tankowanie" car="Opel" date="13.07.2018" cost="100zł"/></li>
        </ul>
        <button>View All</button>
      </div>
    );
  }
}

class HistoryListItem extends React.Component{

  render(){
    return(

      <ul className= "HistoryListItem">
        <li><img src={window.location.origin + '/icons/'+this.props.category+'R.svg'} alt={this.props.category} ></img></li>
        <li>{this.props.name}</li>
        <li>{this.props.car}</li>
        <li className= "dateAndCost">
          <div>
            <div>{this.props.date}</div>
            <div>{this.props.cost}</div>
          </div>
        </li>
      </ul>
    )
  }
}
