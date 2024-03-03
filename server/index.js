const { createServer } = require('https')
const fs = require('fs')

const app = require('./app')
const connectToMango = require('./services/connectMongo')

const PORT = process.env.PORT || 3000

async function startServer() {
  await connectToMango()

  createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    app
  ).listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })
}

startServer()
