import { MeterDate } from '../value-objects/meter-date'
import { OthersNumber } from '../value-objects/others-number'
import { MeterPlace } from '../value-objects/meter-place'
import { ContactInfo } from '../contact-info'
import { ContactInfoId } from '../contact-info-id'
import { IContactInfoDomain } from '../__interface__/contact-info-domain-interface'
import { CustomerNumber } from '../customer-number'
import { ContactDetail } from 'src/domain/contact-detail/contact-detail'
import { Voltage } from 'src/domain/voltage/voltage'
import { IdentificationNumber } from '../value-objects/identification-number'
import { Instrument } from 'src/domain/instrument/instrument'
import { Area } from 'src/domain/area/area'

describe('ContactInfo', () => {
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
  it('createできる', () => {
    expect(ContactInfo.create(ContactInfoProps)).toEqual(expect.any(ContactInfo))
  })

  it('restoreできる', () => {
    const contactInfoId: ContactInfoId = ContactInfoId.restore('test-id')
    expect(ContactInfo.restore(ContactInfoProps, contactInfoId)).toEqual(
      expect.any(ContactInfo)
    )
    expect(
      ContactInfo.restore(ContactInfoProps, contactInfoId).id.equals(contactInfoId)
    ).toBe(true)
  })
})
