import { Year } from '../year'
import { Month, MonthProps } from '../month'

describe('Year', () => {
  describe('validate', () => {
    describe('validateOfMonth', () => {
      it('1-12月は正常', () => {
        const data: MonthProps = { month: 12 }
        expect(Month.create(data)).toEqual(expect.any(Month))
      })
      it('1-12月は正常', () => {
        const data: MonthProps = { month: 12 }
        expect(Month.create(data)).toEqual(expect.any(Month))
      })
      it('0月はエラー', () => {
        const data: MonthProps = { month: 0 }
        expect(() => {
          Month.create(data)
        }).toThrowError()
      })
      it('13月はエラー', () => {
        const data: MonthProps = { month: 13 }
        expect(() => {
          Month.create(data)
        }).toThrowError()
      })
    })
  })
})
