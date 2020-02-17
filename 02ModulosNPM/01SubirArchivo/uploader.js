'use strict';
var http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res) {
    if (req.method.toLowerCase() == 'get' && req.url=='/') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Uploader de archivos en Node.js</h1><form action="/upload" enctype="multipart/form-data" method="post"><div><input type="file" name="upload" id="upload" required></div><div> <input type="submit" value="Subir archivo"></div></form>')
    }
    if (req.method.toLowerCase() == 'post' && req.url == '/upload') {
        let form = new formidable.IncomingForm;
        form
            .parse(req, function (err, fields, files) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<h1>Archivos recibidos</h1> <a href="/">Regresar</a> <br> <code>' + util.inspect({files: files})+'</code>');
                res.end();
            })
            .on('progress', function (bytesReceived, bytesExpected) {
                let percentComplete = (bytesExpected / bytesExpected) * 100;
                console.log(percentComplete.toFixed(2))
            })
            .on('error', function (err) {
                console.log(err);
            })
            .on('end', function (fields, files) {
                //Ubicacion temporal del archivo que se sube
                let tempPath = this.openedFiles[0].path,
                    // El nombre del archivo subido
                    fileName = this.openedFiles[0].name,
                    //Nueva Ubicación
                    newLocation = `./upload/${fileName}`;
                fse.copy(tempPath, newLocation, function (err) {
                    return (err) ? console.log(e) : console.log('El archivo se subio con exito :)');
                });
            });
        return;
    }


}

http.listen(3000);
console.log('SERVIDOR CORRIENDO EN http://localhost:3000');