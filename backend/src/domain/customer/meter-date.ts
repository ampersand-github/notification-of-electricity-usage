import { ValueObject } from '../__shared__/value-object'
import { IMeterDateDomain } from './__interface__/meter-date-domain-interface'

export class MeterDate extends ValueObject<IMeterDateDomain> {
  public static create (props: IMeterDateDomain): MeterDate {
    MeterDate.validate(props)
    return new MeterDate(props)
  }

  public get meterDate (): IMeterDateDomain['meterDate'] {
    return this.props.meterDate
  }

  private static validate (props) {
    if (!(props.meterDate >= 1 && props.meterDate <= 28)) {
      throw new Error('検針日は1日から28日の間で指定してください')
    }
  }
}
