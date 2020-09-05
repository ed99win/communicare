const express = require('express')

const Task = require("../models/Task")
const User = require("../models/User")

const router = express.Router()

router.post('', (req, result, next) => {
    const newTask = new Task({start: req.body.start, 
                              end: req.body.end, 
                              title: req.body.title,
                              description: req.body.description,
                              customer: req.body.customer,
                              qualifications: req.body.qualifications})
    newTask.save()
    result.status(200).json({
        message: "Success!"
    })
    console.log(newTask)
})

router.post('/accept', (req, result, next) => {
    Task.findOneAndUpdate({title: req.body.title}, {caregiver: req.body.username},
      (err, task) => {
    User.findOneAndUpdate({username: req.body.username}, {$push: {schedule: task}},
        (err, res) => {
        if (err) {
            result.status(500).json({
                message: err
            })
        } else {
          User.findOneAndUpdate({username: task.customer}, {$push: {schedule: task}},
            (err, res) => {
              if (err) {
                  result.status(500).json({
                      message: err
                  })
              } else {
                result.status(200).json({
                  message: "Success!"
                })
              }
          })
        }
    })
  })
})

module.exports = router