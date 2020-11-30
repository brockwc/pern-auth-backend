const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.user.index)
router.get('/:id', ctrl.user.show)
router.put('/:id', ctrl.user.update)

module.exports = router