const { Router } = require("express");
const { getPlanets, createPlanet } = require("../controllers");
const middleares = require('../middlewares')

const router = Router();

router.get('/', getPlanets)
router.post('/', middleares.planetValidation, createPlanet)

module.exports = router