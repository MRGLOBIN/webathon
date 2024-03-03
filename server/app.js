const fs = require('fs')
const path = require('path')
const helmet = require('helmet')
const passport = require('passport')
const cookieSession = require('cookie-session')
const { Strategy } = require('passport-google-oauth20')

const express = require('express')

const app = express()

require('dotenv').config()

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
}

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

app.use(helmet())

app.use(
  cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email'],
  })
)

app.get('/auth/logout', (req, res) => {
  req.logOut()
  return res.redirect('/')
})

app.get('/failure', (req, res) => {
  res.send('failed to login!')
})

app.post('/login', (req, res) => {
  const { email, passwrod } = req.body
})

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 8080')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

function checkLoggedIn(req, res, next) {
  const isLogged = req.isAuthenticated() && req.user

  if (!isLogged) {
    return res.status(401).json({ err: 'you must login first' })
  }

  next()
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('google Profile', profile)
  done(null, profile)
}

module.exports = app
