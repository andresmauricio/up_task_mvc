const express = require('express')
const { body, validationResult } = require('express-validator/check')
const router = express.Router()
const proyectController = require('../controllers/proyectsController')

module.exports = function () {
  router.get('/home', proyectController.proyectHome)
  router.get('/new-proyect', proyectController.formProyect)
  router.post(
    '/new-proyect',
    body('nombre').not().isEmpty().trim().escape(),
    proyectController.newProyect
  )
  router.get('/projects/:url', proyectController.projectByUrl)
  router.get('/projects/edit/:id', proyectController.editProject)
  return router
}
