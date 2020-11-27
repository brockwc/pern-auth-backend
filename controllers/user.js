const db = require('../models')


const index = (req, res) => {
    db.user.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(foundUser => {
            res.json(foundUser)
        })
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
    })
        .then(function (results) {
            res.redirect('/profile')
        }).catch(function (err) { })
}


module.exports = {
    index,
    update,
}