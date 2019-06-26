import { ChildProcess, spawn, SpawnOptions } from "child_process";
import logger from "../../src/logger";

export class Runner {

  constructor(private binary: string) {}

  public async run(
    command: string,
    collect: boolean = false,
    cwd: string = process.cwd(),
  ): Promise<null | string> {

    const args: string[] = [command];

    const options: SpawnOptions = {
      cwd,
      stdio: collect ? 'pipe' : 'inherit',
      shell: true,
    };

    return new Promise<null | string>((resolve, reject) => {

      const child: ChildProcess = spawn(`${this.binary}`, args, options);

      if (collect) {
        child.stdout!.on('data', (data: any) =>
          resolve(data.toString().replace(/\r\n|\n/, '')),
        );
      }

      child.on('close', (code: any) => {
        if (code === 0) {
          resolve(null);
        } else {
          logger.error('Something happened... :(');
          reject();
        }
      });

    });

  }

}
