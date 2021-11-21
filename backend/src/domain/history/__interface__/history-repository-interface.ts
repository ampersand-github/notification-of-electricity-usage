import { HistoryId } from "../history-id";


export interface IHistoryRepository {
  findById(historyId: HistoryId): Promise<History | null>;
  /*
  findAll(): Promise<History[]>;
  create(History: History): Promise<void>;
  update(History: History): Promise<void>;
  delete(History: History): Promise<void>;
 */
}
