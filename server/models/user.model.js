const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const config = require('config')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.comparePassword = async function (candidatePassowrd) {
  const user = this
  return bcrypt.compare(candidatePassowrd, user.password).catch((err) => false)
}

userSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  const salt = await bcrypt.genSalt(config.get('saltRounds'))
  const hash = await bcrypt.hash(user.password, salt)

  user.password = hash

  return next()
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
