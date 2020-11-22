const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/:id', ctrl.userBenefits.index)
router.delete('/:id', ctrl.userBenefits.destroy)

module.exports = router