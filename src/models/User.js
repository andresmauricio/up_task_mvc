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
    },
    token: {
      type: Sequelize.STRING
    },
    expired: {
      type: Sequelize.STRING
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

User.prototype.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

User.hasMany(Projects)
module.exports = User
