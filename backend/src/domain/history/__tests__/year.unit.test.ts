import { Year } from '../year'
import { Month } from '../month'
import { IMonthDomain } from 'src/domain/month-history/__interface__/month-domain-interface'

describe('Year', () => {
  describe('validate', () => {
    describe('validateOfMonth', () => {
      it('1-12月は正常', () => {
        const data: IMonthDomain = { month: 12 }
        expect(Month.create(data)).toEqual(expect.any(Month))
      })
      it('1-12月は正常', () => {
        const data: IMonthDomain = { month: 12 }
        expect(Month.create(data)).toEqual(expect.any(Month))
      })
      it('0月はエラー', () => {
        const data: IMonthDomain = { month: 0 }
        expect(() => {
          Month.create(data)
        }).toThrowError()
      })
      it('13月はエラー', () => {
        const data: IMonthDomain = { month: 13 }
        expect(() => {
          Month.create(data)
        }).toThrowError()
      })
    })
  })
})
