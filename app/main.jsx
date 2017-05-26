'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, Link, IndexRoute,IndexRedirect } from 'react-router'

import Root from './components/Root'
import SingleCampus from './components/SingleCampus'
import NewCampusForm from './components/NewCampusForm'
import Students from './components/Students'
import NewStudentForm from './components/NewStudentForm'
import UpdateCampusForm from './components/UpdateCampusForm'
  /*   */
render (
    <Router history={hashHistory}>
      <Route path="/" component={Root} />
      <Route path='campuses/:id' component={SingleCampus} />
      <Route path='NewCampusForm' component={NewCampusForm} />
      <Route path='students/'  component={Students}>
      <Route path='NewStudentForm' component={NewStudentForm}>
      <Route path="UpdateCampusForm" component={UpdateCampusForm}>
    </Router>,
  document.getElementById('main')
)
