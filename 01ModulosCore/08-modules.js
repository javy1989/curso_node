'use strict'
var myData = require('./my-data'),
    Clock = require('./clock-es5'),
    cucu = new Clock();

cucu.on('tictac', function () {
    cucu.theTime();
});