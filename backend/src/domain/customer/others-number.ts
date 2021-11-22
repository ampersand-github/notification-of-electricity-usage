import { ValueObject } from "../__shared__/value-object";

export interface OthersNumberProps {
  othersNumber: number;
}

export class OthersNumber extends ValueObject<OthersNumberProps> {
    public static create(props: OthersNumberProps): OthersNumber {
      OthersNumber.validate(props)
    return new OthersNumber(props);
  }

  public get othersNumber():OthersNumberProps["othersNumber"] {
    return this.props.othersNumber;
  }

  private static validate(props) {
    if (String(props.othersNumber).length > 10) {
      throw new Error('10桁以内の数値で指定してください')
    }
  }


}
