import { IMonthHistoryDomain } from '../__interface__/month-history-domain-interface'
import { MonthHistory } from '../month-month-history'
import { MonthHistoryId } from '../month-history-id'
import { CustomerId } from 'src/domain/customer/customer-id'

describe('MonthHistory', () => {
  const historyProps: IMonthHistoryDomain = {
    customerId:CustomerId.create(),
    year: 2021,
    month: 12,
    price: 1000,
    meter: 1000,
    readingDate: new Date('2021-12-20T09:00:00'),
    start: new Date('2021-11-22T09:00:00'),
    end: new Date('2021-11-19T09:00:00')
  }

  it('createできる', () => {
    expect(MonthHistory.create(historyProps)).toEqual(expect.any(MonthHistory))
  })

  it('restoreできる', () => {
    const historyId: MonthHistoryId = MonthHistoryId.restore('test-id')
    expect(MonthHistory.restore(historyProps, historyId)).toEqual(
      expect.any(MonthHistory)
    )
    expect(MonthHistory.restore(historyProps, historyId).id.equals(historyId)).toBe(
      true
    )
  })

  describe('validate', () => {
    describe('validateOfYear', () => {
      it('4桁は正常', () => {
        const data = { ...historyProps, year: 2021 }
        expect(MonthHistory.create(data)).toEqual(expect.any(MonthHistory))
      })
      it('5桁はエラー', () => {
        const data = { ...historyProps, year: 20201 }
        expect(() => {
          MonthHistory.create(data)
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
        expect(MonthHistory.create(data)).toEqual(expect.any(MonthHistory))
      })

      it('1-12月は正常', () => {
        const data = {
          ...historyProps,
          month: 12,
          readingDate: new Date('2021-12-20T09:00:00')
        }
        expect(MonthHistory.create(data)).toEqual(expect.any(MonthHistory))
      })
      it('0月はエラー', () => {
        const data = {
          ...historyProps,
          month: 0,
          readingDate: new Date('2021-00-20T09:00:00')
        }
        expect(() => {
          MonthHistory.create(data)
        }).toThrowError()
      })
      it('13月はエラー', () => {
        const data = {
          ...historyProps,
          month: 13,
          readingDate: new Date('2021-13-20T09:00:00')
        }

        expect(() => {
          MonthHistory.create(data)
        }).toThrowError()
      })
    })
  })
})
