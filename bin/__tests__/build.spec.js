const build = require('../build')
const fs = require('fs-extra')
const path = require('path')
// const execa = require('execa')
const glob = require('tiny-glob')
const opts = {
  src: 'bin/__tests__/testSrc',
  dest: 'bin/__tests__/testDest',
  force: true,
  silent: true
}

afterAll(() => {
  fs.removeSync(opts.dest)
})

describe('ディレクトリ構造', () => {
  it('拡張子[.h.js, .hify.js]のファイルはhtmlに変換される', async () => {
    await build(opts)
    const destFiles = await glob('**', { cwd: opts.dest, filesOnly: true })
    expect(destFiles).toContain('asyncFn.html')
    expect(destFiles).toContain('favicon.ico')
    expect(destFiles).toContain('fn.html')
    expect(destFiles).toContain('index.html')
    expect(destFiles).toContain('promiseFn.html')
  })
  it('assetsディレクトリ以下のファイルはそのままコピーされる', async () => {
    const destFiles = await glob('assets/**', { cwd: opts.dest })
    expect(destFiles).toContain('assets/img/dummy.png')
  })
  it('assetsディレクトリ以下の[.h.js]ファイルは変換されずにコピーされる', async () => {
    const destFiles = await glob('assets/**', { cwd: opts.dest })
    expect(destFiles).toContain('assets/fn.h.js')
  })
  it('assetsディレクトリ以外の非[.h.js]ファイルは無視される', async () => {
    const destFiles = await glob('**', { cwd: opts.dest })
    expect(destFiles).not.toContain('notConvert.html')
    expect(destFiles).not.toContain('notConvert.js')
  })
})

describe('h.jsファイルが返す値は以下のいずれかである', () => {
  it('CreateElementインスタンス', async () => {
    await build(opts)
    const p = path.join(process.cwd(), opts.dest, 'index.html')
    expect(fs.readFileSync(p, 'utf8')).toMatch(
      '<span>test CreateElement instance</span>'
    )
  })
  it('CreateElementインスタンスを返すfunction', () => {
    const p = path.join(process.cwd(), opts.dest, 'fn.html')
    expect(fs.readFileSync(p, 'utf8')).toMatch('<span>test function</span>')
  })
  it('CreateElementインスタンスを返すasync function', () => {
    const p = path.join(process.cwd(), opts.dest, 'asyncFn.html')
    expect(fs.readFileSync(p, 'utf8')).toMatch(
      '<span>test async function</span>'
    )
  })
  it('CreateElementインスタンスをresolveするPromise', () => {
    const p = path.join(process.cwd(), opts.dest, 'promiseFn.html')
    expect(fs.readFileSync(p, 'utf8')).toMatch('<span>test Promise</span>')
  })
  it('その他の[.h.js]ファイルは無視される', () => {
    const p = path.join(process.cwd(), opts.dest, 'invalid.html')
    expect(() => {
      fs.readFileSync(p, 'utf8')
    }).toThrow(/ENOENT: no such file or directory, open/)
  })
})
