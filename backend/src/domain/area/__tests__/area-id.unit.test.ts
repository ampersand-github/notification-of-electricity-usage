import { AreaId } from '../area-id'

describe('MeterReaderId', () => {
  it('createできる', () => {
    expect(AreaId.create()).toEqual(expect.any(AreaId))
  })

  it('restoreできる', () => {
    expect(AreaId.restore('test-id')).toEqual(expect.any(AreaId))
  })

  it('toStringできる', () => {
    expect(AreaId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      AreaId.restore('test-id').equals(AreaId.restore('test-id'))
    ).toBe(true)
    expect(
      AreaId.restore('test-id').equals(AreaId.restore('not-equal-id'))
    ).toBe(false)
  })
})
