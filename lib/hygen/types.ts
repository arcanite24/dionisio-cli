// @flow
export interface Logger {
  ok: (msg: string) => void,
  notice: (msg: string) => void,
  warn: (msg: string) => void,
  err: (msg: string) => void,
  log: (msg: string) => void,
  colorful: (msg: string) => void
}
export interface Prompter {
  prompt: (input: any) => Promise<any>;
}
export interface RenderedAction {
  file: string,
  attributes: any,
  body: string
}
export interface RunnerConfig {
  exec: (sh: string, body: string) => void,
  templates: string,
  cwd: string,
  logger: Logger,
  debug: boolean,
  helpers?: Object,
  createPrompter: () => Prompter
}

export interface ResolverIO {
  exists: (input: string) => Promise<boolean>,
  load: (input: string) => Promise<Object>,
  none: (input: string) => Object
}

export interface RunnerResult {
  success: boolean,
  time?: number,
  actions: Array<any>,
  failure?: {
    message: string,
    availableActions: Array<string>
  }
}
