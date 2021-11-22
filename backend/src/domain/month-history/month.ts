import { ValueObject } from '../__shared__/value-object'

export interface MonthProps {
  month: number;
}

export class Month extends ValueObject<MonthProps> {
  public static create (props: MonthProps): Month {
    Month.validate(props)
    return new Month(props)
  }

  public get month (): MonthProps['month'] {
    return this.props.month
  }

  private static validate (props: MonthProps) {
    if (!(props.month >= 1 && props.month <= 12)) {
      throw new Error('月は1~12で指定してください')
    }
  }
}
