const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.userBenefits.index)

module.exports = router