const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const prueba = require('./helpers/prueba');

const server = express();
server.use(morgan('dev'))
server.use(express.json())
server.use(router)

server.use('/planets', router)

server.use('*', (req, res) => {
    res.status(404).send('Not Found')
})

server.use(prueba)

module.exports = server