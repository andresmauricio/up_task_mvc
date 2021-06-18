const passport = require('../config/passport')

function userAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next()
  return res.redirect('/login')
}

function logout(req, res, next) {
  req.session.destroy(() => res.redirect('/login'))
}

module.exports = {
  userAuthenticated,
  logout,
  login: passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })
}
