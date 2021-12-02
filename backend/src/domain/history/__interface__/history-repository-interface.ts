import { MonthHistoryId } from '../month-history-id'
import { MonthHistory } from '../month-history'
import { Year } from '../year'
import { Month } from '../month'
import { CustomerId } from 'src/domain/customer/customer-id'

export interface IHistoryRepository {
  findById(monthHistoryId: MonthHistoryId): Promise<MonthHistory | null>;
  findLatest(customerId: CustomerId): Promise<MonthHistory | null>;
  findByDate(
    customerId: CustomerId,
    Year: Year,
    Month: Month
  ): Promise<MonthHistory | null>;
}
