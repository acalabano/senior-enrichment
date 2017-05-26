import React, { Component } from 'react';
import { Link } from 'react-router';
export default class SingleCampus extends Component {
  constructor(props) {
    super(props);
    //Initializing local state to have a campus that is an empty object
    this.state = {
      campus: {},
      students: []
    };
  }

  componentDidMount() {
    var campusId = this.props.params.id;
    fetch(`/api/campuses/${campusId}`)
    .then(response => {
      return response.json()
    }).then( data => {
      return this.setState({campus: data})
    }).then (function() {
      return fetch(`/api/students/${campusId}`)
    }).then(studentResponse => {
      return studentResponse.json()
    }).then( studentData => {
      return this.setState({students: studentData})
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.campus.name}</h1>
        <img src={this.state.campus.image}/>
          <ul className="nav nav-tabs">
            {console.log(this.state)}

          </ul><br/>
        <p>{this.state.campus.textContent}</p>
        <h2>STUDENTS in {this.state.campus.name}</h2>
          {
            this.state.students.map(function(student) {
            return (
                      <p key={student.id}>{student.name}</p>
                   )
            })

          }
          <a href={"#/NewStudentForm"}><button type="button">New Student</button></a>
      </div>
    )
  }
}
