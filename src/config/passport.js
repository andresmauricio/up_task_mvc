const passport = require('passport')
const LocalSrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.use(
  new LocalSrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } })

        if (!user.verifyPassword(password)) {
          return done(null, false, { message: 'Password error' })
        }

        return done(null, user)
      } catch (error) {
        return done(null, false, { message: 'User not found' })
      }
    }
  )
)

passport.serializeUser((user, callback) => {
  callback(null, user)
})

passport.deserializeUser((user, callback) => {
  callback(null, user)
})

module.exports = passport
