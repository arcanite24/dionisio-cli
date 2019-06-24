"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var L = require('lodash');
var path = require('path');
var chalk = require('chalk');
var availableActions = function (templates) {
    var generators = L.filter(fs.readdirSync(templates), function (_) {
        return fs.lstatSync(path.join(templates, _)).isDirectory();
    });
    return L.reduce(generators, function (acc, generator) {
        var actions = fs.readdirSync(path.join(templates, generator));
        acc[generator] = actions;
        return acc;
    }, {});
};
var printHelp = function (templates, logger) {
    logger.log('\nAvailable actions:');
    if (!templates) {
        logger.log("No generators or actions found. \n\n      This means I didn't find a _templates folder right here, \n      or anywhere up the folder tree starting here.\n\n      Here's how to start using Hygen:\n\n      $ hygen init self\n      $ hygen with-prompt new --name my-generator\n\n      (edit your generator in _templates/my-generator)\n\n      $ hygen my-generator \n\n      See http://hygen.io for more.\n      \n      ");
        return;
    }
    L.each(availableActions(templates), function (v, k) {
        logger.log(chalk.bold(k) + ': ' + v.join(', '));
    });
};
module.exports = { availableActions: availableActions, printHelp: printHelp };
