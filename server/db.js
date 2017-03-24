var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

module.exports = {
  getMoments: getMoments,
  getImages: getImages,
  getPeople: getPeople
}

function getMoments () {
  return knex('moments')
      .join('images', 'moments.image_id', '=', 'images.id')
      .join('people as sender', 'moments.sender_id', '=', 'sender.id')
      .join('people as recipient', 'moments.recipient_id', '=', 'recipient.id')
      .select('images.url as imageUrl', 'moments.id as momentId', 'sender.profile_image as senderUrl', 'recipient.profile_image as recipientUrl')
}

function getImages () {
  return knex ('images')
}

function getPeople () {
  return knex('people')
}
