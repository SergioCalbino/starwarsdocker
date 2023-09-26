const { catchcedAsync } = require('../utils');

module.exports = {
    getCharacters: catchcedAsync(require('./getCharacters')),
    createCharacter: catchcedAsync(require('./createCharacter'))
}