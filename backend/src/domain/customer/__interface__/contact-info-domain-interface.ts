import { Area } from 'src/domain/area/area';
import { ContactDetail } from 'src/domain/contact-detail/contact-detail';
import { Instrument } from 'src/domain/instrument/instrument';
import { Voltage } from 'src/domain/voltage/voltage';
import { CustomerNumber } from '../customer-number';
import { IdentificationNumber } from '../value-objects/identification-number';

export interface IContactInfoDomain {
  customerNumber : CustomerNumber,
  contactDetail:ContactDetail
  area:Area,
  voltage:Voltage,
  instrument:Instrument,
  identificationNumber:IdentificationNumber
}
