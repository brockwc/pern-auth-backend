const db = require('../models')

// Find all Benefits
const index = (req, res) => {
    db.benefit.findAll().then((foundBenefits) => {
        console.log('query complete')
        if (!foundBenefits) return res.json({
            message: 'No Benefits in db'
        })
        res.json({ benefits: foundBenefits })
    })
        .catch(err => console.log('error at Benefits#index', err))
}

// Find One Benefit
const show = (req, res) => {
    db.benefit.findByPk(req.params.id).then((foundBenefit) => {
        if (!foundBenefit) return res.json({
            message: 'Benefit with provided ID not found.'
        })

        res.json({ benefit: foundBenefit })
    })
        .catch(err => console.log("Error at benefits#show", err))
}

// Create new User Benefit
const create = (req, res) => {
    console.log(req.body)
    db.user_benefit.findOrCreate({
        where: {
            benefitId: req.body.userBenefitData.id,
            userId: req.body.userId
        }
    }).then(function (createdBenefit) {
        res.json(createdBenefit)
    })
}

// Find user_ benefit relations
const find = (req, res) => {
    db.benefit.findAll({
        where: {
            id: req.params.id
        },
        include: {
            model: db.user,
        }
    }).then((savedBenefit) => {
        // Validations and error handling here
        res.redirect('/allteas').json({ benefit: savedBenefit })
    })
}

// // Find all saved user_benefits
// const userBenFind = (req, res) => {
//     db.user_benefit.findAll({
//         where: {
//             benefitId: req.body.userBenefitData.id,
//             userId: req.body.userId
//         }
//     }).then((foundUserBens) => {
//         if (!foundUserBens) return res.json({
//             message: 'No teas in db'
//         })
//         res.json({ userBenefits: foundUserBenefits })
//     })
//         .catch(err => {
//         console.log(err)
//         res.sendStatus(500)
//         })
// }


// Delete a saved benefit
const destroy = (req, res) => {
    db.benefit.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.json({ message: `Benefit with id ${req.params.id} has been deleted.` })
    })
        .catch(err => console.log("Error at benefit#destroy", err))
}

module.exports = {
    index,
    show,
    create,
    find,
    destroy
}