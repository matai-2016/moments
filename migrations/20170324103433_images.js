exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('images', function (table) {
    table.increments('id').primary()
    table.string('description')
    table.string('url')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('images')
}
