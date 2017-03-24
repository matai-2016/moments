var environment = process.env.NODE_ENV || 'development'
var config = require("../knexfile")[environment]
var knex = require('knex')(config)

module.exports = {
  getMoments: getMoments,
  getImages: getImages,
  getPeople: getPeople
}

function getMoments () {
  return knex ('moments')
}

function getImages () {
  return knex ('images')
}

function getPeople () {
  return knex('people')
}
