import { IHistoryDomain } from '../__interface__/history-domain-interface'
import { History } from '../history'
import { HistoryId } from '../history-id'

describe('History', () => {
  const historyProps: IHistoryDomain = {
    year: 2021,
    month: 12,
    price: 1000,
    meter: 1000,
    readingDate: new Date('2021-12-20T09:00:00'),
    start: new Date('2021-11-22T09:00:00'),
    end: new Date('2021-11-19T09:00:00')
  }

  it('createできる', () => {
    expect(History.create(historyProps)).toEqual(expect.any(History))
  })

  it('restoreできる', () => {
    const historyId: HistoryId = HistoryId.restore('test-id')
    expect(History.restore(historyProps, historyId)).toEqual(
      expect.any(History)
    )
    expect(History.restore(historyProps, historyId).id.equals(historyId)).toBe(
      true
    )
  })

  describe('validate', () => {
    describe('validateOfYear', () => {
      it('4桁は正常', () => {
        const data = { ...historyProps, year: 2021 }
        expect(History.create(data)).toEqual(expect.any(History))
      })
      it('5桁はエラー', () => {
        const data = { ...historyProps, year: 20201 }
        expect(() => {
          History.create(data)
        }).toThrowError()
      })
    })
    describe('validateOfMonth', () => {
      it('1-12月は正常', () => {
        const data = {
          ...historyProps,
          month: 1,
          readingDate: new Date('2021-01-20T09:00:00')
        }
        expect(History.create(data)).toEqual(expect.any(History))
      })

      it('1-12月は正常', () => {
        const data = {
          ...historyProps,
          month: 12,
          readingDate: new Date('2021-12-20T09:00:00')
        }
        expect(History.create(data)).toEqual(expect.any(History))
      })
      it('0月はエラー', () => {
        const data = {
          ...historyProps,
          month: 0,
          readingDate: new Date('2021-00-20T09:00:00')
        }
        expect(() => {
          History.create(data)
        }).toThrowError()
      })
      it('13月はエラー', () => {
        const data = {
          ...historyProps,
          month: 13,
          readingDate: new Date('2021-13-20T09:00:00')
        }

        expect(() => {
          History.create(data)
        }).toThrowError()
      })
    })
  })
})
