function proyectHome(req, res) {
  res.render('index')
}

function about(req, res) {
  res.send('about')
}

module.exports = {
  proyectHome,
  about
}

// alternative -> exports.home = (req, res) => res.send('example')
