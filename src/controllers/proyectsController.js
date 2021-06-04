function proyectHome(req, res) {
  res.send('home')
}

function about(req, res) {
  res.send('about')
}

module.exports = {
  proyectHome,
  about
}

// alternative -> exports.home = (req, res) => res.send('example')
