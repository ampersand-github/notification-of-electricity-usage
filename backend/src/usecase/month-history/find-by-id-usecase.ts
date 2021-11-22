import { MonthHistoryId } from 'src/domain/month-history/month-history-id'
import { MonthHistory } from 'src/domain/month-history/month-month-history'
import { IMonthHistoryRepository } from 'src/domain/month-history/__interface__/month-history-repository-interface'
import { MonthHistoryOutputDto } from './__dto__/month-history-output-dto'

export class FindByIdUsecase {
  public constructor (readonly repository: IMonthHistoryRepository) {}

  public async do (id: string): Promise<MonthHistoryOutputDto> {
    const history: MonthHistory = await this.repository.findById(MonthHistoryId.restore(id))
    return new MonthHistoryOutputDto(history)
  }
}
