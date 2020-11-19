const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.teas.index)
router.get('/:id', ctrl.teas.show)

module.exports = router