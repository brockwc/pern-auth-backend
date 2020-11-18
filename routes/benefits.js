const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.benefits.index)
router.get('/:id', ctrl.benefits.show)

module.exports = router