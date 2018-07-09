import { unifyObjectStyle } from './unifyObjectStyle'

describe('unifyObjectStyle', () => {
  const n = unifyObjectStyle('commit/type', { value: 'string' }, {})
  const m = unifyObjectStyle({ type: 'commit/type', value: 'string' }, {})
  test('test', () => {
    expect(n.type).toEqual(m.type)
  })
})
