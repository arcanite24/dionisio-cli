import { runner } from './index';
const Logger = require('./logger');
const path = require('path');
const defaultTemplates = path.join(__dirname, '../../src/templates');
console.log(defaultTemplates);

const invoke = (params: string[]) => runner(params, {
  templates: defaultTemplates,
  cwd: process.cwd(),
  logger: new Logger(console.log.bind(console)),
  debug: !!process.env.DEBUG,
  exec: (action: any, body: any) => {
    const opts = body && body.length > 0 ? { input: body } : {};
    return require('execa').shell(action, opts);
  },
  createPrompter: () => require('enquirer'),
});

export default invoke;