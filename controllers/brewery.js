const db = require('../models')

// find all of the brewery posts
const index = (req, res) => {
    db.brewery.findAll().then((foundBreweries) => {
        if(!foundBreweries) return res.json({
            message: 'No Breweries found in database.'
        })
        res.status(200).json({ breweries: foundBreweries})
    })
}

