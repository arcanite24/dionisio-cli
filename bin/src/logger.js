"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var emojic = require('emojic');
// TODO: Format with a more aestethic messages
exports.default = {
    debug: function (message) { return console.log(chalk_1.default.yellow(emojic.greyExclamation + " " + message)); },
    error: function (message) { return console.log(chalk_1.default.red(emojic.x + " " + message)); },
    info: function (message) { return console.log(chalk_1.default.cyan(emojic.informationSource + " " + message)); },
    success: function (message) { return console.log(chalk_1.default.green(emojic.whiteCheckMark + " " + message)); },
};
