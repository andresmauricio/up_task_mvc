const express = require('express')
const { body, validationResult } = require('express-validator/check')
const router = express.Router()
const proyectController = require('../controllers/proyectsController')
const taskController = require('../controllers/taskController')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

module.exports = function () {
  router.get(
    '/home',
    authController.userAuthenticated,
    proyectController.proyectHome
  )
  router.get(
    '/new-proyect',
    authController.userAuthenticated,
    proyectController.formProyect
  )
  router.post(
    '/new-proyect',
    authController.userAuthenticated,
    body('nombre').not().isEmpty().trim().escape(),
    proyectController.newProyect
  )
  router.post(
    '/new-proyect/:id',
    authController.userAuthenticated,
    body('nombre').not().isEmpty().trim().escape(),
    proyectController.updateProject
  )
  router.get(
    '/projects/:url',
    authController.userAuthenticated,
    proyectController.projectByUrl
  )
  router.get(
    '/projects/edit/:id',
    authController.userAuthenticated,
    proyectController.editProject
  )
  router.delete(
    '/projects/:url',
    authController.userAuthenticated,
    proyectController.deleteProject
  )

  router.post(
    '/projects/:url',
    authController.userAuthenticated,
    taskController.addTask
  )
  router.patch(
    '/task/:id',
    authController.userAuthenticated,
    taskController.updateStateTask
  )
  router.delete(
    '/task/:id',
    authController.userAuthenticated,
    taskController.deleteTask
  )

  router.get('/create-account', userController.formCreateAccount)
  router.post('/create-account', userController.createAccount)

  router.get('/login', userController.formLogin)
  router.post('/login', authController.login)
  return router
}
