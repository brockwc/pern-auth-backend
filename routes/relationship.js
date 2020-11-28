const router = require('express').Router()
const ctrl = require('../controllers');

router.put('/:id', ctrl.relationship.likeUser);
router.delete('/:id', ctrl.relationship.unlikeUser);

module.exports = router;
