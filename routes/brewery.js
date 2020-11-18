//imports
const router = require('express').Router()
const ctrl = require('../controllers/brewery')

// routes
router.get('/', ctrl.index)



module.exports = router