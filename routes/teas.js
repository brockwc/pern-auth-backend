const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.teas.index)
router.get('/:id', ctrl.teas.show)

module.exports = router