import { Year, YearProps } from '../year'

describe('Year', () => {
  describe('validate', () => {
    describe('validateOfYear', () => {
      it('4桁は正常', () => {
        const data: YearProps = { year: 2020 }
        expect(Year.create(data)).toEqual(expect.any(Year))
      })
      it('5桁はエラー', () => {
        const data: YearProps = { year: 20201 }
        expect(() => {
          Year.create(data)
        }).toThrowError()
      })
    })
  })
})
