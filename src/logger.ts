import chalk from 'chalk';
const emojic = require('emojic');

// TODO: Format with a more aestethic messages
export default {
  debug: (message: string) => console.log(chalk.yellow(`${emojic.greyExclamation}${message}`)),
  error: (message: string) => console.log(chalk.red(`${emojic.x}${message}`)),
  info: (message: string) => console.log(chalk.cyan(`${emojic.informationSource}${message}`)),
  success: (message: string) => console.log(chalk.green(`✔${message}`)),
};
