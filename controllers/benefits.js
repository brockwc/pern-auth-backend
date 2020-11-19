const db = require('../models')

// Find all Benefits
const index = (req, res) => {
    db.benefit.findAll().then((foundBenefits) => {
        console.log('query complete')
        if (!foundBenefits) return res.json({
            message: 'No Benefits in db'
        })
        res.json({benefits: foundBenefits})
    })
        .catch(err => console.log('error at Benefits#index', err))
}

// Find One Benefit
const show = (req, res) => {
    db.benefit.findByPk(req.params.id).then((foundBenefit) => {
        if (!foundBenefit) return res.json({
            message: 'Benefit with provided ID not found.'
        })
        
        res.json({benefit: foundBenefit})
    })
    .catch(err => console.log("Error at benefits#index", err))
}

module.exports = {
    index,
    show
}