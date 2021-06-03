const express = require('express')

const app = express()

app.use('/', (req, res) => {
  res.send('home')
})

app.use('/about', (req, res) => {
  res.send('about')
})

app.listen(3000, () => {
  console.log('server running on http://localhost:3000')
})
