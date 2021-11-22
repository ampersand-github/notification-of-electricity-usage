import { AggregateRoot } from "../__shared__/aggregate-root";
import { CustomerNumberId } from "./customer-number-id";
import { ICustomerNumberDomain } from "./__interface__/customer-number-domain-interface";
import { MeterDate } from "./meter-date";
import { MeterPlace } from "./meter-place";
import { OthersNumber } from "../supply-point-specific-number/others-number";

export class CustomerNumber extends AggregateRoot<
  ICustomerNumberDomain,
  CustomerNumberId
> {
  public static create(props: ICustomerNumberDomain): CustomerNumber {
    CustomerNumber.validate(props)
    return new CustomerNumber(props, CustomerNumberId.create());
  }

  public static restore(
    props: ICustomerNumberDomain,
    id: CustomerNumberId
  ): CustomerNumber {
    CustomerNumber.validate(props)
    return new CustomerNumber(props, id);
  }

  public get meterDate(): MeterDate["meterDate"] {
    return this.props.meterDate.meterDate;
  }

  public get meterPlace(): MeterPlace["meterPlace"] {
    return this.props.meterPlace.meterPlace;
  }

  public get othersNumber(): OthersNumber["othersNumber"] {
    return this.props.othersNumber.othersNumber;
  }
  public get fullCustomerNumber(): string {
    return CustomerNumber.combineCustomerNumber(
        this.meterDate,
        this.meterPlace,
        this.othersNumber
    )
  }

  private static validate (props) {
    return CustomerNumber.combineCustomerNumber(
        props.meterDate.meterDate,
        props.meterPlace.meterPlace,
        props.othersNumber.othersNumber
    );
  }

  private static combineCustomerNumber(
    meterDate,
    meterPlace,
    othersNumber
  ): string {
    const _meterDate = String(meterDate).padStart(2,"0")
    const _meterPlace = String(meterPlace).padStart(2,"0")
    const _othersNumber = String(othersNumber).padStart(10,"0")
    const fullCustomerNumber = _meterDate + _meterPlace + String(_othersNumber)
    if (String(fullCustomerNumber).length !== 14) {
      console.log(String(fullCustomerNumber).length)
      console.log(fullCustomerNumber)
      throw new Error('日程と所を含むお客様番号は14桁で入力してください')
    }
    return fullCustomerNumber;
  }
}
