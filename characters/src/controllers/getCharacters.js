const { default: axios } = require('axios');
const Character = require('../data');
const { response } = require('../utils');


module.exports = async (req, res) => {
    const character = await axios.get("http://database:8004/Character")
    console.log(character);
    response(res,200,character.data)
};

