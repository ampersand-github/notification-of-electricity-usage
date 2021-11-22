import { ValueObject } from '../__shared__/value-object'
import { IOthersNumberDomain } from './__interface__/others-number-domain-interface'

export class OthersNumber extends ValueObject<IOthersNumberDomain> {
  public static create (props: IOthersNumberDomain): OthersNumber {
    OthersNumber.validate(props)
    return new OthersNumber(props)
  }

  public get othersNumber (): IOthersNumberDomain['othersNumber'] {
    return this.props.othersNumber
  }

  private static validate (props) {
    if (String(props.othersNumber).length > 16) {
      throw new Error('供給地点特定番号の後半は16桁の値で指定してください')
    }
  }
}
