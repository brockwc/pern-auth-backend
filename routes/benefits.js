const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/benefits', ctrl.benefits.index)

module.exports = router