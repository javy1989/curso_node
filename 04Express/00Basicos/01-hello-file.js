'use strict'
var express = require('express'),
    app = express();

app.
    get('/', (req, res) => {
        res.sendFile(`${__dirname}/assets/index.html`)
    })
    .listen(3000);

console.log('INICIANDO EXPRESS EN EL PUERTO 3000');