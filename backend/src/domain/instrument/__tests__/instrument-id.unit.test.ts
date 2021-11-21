import { InstrumentId } from '../instrument-id'

describe('InstrumentId', () => {
  it('createできる', () => {
    expect(InstrumentId.create()).toEqual(expect.any(InstrumentId))
  })

  it('restoreできる', () => {
    expect(InstrumentId.restore('test-id')).toEqual(expect.any(InstrumentId))
  })

  it('toStringできる', () => {
    expect(InstrumentId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      InstrumentId.restore('test-id').equals(InstrumentId.restore('test-id'))
    ).toBe(true)
    expect(
      InstrumentId.restore('test-id').equals(InstrumentId.restore('not-equal-id'))
    ).toBe(false)
  })
})
