// @flow
import { RunnerConfig } from './types'

const L = require('lodash')
const inflection = require('inflection')
const changeCase = require('change-case')

// supports kebab-case to KebabCase
inflection.undasherize = (str: string) =>
  str
    .split(/[-_]/)
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join('')

const helpers = {
  capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  },
  inflection,
  changeCase
}

const localsToCapitalize = ['name']
const localsDefaults = {
  name: 'unnamed'
}
const capitalizedLocals = (locals: any) =>
  L.mapValues(
    L.mapKeys(L.pick(locals, localsToCapitalize), (v: any, k: any) =>
      helpers.capitalize(k)
    ),
    (v: any) => helpers.capitalize(v)
  )

const context = (locals: any, config: RunnerConfig) => {
  const localsWithDefaults = Object.assign({}, localsDefaults, locals)
  const configHelpers = (config && config.helpers) || {}
  return Object.assign(
    localsWithDefaults,
    capitalizedLocals(localsWithDefaults),
    {
      h: { ...helpers, ...configHelpers }
    }
  )
}
module.exports = context
