const express = require('express')
const path = require('path')
const router = require('./routes')

const app = express()

app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.use('/', router())

app.listen(3000, () => {
  console.log('server running on http://localhost:3000')
})
