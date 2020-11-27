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


// this will help us pull the user 
// 
// const getUser = (req,res) => {
//   db.user.findByPK(req.user.dataValues.id).then((pizza) => {
//     res.json({ user: pizza})
//   })
// }

//GET request for finding your own profile 
const getOwnProfile = (req, res) => {
  // console.log(req.user.dataValues.id);
  if (!req.user) {
    res.sendStatus(401);
    return;
  }
  db.profile.findByPk(
    req.user.dataValues.id
  ).then((pizza) => {
    console.log(pizza)
    res.status(200).json(pizza)
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
  const { displayName, gender, profilePic, city, geoState, aboutMe } = req.body
  console.log(`The current user is ${req.user.dataValues.id}`)
  db.profile.create({
    where: {
      userId: req.user.dataValues.id,
      display_name: displayName,
      gender: gender,
      image: profilePic,
      city: city,
      state: geoState,
      about_me: aboutMe
    }
  }).then((profile) => {
    res.status(200).json({ profile })
  })
}

const editProfile = (req, res) => {
  const { 
    currentUserId, displayName, gender, profilePic, city, geoState, aboutMe 
  } = req.body
  
  db.profile.update({
    display_name: displayName,
    gender: gender,
    image: profilePic,
    city: city,
    state: geoState,
    about_me: aboutMe
  }, {
    where: {
      userId: currentUserId,
    }
  }) 
  .then((editedProfile) => {
    res.status(200).json({ profile: editedProfile })
  })
}

//DELETE request to remove a profile
const deleteProfile = (req, res) => {
  const currentUserId = req.user.id

  console.log(`The deleteProfile function was called successfully, user id is ${currentUserId}`)

  db.profile.destroy({
    where: {
      userId: currentUserId
    }
  }).then((num) => {
    console.log(`${num} profiles deleted`)
    res.json({ message: `Profile with id ${currentUserId} deleted.` })
  }).catch(err => {
    res.json({ message: err })
  })
}

module.exports = {
  getAllProfiles,
  getOwnProfile,
  viewProfile,
  createProfile,
  deleteProfile,
  editProfile,
  // getUser
}
