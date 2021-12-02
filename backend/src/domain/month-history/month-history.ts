import { AggregateRoot } from '../__shared__/aggregate-root'
import { Month } from './month'
import { MonthHistoryId } from './month-history-id'
import { Year } from './year'
import { ReadingDate } from './reading-date'
import { IHistoryDomain } from './__interface__/history-domain-interface'

export class MonthHistory extends AggregateRoot<
  IHistoryDomain,
  MonthHistoryId
> {
  public static create (props: IHistoryDomain): MonthHistory {
    MonthHistory.validate(props)
    return new MonthHistory(props, MonthHistoryId.create())
  }

  public static restore (
    props: IHistoryDomain,
    id: MonthHistoryId
  ): MonthHistory {
    MonthHistory.validate(props)
    return new MonthHistory(props, id)
  }

  public get customerId (): IHistoryDomain['customerId'] {
    return this.props.customerId
  }

  public get year (): Year['year'] {
    return this.props.year.year
  }

  public get month (): Month['month'] {
    return this.props.month.month
  }

  public get price (): IHistoryDomain['price'] {
    return this.props.price
  }

  public get meter (): IHistoryDomain['meter'] {
    return this.props.meter
  }

  public get readingDate (): ReadingDate['readingFullDate'] {
    return this.props.readingDate.readingFullDate
  }

  public get start (): IHistoryDomain['start'] {
    return this.props.start
  }

  public get end (): IHistoryDomain['end'] {
    return this.props.end
  }

  public get meterReaderId (): IHistoryDomain['meterReaderId'] {
    return this.props.meterReaderId
  }

  private static validate (props: IHistoryDomain) {
    if (props.year.year !== props.readingDate.readingYear) {
      throw new Error('検針日と年が異なります')
    }
    if (props.month.month !== props.readingDate.readingMonth) {
      throw new Error('検針日と月が異なります')
    }
  }
}
