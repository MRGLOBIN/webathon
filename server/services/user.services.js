const userModel = require('../models/user.model')
const { omit } = require('lodash')

async function createUser(input) {
  try {
    const user = await userModel.create(input)
    return omit(user.toJSON(), 'password')
  } catch (err) {
    throw new Error(err)
  }
}

async function validatePassword({email, password}) {
  const user = await userModel.findOne({ email })

  if (!user) {
    return false
  }

  const isvalid = await user.comparePassword(password)
  
  if (!isvalid) {
    return false
  }
  return omit(user.toJSON(), 'password')
}

async function findUser(query)
{
  return userModel.findOne(query)
}

module.exports = {
  createUser,
  validatePassword,
  findUser,
}
