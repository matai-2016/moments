exports.seed = function (knex, Promise) {
  return knex('moments').del()
    .then(function () {
      return knex('moments').insert([
        {id: 1, sender_id: '8', recipient_id: '7', image_id: '8'},
        {id: 2, sender_id: '4', recipient_id: '2', image_id: '4'},
        {id: 3, sender_id: '6', recipient_id: '7', image_id: '3'}
      ])
    })
}
