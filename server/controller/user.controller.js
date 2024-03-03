const logger = require('../utils/logger')
const { createUser } = require('../services/user.services')
const { omit } = require('lodash')
const { json } = require('express')
const { stringify } = require('ajv')

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body)
    // delete user passowrd manually
    // const newuser = user.toJSON()
    // delete newuser.password

    // now doing it by using lodash
    return res.send(omit(user, 'password'))
  } catch (err) {
    logger.error(err)
    res.status(409).send(err.message)
  }
}

module.exports = {
  createUserHandler,
}
