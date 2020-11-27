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
    db.benefit.findAll({
        where: {
            id: req.params.id
        },
        include: db.tea
    }).then((foundBenefit) => {
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


module.exports = {
    index,
    show,
    create,
    find,
}