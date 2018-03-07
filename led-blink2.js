var Gpio = require('onoff').Gpio;
var led = Gpio(115, 'out');
var interval;

interval = setInterval(function(){
    led.writeSync(led.readSync() ^ 1);
}, 200);

setTimeout(function(){
    clearInterval(interval);
    led.writeSync(0);
    led.unexport();
},10000);
