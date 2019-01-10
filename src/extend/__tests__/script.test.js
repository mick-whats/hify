const { el, ex } = require('../../')
const fn = () => true
test('el.script', () => {
  const res = el.script(fn).render()
  expect(res).toBe('<script>() => true</script>')
})
test('ex.script', () => {
  const res = ex.script(fn).render()
  expect(res).toBe('<script>(() => true)()</script>')
})
test('ex.script with id', () => {
  const res = ex.script(fn, { id: 'Myid' }).render()
  expect(res).toBe('<script id="Myid">(() => true)()</script>')
})
test('ex.script with id', () => {
  const res = ex.script({ id: 'Myid' }, fn).render()
  expect(res).toBe('<script id="Myid">(() => true)()</script>')
})
