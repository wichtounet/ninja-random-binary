var random_binary_device = require('./lib/device')
  , util = require('util')
  , stream = require('stream');

// Give our driver a stream interface
util.inherits(random_binary_driver,stream);

function random_binary_driver(opts,app) {
  var self = this;

  app.on('client::up',function(){
    self.emit('register', new random_binary_device());
  });
};

// Export it
module.exports = random_binary_driver;
