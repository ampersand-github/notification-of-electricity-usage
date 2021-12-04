import { MeterDate } from '../value-objects/meter-date'
import { MeterPlace } from '../value-objects/meter-place'
import { OthersNumber } from '../value-objects/others-number'

export interface ICustomerNumberDomain {
  meterDate: MeterDate;
  meterPlace: MeterPlace;
  othersNumber: OthersNumber;
}
