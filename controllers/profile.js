const db = require('../models')
// GET request for all profiles

const getAllProfiles = (req, res) => {
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
    where: { userId: req.body.id }
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

const editProfile = (req, res) => {
  const { displayName, gender, profilePic, city, geoState, aboutMe } = req.body

  db.profile.findOrCreate({
    where: {
      userId: req.user.dataValues.id
    }
  }).then((row) => {
    row.update({
      display_name: displayName,
      gender: gender,
      image: profilePic,
      city: city,
      state: geoState,
      about_me: aboutMe
    }).then((editedProfile) => {
      res.status(200).json({ profile: editedProfile })
    })
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
  getAllProfiles,
  getProfile,
  createProfile,
  removeProfile,
  editProfile
}
