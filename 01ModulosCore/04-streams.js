/*
 Buffers
    Una tira de bytes (datos binarios)
    Similar a un array de enteros
    Tamaño fijo
    Manipular datos directamente
        Sockets
        Streams
        Implementar protocolos complejos
        Manipulacion de ficheros/imagenes
        Criptografía
 */
'use strict';
var buf = new Buffer.allocUnsafe(100),
    buf2 = new Buffer.allocUnsafe(26),
    str = '\u00bd+\u00bc=\u00be';
buf.write('abcd', 0, 4, 'ascii');
const buff = Buffer.from('abcd','ascii');
console.log(Buffer.from('abcd','ascii'));
console.log(Buffer.from('fhqwhgads', 'ascii'));