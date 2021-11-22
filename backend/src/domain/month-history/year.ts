import { ValueObject } from "../__shared__/value-object";

export interface YearProps {
  year: number;
}

export class Year extends ValueObject<YearProps> {
    public static create(props: YearProps): Year {
      Year.validateOfYear(props)
    return new Year(props);
  }

  public get year() {
    return this.props.year;
  }

  private static validateOfYear (props) {
    if (String(props.year).length !== 4) {
      throw new Error('年は4桁で指定してください')
    }
  }

}
