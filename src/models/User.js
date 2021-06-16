const Sequelize = require('sequelize')
const db = require('../config/database')
const Projects = require('./Projects')

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(60),
    allowNull: false
  }
})

User.hasMany(Projects)
module.exports = User
