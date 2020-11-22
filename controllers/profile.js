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

//GET request for finding your own profile 
const getOwnProfile = (req, res) => {
  console.log(req.user.dataValues.id);
  if (!req.user){
    res.sendStatus(401);
    return;
  }
  db.profile.findByPk(
    req.user.dataValues.id
  ).then((profile) => {
    console.log(profile)
    res.status(200).json({ profile })
    
  })
}

//GET request for viewing another profile 
const viewProfile = (req, res) => {
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
  getOwnProfile,
  viewProfile,
  createProfile,
  removeProfile,
  editProfile
}
