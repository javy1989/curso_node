'use restrict'

var express = require('express'),
    router = express.Router();

function jade(req, res, next) {
    let locals = {
        title: 'Jade',
        link: 'http://jade-lang.com',
        description: '465465464654dadada'
    }
    res.render('index', locals);
}

function error404(req, res, next) {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            description: 'Recurso no encontrado',
            error: error
        }
    error.status = 404;

    res.render('error', locals);
    next()
}
router
    .get('/', (req, res) => {
        res.end('<h1>Terminamos la configuraci&oacute;n de nuestra primer App en Express</h1>')
    })
    .get('/jade', jade)
    .use(error404);

module.exports = router;