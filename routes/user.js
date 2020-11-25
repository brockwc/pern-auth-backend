const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/update', ctrl.user.index)
router.get('/update/:id', ctrl.user.update)

module.exports = router