import { CustomerId } from 'src/domain/customer/customer-id'
import { Month } from '../month'
import { Year } from '../year'
import { ReadingDate } from '../reading-date'
import { MeterReaderId } from 'src/domain/meter-reader/meter-reader-id'

export interface IMonthHistoryDomain {
  customerId: CustomerId;
  year: Year;
  month: Month;
  price: number;
  meter: number;
  readingDate: ReadingDate;
  start: Date;
  end: Date;
  meterReaderId: MeterReaderId;
}
