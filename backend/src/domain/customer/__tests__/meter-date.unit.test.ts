import { OthersNumber } from '../others-number'
import {IOthersNumberDomain} from "../__interface__/others-number-domain-interface";

describe('OthersNumber', () => {
  it('11桁は異常', () => {
    const data: IOthersNumberDomain = { othersNumber: 12345678901 }
    expect(() => {
      OthersNumber.create(data)
    }).toThrowError()
  })
  it('10桁は正常', () => {
    const data: IOthersNumberDomain = { othersNumber: 1234567890 }
    expect(OthersNumber.create(data)).toEqual(expect.any(OthersNumber))
  })
})
