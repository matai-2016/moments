const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  db.getPeople()
  .then(function (people) {
    res.send({people: people})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
