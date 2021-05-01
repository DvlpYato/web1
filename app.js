const express = require('express')
const app = express()
// app.set('views', __dirname + '/views');
app.use(express.static('views'))
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/index', (req, res) => {
  res.render('index', {
    message: 'This is sent from app.js file'
  })
})
app.listen(3000)