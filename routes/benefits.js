const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')


router.get('/', ctrl.benefits.index)
router.get('/:id', ctrl.benefits.show)
router.delete('/:id', ctrl.benefits.destroy)


module.exports = router