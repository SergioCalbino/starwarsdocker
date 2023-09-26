const { catchedAsync } = require("../utils");
const createPlanet = require("./createPlanet");
const getPlanets = require("./getPlanets");

module.exports = {
    getPlanets: catchedAsync(getPlanets),
    createPlanet: catchedAsync(createPlanet)
}