exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('moments', function (table) {
    table.increments('id').primary()
    table.string('sender_id')
    table.string('recipient_id')
    table.string('image_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('moments')
}
