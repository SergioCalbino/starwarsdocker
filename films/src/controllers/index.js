const createFilm = require("./createFilm");
const getFilms = require("./getFilms");
const { catchedAsync } = require('../utils')

module.exports = {
    getFilms: catchedAsync(getFilms),
    createFilm: catchedAsync(createFilm)
}