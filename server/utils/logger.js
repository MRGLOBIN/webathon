const pino = require('pino')
const dayjs = require('dayjs')

const log = pino({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
})

log.e

module.exports = log
