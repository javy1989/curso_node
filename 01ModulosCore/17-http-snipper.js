'use restrict';
var http = require('http'),
    options = {
        host: 'www.bextlan.com',
        port: 80,
        path: '/'
    },
    htmlCode = '';


function httpClient(res) {
    console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`);
    res.on('data', function (data) {
        htmlCode += data;
        console.log(data.toString())
    })
}

function httpError(err) {
    console.log(`El sitio ${options.host} no ha respondio. Código de Estado ${err.code}`);
}

function webServer(req, res) {
    res.writeHead(200, {'Content-Type': 'text-html'});
    res.end(htmlCode);
}

//instancia cliente de HTTP
http
    .get(options, httpClient)
    .on('error', httpError);
//instancia de servidor HTTP
http.createServer(webServer)
    .listen(3000);


console.log('Servidor corriendo en http://localhost:3000/');