const config = require('config')
const { validatePassword } = require('../services/user.services')
const {
  createUserSession,
  findSessions,
  updateSession,
} = require('../services/session.service')
const { signjwt, verifyJwt } = require('../utils/jwt.utils')

async function createUserSessionHandler(req, res) {
  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).send('invalid email or password')
  }
  const session = await createUserSession(user._id, req.get('user-agent' || ''))

  const accessToken = signjwt(
    { ...user, session: session._id },
    {
      expiresIn: config.get('accessTokenTtl'), // 15m
    }
  )

  const refreshToken = signjwt(
    { ...user, session: session._id },
    {
      expiresIn: config.get('refreshTokenTtl'), // 15m
    }
  )

  const { decoded, expired } = verifyJwt(accessToken)

  res.send({
    accessToken,
    refreshToken,
  })
}

async function getSessionsHandler(req, res) {
  const userId = res.locals.user._id

  const sessions = await findSessions({ user: userId, valid: true })
  console.log(res.locals.user._id)
  res.send(sessions)
}

async function deleteSessionHandler(req, res) {
  const sessionId = res.locals.user.session

  await updateSession({ _id: sessionId }, { valid: false })
  return res.send({
    accessToken: null,
    refreshToken: null,
  })
}

module.exports = {
  createUserSessionHandler,
  getSessionsHandler,
  deleteSessionHandler,
}
