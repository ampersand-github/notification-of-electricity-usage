import { HistoryId } from 'src/domain/history/history-id'
import { SupplyPointSpecificNumberId } from 'src/domain/supply-point-specific-number/supply-point-specific-number-id'
import { ContactDetailsId } from '../../contact-details/contact-details-id'
import { InstrumentId } from '../../instrument/instrument-id'
import { CustomerNumber } from '../customer-number'

export interface ICustomerDomain {
  name: string;
  address: string;
  customerNumber: CustomerNumber;
  historyId: HistoryId;
  supplyPointSpecificNumberId:SupplyPointSpecificNumberId
  contractDetailsId:ContactDetailsId
  instrumentId:InstrumentId
}
