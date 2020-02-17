'use strict';
var fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres_callback.txt';
fs.access(file, fs.F_OK, function (err) {
    if (err) {
        console.log('EL ARCHIVO NO EXISTE');

    } else {
        console.log('ARCHIVO EXISTE');
        fs.readFile(file, function (err, data) {
            if (err) {
                console.log('ERROR AL LEER EL ARCHIVO')
            } {
                console.log('ARCHIVO LEIDO EXITOSAMENTE');
                fs.writeFile(newFile, data, function (err) {
                    if (err) {
                        console.log('ERROR AL ESCRIBIR EL ARCHIVO')
                    }
                });
            }
        });
    }
});