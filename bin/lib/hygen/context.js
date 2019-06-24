"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var L = require('lodash');
var inflection = require('inflection');
var changeCase = require('change-case');
// supports kebab-case to KebabCase
inflection.undasherize = function (str) {
    return str
        .split(/[-_]/)
        .map(function (w) { return w[0].toUpperCase() + w.slice(1).toLowerCase(); })
        .join('');
};
var helpers = {
    capitalize: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    inflection: inflection,
    changeCase: changeCase
};
var localsToCapitalize = ['name'];
var localsDefaults = {
    name: 'unnamed'
};
var capitalizedLocals = function (locals) {
    return L.mapValues(L.mapKeys(L.pick(locals, localsToCapitalize), function (v, k) {
        return helpers.capitalize(k);
    }), function (v) { return helpers.capitalize(v); });
};
var context = function (locals, config) {
    var localsWithDefaults = Object.assign({}, localsDefaults, locals);
    var configHelpers = (config && config.helpers) || {};
    return Object.assign(localsWithDefaults, capitalizedLocals(localsWithDefaults), {
        h: __assign({}, helpers, configHelpers)
    });
};
module.exports = context;
