import React, { Component } from 'react';
import {Link} from 'react-router';

export default class NewCampusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      textContent: undefined
    }
    this.updateName = this.updateName.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateName (e) {
    this.setState({ name: e.target.value });
  }

  updateContent (e) {
    this.setState({ textContent: e.target.value });
  }


  submitForm (currentState) {
    fetch("/api/campuses", {
      method: "POST",
      body: JSON.stringify(currentState),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(function () {
      this.props.router.push('/')
    })
  }

  render () {
    return (
      <form onSubmit={() => this.submitForm(this.state)}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" onChange={this.updateName} />
        </div>
        <div className="form-group">
          <label>Campus Content: </label>
          <input type="text" onChange={this.updateContent}/>
        </div>

        <button type="submit">Save Campus</button>
        <Link to="/">"Click to go back to homepage because redirect doesn't work yet"</Link>

      </form>
    );
  }
}
