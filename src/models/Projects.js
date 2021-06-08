const Sequelize = require('sequelize')
const db = require('../config/database')

const Projects = db.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
})

module.exports = Projects
