const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')


router.get('/', ctrl.benefits.index)
router.get('/:id', ctrl.benefits.show)
router.post('/', ctrl.benefits.create)
router.get('/', ctrl.benefits.find)


module.exports = router