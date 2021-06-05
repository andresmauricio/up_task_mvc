const express = require('express')
const router = express.Router()
const proyectController = require('../controllers/proyectsController')

module.exports = function () {
  router.get('/home', proyectController.proyectHome)
  router.get('/new-proyect', proyectController.formProyect)
  router.post('/new-proyect', proyectController.newProyect)
  return router
}
