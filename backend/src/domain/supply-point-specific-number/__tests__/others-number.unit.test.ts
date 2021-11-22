import { OthersNumber } from '../others-number'

describe('OthersNumber', () => {
  it('16桁は正常', () => {
    const data = { othersNumber: 1234567890123456 }
    expect(OthersNumber.create(data)).toEqual(expect.any(OthersNumber))
  })
  it('17桁はエラー', () => {
    const data = { othersNumber: 12345678901234567 }
    expect(() => {
      OthersNumber.create(data)
    }).toThrowError()
  })
})
