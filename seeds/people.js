exports.seed = function (knex, Promise) {
  return knex('people').del()
    .then(function () {
      return knex('people').insert([
        {id: 1, name: 'Naeri', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 2, name: 'Leo', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 3, name: 'James', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 4, name: 'Alex', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 5, name: 'Don', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 6, name: 'Rich', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 7, name: 'Daisy', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 8, name: 'Yoga Joe', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'},
        {id: 9, name: 'Draco', profile_image: 'http://emojipedia-us.s3.amazonaws.com/cache/9a/45/9a45aa497c27561522a5833971840e17.png'}
      ])
    })
}
