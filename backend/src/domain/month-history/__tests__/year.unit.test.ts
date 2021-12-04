import { Year } from '../year'
import { IYearDomain } from '../__interface__/year-domain-interface'

describe('Year', () => {
  describe('validate', () => {
    describe('validateOfMonth', () => {
      it('4桁は正常', () => {
        const data: IYearDomain = { year: 2000 }
        expect(Year.create(data)).toEqual(expect.any(Year))
      })
      it('3桁は異常', () => {
        const data: IYearDomain = { year: 999 }
        expect(() => {
          Year.create(data)
        }).toThrowError()
      })
      it('5桁は異常', () => {
        const data: IYearDomain = { year: 20000 }
        expect(() => {
          Year.create(data)
        }).toThrowError()
      })
    })
  })
})
