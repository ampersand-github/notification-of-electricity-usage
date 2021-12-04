import { Customer } from '../customer'
import { CustomerId } from '../customer-id'
import { ICustomerDomain } from '../__interface__/customer-domain-interface'
import { CustomerNumber } from '../customer-number'
import { MeterDate } from '../value-objects/meter-date'
import { OthersNumber } from '../value-objects/others-number'
import { MeterPlace } from '../value-objects/meter-place'
import { IContactInfoDomain } from '../__interface__/contact-info-domain-interface'
import { ContactDetail } from '../../contact-detail/contact-detail'
import { Area } from '../../area/area'
import { Voltage } from '../../voltage/voltage'
import { Instrument } from '../../instrument/instrument'
import { IdentificationNumber } from '../value-objects/identification-number'
import { IPersonalInfoDomain } from '../__interface__/personal-info-domain-interface'
import { ContactInfo } from '../contact-info'
import { PersonalInfo } from '../personal-info'

describe('Customer', () => {
  const ContactInfoProps: IContactInfoDomain = {
    customerNumber: CustomerNumber.create({
      meterDate: MeterDate.create({ meterDate: 10 }),
      meterPlace: MeterPlace.create({ meterPlace: 11 }),
      othersNumber: OthersNumber.create({ othersNumber: 1234567890 })
    }),
    contactDetail: ContactDetail.create({ name: '電気プランA' }),
    area: Area.create({ name: '関西電力', code: 6 }),
    voltage: Voltage.create({ name: '低圧', code: 0 }),
    instrument: Instrument.create({ name: '計器A', code: 123 }), // todo numberじゃなくてcode
    identificationNumber: IdentificationNumber.create({ identificationNumber: 10000 })
  }
  const personalInfoProps: IPersonalInfoDomain = {
    name: 'name',
    address: 'address'
  }
  const customerProps: ICustomerDomain = {
    contactInfo: ContactInfo.create(ContactInfoProps),
    personalInfo: PersonalInfo.create(personalInfoProps)
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
