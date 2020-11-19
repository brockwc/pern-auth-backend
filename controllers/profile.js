const db = require('../models')
// GET request for all profiles
const allProfiles = (req, res) => {
  db.profile.findAll().then((foundProfiles) => {
    if (!foundProfiles) return res.json({
      message: 'No profiles in Database'
    })
    res.status(200).json({ profiles: foundProfiles })
  })
}

//GET request for finding one profile 
const getProfile = (req, res) => {
  db.profile.findOne({
    where: { userId: req.params.id }
  }).then((profile) => {
    res.status(200).json({ profile })
  })
}

//POST request for creating a profile if it doesn't exist
const createProfile = (req, res) => {
  db.profile.findOrCreate({
    where: {
      userId: req.params.id,
      display_name: "Elma Jenkins",
      gender: "female",
      image: "",
      city: "New York",
      state: "New York",
      about_me: "I am sweet and patient"
    }
  }).then((profile) => {
    res.status(200).json({ profile })
  })
}

// const updateProfile = (req, res) => {
//   db.profile.update({
//     ...req.body
//   }, {
//     where: {
//       userId: req.params.id
//     }
//   }).then((updatedProfile) => {
//     if (!updatedProfile) return res.json({
//       message: `No profile with id ${req.params.id} found.`
//     })
//     res.status(200).json({profile: updatedProfile })
//   })
// }

const updateProfile = (req, res) => {
  db.profile.update({
    city: "San Francisco",
    state: "California",
  }, {
    where: {
      userId: req.params.id
    }
  }).then((updatedProfile) => {
    if (!updatedProfile) return res.json({
      message: `No profile with id ${req.params.id} found.`
    })
    res.status(200).json({ profile: updatedProfile })
  })
}

//DELETE request to remove a profile
const removeProfile = (req, res) => {
  db.profile.destroy({
    where:
      { userId: req.params.id }
  }).then(() => {
    res.json({ message: `Profile with id ${req.params.id} deleted.` })
  }).catch(err => {
    res.json({ message: err })
  })
}

module.exports = {
  allProfiles,
  getProfile,
  createProfile,
  removeProfile,
  updateProfile
}
