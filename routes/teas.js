const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.teas.index)

module.exports = router