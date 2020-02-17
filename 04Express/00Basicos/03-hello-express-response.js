'use strict'

var express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.send('<h1>Hola mundo desde Express</h1>')
    })
    //user/18-ricardo-31
    .get('/bextlan', (req, res) => {
        res.redirect('')
    })
    .get('/json', (req, res) => {
        res.json({
            name: "Ricardo",
            age: 31,
            twitter: "@rbravo"
        })
    })
    .get('/render', (req, res) => {
        res.render('assets/index.html');
    })
    .listen(3000);


console.log('INICIANDO EXPRESS EN EL PUERTO 3000');