const chalk = require('chalk')
const { yellow, red, green, magenta } = chalk
const template = require('chalk/templates')
class Logger {

  public log: any;

  constructor(log: any) {
    this.log = log
  }
  colorful(msg: any) {
    this.log(template(chalk, msg))
  }
  notice(msg: any) {
    this.log(magenta(msg))
  }
  warn(msg: any) {
    this.log(yellow(msg))
  }
  err(msg: any) {
    this.log(red(msg))
  }
  ok(msg: any) {
    this.log(green(msg))
  }
}
module.exports = Logger
