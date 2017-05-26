'use strict';
var Sequelize = require('sequelize')
var db = require('/Users/ana/LASTSTRETCH/attempt/attempt4/senior-enrichment/db/index.js')

module.exports = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  textContent: Sequelize.TEXT,
  image:{
    type:Sequelize.TEXT,
    allowNull:true
  }
})
