import { AggregateRoot } from '../__shared__/aggregate-root'
import { CustomerNumberId } from './customer-number-id'
import { ICustomerNumberDomain } from './__interface__/customer-number-domain-interface'

export class CustomerNumber extends AggregateRoot<
  ICustomerNumberDomain,
  CustomerNumberId
> {
  public static create (props: ICustomerNumberDomain): CustomerNumber {
    CustomerNumber.validate(props)
    return new CustomerNumber(props, CustomerNumberId.create())
  }

  public static restore (
    props: ICustomerNumberDomain,
    id: CustomerNumberId
  ): CustomerNumber {
    CustomerNumber.validate(props)
    return new CustomerNumber(props, id)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public get meterDate (): ICustomerNumberDomain['meterDate'] {
    return this.props.meterDate
  }

  public get meterPlace (): ICustomerNumberDomain['meterPlace'] {
    return this.props.meterPlace
  }

  public get othersNumber (): ICustomerNumberDomain['othersNumber'] {
    return this.props.othersNumber
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validate (props: ICustomerNumberDomain) {
    CustomerNumber.validateOfMeterDate(props.meterDate)
    CustomerNumber.validateOfMeterPlace(props.meterPlace)
    CustomerNumber.validateOfOthersNumber(props.othersNumber)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  private static validateOfMeterDate (
    props: ICustomerNumberDomain['meterDate']
  ) {
    if (!(props >= 1 && props <= 28)) {
      throw new Error('検針日は1日から28日の間で指定してください')
    }
  }

  private static validateOfMeterPlace (
    props: ICustomerNumberDomain['meterPlace']
  ) {
    if (String(props).length > 2) {
      throw new Error('検針所は2桁の値で指定してください')
    }
  }

  private static validateOfOthersNumber (
    props: ICustomerNumberDomain['othersNumber']
  ) {
    if (String(props).length > 10) {
      throw new Error('10桁以内の数値で指定してください')
    }
  }
}
