'use strict'
const api = require('express').Router()
const db = require('/Users/ana/LASTSTRETCH/attempt/attempt4/senior-enrichment/db')
const Campus = require('../db/models/campus')
const Student = require('../db/models/student')


api.get('/hello', (req, res) => res.send({hello: 'world'}))

//Get all campuses
api.get('/campuses', function(req, res, next) {
  Campus.findAll().then(function(foundCampus) {
    if(!foundCampus){
      res.sendStatus(404);
      res.send("We didn't find a campus");
    } else {
      console.log("We found the campus!", foundCampus);
      res.send(foundCampus);
    }
  }).catch(next)
})

//GET ALL students
api.get('/students', function(req, res, next) {
  Student.findAll().then(function(foundStudents) {
    if(!foundStudents){
      res.sendStatus(404);
      res.send("We didn't find the students");
    } else {
      console.log("We found the students", foundStudents);
      res.send(foundStudents);
    }
  }).catch(next)
})
//Get single post based on ID
api.get('/campuses/:id', function(req, res, next) {
  Campus.findById(req.params.id).then(function(foundCampus) {
    if (!foundCampus) {
      res.sendStatus(404);
    } else {
      console.log(foundCampus);
      res.send(foundCampus);
    }
  })
  .catch(next)
})

//NEW CAMPUS
api.post('/campuses', function(req, res, next) {
  console.log('THE REQUEST BODY', req.body)
  Campus.create(req.body).then(function(newCampus) {
    res.send(newCampus);
  }).catch(next)
})
//CREATE A STUDENT
api.post('/students/:campusName', function(req, res, next) {
  // Student.create({name: req.body.name, campusId: req.params.campusId})
  // .then(function(createdStudent) {
  //   res.send(createdStudent);
  // }).catch(next)

  Campus.findOrCreate({
    where:{
      id: req.params.campusName
    }
  })
      .spread(function (campus, wasCreatedBool) {


          return Student.create({
            name: req.body.name
          }).then(function (createdStudent) {
            return createdStudent.setAuthor(campus);
          });

      })
      .then(function (createdPage) {
        res.send(createdPage);
      })
      .catch(next);
})
//GET ALL THE STUDENTS OF A CAMPUS
api.get('/students/:campusId', function(req, res, next) {
  Student.findAll({where: {campusId: req.params.campusId}})
  .then(function(allStudents) {
    res.send(allStudents);
  }).catch(next)
})

//Updates a Campus
api.put('campuses/:id', function(req, res, next) {
  Campus.update(
    {name:req.body.name},
    {textContent: req.body.textContent},
    {image: req.body.image},
    {where: {id: req.params.id}}
  ).then(function(updatedCampus) {
    res.send(updatedCampus);
  })
  .catch(next);
})


//Update A STUDENT
api.put('students/:id', function(req, res, next) {
  Student.update(
    {name:req.body.name},
    {},
    {where: {id: req.params.id}}
  ).then(function(updatedStudent) {
    res.send(updatedStudent);
  }).catch(next)
})
//Delete a campus and all associated students
api.delete('campuses/:id', function(req, res, next) {
  Campus.destroy({where: {id: req.params.id}}).then(function() {
    Student.destroy({where: {campusId: req.params.id}})
  }).then(function() {
    res.send(200, "Deleted");
  })
  .catch(next);
})
//DELETE A STUDENT
api.delete('students/:id', function(req, res, next) {
  Student.destroy({where: {id: req.params.id}}).then(function() {
    res.send(200, "Deleted");
  }).catch(next)
})
module.exports = api
