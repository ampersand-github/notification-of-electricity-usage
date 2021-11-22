import { ValueObject } from "../__shared__/value-object";

export interface MeterDateProps {
  meterDate: number;
}

export class MeterDate extends ValueObject<MeterDateProps> {
  public static create(props: MeterDateProps): MeterDate {
    MeterDate.validate(props);
    return new MeterDate(props);
  }

  public get MeterDate(): MeterDateProps["meterDate"] {
    return this.props.meterDate;
  }

  private static validate(props) {
    if (!(props.meterDate >= 1 && props.meterDate <= 28)) {
      throw new Error("検針日は1日から28日の間で指定してください");
    }
  }
}
