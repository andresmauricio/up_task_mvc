const passport = require('../config/passport')

// function login(req, res, next) {
//   passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// }

exports.login = passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true
})

// module.exports = { login }
