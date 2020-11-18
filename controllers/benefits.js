const db = require('../models')

// Find all Teas
const index = (req, res) => {
    db.benefit.findAll().then((foundBenefits) => {
        if (!foundBenefits) return res.json({
            message: 'No benefits in db'
        })
        res.send('Incomplete benefits#index controller function')
    })
        .catch(err => console.log('error at benefits#index', err))
}

module.exports = {
    index
}