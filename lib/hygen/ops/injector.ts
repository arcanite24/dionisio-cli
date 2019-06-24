// @flow

import { RenderedAction } from '../types'
import L from 'lodash';

const injector = (action: RenderedAction, content: string): string => {
  const { attributes: { skip_if, eof_last }, attributes, body } = action
  const lines = content.split('\n')
  //eslint-disable-next-line
  const shouldSkip = skip_if && !!content.match(skip_if)

  if (!shouldSkip) {
    const idx = indexByLocation(attributes, lines)
    //eslint-disable-next-line
    const trimEOF = idx >= 0 && eof_last === false && /\r?\n$/.test(body)
    //eslint-disable-next-line
    const insertEOF = idx >= 0 && eof_last === true && !/\r?\n$/.test(body)

    if (trimEOF) {
      lines.splice(idx, 0, body.replace(/\r?\n$/, ''))
    } else if (insertEOF) {
      lines.splice(idx, 0, `${body}\n`)
    } else if (idx >= 0) {
      lines.splice(idx, 0, body)
    }
  }

  return lines.join('\n')
}

const getPragmaticIndex = (pattern: any, lines: any, isBefore: any) => {

  const oneLineMatchIndex = L.findIndex(lines, (l: any) => l.match(pattern));

  if (oneLineMatchIndex < 0) {
    const fullText = lines.join('\n');
    const fullMatch = fullText.match(new RegExp(pattern, "m"));
  
    if (fullMatch && fullMatch.length) {

      if (isBefore) {
        const fullTextUntilMatchStart = fullText.substring(0, fullMatch.index);
        return fullTextUntilMatchStart.split('\n').length -1;
      } else {
        const matchEndIndex = fullMatch.index + fullMatch.toString().length;
        const fullTextUntilMatchEnd = fullText.substring(0, matchEndIndex);
        return fullTextUntilMatchEnd.split('\n').length;
      }
    }
  }

  return oneLineMatchIndex + (isBefore ? 0 : 1);
}

const locations = {
  at_line: (_: any) => _,
  prepend: (_: any) => 0,
  append: (_: any, lines: any) => lines.length - 1,
  before: (_: any, lines: any) => getPragmaticIndex(_, lines, true),
  after: (_: any, lines: any) => getPragmaticIndex(_, lines, false)
} as any;

const indexByLocation = (attributes: any, lines: Array<string>): number => {

  const pair = L.find(L.toPairs(attributes), ([k, v]: string[]) => locations[k])

  if (pair) {
    const [k, v] = pair as any;
    return locations[k](v, lines)
  }

  return -1
}

module.exports = injector
