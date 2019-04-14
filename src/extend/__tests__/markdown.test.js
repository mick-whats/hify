const { el, ex } = require('../../')

test('string', () => {
  const md = ex.md('# my header1\n\n## my header2\n\nhello world\n\n---')
  expect(md.render()).toMatch('<div><h1 id="my-header1">my header1</h1>')
  expect(md.render()).toMatch('<h2 id="my-header2">my header2</h2>')
  expect(md.render()).toMatch('<p>hello world</p>')
  expect(md.render()).toMatch('<hr>')
  expect(md.render()).toMatch('</div>')
})
test('array', () => {
  const md = ex.md([
    '```',
    "const { el } = require('../../')",
    "console.log('el: ',el)",
    '```'
  ])
  expect(md.render()).toBe(
    '<div><pre><code>const { el } = require(&#39;../../&#39;)\n' +
      'console.log(&#39;el: &#39;,el)</code></pre></div>'
  )
})
