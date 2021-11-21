import { HistoryId } from 'src/domain/history/history-id'
import { SupplyPointSpecificNumberId } from 'src/domain/supply-point-specific-number/supply-point-specific-number-id'
import { CustomerNumberId } from '../customer-number-id'
import { ContactDetailsId } from '../../contact-details/contact-details-id'
import { InstrumentId } from '../../instrument/instrument-id'

export interface ICustomerDomain {
  name: string;
  address: string;
  customerNumberId: CustomerNumberId;
  historyId: HistoryId;
  supplyPointSpecificNumberId:SupplyPointSpecificNumberId
  contractDetailsId:ContactDetailsId
  instrumentId:InstrumentId
}
