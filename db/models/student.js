'use strict';
var Sequelize = require('sequelize')
var db = require('/Users/ana/LASTSTRETCH/attempt/attempt4/senior-enrichment/db/index.js')

module.exports = db.define('students', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},{

  instanceMethods: {
    getCampus: function (number) {
      Campus.findAll({where:{id: number}})
      }
  }
});
