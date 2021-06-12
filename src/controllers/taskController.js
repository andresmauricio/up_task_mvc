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

module.exports = { addTask }
