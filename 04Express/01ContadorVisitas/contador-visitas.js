'use strict'

var express = require('express'),
    app = express(),
    cookieParse = require('cookie-parser'),
    cookieSession = require('cookie-session');

app
    .use(cookieParse())
    .use(cookieSession({ name: "secreto", keys: ["secreto"] }))
    .get('/', (req, res) => {
        req.session.visitas || (req.session.visitas = 0)
        let n = req.session.visitas++;
        res.end(`<h1>Hola desde Express, me has visitado ${n} veces </h1>`)
    })
    .listen(3000);

console.log('INICIANDO EXPRESS EN EL PUERTO 3000');