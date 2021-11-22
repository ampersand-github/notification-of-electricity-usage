import { ValueObject } from '../__shared__/value-object'
import { IMeterPlaceDomain } from './__interface__/meter-place-domain-interface'

export class MeterPlace extends ValueObject<IMeterPlaceDomain> {
  public static create (props: IMeterPlaceDomain): MeterPlace {
    MeterPlace.validate(props)
    return new MeterPlace(props)
  }

  public get meterPlace (): IMeterPlaceDomain['meterPlace'] {
    return this.props.meterPlace
  }

  private static validate (props) {
    if (String(props.meterPlace).length > 2) {
      throw new Error('検針所は2桁の値で指定してください')
    }
  }
}
