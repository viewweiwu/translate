import translate from '../translate.js'
import assert from 'assert'
import chai from 'chai'

let expect = chai.expect

describe('test translate', () => {
  it('translate({ fooBar: 1 }) 应该要返回 { foo_bar: 1 }', () => {
    expect(translate({ fooBar: 1 }))
      .to.be.deep.equal({ foo_bar: 1 })
  })
  it('translate({ FooBar: 1 }) 应该要返回 { foo_bar: 1 }', () => {
    expect(translate({ FooBar: 1 }))
      .to.be.deep.equal({ foo_bar: 1 })
  })
  it('translate({ fooBarAbc: 1 }) 应该要返回 { foo_bar_abc: 1 }', () => {
    expect(translate({ fooBarAbc: 1 }))
      .to.be.deep.equal({ foo_bar_abc: 1 })
  })
  it('translate({ fooBar: 1, childrenObj: { helloAbc: 1 } }) 应该要返回 { foo_bar: 1, children_obj: { hello_abc: 1 } }', () => {
    expect(translate({ fooBar: 1, childrenObj: { helloAbc: 1 } }))
      .to.be.deep.equal({ foo_bar: 1, children_obj: { hello_abc: 1 } })
  })
  it('translate({ fooBar: [{abcEfg: 1}] }) 应该要返回 { foo_bar: [{abc_efg: 1}] }', () => {
    expect(translate({ fooBar: [{abcEfg: 1}] }))
      .to.have.deep.equal({ foo_bar: [{abc_efg: 1}] })
  })
  it('translate({ fooBar: [[{abcEfg: 1}]] }) 应该要返回 { fooBar: [[{abc_efg: 1}]] }', () => {
    expect(translate({ fooBar: [[{abcEfg: 1}]] }))
      .to.be.deep.equal({ foo_bar: [[{abc_efg: 1}]] })
  })
})