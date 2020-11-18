const router = require('express').Router()
const ctrl = require('../controllers')

console.log('routes/benefits')
router.get('/', ctrl.benefits.index)

module.exports = router