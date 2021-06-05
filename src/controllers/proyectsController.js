function proyectHome(req, res) {
  res.render('index', { title: 'Home' })
}

function newProyect(req, res) {
  res.render('new-proyect', { title: 'Nuevo Proyectos' })
}

module.exports = {
  proyectHome,
  newProyect
}

// alternative -> exports.home = (req, res) => res.send('example')
