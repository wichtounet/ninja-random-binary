var random_binary_device = require('./lib/device')
  , util = require('util')
  , stream = require('stream');

util.inherits(random_binary_driver,stream);

function random_binary_driver(opts,app) {
  var self = this;

  app.on('client::up',function(){
    self.emit('register', new random_binary_device());
  });
};

module.exports = random_binary_driver;
