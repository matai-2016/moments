exports.seed = function (knex, Promise) {
  return knex('people').del()
    .then(function () {
      return knex('people').insert([
        {id: 1, name: 'Naeri', profile_image: 'https://avatars2.githubusercontent.com/u/21360182?v=3&s=400'},
        {id: 2, name: 'Leo', profile_image: 'https://avatars0.githubusercontent.com/u/22052080?v=3&s=400'},
        {id: 3, name: 'James', profile_image: 'https://avatars3.githubusercontent.com/u/23286943?v=3&s=400'},
        {id: 4, name: 'Alex', profile_image: 'https://avatars2.githubusercontent.com/u/23412989?v=3&s=400'},
        {id: 5, name: 'Don', profile_image: 'https://avatars2.githubusercontent.com/u/228761?v=3&s=400'},
        {id: 6, name: 'Rich', profile_image: 'https://avatars1.githubusercontent.com/u/171905?v=3&s=400'},
        {id: 7, name: 'Daisy', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/3b/9e/3b9e9472397d9de6236b6a9fe708a57b.png'},
        {id: 8, name: 'Yoga Joe', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/8d/ba/8dba486f453010e70488fb533da605ce.png'},
        {id: 9, name: 'Tony', profile_image: 'https://avatars3.githubusercontent.com/u/13082144?v=3&s=400'}
      ])
    })
}
