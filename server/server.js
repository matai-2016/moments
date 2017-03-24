var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var moments = require('./routes/moments')
var people = require('./routes/people')
var images = require('./routes/images')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/moments', moments)
server.use('/v1/people', people)
server.use('/v1/images', images)

module.exports = server
