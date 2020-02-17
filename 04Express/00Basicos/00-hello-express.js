'use strict'

var express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.end('<h1>Hola mundo desde Express</h1>')
    })
    .listen(3000);

console.log('INICIANDO EXPRESS EN EL PUERTO 3000');