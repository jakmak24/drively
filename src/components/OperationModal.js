import React from 'react';
import "../css/modal.css"

export default class OperationModal extends React.Component {
  constructor(props){
    super(props);

    this.state={
      reminder : true
    }
  }

  render(){
    return (
      <div className="OperationModal">
        <div className="modal-form">
          <div className = "form-element">
            <label className="form-label">Date</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Name</label>
            <div className = "input-div">
              <select>Wymiana opon</select>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Cost</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Place</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Odometer</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Reminder</label>
            <div className = "input-div">
              <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round" onClick={()=>{this.setState({reminder: !this.state.reminder});
                this.props.toggleReminder(this.state.reminder);}}></span>               
              </label>

            </div>
          </div>

          <div className = "form-element">
            <label className="form-label">Notes</label>
            <div className = "input-div">
              <input type="text"></input>
            </div>
          </div>
      </div>
      </div>
    );
  }
}
