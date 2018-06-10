import React from 'react';
import "../css/Upcoming.css";


export default class Upcoming extends React.Component {
  render() {
    return (
      <div className ="Upcoming">
        <div>Upcoming events</div>
        <ul>
          <li><UpcomingListItem category="payment" name="mandat" car="BMW" date="14.07.2018" /></li>
          <li><UpcomingListItem category="refuel" name="tankowanie" car="Opel" date="13.07.2018" /></li>
          <li><UpcomingListItem category="service" name="tankowanie" car="Skoda" date="12.07.2018" /></li>
          <li><UpcomingListItem category="payment" name="mandat" car="BMW" date="14.07.2018" /></li>
          <li><UpcomingListItem category="refuel" name="tankowanie" car="Opel" date="13.07.2018" /></li>
          <li><UpcomingListItem category="service" name="tankowanie" car="Skoda" date="12.07.2018" /></li>
          
        </ul>
        <button>View All</button>
      </div>
    );
  }
}

class UpcomingListItem extends React.Component{

  render(){
    return(

      <ul className= "UpcomingListItem">
        <li><img src={window.location.origin + '/icons/'+this.props.category+'.svg'} alt={this.props.category} ></img></li>
        <li>{this.props.name}</li>
        <li>{this.props.car}</li>
        <li> {this.props.date}</li>
      </ul>
    )
  }
}
