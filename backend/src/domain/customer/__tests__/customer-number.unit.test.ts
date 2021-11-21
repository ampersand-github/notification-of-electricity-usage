import { CustomerNumber } from '../customer-number'
import { CustomerNumberId } from '../customer-number-id'
import { ICustomerNumberDomain } from '../__interface__/customer-number-domain-interface'

describe('CustomerNumber', () => {
  const customerNumberProps: ICustomerNumberDomain = {
    meterDate: 10,
    meterPlace: 11,
    othersNumber: 11111111
  }

  it('createできる', () => {
    expect(CustomerNumber.create(customerNumberProps)).toEqual(
      expect.any(CustomerNumber)
    )
  })

  it('restoreできる', () => {
    const customerNumberId: CustomerNumberId =
      CustomerNumberId.restore('test-id')
    expect(
      CustomerNumber.restore(customerNumberProps, customerNumberId)
    ).toEqual(expect.any(CustomerNumber))
    expect(
      CustomerNumber.restore(customerNumberProps, customerNumberId).id.equals(
        customerNumberId
      )
    ).toBe(true)
  })

  describe('validate', () => {
    describe('validateOfMeterDate', () => {
      it('0日はエラー', () => {
        const data = { ...customerNumberProps, meterDate: 0 }
        expect(() => {
          CustomerNumber.create(data)
        }).toThrowError()
      })
      it('1日は正常', () => {
        const data = { ...customerNumberProps, meterDate: 1 }
        expect(CustomerNumber.create(data)).toEqual(expect.any(CustomerNumber))
      })
      it('28日は正常', () => {
        const data = { ...customerNumberProps, meterDate: 28 }
        expect(CustomerNumber.create(data)).toEqual(expect.any(CustomerNumber))
      })
      it('29日はエラー', () => {
        const data = { ...customerNumberProps, meterDate: 29 }
        expect(() => {
          CustomerNumber.create(data)
        }).toThrowError()
      })
    })
    describe('validateOfOthersNumber', () => {
      it('11桁は異常', () => {
        const data = { ...customerNumberProps, othersNumber: 12345678901 }
        expect(() => {
          CustomerNumber.create(data)
        }).toThrowError()
      })
      it('10桁は正常', () => {
        const data = { ...customerNumberProps, othersNumber: 1234567890 }
        expect(CustomerNumber.create(data)).toEqual(expect.any(CustomerNumber))
      })
    })
  })
})
