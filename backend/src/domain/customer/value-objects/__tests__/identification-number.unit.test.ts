import { IdentificationNumber } from '../identification-number'
import { IIdentificationNumberDomain } from '../__interface__/identification-number-domain-interface'

describe('SpecificNumber', () => {
  it('6は異常', () => {
    const data: IIdentificationNumberDomain = { identificationNumber: 123456 }
    expect(() => {
      IdentificationNumber.create(data)
    }).toThrowError()
  })
  it('4は異常', () => {
    const data: IIdentificationNumberDomain = { identificationNumber: 1234 }
    expect(() => {
      IdentificationNumber.create(data)
    }).toThrowError()
  })
  it('5は異常', () => {
    const data: IIdentificationNumberDomain = { identificationNumber: 12345 }
    expect(IdentificationNumber.create(data)).toEqual(expect.any(IdentificationNumber))
  })
})
