
function stripIndent(str) {
  const match = str.match(/^[ \t]*(?=\S)/gm)

  if (!match) {
    return str
  }

  const indent = Math.min(...match.map(x => x.length))

  const re = new RegExp(`^[ \\t]{${ indent }}`, 'gm')

  return str.replace(re, '')
}

function h(s, ...args) {
  const str = s.reduce((acc, cur, i) => acc + cur + (args[i] || ''), '')

  return stripIndent(str)
}

export { h, stripIndent }