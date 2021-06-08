const Sequelize = require('sequelize')
const db = require('../config/database')

const Projects = db.define(
  'projects',
  {
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
  },
  {
    hooks: {
      beforeCreate(project) {
        const url = slug(project.nombre).toLowerCase()
        project.url = url
      }
    }
  }
)

module.exports = Projects
