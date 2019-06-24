// @flow
import { RunnerResult, RunnerConfig } from './types'

export const engine = require('./engine')
export const resolve = require('./config-resolver')
export const { printHelp, availableActions } = require('./help')
export const runner = async (
  argv: Array<string>,
  config: RunnerConfig
): Promise<RunnerResult> => {
  const resolvedConfig = await resolve(config)
  const { templates, logger } = resolvedConfig
  try {
    const actions = await engine(argv, resolvedConfig)
    return { success: true, actions }
  } catch (err) {
    logger.log(err.toString())
    if (config.debug) {
      logger.log('details -----------')
      logger.log(err.stack)
      logger.log('-------------------')
    }
    printHelp(templates, logger)
    return { success: false, actions: [] }
    // process.exit(1)
  }
}
