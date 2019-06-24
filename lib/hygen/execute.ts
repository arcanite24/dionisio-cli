// @flow

import { RunnerConfig, RenderedAction } from './types'
const resolve = require('./ops')

const execute = async (
  renderedActions: Array<RenderedAction>,
  args: any,
  config: RunnerConfig
): Promise<Array<any>> => {
  const { logger } = config
  const messages = []
  const results = []
  for (const action of renderedActions) {
    const { message } = action.attributes as any
    if (message) {
      messages.push(message)
    }
    const ops = resolve(action.attributes)
    for (const op of ops) {
      results.push(await op(action, args, config))
    }
  }
  if (messages.length > 0) {
    logger.colorful(`${args.action}:\n${messages.join('\n')}`)
  }

  return results
}
module.exports = execute
