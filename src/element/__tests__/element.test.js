const { el } = require('../../')

describe('NormalTags', () => {
  test('div args', () => {
    const _cont = el.p('test', { id: 'pId' })
    const _attr = { id: 'divId', class: 'divClass' }
    const _divA = el.div(_cont, _attr)
    const _divB = el.div(_attr, _cont)
    expect(_divA).toEqual(_divB)
  })
  test('div not args', () => {
    expect(el.div().render()).toBe('<div></div>')
    expect(el.div({}).render()).toBe('<div></div>')
    expect(el.div({ id: 'MyId' }).render()).toBe('<div id="MyId"></div>')
  })
})

describe('simpleTags', () => {
  test('hr', () => {
    const attr1 = { id: 'MyId' }
    const attr2 = { class: 'MyClass' }
    expect(el.hr().render()).toBe('<hr>')
    expect(el.hr(attr1, attr2).render()).toBe('<hr id="MyId" class="MyClass">')
    expect(el.hr(attr1, attr2)).toEqual(el.hr(attr2, attr1))
    expect(el.hr(attr1, attr2)).toEqual(el.hr({ ...attr2, ...attr1 }))
  })
})
