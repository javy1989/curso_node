'use strict';
var http = require('http');

function webServer(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    debugger;
    res.end('<h1>Hola Node.js</h1>');

}

http
    .createServer(webServer)
    .listen(3000, '127.0.0.1');

console.log('Server running in http://localhost:3000/');
