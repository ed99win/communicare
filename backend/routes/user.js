const express = require('express')

const User = require("../models/User")

const router = express.Router()

router.post('/login', (req, result, next) => {
    User.find({$and: [{username: req.body.username}, {password: req.body.password}]}, (err, res) => {
      if (err) {
        result.status(500).json({
          message: err
        })
      } else {
        console.log('asd')
        result.status(200).json({
          username: res.username
        })
      }
    })
})

router.post('', (req, result, next) => {
    User.find({username: req.body.username},
        (err, res) => {
        if (err) {
            result.status(500).json({
                message: err
            })
        } else if (res.length === 1) {
          result.status(409).json({
                message: 'username taken'
            })
        } else if (res.length === 0) {
            console.log("Success!")
            const newUser = new User({username : req.body.username, 
                                    password: req.body.password, 
                                    qualifications: req.body.qualifications})
          newUser.save()
          result.status(200).json({
            user: newUser,
          })
        }
    })
})

module.exports = router