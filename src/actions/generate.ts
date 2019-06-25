import chalk from 'chalk';
import hygen from '../../lib/hygen/bin';

export async function generate(schematic: string) {

    try {
        console.log(chalk.yellow('DEBUG: Generating ' + schematic));
        hygen(['dionisio', schematic]);
    } catch (error) {
        console.error(error);
    }

}
