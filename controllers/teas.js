const db = require('../models')

// Find all Teas
const index = (req, res) => {
    db.tea.findAll().then((foundTeas) => {
        if (!foundTeas) return res.json({
            message: 'No teas in db'
        })
        res.send(foundTeas)
    })
        .catch(err => console.log('error at teas#index', err))
}

module.exports = {
    index
}