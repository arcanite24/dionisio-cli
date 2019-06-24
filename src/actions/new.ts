import { exec } from 'child_process';
import fs from 'fs';
import ora from 'ora';
import { promisify } from 'util';
import { TEMPLATE_GIT } from '../config';
import logger from "../logger";

const execPromise = promisify(exec);

// TODO: Replace library or write types
const clone = require("git-clone");
const { Confirm } = require("enquirer");

export function newProject(name: string) {

  if (!name) { return logger.error('Project path is required...'); }
  const projectPath = `${process.cwd()}/${name}`;

  logger.debug(`Trying to clone project to: ${projectPath}`);

  // Check if directory already exists
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
          message: 'Do you want to install npm modules?',
          name: 'install',
        }).run();

        // TODO: Fix execPromise, sometimes doesn't work
        if (installModules) {

          const installSpinner = ora("Running npm install");
          installSpinner.color = "cyan";
          installSpinner.start();

          await execPromise(`cd ${projectPath}`);
          await execPromise('npm install');

          installSpinner.stop();
          logger.success('node_modules installed');

        }

      }

    });

  } catch (error) {
    logger.error("Something unexpected happened... :(");
  }

}
