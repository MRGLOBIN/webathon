const {
  createUserSessionHandler,
  getSessionsHandler,
  deleteSessionHandler,
} = require('./controller/session.controller')
const { createUserHandler } = require('./controller/user.controller')
const { requireUser } = require('./middleware/requireUser')
const { validateResource } = require('./middleware/validateResource')
const { createSessionSchema } = require('./schema/session.schema')
const { userSchema } = require('./schema/user.schema.zod')

function routes(app) {
  app.post('/api/users', validateResource(userSchema), createUserHandler)

  app.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
  )

  app.get('/api/sessions', requireUser, getSessionsHandler)

  app.delete('/api/sessions', requireUser, deleteSessionHandler)

  app.get('/hello', (req, res) => {
    res.sendStatus(200)
  })
}

module.exports = routes
