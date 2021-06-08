const Project = require('../models/Projects')

function proyectHome(req, res) {
  res.render('index', { title: 'Home' })
}

function formProyect(req, res) {
  res.render('new-proyect', { title: 'Nuevo Proyectos' })
}

async function newProyect(req, res) {
  const { nombre } = req.body
  let errors = []

  if (!nombre) errors.push({ text: 'El nombre es obligatorio' })

  if (errors.length) {
    res.render('new-proyect', { title: 'Nuevo Proyectos', errors })
  } else {
    const project = await Project.create({ name: nombre })
    res.redirect()
  }
}

module.exports = {
  proyectHome,
  newProyect,
  formProyect
}

// alternative -> exports.home = (req, res) => res.send('example')
