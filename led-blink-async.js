// This script was modified from fivdi/onoff/examples/blink-led-async.js
// Hardware : Beaglebone Black

var ledFlashTimes = 15;
var Gpio = require('onoff').Gpio;
var led = new Gpio(115, 'out');
function blink(count) {
    if (count <= 0) {
        return led.unexport();
    }

    led.read(function (err, value) {
        if (err) {
            throw err;
        }

        led.write(value ^ 1, function(err){
            if (err) {
                throw err;
            }
        });
    });

    setTimeout(function(){
        blink(count - 1);
    }, 200);
}

blink(ledFlashTimes * 2);
