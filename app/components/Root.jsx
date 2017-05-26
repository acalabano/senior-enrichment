import React, { Component } from 'react';
import { Link } from 'react-router';
import SingleCampus from './SingleCampus'
//THE ROOT IS ALSO CAMPUSES.JS
export default class Root extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of campuses
    this.state = {
      campuses: []
    }
  }
  componentDidMount() {
    fetch('/api/campuses')
    .then(res => res.json())
    .then(response => {
      this.setState({campuses: response})
    })
  }

  render() {
    return (
      <div>

        <a href="#/students/" >List of Students</a>
        <h1>List of Campuses</h1>
        <h2>Our Potato Campuses enrich young minds bringing the universe together</h2>

        <ul>
        {
          this.state.campuses.map(function(singleCampus) {
          return (
                  <li key={singleCampus.id}>

                    <a href={"#/campuses/" + singleCampus.id}>{singleCampus.name}</a>
                  </li>
                 )
          })
        }
        </ul>
        <a href={"#/NewCampusForm"}><button type="button">New Campus</button></a>
        <a href={"#/UpdateCampusForm"}><button type="button">Update Campus</button></a>
      </div>
    )
  }
}
