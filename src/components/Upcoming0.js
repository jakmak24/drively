import React from 'react';
import "../css/Upcoming.css";


export default class Upcoming extends React.Component {
  render() {
    return (
      <div className ="Upcoming">
        <h3>Upcoming events</h3>
        <ul>
          <li><UpcomingListItem category="payment" name="mandat"  date="14.07.2018" /></li>
          <li><UpcomingListItem category="refuel" name="tankowanie" date="13.07.2018" /></li>
          <li><UpcomingListItem category="service" name="tankowanie"  date="12.07.2018" /></li>
          <li><UpcomingListItem category="payment" name="mandat"  date="14.07.2018" /></li>
          <li><UpcomingListItem category="refuel" name="tankowanie"  date="13.07.2018" /></li>
          <li><UpcomingListItem category="service" name="tankowanie" date="12.07.2018" /></li>

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
        <li> {this.props.date}</li>
      </ul>
    )
  }
}
