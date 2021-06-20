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
  res.redirect('login')
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
