import { ValueObject } from "../__shared__/value-object";
import { IMonthDomain } from "./__interface__/month-domain-interface";

export class Month extends ValueObject<IMonthDomain> {
  public static create(props: IMonthDomain): Month {
    Month.validate(props);
    return new Month(props);
  }

  public get month(): IMonthDomain["month"] {
    return this.props.month;
  }

  private static validate(props: IMonthDomain) {
    if (!(props.month >= 1 && props.month <= 12)) {
      throw new Error("月は1~12で指定してください");
    }
  }
}
