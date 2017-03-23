exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('moments', function (table) {
    table.increments('id').primary()
    table.string('sender_id').references('people.id')
    table.string('recipient_id').references('people.id')
    table.string('image_id').references('images.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('moments')
}
