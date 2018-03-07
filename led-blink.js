// Hardware : BBB
// Led : pin117 and pin51
// key : pin 50

var Gpio = require('onoff').Gpio;
var timers = require('timers')


var led115 = new Gpio(115, 'out');
var button50 = new Gpio(50, 'in', 'both');

var value = 0;

timers.setInterval(function() {
    if (value === 0) {
        value = 1;
    } else {
        value = 0;
    }    
    led115.writeSync(value);
}, 500);

