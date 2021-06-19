const passport = require('../config/passport')
const User = require('../models/User')

function userAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next()
  return res.redirect('/login')
}

function logout(req, res, next) {
  req.session.destroy(() => res.redirect('/login'))
}

async function sendToken(req, res, next) {
  const { email } = req.body
  const user = await User.findOne({ where: { email } })

  if (!user) {
    req.flash('error', 'No existe esta cuenta')
    res.render('recovery-password', { validates: req.flash() })
  }
}

module.exports = {
  userAuthenticated,
  logout,
  sendToken,
  login: passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })
}
