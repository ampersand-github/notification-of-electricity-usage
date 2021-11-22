import { ContactDetailsId } from 'src/domain/contact-details/contact-details-id'
import { InstrumentId } from 'src/domain/instrument/instrument-id'
import { MonthHistoryId } from 'src/domain/month-history/month-history-id'
import { SupplyPointSpecificNumberId } from 'src/domain/supply-point-specific-number/supply-point-specific-number-id'
import { CustomerNumber } from '../customer-number'

export interface ICustomerDomain {
  name: string;
  address: string;
  customerNumber: CustomerNumber;
  monthHistoryId: MonthHistoryId;
  supplyPointSpecificNumberId:SupplyPointSpecificNumberId
  contractDetailsId:ContactDetailsId
  instrumentId:InstrumentId
}
