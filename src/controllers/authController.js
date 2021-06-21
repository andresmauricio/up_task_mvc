const passport = require('../config/passport')
const User = require('../models/User')
const crypto = require('crypto')

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
  const token = crypto.randomBytes(20).toString('hex')
  user.token = token
  user.expired = Date.now() + 3600000
  await user.save()

  const resetUrl = `http://${req.headers.host}/recovery-password/${token}`
  res.redirect('recovery')
}

async function resetPassword(req, res, next) {
  const { token } = req.params
  const user = await User.findOne({ where: { token } })
  //const isValid = token === user?.token

  if (!user) {
    req.flash('error', 'No válido')
    res.redirect('/recovery-password')
  }

  res.render('reset-password')
}

module.exports = {
  userAuthenticated,
  logout,
  sendToken,
  resetPassword,
  login: passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })
}
