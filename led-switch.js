var LEDPORT = 115
var SWITCHPORT = 50
var Gpio = require('onoff').Gpio;
var led = new Gpio(LEDPORT, 'out');
var button = new Gpio(SWITCHPORT, 'in', 'both');

button.watch(function(err, value) {
    if (err) {
        throw err;
    }
    led.writeSync(value);
});

process.on('SIGINT', function() {
    console.log('Ctrl-c press...')
    led.unexport();
    button.unexport();
});