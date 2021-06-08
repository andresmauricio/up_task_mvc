const express = require('express')
const path = require('path')
const router = require('./routes')
const sequelize = require('./config/database')
const app = express()

require('./models/Projects')
sequelize
  .sync()
  .then(() => console.log('Database is connected'))
  .catch(error => console.log('Error to connected database', error))

app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.use('/', router())

app.listen(3001, () => {
  console.log('server running on http://localhost:3001')
})
