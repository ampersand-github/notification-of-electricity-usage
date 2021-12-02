import { MonthHistoryId } from '../month-history-id'

describe('MonthHistoryId', () => {
  it('createできる', () => {
    expect(MonthHistoryId.create()).toEqual(expect.any(MonthHistoryId))
  })

  it('restoreできる', () => {
    expect(MonthHistoryId.restore('test-id')).toEqual(
      expect.any(MonthHistoryId)
    )
  })

  it('toStringできる', () => {
    expect(MonthHistoryId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      MonthHistoryId.restore('test-id').equals(
        MonthHistoryId.restore('test-id')
      )
    ).toBe(true)
    expect(
      MonthHistoryId.restore('test-id').equals(
        MonthHistoryId.restore('not-equal-id')
      )
    ).toBe(false)
  })
})
