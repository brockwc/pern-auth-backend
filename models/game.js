const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: String,
    publisher: String,
    coverArtUrl: String,
    completed: Boolean
})

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;