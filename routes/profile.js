//imports 
const router = require('express').Router()
const ctrl = require('../controllers')

// routes 
// GET -- we need a route to view all profiles in the browse page
router.get('/', ctrl.profile.allProfiles)
// GET -- we need a route to view a single profile
router.get('/:id', ctrl.profile.userProfile)
// POST -- we need a route to create a profile
// POST -- update profile
// delete -- delete profile 


//exports
module.exports = router
