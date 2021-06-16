const Sequelize = require('sequelize')
const db = require('../config/database')
const bcrypt = require('bcrypt')
const Projects = require('./Projects')

const User = db.define(
  'users',
  {
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
  },
  {
    hooks: {
      beforeCreate(user) {
        const salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(user.password, salt)
      }
    }
  }
)

User.hasMany(Projects)
module.exports = User
