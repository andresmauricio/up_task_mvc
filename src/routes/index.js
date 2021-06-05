const express = require('express')
const router = express.Router()
const proyectController = require('../controllers/proyectsController')

module.exports = function () {
  router.use('/home', proyectController.proyectHome)
  router.use('/new-proyect', proyectController.newProyect)
  return router
}
