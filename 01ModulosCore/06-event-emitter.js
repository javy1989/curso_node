'use strict'
var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter();
pub.on('myevent', function (message) {
    console.log(message);
});

pub.once('myevent', function (message) {
    console.log('Se emite la primera vez');
});

pub.emit('myevent', 'Soy un emisor de eventos');
pub.emit('myevent', 'Volviendo a emitir');
pub.removeAllListeners('myevent');
pub.emit('myevent', 'Volviendo a emitir por tercera vez');