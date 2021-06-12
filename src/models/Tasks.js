const Sequelize = require('sequelize')
const db = require('../config/database')
const Project = require('./Projects')

const Tasks = db.define('tasks', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  task: Sequelize.STRING(100),
  state: Sequelize.INTEGER(1)
})

Tasks.belongsTo(Project)
module.exports = Tasks
