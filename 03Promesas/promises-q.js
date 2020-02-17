'use strict'

var fs = require('fs'),
    Q = require('q'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres_promises-q.txt';

function existFile(file) {

    let defer = Q.defer()
    fs.access(file, fs.F_OK, function (err) {
        return (err) ? defer.reject(new Error('EL ARCHIVO NO EXISTE')) : defer.resolve(true)
    })
    return defer.promise;
}

function readFile(file) {
    let defer = Q.defer();
        console.log('ARCHIVO EXISTE');
        fs.readFile(file, function (err, data) {
            return (err) ? defer.reject(new Error('ERROR AL LEER EL ARCHIVO')) : defer.resolve(data);
        })
    return defer.promise;
}

function writeFile(file, data) {
    let defer = Q.defer();
    console.log('ARCHIVO LEIDO EXITOSAMENTE');
    fs.writeFile(file, data, function (err) {
        return (err) ? defer.reject(new Error('ERROR AL CREAR ARCHIVO')) : defer.resolve('ARCHIVO COPIADO');
    });
    return defer.promise;
}

/*
    SI EXISTE EL ARCHIVO
    //LEELO
    //COPIALO
    //AVISA QUE SE COPIO
    //MANEJA ERRORES
 */
/*
ES5
existFile(file)
    .then(function () { return readFile(file) })
    .then(function (dataPromise) { return writeFile(newFile, dataPromise) })
    .then(function (dataPromise) { return console.log(dataPromise) })
    .fail(function (err) { return console.log(err.message) });
*/

existFile(file)
    .then(() => { return readFile(file) })
    .then((dataPromise) => { return writeFile(newFile, dataPromise) })
    .then((dataPromise) => { return console.log(dataPromise) })
    .fail((err) => { return console.log(err.message) });
