const db = require('../models')

// Find all Teas
const index = (req, res) => {
    db.tea.findAll({
        include: db.benefit
}).then((foundTeas) => {
        if (!foundTeas) return res.json({
            message: 'No teas in db'
        })
        res.json({teas: foundTeas})
    })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
}

// Find One Tea
const show = (req, res) => {
    db.tea.findByPk(req.params.id).then((foundTea) => {
        if (!foundTea) return res.json({
            message: 'tea with provided ID not found.'
        })
        
        res.json({tea: foundTea})
    })
    .catch(err => console.log("Error at teas#index", err))
}

module.exports = {
    index,
    show
}