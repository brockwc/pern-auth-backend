const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/teas', ctrl.teas.index)

module.exports = router