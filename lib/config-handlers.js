var config_messages = require('./config-messages');

exports.menu = function(opts, call_back) {
    var returnMenu = config_messages.menu;
    returnMenu.contents[1].value = opts.frequency;
    call_back(null, config_messages.menu);
};

exports.echo = function(opts, params, call_back) {
    opts.frequency = params.frequency;

    this.save();

    call_back(null, config_messages.echo);
};