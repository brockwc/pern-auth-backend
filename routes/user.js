const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/:id', ctrl.user.index)
router.put('/update', ctrl.user.update)

module.exports = router