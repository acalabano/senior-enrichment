'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Campus = require('./campus')
const Student = require('./student')


Student.belongsTo(Campus, {as: 'campus'});
Campus.hasMany(Student);

module.exports = {Campus: Campus, Student: Student}
