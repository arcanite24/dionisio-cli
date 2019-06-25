#!/usr/bin/env node
import program from 'commander';
import pkg from '../package.json';

import { generate } from './actions/generate.js';
import { newProject } from './actions/new.js';

program
    .version(pkg.version, '-v, --version')
    .usage('[options] <command>');

program
    .command('generate <schematic>')
    .alias('g')
    .description('Generate Dionisio schematic')
    .action(generate);

program
    .command('new <name>')
    .alias('n')
    .description('Create new Dionisio project')
    .action(newProject);

program.parse(process.argv);
