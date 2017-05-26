import React, { Component } from 'react';

import SingleStudent from './SingleStudent'

export default class Student extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of students
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    fetch('/api/students')
    .then(res => res.json())
    .then(response => {
      this.setState({students: response})
    })
  }

  render() {
    return (
      <div>
        <h1>List of Students</h1>

        <ul>
        {
          this.state.students.map(function(singleStudent) {
          return (
                  <li key={singleStudent.id}>

                    <a href={"#/students/"}>{singleStudent.name}</a>
                  </li>
                 )
          })
        }
        </ul>
        <a href={"#/NewStudentForm/"}><button type="button">New Student</button></a>

      </div>
    )
  }
}
