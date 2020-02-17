'use strict'
var fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombre-promises-es6.txt',
    promise = new Promise(function (resolve, reject) {
        fs.access(file, fs.F_OK, function (err) {
            return (err) ? reject(new Error('EL ARCHIVO NO EXISTE')) : resolve(true)
        })
    });

promise
    .then((dataPromise) => {
        console.log('ARCHIVO EXISTE');
        return new Promise((resolve, reject) => {
            fs.readFile(file, function (err, data) {
                return (err) ? reject(new Error('ERROR AL LEER EL ARCHIVO')) : resolve(data);
            })
        });

    })
    .then((dataPromise) => {
        console.log('ARCHIVO LEIDO EXITOSAMENTE');
        return new Promise((resolve, reject) => {
            fs.writeFile(newFile, dataPromise, function (err) {
                return (err) ? reject(new Error('ERROR AL CREAR ARCHIVO')) : resolve('ARCHIVO COPIADO');
            });
        });

    })
    .then((dataPromise) => {
        console.log(dataPromise);
    })
    .catch((err) => {ñ
        console.log(err.message)
    });
