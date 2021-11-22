import { ValueObject } from '../__shared__/value-object'

export interface OthersNumberProps {
  othersNumber: number;
}

export class OthersNumber extends ValueObject<OthersNumberProps> {
  public static create (props: OthersNumberProps): OthersNumber {
    OthersNumber.validate(props)
    return new OthersNumber(props)
  }

  public get othersNumber (): OthersNumberProps['othersNumber'] {
    return this.props.othersNumber
  }

  private static validate (props) {
    if (String(props.othersNumber).length > 16) {
      throw new Error('供給地点特定番号の後半は16桁の値で指定してください')
    }
  }
}
