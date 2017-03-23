import request from 'superagent'

var apiUrl = 'http://localhost:3000/v1/moments'

module.exports = {
  getMoments: getMoments,
  appendMoment: appendMoment
}

function getMoments(callback) {
  request
    .get(apiUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendMoment() {
  request
    .post(momentsUrl)
    .send(moment)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}
