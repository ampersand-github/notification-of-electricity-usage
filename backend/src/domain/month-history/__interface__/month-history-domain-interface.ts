import { CustomerId } from 'src/domain/customer/customer-id'
import { Year } from '../year';

export interface IMonthHistoryDomain {
  customerId:CustomerId
  year:Year
  month:number
  price:number
  meter:number
  readingDate:Date
  start:Date
  end:Date
  // todo 検針員忘れている
}
