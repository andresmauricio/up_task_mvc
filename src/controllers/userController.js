const User = require('../models/User')

function formCreateAccount(req, res, next) {
  res.render('create-account')
}

async function createAccount(req, res, next) {
  const { email, password } = req.body
  try {
    const user = await User.create({ email, password })
    res.redirect('/login')
  } catch (error) {
    req.flash(
      'error',
      error.errors.map(e => e.message)
    )
    res.render('create-account', { validates: req.flash(), email, password })
  }
}

function formLogin(req, res, next) {
  const { error } = res.locals.message
  res.render('login', { error })
}

module.exports = {
  formCreateAccount,
  createAccount,
  formLogin
}
