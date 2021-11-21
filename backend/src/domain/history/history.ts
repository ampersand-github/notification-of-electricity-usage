import { AggregateRoot } from '../__shared__/aggregate-root'
import { HistoryId } from './history-id'
import { IHistoryDomain } from './__interface__/history-domain-interface'

export class History extends AggregateRoot<IHistoryDomain, HistoryId> {
  public static create (props: IHistoryDomain): History {
    History.validate(props)
    return new History(props, HistoryId.create())
  }

  public static restore (props: IHistoryDomain, id: HistoryId): History {
    History.validate(props)
    return new History(props, id)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public get year (): IHistoryDomain['year'] {
    return this.props.year
  }

  public get month (): IHistoryDomain['month'] {
    return this.props.month
  }

  public get price (): IHistoryDomain['price'] {
    return this.props.price
  }

  public get meter (): IHistoryDomain['meter'] {
    return this.props.meter
  }

  public get readingDate (): IHistoryDomain['readingDate'] {
    return this.props.readingDate
  }

  public get start (): IHistoryDomain['start'] {
    return this.props.start
  }

  public get end (): IHistoryDomain['end'] {
    return this.props.end
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validate (props: IHistoryDomain) {
    History.validateOfYear(props.year)
    History.validateOfMonth(props.month)
    History.validateOfReadingDate(props)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validateOfYear (props: IHistoryDomain['year']) {
    if (String(props).length !== 4) {
      throw new Error('年は4桁で指定してください')
    }
  }

  private static validateOfMonth (props: IHistoryDomain['month']) {
    if (!(props >= 1 && props <= 12)) {
      throw new Error('月は1~12で指定してください')
    }
  }

  private static validateOfReadingDate (props: IHistoryDomain) {
    const month = props.readingDate.getMonth() + 1 // 月は0から始まるので+1にする
    if (props.year !== props.readingDate.getFullYear()) {
      throw new Error('検針日と年が異なります')
    }

    if (props.month !== month) {
      throw new Error('検針日と月が異なります')
    }
    if (!(month >= 1 && month <= 12)) {
      throw new Error('月は1~12で指定してください')
    }
  }

}
