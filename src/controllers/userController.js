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
    res.render('create-account', { validates: error.erros })
  }
}

module.exports = {
  formCreateAccount,
  createAccount
}
