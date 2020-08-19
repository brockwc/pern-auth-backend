const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// methods that the UserSchema can access
UserSchema.methods = {
  // check that the user's password matches the one in the db
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  // hash a plain text into a much more secure string that is stored in the db
  hashPassword: function (plainTextPassword) {
    // storing a pw as plaintext is never an option
    const salt = bcrypt.genSaltSync(10)
    /* 
      bcrypt provides a reliable, tested solution for hashing passwords using
      the plaintext input and salt data (basically a random string data) to 
      generate a very difficult password to break with brute force techniques
    */
    return bcrypt.hashSync(plainTextPassword, salt)
  }
}

// Use a 'pre' hook that will modify the user before saving them to the DB
UserSchema.pre('save', function(next) {
  // if there's no password
  if (!this.password) {
    // exit the function
    next()
  } else {
  // if there is a password
    // hash it, add it to the user and THEN save the user
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User