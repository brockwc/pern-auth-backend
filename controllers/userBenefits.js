const db = require('../models')


// Find all Benefits
const index = (req, res) => {
    db.user_benefit.findAll().then((foundUserBenefits) => {
        console.log('query complete')
        if (!foundUserBenefits) return res.json({
            message: 'No Benefits in db'
        })
        res.json({ userBenefits: foundUserBenefits })
    })
        .catch(err => console.log('error at userBenefits#index', err))
}

module.exports = {
    index
}