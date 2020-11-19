const router = require('express').Router()
const ctrl = require('../controllers');

router.get('/', ctrl.profile.allProfiles);
router.get('/:id', ctrl.profile.userProfile);

module.exports = router