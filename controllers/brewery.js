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
    db.brewery.findAll({
        where: {
            breweryId: req.params.id
        }
    }).then((foundBrewery) => {
        if(!foundBrewery) return res.json({
            message: 'Brewery with provided ID not found.'
        })
        res.status(200).json({ brewery: foundBrewery })
    })
}

const create = (req, res) => {
    db.brewery.create(req.body).then((savedBrewery) => {
        // Validations and error handling here
        res.status(200).json({ brewery: savedBrewery })
    })
}

const update = (req, res) => {
    db.brewery.update({
        ...req.body
    }, {
        where: {
        id: req.params.id
        }
    }).then((updatedBrewery) => {
        if (!updatedBrewery) return res.json({
            message: "No brewery with that ID found."
        })
        // Validations and error handling here
        res.status(200).json({ brewery: updatedBrewery })
    })
}

const destroy = (req, res) => {
    db.brewery.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.status(200)
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
