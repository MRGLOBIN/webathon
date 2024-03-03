const mongoose = require('mongoose')

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('user', User)
