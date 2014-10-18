var config_messages = require('./config-messages');

exports.menu = function(frequency, call_back) {
    var returnMenu = config_messages.menu;
    returnMenu.contents[1].value = frequency;
    call_back(null, config_messages.menu);
};

exports.echo = function(opts, params, call_back) {
    var echoText = params.echoText;
    var payloadToSend = config_messages.echo;

    opts.frequency = params.frequency;
    this.save();

    call_back(null, payloadToSend);
};