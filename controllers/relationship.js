const db = require('../models')

//POST request to like a user
// const likeUser = (req, res) => {
//   db.relationship.findOrCreate({
//     where: {
//       user_a_Id: req.user,
//       user_b_Id: req.params.id,
//       status: req.body
//     }
//   }).then((likes) => {
//     res.status(200).json({ likes })
//   })
// }
const likeUser = (req, res) => {
    db.relationship.findOrCreate({
      where: {
        user_a_Id: 1,
        user_b_Id: 3,
        status: 0
      }
    }).then((likes) => {
      res.status(200).json({ likes })
    })
  }
  //GET request to get a like from a user
  module.exports = {
    likeUser
  }