import { CustomerNumber } from '../customer-number'
import { CustomerNumberId } from '../customer-number-id'
import { MeterDate } from '../value-objects/meter-date'
import { MeterPlace } from '../value-objects/meter-place'
import { OthersNumber } from '../value-objects/others-number'
import { ICustomerNumberDomain } from '../__interface__/customer-number-domain-interface'

describe('CustomerNumber', () => {
  const customerNumberProps: ICustomerNumberDomain = {
    meterDate: MeterDate.create({ meterDate: 10 }),
    meterPlace: MeterPlace.create({ meterPlace: 11 }),
    othersNumber: OthersNumber.create({ othersNumber: 1234567890 })
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
  describe('combineCustomerNumber', () => {
    it('0埋めがないとき', () => {
      const customerNumberProps: ICustomerNumberDomain = {
        meterDate: MeterDate.create({ meterDate: 11 }),
        meterPlace: MeterPlace.create({ meterPlace: 22 }),
        othersNumber: OthersNumber.create({ othersNumber: 3333333333 })
      }
      const customerNumber = CustomerNumber.create(customerNumberProps)
      expect(customerNumber.fullCustomerNumber).toBe('11223333333333')
    })
    it('0埋めがあるとき', () => {
      const customerNumberProps: ICustomerNumberDomain = {
        meterDate: MeterDate.create({ meterDate: 1 }),
        meterPlace: MeterPlace.create({ meterPlace: 2 }),
        othersNumber: OthersNumber.create({ othersNumber: 3 })
      }
      const customerNumber = CustomerNumber.create(customerNumberProps)
      expect(customerNumber.fullCustomerNumber).toBe('01020000000003')
    })
    it('0埋めがあるとき', () => {
      const customerNumberProps: ICustomerNumberDomain = {
        meterDate: MeterDate.create({ meterDate: 1 }),
        meterPlace: MeterPlace.create({ meterPlace: 2 }),
        othersNumber: OthersNumber.create({ othersNumber: 333333333 })
      }
      const customerNumber = CustomerNumber.create(customerNumberProps)
      expect(customerNumber.fullCustomerNumber).toBe('01020333333333')
    })
  })
})
