const mongoose = require('mongoose')
const config = require('config')

const log = require('./logger')

const dbUrl = config.get('dbUrl')

async function connectToDB() {
  try {
    log.info('connecting to Atlas dataBase')
    await mongoose.connect(dbUrl)
    log.info('Connected to Database')
  } catch (err) {
    log.err(`could not connect to database reason: ${err}`)
    process.exit(1)
  }
}

module.exports = connectToDB
