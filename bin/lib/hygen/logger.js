"use strict";
var chalk = require('chalk');
var yellow = chalk.yellow, red = chalk.red, green = chalk.green, magenta = chalk.magenta;
var template = require('chalk/templates');
var Logger = /** @class */ (function () {
    function Logger(log) {
        this.log = log;
    }
    Logger.prototype.colorful = function (msg) {
        this.log(template(chalk, msg));
    };
    Logger.prototype.notice = function (msg) {
        this.log(magenta(msg));
    };
    Logger.prototype.warn = function (msg) {
        this.log(yellow(msg));
    };
    Logger.prototype.err = function (msg) {
        this.log(red(msg));
    };
    Logger.prototype.ok = function (msg) {
        this.log(green(msg));
    };
    return Logger;
}());
module.exports = Logger;
