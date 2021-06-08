const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('up_task_nodejs', 'root', 'andres', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  // operatorsAliases: false, DEPRECATED
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize
