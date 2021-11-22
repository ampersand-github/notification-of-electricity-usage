import { ValueObject } from "../__shared__/value-object";

export interface MeterPlaceProps {
  meterPlace: number;
}

export class MeterPlace extends ValueObject<MeterPlaceProps> {
    public static create(props: MeterPlaceProps): MeterPlace {
      MeterPlace.validate(props)
    return new MeterPlace(props);
  }

  public get MeterPlace() :MeterPlaceProps["meterPlace"]{
    return this.props.meterPlace;
  }

  private static validate(props) {
      if (String(props.meterPlace).length > 2) {
          throw new Error('検針所は2桁の値で指定してください')
      }
  }

}
