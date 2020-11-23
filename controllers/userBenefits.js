const db = require('../models')


// Find all Benefits
const index = (req, res) => {
    db.user.findAll({
        where: {
            id: req.params.id
        }, 
        include: db.benefit
    }).then((foundUserBenefits) => {
        console.log('query complete')
        if (!foundUserBenefits) return res.json({
            message: 'No Benefits in db'
        })
        res.json({ userBenefits: foundUserBenefits })
    })
        .catch(err => console.log('error at userBenefits#index', err))
}

// Delete a saved benefit
const destroy = (req, res) => {
    db.user_benefit.destroy({
        where: { 
            benefitId: req.params.id 
        }
    }).then(() => {
        res.json({ message: `Benefit with id ${req.params.id} has been deleted.` })
    })
        .catch(err => console.log("Error at benefit#destroy", err))
}

module.exports = {
    index,
    destroy
}