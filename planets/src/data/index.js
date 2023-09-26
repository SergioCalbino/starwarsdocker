const Planets = require('./planets.json');

module.exports = {
    list: () => {
        return Planets
    },
    create: async() => {
        throw Error('Hubo un error en la BDD al crear la pelicula')
    }
}