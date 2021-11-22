import { ValueObject } from '../__shared__/value-object'
import {IReadingDateDomain} from "./__interface__/reading-date-domain-interface";

export class ReadingDate extends ValueObject<IReadingDateDomain> {
  public static create (props: IReadingDateDomain): ReadingDate {
    return new ReadingDate(props)
  }

  public get readingFullDate (): Date {
    return this.props.readingDate
  }

  public get readingYear (): number {
    return this.props.readingDate.getFullYear()
  }

  public get readingMonth (): number {
    return this.props.readingDate.getMonth() + 1
  }
}
