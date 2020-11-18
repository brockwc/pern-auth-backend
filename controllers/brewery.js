const db = require('../models')

//Find all of the brewery posts
const index = (req, res) => {
    console.log('in the index route')
    db.brewery.findAll().then((foundBreweries) => {
        if(!foundBreweries) return res.json({
            message: 'No Breweries found in database.'
        })
        res.status(200).json({ breweries: foundBreweries})
    })
}

const show = (req, res) => {
    db.game.findByPk(req.params.id).then((foundBrewery) => {
        if(!foundBrewery) return res.json({
            message: 'Brewery with provided ID not found.'
        })
        res.status(200).json({ brewery: foundBrewery })
    })
}

module.exports = {
    index,
    show
}
