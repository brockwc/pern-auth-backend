const db = require('../models')

const allProfiles = (req, res) => {
  db.profile.findAll().then((foundProfiles) => {
    if(!foundProfiles) return res.json({
      message: 'No profiles in Database'
    })
    res.status(200).json({ profiles: foundProfiles})
  })
}
