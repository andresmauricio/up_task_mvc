function proyectHome(req, res) {
  res.render('index', { title: 'Home' })
}

function formProyect(req, res) {
  res.render('new-proyect', { title: 'Nuevo Proyectos' })
}

function newProyect(req, res) {
  res.json({status: 200})
}

module.exports = {
  proyectHome,
  newProyect,
  formProyect
}

// alternative -> exports.home = (req, res) => res.send('example')
