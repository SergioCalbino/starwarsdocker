const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const prueba = require('./helpers/prueba');

const server = express();

server.use(morgan('dev'))
server.use(express.json())
server.use('/films', router)

server.use('*', (req, res) => {
    res.status(404).send('Not Found')
});

//Sobreescribir el manejador de errores de expres

server.use(prueba)

module.exports = server