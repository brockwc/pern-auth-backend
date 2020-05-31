const db = require('../models')

const index = (req, res) => {
    db.Game.find({}, (err, foundGames) => {
        if (err) console.log('Error in games#index:', err)
        
        if(!foundGames) res.json({
            message: 'No Games found in database.'
        })

        res.status(200).json({ games: foundGames });
    })
}

const show = (req, res) => {
    db.Game.findById(req.params.id, (err, foundGame) => {
        if (err) console.log('Error in games#show:', err)
        
        if (!foundGame) res.json({
            message: 'Game with provided ID not found.'
        })
        
        res.status(200).json({ game: foundGame })
    })
}

const create = (req, res) => {
    db.Game.create(req.body, (err, savedGame) => {
        if (err) console.log('Error in games#create:', err)

        // Comprehensive validations and error handling should go here

        res.status(200).json({ game: savedGame })
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