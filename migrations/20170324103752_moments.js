exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('people', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('profile_image')
    }),
    knex.schema.createTableIfNotExists('images', function (table) {
      table.increments('id').primary()
      table.string('description')
      table.string('url')
    })
  ]).then(function () {
    return knex.schema.createTableIfNotExists('moments', function (table) {
      table.increments('id').primary()
      table.string('sender_id').references('people.id')
      table.string('recipient_id').references('people.id')
      table.string('image_id').references('images.id')
    })
  })
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('people'),
    knex.schema.dropTableIfExists('images'),
    knex.schema.dropTableIfExists('moments')
  ])
}
