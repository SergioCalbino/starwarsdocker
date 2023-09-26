const characters = require('./character.json');

module.exports = {
    list: async () => {
        return characters;
    },
    create: async () => {
        throw Error('Error al crear el personaje')
    }
}