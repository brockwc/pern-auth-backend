const db = require('./models')


// Create new user Benefit
const create = () => {
    db.user_benefit.findOrCreate({
        benefitId: 1,
        userId: 2
    }).then(function (createdBenefit) {
        console.log(createdBenefit)
    })
}

// // Create new User Benefit
const find = (req, res) => {
    db.benefit.findAll({
        where: {
            id: 1
        },
        include: {
            model: db.user,
        }
    }).then((savedBenefit) => {
        // Validations and error handling here
        // res.status(200).json({ benefit: savedBenefit })
        const savedBenefits = savedBenefit[0]
        console.log(savedBenefits.users)
    })
}


// create()
find()

