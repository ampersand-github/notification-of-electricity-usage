import { HistoryId } from '../history-id'

describe('HistoryId', () => {
  it('createできる', () => {
    expect(HistoryId.create()).toEqual(expect.any(HistoryId))
  })

  it('restoreできる', () => {
    expect(HistoryId.restore('test-id')).toEqual(expect.any(HistoryId))
  })

  it('toStringできる', () => {
    expect(HistoryId.restore('test-id').toString()).toEqual('test-id')
  })

  it('equalsできる', () => {
    expect(
      HistoryId.restore('test-id').equals(HistoryId.restore('test-id'))
    ).toBe(true)
    expect(
      HistoryId.restore('test-id').equals(HistoryId.restore('not-equal-id'))
    ).toBe(false)
  })
})
