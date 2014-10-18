var stream = require('stream');
var util = require('util');

util.inherits(random_binary_device,stream);

module.exports=random_binary_device;

function random_binary_device(opts) {
  var self = this;

  this.readable = true;
  this.writeable = false;

  this.G = "0";
  this.V = 0;
  this.D = 2000;
  this.name = "Random binary value"

  var ticks = 0;

  process.nextTick(function() {
    setInterval(function(){
        if(ticks % opts.frequency == 0){
            value = Math.round(Math.random());
            self.emit('data', value);
        }

        ++ticks;
    },1000);
  });
};
