const db = require('../models')

//Find all of the brewery posts
const index = (req, res) => {
    console.log('in the index route')
    db.beer.findAll().then((foundBeers) => {
        if(!foundBeers) return res.json({
            message: 'No Beers found in database.'
        })
        res.status(200).json({ beers: foundBeers})
    })
}

const show = (req, res) => {
    db.beer.findAll({
        where: {
            category: req.params
        }
    }).then((foundBeer) => {
        if(!foundBeer) return res.json({
            message: 'Beers with selected category not found.'
        })
        res.status(200).json({ beer: foundBeer })
    })
}

const create = (req, res) => {
    db.beer.create(req.body).then((savedBeer) => {
        // Validations and error handling here
        res.status(200).json({ beer: savedBeer })
    })
}

const update = (req, res) => {
    db.beer.update({
        ...req.body
    }, {
        where: {
            id: req.params.id
        }
    }).then((updatedBeer) => {
        if (!updatedBeer) return res.json({
            message: "No beer with that ID found."
        })
        // Validations and error handling here
        res.status(200).json({ beer: updatedBeer })
    })
}

const destroy = (req, res) => {
    db.beer.destroy({
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
    destroy,
}
