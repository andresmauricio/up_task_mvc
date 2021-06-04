const express = require('express')
const router = express.Router()

module.exports = function () {
  router.use('/home', (req, res) => {
    res.send('home')
  })

  router.use('/about', (req, res) => {
    res.send('about')
  })

  return router
}
