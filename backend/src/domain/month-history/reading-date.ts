import { ValueObject } from "../__shared__/value-object";

export interface ReadingDateProps {
  readingDate: Date;
}

export class ReadingDate extends ValueObject<ReadingDateProps> {
  public static create(props: ReadingDateProps): ReadingDate {
    return new ReadingDate(props);
  }

  public get readingFullDate(): Date {
    return this.props.readingDate;
  }
  public get readingYear(): number {
    return this.props.readingDate.getFullYear();
  }
  public get readingMonth(): number {
    return this.props.readingDate.getMonth() + 1;
  }
}
