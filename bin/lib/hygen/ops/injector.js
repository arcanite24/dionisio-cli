"use strict";
// @flow
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var injector = function (action, content) {
    var _a = action.attributes, skip_if = _a.skip_if, eof_last = _a.eof_last, attributes = action.attributes, body = action.body;
    var lines = content.split('\n');
    //eslint-disable-next-line
    var shouldSkip = skip_if && !!content.match(skip_if);
    if (!shouldSkip) {
        var idx = indexByLocation(attributes, lines);
        //eslint-disable-next-line
        var trimEOF = idx >= 0 && eof_last === false && /\r?\n$/.test(body);
        //eslint-disable-next-line
        var insertEOF = idx >= 0 && eof_last === true && !/\r?\n$/.test(body);
        if (trimEOF) {
            lines.splice(idx, 0, body.replace(/\r?\n$/, ''));
        }
        else if (insertEOF) {
            lines.splice(idx, 0, body + "\n");
        }
        else if (idx >= 0) {
            lines.splice(idx, 0, body);
        }
    }
    return lines.join('\n');
};
var getPragmaticIndex = function (pattern, lines, isBefore) {
    var oneLineMatchIndex = lodash_1.default.findIndex(lines, function (l) { return l.match(pattern); });
    if (oneLineMatchIndex < 0) {
        var fullText = lines.join('\n');
        var fullMatch = fullText.match(new RegExp(pattern, "m"));
        if (fullMatch && fullMatch.length) {
            if (isBefore) {
                var fullTextUntilMatchStart = fullText.substring(0, fullMatch.index);
                return fullTextUntilMatchStart.split('\n').length - 1;
            }
            else {
                var matchEndIndex = fullMatch.index + fullMatch.toString().length;
                var fullTextUntilMatchEnd = fullText.substring(0, matchEndIndex);
                return fullTextUntilMatchEnd.split('\n').length;
            }
        }
    }
    return oneLineMatchIndex + (isBefore ? 0 : 1);
};
var locations = {
    at_line: function (_) { return _; },
    prepend: function (_) { return 0; },
    append: function (_, lines) { return lines.length - 1; },
    before: function (_, lines) { return getPragmaticIndex(_, lines, true); },
    after: function (_, lines) { return getPragmaticIndex(_, lines, false); }
};
var indexByLocation = function (attributes, lines) {
    var pair = lodash_1.default.find(lodash_1.default.toPairs(attributes), function (_a) {
        var k = _a[0], v = _a[1];
        return locations[k];
    });
    if (pair) {
        var _a = pair, k = _a[0], v = _a[1];
        return locations[k](v, lines);
    }
    return -1;
};
module.exports = injector;
