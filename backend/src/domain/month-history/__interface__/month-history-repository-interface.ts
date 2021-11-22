import { MonthHistoryId } from '../month-history-id'
import { MonthHistory } from '../month-history'

export interface IMonthHistoryRepository {
  // todo idとyearとmonthから1つ指定できるようにする
  findById(monthHistoryId: MonthHistoryId): Promise<MonthHistory | null>;
  findById(monthHistoryId: MonthHistoryId): Promise<MonthHistory | null>;
  /*
  findAll(): Promise<MonthMonthHistory[]>;
  create(MonthMonthHistory: MonthMonthHistory): Promise<void>;
  update(MonthMonthHistory: MonthMonthHistory): Promise<void>;
  delete(MonthMonthHistory: MonthMonthHistory): Promise<void>;
 */
}
