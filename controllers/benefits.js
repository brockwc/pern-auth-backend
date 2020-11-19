const db = require('../models')

// Find all Teas
const index = (req, res) => {
    console.log('contollers/benefits')
    db.benefit.findAll().then((foundBenefits) => {
        console.log('query complete')
        if (!foundBenefits) return res.json({
            message: 'No Benefits in db'
        })
        res.send(foundBenefits)
    })
        .catch(err => console.log('error at Benefits#index', err))
}

module.exports = {
    index
}