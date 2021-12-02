import { VoltageId } from '../voltage-id'

describe('MeterReaderId', () => {
  it('createできる', () => {
    expect(VoltageId.create()).toEqual(expect.any(VoltageId))
  })

  it('restoreできる', () => {
    expect(VoltageId.restore('test-id')).toEqual(expect.any(VoltageId))
  })

  it('toStringできる', () => {
    expect(VoltageId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      VoltageId.restore('test-id').equals(VoltageId.restore('test-id'))
    ).toBe(true)
    expect(
      VoltageId.restore('test-id').equals(
        VoltageId.restore('not-equal-id')
      )
    ).toBe(false)
  })
})
