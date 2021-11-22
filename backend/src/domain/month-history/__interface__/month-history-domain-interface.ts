import { CustomerId } from 'src/domain/customer/customer-id'

export interface IMonthHistoryDomain {
  customerId:CustomerId
  year:number
  month:number
  price:number
  meter:number
  readingDate:Date
  start:Date
  end:Date
  // todo 検針員忘れている
}
