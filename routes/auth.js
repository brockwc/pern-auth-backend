const express = require('express')
const router = express.Router()
const passport = require('../passport')
const ctrl = require('../controllers')

// PATH = /api/v1/auth
router.post('/login', passport.authenticate('local'), ctrl.auth.login)
router.post('/register', ctrl.auth.register)
// router.get('/update/:id', ctrl.auth.findUser)
// router.put('/update/:id', ctrl.auth.updateUser)
router.delete('/logout', ctrl.auth.logout)

module.exports = router
