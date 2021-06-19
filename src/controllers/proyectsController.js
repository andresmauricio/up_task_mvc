const Project = require('../models/Projects')
const Task = require('../models/Tasks')

async function proyectHome(req, res) {
  const userId = res.locals.user.id
  const projects = await Project.findAll({ where: { userId } })
  res.render('index', { title: 'Home', projects })
}

async function formProyect(req, res) {
  const userId = res.locals.user.id
  const projects = await Project.findAll({ where: { userId } })
  res.render('new-proyect', { title: 'Nuevo Proyectos', projects })
}

async function newProyect(req, res) {
  const { nombre } = req.body
  let errors = []

  if (!nombre) errors.push({ text: 'El nombre es obligatorio' })

  if (errors.length) {
    res.render('new-proyect', { title: 'Nuevo Proyectos', errors })
  } else {
    const userId = res.locals.user.id
    const project = await Project.create({ name: nombre, userId })
    res.redirect('/home')
  }
}

async function projectByUrl(req, res) {
  const userId = res.locals.user.id
  const projects = await Project.findAll({ where: { userId } })
  const detailProject = await Project.findOne({
    where: { url: req.params.url, userId }
  })
  const tasks = await Task.findAll({
    where: { projectId: detailProject.id },
    include: { model: Project }
  })
  res.render('task', { title: 'Proyecto ', projects, detailProject, tasks })
}

async function editProject(req, res) {
  const userId = res.locals.user.id
  const projects = await Project.findAll({ where: { userId } })
  const detailProject = await Project.findOne({ where: { id: req.params.id } })
  res.render('new-proyect', {
    title: 'Editar Proyecto',
    projects,
    detailProject
  })
}

async function updateProject(req, res) {
  const { nombre } = req.body
  let errors = []

  if (!nombre) errors.push({ text: 'El nombre es obligatorio' })

  if (errors.length) {
    res.render('new-proyect', { title: 'Nuevo Proyectos', errors })
  } else {
    const project = await Project.update(
      { name: nombre },
      { where: { id: req.params.id } }
    )
    res.redirect('/home')
  }
}

async function deleteProject(req, res, next) {
  const { url } = req.params
  const project = await Project.destroy({ where: { url } })
  if (!project) return next()
  res.send('Registro eliminado')
}

module.exports = {
  proyectHome,
  newProyect,
  formProyect,
  projectByUrl,
  editProject,
  updateProject,
  deleteProject
}

// alternative -> exports.home = (req, res) => res.send('example')
