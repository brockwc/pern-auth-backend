const router = require('express').Router()
const ctrl = require('../controllers/brewery')

//testing API
router.get('/search', ctrl.apiRequest)

// PATH = /api/v1/auth
router.get('/', ctrl.index)
router.get('/:id', ctrl.show)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)


//router.post('/login', passport.authenticate('local'), ctrl.auth.login)
//router.post('/register', ctrl.auth.register)
//router.delete('/logout', ctrl.auth.logout)

module.exports = router
