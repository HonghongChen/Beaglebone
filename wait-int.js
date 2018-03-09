var LEDPORT = 115
var SWITCHPORT = 50
var Gpio = require('onoff').Gpio;
var led = new Gpio(LEDPORT, 'out');
var button = new Gpio(SWITCHPORT, 'in', 'both');

console.log('Please press the button...');

button.watch(function(err, value) {
    if (err) {
        throw err;
    }

    console.log('Button press!, its value was : ' + value);
    button.unexport();
});