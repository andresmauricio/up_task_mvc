function proyectHome(req, res) {
  res.render('index', { title: 'Home' })
}

function formProyect(req, res) {
  res.render('new-proyect', { title: 'Nuevo Proyectos' })
}

function newProyect(req, res) {
  const { nombre } = req.body
  let errors = []

  if (!nombre) errors.push({ text: 'El nombre es obligatorio' })

  if (errors.length) {
    res.render('new-proyect', { title: 'Nuevo Proyectos', errors })
  } else {
    // insert db
  }
}

module.exports = {
  proyectHome,
  newProyect,
  formProyect
}

// alternative -> exports.home = (req, res) => res.send('example')
