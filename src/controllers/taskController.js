const Task = require('../models/Tasks')
const Project = require('../models/Projects')

async function addTask(req, res, next) {
  const { url } = req.params
  const { task } = req.body
  const state = 0

  const project = await Project.findOne({ where: { url } })

  const result = await Task.create({ task, state, projectId: project.id })
  if (!result) return next()

  res.redirect(`/projects/${url}`)
}

async function updateStateTask(req, res, next) {
  const { id } = req.params
  const task = await Task.findOne({ where: { id } })

  task.state = task.state === 0 ? 1 : 0
  const result = await task.save()

  if (!result) return next()
  res.status(202).send('update')
}

async function deleteTask(req, res, next) {
  const { id } = req.params
  const task = await Task.destroy({ where: { id } })
  res.send('task deleted')
}

module.exports = { addTask, updateStateTask, deleteTask }
