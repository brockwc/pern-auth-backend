const db = require('../models')

//POST request to like a user
// const likeUser = (req, res) => {
//   db.relationship.findOrCreate({
//     where: {
//       userId: req.user,
//       recipient: req.params.id,
//       status: 0 
//     }
//   }).then((likes) => {
//     res.status(200).json({ likes })
//   })
// } 

const likeUser = (req, res) => {
  db.relationship.findOrCreate({
    where: {
      userId: 1,
      recipient: req.params.id,
      status: 0  
    }
  }).then((likes) => {
    res.status(200).json({ likes })
  })
} 

//DELETE request to remove a like
const removeLike = (req, res) => {
  db.relationship.destroy({
    where:
      { userId: 1, 
        recipient: req.params.id }
  }).then(() => {
    res.json({ message: `Like deleted.` })
  }).catch(err => {
    res.json({ message: err })
  })
}

module.exports = {
  likeUser,
  removeLike
}
