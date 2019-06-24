// @flow

import { RunnerConfig } from './types'
import path from 'path'
import { ConfigResolver } from './config'
const L = require('lodash')
const fs = require('fs-extra')
const configResolver = new ConfigResolver('.hygen.js', {
  exists: fs.exists,
  // $FlowFixMe
  load: (f: any) => Promise.resolve(require(f)),
  none: (f: any) => ({})
})
module.exports = async (config: RunnerConfig): Promise<RunnerConfig> => {
  const { cwd, templates } = config

  const resolvedTemplates =
    L.find(
      [process.env.HYGEN_TMPLS, path.join(cwd, '_templates')],
      (_: any) => _ && fs.existsSync(_)
    ) || templates

  return {
    ...config,
    templates: resolvedTemplates,
    ...(await configResolver.resolve(cwd))
  }
}
