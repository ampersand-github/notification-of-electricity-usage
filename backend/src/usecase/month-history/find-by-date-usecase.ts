import { Month } from 'src/domain/history/month'
import { MonthHistoryId } from 'src/domain/history/month-history-id'
import { Year } from 'src/domain/history/year'
import { IMonthHistoryRepository } from 'src/domain/history/__interface__/month-history-repository-interface'
import { MonthHistoryOutputDto } from './__dto__/month-history-output-dto'

export class FindByDateUsecase {
  public constructor (readonly repository: IMonthHistoryRepository) {}

  public async do (
    id: string,
    year: number,
    month: number
  ): Promise<MonthHistoryOutputDto> {
    const monthHistoryId = MonthHistoryId.restore(id)
    const _year: Year = Year.create({ year: year })
    const _month: Month = Month.create({ month: month })
    const history = await this.repository.findByDate(
      monthHistoryId,
      _year,
      _month
    )
    return new MonthHistoryOutputDto(history)
  }
}
