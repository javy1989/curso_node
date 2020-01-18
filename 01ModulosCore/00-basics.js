/*
Organizacion de Codigo JS
        librerias/modulos
        constantes
        objetos/variables
        funciones
        eventos
        ejecuciones

 Usar camelCase
    Cuando una instruccion tenga una sola palabra, va en minusculas p.e require()
    solo las clases rompen esta regla, siempre va en mayuscula la letra inicial p.e EventEmiter()
    Cuando una instruccion tenga 2 o mas palabras, apartir de las seguna la primer letra va en mayuscula p.e createServer()

    Tipos de CamelCase
        UpperCamelCase
            Date()
            EventEmmiter()
        lowerCamelCase
            getElementById()
            createServer()
 */
'use strict'; // modo estricto para programar con buenas practicas
console.log('Hola Mundo desde Node.js, esa se verá en la terminal de comandos');
console.log(global);
setInterval(function () {
console.log('Hola Node.js');
},1000);
