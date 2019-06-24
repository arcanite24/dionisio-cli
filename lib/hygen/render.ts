// @flow

import { RenderedAction, RunnerConfig } from './types'

const L = require('lodash')
const fs = require('fs-extra')
const ejs = require('ejs')
const fm = require('front-matter')
const path = require('path')
const context = require('./context')
const { resolve } = require('path');

// for some reason lodash/fp takes 90ms to load.
// inline what we use here with the regular lodash.
const map = (f: any) => (arr: any) => L.map(arr, f)
const filter = (f: any) => (arr: any) => L.filter(arr, f)

const ignores = ['prompt.js', 'index.js']
const renderTemplate = (tmpl: any, locals: any, config: any) =>
  L.isString(tmpl) ? ejs.render(tmpl, context(locals, config)) : tmpl

async function getFiles(dir: any) {
  const subdirs = await fs.readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir: any) => {
    const res = resolve(dir, subdir);
    return (await fs.stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

const render = async (
  args: any,
  config: RunnerConfig
): Promise<Array<RenderedAction>> =>
  await getFiles(args.actionfolder)
    .then(things => things.sort((a, b) => a.localeCompare(b))) // TODO: add a test to verify this sort
    .then(filter((f: any) => !L.find(ignores, (ig: any) => L.endsWith(f, ig)))) // TODO: add a test for ignoring prompt.js and index.js
    .then(filter((file: any) => args.subaction ? file.match(args.subaction) : true))
    .then(
      map((file: any) =>
        fs.readFile(file).then((text: any) => ({ file, text: text.toString() }))
      )
    )
    .then(_ => Promise.all(_))
    .then(map((params: any) => Object.assign({ file: params.file }, fm(params.text))))
    .then(
      map((data: any) => ({
        file: data.file,
        attributes: L.mapValues(data.attributes, (_: any) =>
          renderTemplate(_, args, config)
        ),
        body: renderTemplate(data.body, args, config)
      }))
    )

module.exports = render
