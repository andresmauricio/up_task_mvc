const User = require('../models/User')

function formCreateAccount(req, res, next) {
  res.render('create-account')
}

async function createAccount(req, res, next) {
  const { email, password } = req.body
  const user = await User.create({ email, password })
  res.send('success')
}

module.exports = {
  formCreateAccount,
  createAccount
}
