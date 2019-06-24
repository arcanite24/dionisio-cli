import createResult from './result'

const notEmpty = (x: any) => x && x.length > 0
const shell = async (
  { attributes: { sh }, body }: any,
  args: any,
  { logger, exec }: any
) => {
  const result = createResult('shell', sh)
  if (notEmpty(sh)) {
    if (!args.dry) {
      await exec(sh, body)
    }
    logger.ok(`       shell: ${sh}`)

    return result('executed')
  }
  return result('ignored')
}

module.exports = shell
