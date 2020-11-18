<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/benefits', ctrl.benefits.index)
=======
const router = require('express').Router()
const ctrl = require('../controllers')

console.log('routes/benefits')
router.get('/', ctrl.benefits.index)
>>>>>>> d0a6b6db29f740ad81ded636a6d96c2035303535

module.exports = router