import { AggregateRoot } from '../__shared__/aggregate-root'
import { MonthHistoryId } from './month-history-id'
import { Year } from './year'
import { IMonthHistoryDomain } from './__interface__/month-history-domain-interface'

export class MonthHistory extends AggregateRoot<IMonthHistoryDomain, MonthHistoryId> {
  public static create (props: IMonthHistoryDomain): MonthHistory {
    MonthHistory.validate(props)
    return new MonthHistory(props, MonthHistoryId.create())
  }

  public static restore (props: IMonthHistoryDomain, id: MonthHistoryId): MonthHistory {
    MonthHistory.validate(props)
    return new MonthHistory(props, id)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public get customerId (): IMonthHistoryDomain['customerId'] {
    return this.props.customerId
  }

  public get year (): Year['year']  {
    return this.props.year.year
  }

  public get month (): IMonthHistoryDomain['month'] {
    return this.props.month
  }

  public get price (): IMonthHistoryDomain['price'] {
    return this.props.price
  }

  public get meter (): IMonthHistoryDomain['meter'] {
    return this.props.meter
  }

  public get readingDate (): IMonthHistoryDomain['readingDate'] {
    return this.props.readingDate
  }

  public get start (): IMonthHistoryDomain['start'] {
    return this.props.start
  }

  public get end (): IMonthHistoryDomain['end'] {
    return this.props.end
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validate (props: IMonthHistoryDomain) {
    MonthHistory.validateOfMonth(props.month)
    MonthHistory.validateOfReadingDate(props)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validateOfMonth (props: IMonthHistoryDomain['month']) {
    if (!(props >= 1 && props <= 12)) {
      throw new Error('月は1~12で指定してください')
    }
  }

  private static validateOfReadingDate (props: IMonthHistoryDomain) {
    const month = props.readingDate.getMonth() + 1 // 月は0から始まるので+1にする
    // todo あとで
/*
    if (props.year !== props.readingDate.getFullYear()) {
      throw new Error('検針日と年が異なります')
    }
 */

    if (props.month !== month) {
      throw new Error('検針日と月が異なります')
    }
    if (!(month >= 1 && month <= 12)) {
      throw new Error('月は1~12で指定してください')
    }
  }
}
