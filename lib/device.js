var stream = require('stream')
  , util = require('util');

util.inherits(random_binary_device,stream);

module.exports=random_binary_device;

function random_binary_device() {
  var self = this;

  this.readable = true;
  this.writeable = false;

  this.G = "0";
  this.V = 0;
  this.D = 2000;
  this.name = "Random binary value"

  process.nextTick(function() {
    setInterval(function(){
       value = Math.round(Math.random());
       self.emit('data', value);
    },1000);
  });
};
