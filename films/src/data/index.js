const Films = require('./films.json');

module.exports = {
    list: async () => {
        return Films
    },
    create: async() => {
        throw Error('Hubo un error en la BDD al crear la pelicula')
    }
 }