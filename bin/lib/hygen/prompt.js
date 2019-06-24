"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var fs = require('fs');
var L = require('lodash');
var hooksfiles = ['prompt.js', 'index.js'];
var prompt = function (createPrompter, actionfolder, args) {
    var hooksfile = L.first(L.filter(L.map(hooksfiles, function (f) { return path.resolve(path.join(actionfolder, f)); }), function (f) { return fs.existsSync(f); }));
    if (!hooksfile) {
        return Promise.resolve({});
    }
    // shortcircuit without prompter
    // $FlowFixMe
    var hooksModule = require(hooksfile);
    if (hooksModule.params) {
        return hooksModule.params({ args: args });
    }
    // lazy loads prompter
    // everything below requires it
    var prompter = createPrompter();
    if (hooksModule.prompt) {
        return hooksModule.prompt({ prompter: prompter, inquirer: prompter, args: args });
    }
    return prompter.prompt(hooksModule);
};
module.exports = prompt;
