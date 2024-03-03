const config = require('config')

const sessionModel = require('../models/session.models')
const { verifyJwt, signjwt } = require('../utils/jwt.utils')
const { findUser } = require('./user.services')
const { get } = require('lodash')
const res = require('express/lib/response')

async function createUserSession(userId, userAgent) {
  const session = sessionModel.create({ user: userId, userAgent })

  return await session
}

async function findSessions(query) {
  return sessionModel.find(query).lean()
}

async function updateSession(query, update) {
  return sessionModel.updateOne(query, update)
}

async function reIssueAccessToken({ refreshToken }) {
  const { decoded } = verifyJwt(refreshToken)

  if (!decoded || !get(decoded, '_id')) {
    return false
  }

  const session = await sessionModel.findById(get(decoded, 'session'))

  if (!session || !session.valid) {
    return false
  }
  const user = await findUser({ _id: session.user })

  if (!user) {
    return false
  }

  const accessToken = signjwt(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenTtl') }
  )

  return accessToken
}

module.exports = {
  createUserSession,
  findSessions,
  updateSession,
  reIssueAccessToken,
}
