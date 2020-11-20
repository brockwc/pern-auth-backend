const router = require('express').Router()
const ctrl = require('../controllers');

router.get('/', ctrl.profile.getAllProfiles);
router.get('/:id', ctrl.profile.getProfile);

router.post('/:id', ctrl.profile.createProfile);

router.put('/:id', ctrl.profile.updateProfile);

router.delete('/:id', ctrl.profile.removeProfile);

module.exports = router