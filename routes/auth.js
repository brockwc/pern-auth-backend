const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')
const bcrypt = require('bcrypt')

// PATH = /api/v1/auth
router.post('/login', passport.authenticate('local'), ctrl.auth.login)
router.post('/register', ctrl.auth.register)
router.delete('/logout', ctrl.auth.logout)

module.exports = router
