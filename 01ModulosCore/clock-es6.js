'use restrict';
var Clock = (function () {
    var EventEmitter = require('events').EventEmitter,
        inherits = require('util').inherits
    //Constructor
    var Clock = function () {
        //var self = this;
        setInterval(() => {
            this.emit('tictac');
        }, 1000);
    };

    inherits(Clock, EventEmitter);

    Clock.prototype.theTime = function () {
        var date = new Date(),
            hrsAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
            hrs = addZero(hrsAmPm),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = (date.getHours() < 12) ? 'am' : 'pm',
            //msg = hrs + ':' + min + ':' + sec + ampm;
            msg = `${hrs}:${min}:${sec}${ampm}`;

        function addZero(num) {
            return (num < 10 ? ('0' + num) : num);
        }

        console.log(msg);
    };
    return Clock;
})();

module.exports = Clock;
