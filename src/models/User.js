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
      allowNull: false,
      unique: {
        args: true,
        msg: 'Usuario ya regístrado'
      },
      validate: {
        isEmail: {
          msg: 'Ingrese un correo válido'
        },
        notEmpty: { msg: 'Esté campo no puede ir vacio' }
      }
    },
    password: {
      type: Sequelize.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Esté campo no puede ir vacio' }
      }
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
