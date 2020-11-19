//require models
const db = require('../models')

//function to render all profiles
const index = (req,res) => {
    db.profile.findAll().then((allProfiles) => {
        if(!foundProfiles) return res.json({
            message: 'No profiles in your database and no love will be found.'
        })
        res.status(200).json({ profiles: allProfiles})
    })
}
    


//function to show just one profile

//function to create

//function to update

//function to destroy 

//export modules
module.exports = {
    index
}
