#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var package_json_1 = __importDefault(require("../package.json"));
var generate_js_1 = require("./actions/generate.js");
var new_js_1 = require("./actions/new.js");
commander_1.default
    .version(package_json_1.default.version, '-v, --version')
    .usage('[options] <command>');
commander_1.default
    .command('generate <schematic>')
    .alias('g')
    .description('Generate Dionisio schematic')
    .action(generate_js_1.generate);
commander_1.default
    .command('new')
    .alias('n')
    .description('Create new Dionisio project')
    .action(new_js_1.newProject);
commander_1.default.parse(process.argv);
