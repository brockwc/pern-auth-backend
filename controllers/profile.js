//require models
const db = require('../models')
// const url = `http://localhost:4000/api/v1`

//function to render all profiles
const allProfiles = (req,res) => {
    db.profile.findAll().then((foundProfiles) => {
        if(!foundProfiles) return res.json({
            message: 'No profiles in your database'
        })
        res.status(200).json({ profiles: foundProfiles})
    })
}
    

//function to show just one profile
const userProfile = (req,res) => {
    db.profile.findOrCreate({
        where: {
            userId: req.params.id
        }
    }).then((profile) => {
        res.status(200).json({ profile })
    })

}

//function to create

//function to update

//function to destroy 

//export modules
module.exports = {
    allProfiles,
    userProfile
}
