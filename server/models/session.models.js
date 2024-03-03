const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
)

const sessionModel = mongoose.model('session', sessionSchema)
module.exports = sessionModel