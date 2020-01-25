'use restrict';
var http = require('http'),
    options = {
        host: 'www.tame.com.ec',
        port: 80,
        path: '/index.php/es/'
    };
http
    .get(options, function (res) {
        console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`);
    })
    .on('error', function (err) {
        console.log(`El sitio ${options.host} no ha respondio. Código de Estado ${err.code}`);
    });