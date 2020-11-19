const db = require('../models')

const createProfile = (req, res) => { 
  db.profile.findOrCreate({
  where: {
    user: req.user.id  
  } 
}).then((userProfile) => {
  const {display_name, gender, image, city, state, about_me} = req.body;
  res.json()

})
}