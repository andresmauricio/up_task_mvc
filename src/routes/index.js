const express = require('express')
const { body, validationResult } = require('express-validator/check')
const router = express.Router()
const proyectController = require('../controllers/proyectsController')
const taskController = require('../controllers/taskController')
const userController = require('../controllers/userController')

module.exports = function () {
  router.get('/home', proyectController.proyectHome)
  router.get('/new-proyect', proyectController.formProyect)
  router.post(
    '/new-proyect',
    body('nombre').not().isEmpty().trim().escape(),
    proyectController.newProyect
  )
  router.post(
    '/new-proyect/:id',
    body('nombre').not().isEmpty().trim().escape(),
    proyectController.updateProject
  )
  router.get('/projects/:url', proyectController.projectByUrl)
  router.get('/projects/edit/:id', proyectController.editProject)
  router.delete('/projects/:url', proyectController.deleteProject)

  router.post('/projects/:url', taskController.addTask)
  router.patch('/task/:id', taskController.updateStateTask)
  router.delete('/task/:id', taskController.deleteTask)

  router.get('/create-account', userController.formCreateAccount)
  return router
}
