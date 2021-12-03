import { ContactDetailId } from 'src/domain/contact-detail/contact-detail-id'
import { InstrumentId } from 'src/domain/instrument/instrument-id'
import { SupplyPointSpecificNumberId } from 'src/domain/supply-point-specific-number/supply-point-specific-number-id'
import { Customer } from '../customer'
import { CustomerId } from '../customer-id'
import { CustomerNumber } from '../customer-number'
import { ICustomerDomain } from '../__interface__/customer-domain-interface'
import { MeterDate } from '../meter-date'
import { MeterPlace } from '../meter-place'
import { OthersNumber } from '../others-number'
import { MonthHistoryId } from 'src/domain/month-history/month-history-id'

describe('Customer', () => {
  const customerProps: ICustomerDomain = {
    name: '名前',
    address: '東京都・・・',
    customerNumber: CustomerNumber.create({
      meterDate: MeterDate.create({ meterDate: 10 }),
      meterPlace: MeterPlace.create({ meterPlace: 11 }),
      othersNumber: OthersNumber.create({ othersNumber: 1234567890 })
    }),
    monthHistoryId: MonthHistoryId.create(),
    supplyPointSpecificNumberId: SupplyPointSpecificNumberId.create(),
    contractDetailsId: ContactDetailId.create(),
    instrumentId: InstrumentId.create()
  }
  it('createできる', () => {
    expect(Customer.create(customerProps)).toEqual(expect.any(Customer))
  })

  it('restoreできる', () => {
    const customerId: CustomerId = CustomerId.restore('test-id')
    expect(Customer.restore(customerProps, customerId)).toEqual(
      expect.any(Customer)
    )
    expect(
      Customer.restore(customerProps, customerId).id.equals(customerId)
    ).toBe(true)
  })
})
