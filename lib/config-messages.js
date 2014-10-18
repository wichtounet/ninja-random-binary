exports.menu = {
    "contents":[
        { "type": "paragraph", "text": "ninja-random-binary Settings"},
        { "type": "input_field_text", "field_name": "frequency", "value": "", "label": "Frequency", "required": true},
        { "type": "submit", "name": "Save", "rpc_method": "echo" },
    ]
};

exports.echo = {
    "contents":[
        { "type": "paragraph", "text": "Settings have been saved"}
    ]
};