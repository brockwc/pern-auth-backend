const db = require('../models')

// Find all Teas
const index = (req, res) => {
<<<<<<< HEAD
    db.benefit.findAll().then((foundBenefits) => {
        if (!foundBenefits) return res.json({
            message: 'No benefits in db'
        })
        res.send('Incomplete benefits#index controller function')
    })
        .catch(err => console.log('error at benefits#index', err))
=======
    console.log('contollers/benefits')
    db.benefit.findAll().then((foundBenefits) => {
        console.log('query complete')
        if (!foundBenefits) return res.json({
            message: 'No Benefits in db'
        })
        res.send(foundBenefits)
    })
        .catch(err => console.log('error at Benefits#index', err))
>>>>>>> d0a6b6db29f740ad81ded636a6d96c2035303535
}

module.exports = {
    index
}