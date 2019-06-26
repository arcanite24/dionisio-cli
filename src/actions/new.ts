import fs from 'fs';
import ora from 'ora';
import { TEMPLATE_GIT } from '../config';
import logger from "../logger";
import { Runner } from '../../lib/runners/runner';

// TODO: Replace library or write types
const clone = require("git-clone");
const { Confirm, Select } = require("enquirer");

export function newProject(name: string) {

  if (!name) { return logger.error('Project path is required...'); }
  const projectPath = `${process.cwd()}/${name}`;

  logger.debug(`Trying to clone project to: ${projectPath}`);

  // TODO: Find a better way to join the paths
  // TODO: Format and sanitize the project name
  if (fs.existsSync(projectPath)) { return logger.error('Directory already exists'); }

  try {

    const spinner = ora('Cloning project');
    spinner.color = 'cyan';
    spinner.start();

    clone(TEMPLATE_GIT, projectPath, null, async (err?: Error) => {

      spinner.stop();

      if (err) {
        logger.error(err.message);
      } else {

        logger.success('Project succesfully cloned');

        // Prompt for installing node_modules
        const installModules = await new Confirm({
          message: 'Do you want to install node_modules?',
          name: 'install',
        }).run();

        if (installModules) {

          const packageManager = await new Select({
            name: 'manager',
            message: 'Which package manager do you want to use?',
            choices: ['npm', 'yarn'],
          }).run();

          const installSpinner = ora(`Installing node_modules with: ${packageManager}`);
          installSpinner.color = "cyan";
          installSpinner.start();

          const runner = new Runner(packageManager);
          await runner.run('install', false, projectPath);

          installSpinner.stop();
          logger.success('node_modules installed');
          logger.info(`Remember to cd into ${name} && npm start`);

        }

      }

    });

  } catch (error) {
    logger.error("Something unexpected happened... :(");
  }

}
