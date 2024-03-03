const jwt = require('jsonwebtoken')
const config = require('config')

const privateKey = config.get('privateKey')
const publicKey = config.get('publicKey')

function signjwt(object, options) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
  })
}

function verifyJwt(token) {
  try {
    const decoded = jwt.verify(token, privateKey)
    return {
      valid: true,
      expired: false,
      decoded,
    }
  } catch (err) {
    return {
      valid: false,
      expired: err.message === 'jwt expired',
      decoded: null,
    }
  }
}

module.exports = {
  verifyJwt,
  signjwt,
}
