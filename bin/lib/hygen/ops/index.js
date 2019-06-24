"use strict";
var resolve = function (attributes) {
    var ops = [];
    if (attributes.to && !attributes.inject) {
        var add = require('./add');
        ops.push(add);
    }
    if (attributes.to && attributes.inject) {
        var inject = require('./inject');
        ops.push(inject);
    }
    if (attributes.sh) {
        var shell = require('./shell');
        ops.push(shell);
    }
    return ops;
};
module.exports = resolve;
