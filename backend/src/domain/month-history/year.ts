import { ValueObject } from "../__shared__/value-object";
import { IYearDomain } from "./__interface__/year-domain-interface";

export class Year extends ValueObject<IYearDomain> {
  public static create(props: IYearDomain): Year {
    Year.validate(props);
    return new Year(props);
  }

  public get year() {
    return this.props.year;
  }

  private static validate(props) {
    if (String(props.year).length !== 4) {
      throw new Error("年は4桁で指定してください");
    }
  }
}
