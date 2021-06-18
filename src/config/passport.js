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
        const user = await User.find({ where: { email } })
        if (!user.verifyPassword(password)) {
          
        }
      } catch (error) {
        return done(null, false, { message: 'User not found' })
      }
    }
  )
)
