const db = require('../models')


const index = (req, res) => {
    db.user.findAll().then((foundUsers) => {
        if (!foundUsers) return res.json({
            message: 'No users in db'
        })
        res.json({users: foundUsers})
    })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
}

const show = (req, res) => {
    db.user.findByPk(req.params.id).then((foundUser) => {
        if (!foundUser) return res.json({
            message: 'User with provided ID not found.'
        })
        
        res.json({user: foundUser})
    })
    .catch(err => console.log("Error at Users#index", err))
}



const update = (req, res) => {
    db.user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }, {
        where: {
            id: req.params.id
        }
    }).then((updatedUser) => {
        res.json({user: updatedUser})
    })
    .catch(err => console.log("Error at user#update", err))
}


module.exports = {
    index,
    show,
    update,
}