const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// routes import here
const taskRoute = require('./routes/task')
const userRoute = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    )
    res.setHeader("Access-Control-Allow-Methods", "POST, DELETE, GET, PUT")
    next()
})

app.use("/api/task", taskRoute)
app.use("/api/user", userRoute)

// serve angular
// app.use('/:param',(req, res, next) => {
//   res.sendFile(path.resolve(__dirname, '..', 'website', 'dist', 'website', req.params.param))
// })

// set database URL:
const dbURL = 'w'

// connect mongoose to Mongodb
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('mongoose connected')
  }
})


module.exports = app