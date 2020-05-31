const db = require('./models')
const data = require('./gameData.json')

db.Game.deleteMany({}, (err, deletedGames) => {
    db.Game.create(data.games, (err, seededGames) => {
        if (err) console.log(err);
        
        console.log(data.games.length, 'games created successfully')
        
        process.exit()
    })
})