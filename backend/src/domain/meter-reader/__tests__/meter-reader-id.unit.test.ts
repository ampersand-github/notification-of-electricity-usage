import { MeterReaderId } from '../meter-reader-id'

describe('MeterReaderId', () => {
  it('createできる', () => {
    expect(MeterReaderId.create()).toEqual(expect.any(MeterReaderId))
  })

  it('restoreできる', () => {
    expect(MeterReaderId.restore('test-id')).toEqual(expect.any(MeterReaderId))
  })

  it('toStringできる', () => {
    expect(MeterReaderId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      MeterReaderId.restore('test-id').equals(MeterReaderId.restore('test-id'))
    ).toBe(true)
    expect(
      MeterReaderId.restore('test-id').equals(
        MeterReaderId.restore('not-equal-id')
      )
    ).toBe(false)
  })
})
