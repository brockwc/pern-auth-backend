const router = require('express').Router()
const ctrl = require('../controllers');

router.post('/:id', ctrl.relationship.likeUser);
router.delete('/:id', ctrl.relationship.removeLike);

module.exports = router;
