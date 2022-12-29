const express = require('express')

const users = require('./routes/users')

const app = express()

app.use(express.static(__dirname + '/public'))

// Parse 'json and form' incoming data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use('/api/v1/users', users)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
