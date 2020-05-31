const db = require('../models')

const index = (req, res) => {
    db.Game.find({}, (err, foundGames) => {
        if (err) console.log('Error in games#index:', err)

        res.status(200).json(foundGames);
    })
}

const show = (req, res) => {
    db.Game.findById({ id: req.params.id }, (err, foundGame) => {
        if (err) console.log('Error in games#show:', err)

        res.send("Incomplete games#show controller function")
    })
}

const create = (req, res) => {
    db.Game.create(req.body, (err, savedGame) => {
        if (err) console.log('Error in games#create:', err)

        res.send("Incomplete games#create controller function")
    })
}

const update = (req, res) => {
    db.Game.findByIdAndUpdate(req.params.id, req.body, (err, updatedGame) => {
        if (err) console.log('Error in games#update:', err)

        res.send("Incomplete games#update controller function")
    })
}

const destroy = (req, res) => {
    db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
        if (err) console.log('Error in games#destroy:', err)

        res.send("Incomplete games#destroy controller function")
    })
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}