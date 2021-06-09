const Project = require('../models/Projects')

async function proyectHome(req, res) {
  const projects = await Project.findAll();
  res.render('index', { title: 'Home', projects })
}

 async function formProyect(req, res) {
  const projects = await Project.findAll();
  res.render('new-proyect', { title: 'Nuevo Proyectos', projects })
}

async function newProyect(req, res) {
  const { nombre } = req.body
  let errors = []

  if (!nombre) errors.push({ text: 'El nombre es obligatorio' })

  if (errors.length) {
    res.render('new-proyect', { title: 'Nuevo Proyectos', errors })
  } else {
    const project = await Project.create({ name: nombre })
    res.redirect('/home')
  }
}

module.exports = {
  proyectHome,
  newProyect,
  formProyect
}

// alternative -> exports.home = (req, res) => res.send('example')
