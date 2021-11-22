import { MonthHistoryId } from '../month-history-id'
import { MonthHistory } from '../month-month-history'

export interface IMonthHistoryRepository {
  findById(monthHistoryId: MonthHistoryId): Promise<MonthHistory | null>;

  /*
  findAll(): Promise<MonthMonthHistory[]>;
  create(MonthMonthHistory: MonthMonthHistory): Promise<void>;
  update(MonthMonthHistory: MonthMonthHistory): Promise<void>;
  delete(MonthMonthHistory: MonthMonthHistory): Promise<void>;
 */
}
