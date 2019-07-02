"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Logger = require('./logger');
var path = require('path');
var defaultTemplates = path.join(__dirname, '../../src/templates');
console.log(defaultTemplates);
var invoke = function (params) { return index_1.runner(params, {
    templates: defaultTemplates,
    cwd: process.cwd(),
    logger: new Logger(console.log.bind(console)),
    debug: !!process.env.DEBUG,
    exec: function (action, body) {
        var opts = body && body.length > 0 ? { input: body } : {};
        return require('execa').shell(action, opts);
    },
    createPrompter: function () { return require('enquirer'); },
}); };
exports.default = invoke;
