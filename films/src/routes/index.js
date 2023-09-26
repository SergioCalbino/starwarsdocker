const { Router } = require("express");
const { getFilms, createFilm } = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get('/', getFilms)
router.post('/', middlewares.filmValidation, createFilm)

module.exports = router