const mongooese = require('mongoose');
const { MONGO_URI } = require('../../config/envs')

const conn = mongooese.createConnection(MONGO_URI);
console.log(MONGO_URI);

//  const Character = conn.model("Character", require('./characterSchema'))
//  const Film = conn.model("Film", require('./filmSchema'))
//  const Planet = conn.model("Planet", require('./planetSchema'))

// Character.find().populate('homeworld').then((res) => console.log(res[0]))

module.exports = {
     Character: conn.model("Character", require('./characterSchema')),
     Film: conn.model("Film", require('./filmSchema')),
     Planet: conn.model("Planet", require('./planetSchema'))

}