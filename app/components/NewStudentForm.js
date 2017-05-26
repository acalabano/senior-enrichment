import React, { Component } from 'react';
import {Link} from 'react-router';
export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      campusName: ""
    }
    this.updateName = this.updateName.bind(this);
    this.updateCampusName= this.updateCampusName.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateName (e) {
    this.setState({ name: e.target.value });
  }

  updateCampusName(e){
    this.setState({campusName:e.target.value})
  }


  submitForm (currentState) {
    console.log(currentState)
    fetch(`/api/students/${campusName}`, {
      method: "POST",
      body: JSON.stringify(currentState),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  render () {
    return (
      <form onSubmit={() => this.submitForm(this.state)}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" id="item-name-field" onChange={this.updateName} />
        </div>
        <div className="form-group">
          <label>Campus Name: </label>
          <input type="text" id="item-name-field" onChange={this.updateCampusName} />
        </div>

          <button type="submit">Save Student</button>
          <Link to="/">Click to go back to homepage because redirect doesn't work yet</Link>


      </form>
    );
  }
}
