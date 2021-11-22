import { AggregateRoot } from '../__shared__/aggregate-root'
import { CustomerNumberId } from './customer-number-id'
import { ICustomerNumberDomain } from './__interface__/customer-number-domain-interface'
import { MeterDate } from './meter-date'
import { MeterPlace } from './meter-place'
import { OthersNumber } from '../supply-point-specific-number/others-number'

export class CustomerNumber extends AggregateRoot<
  ICustomerNumberDomain,
  CustomerNumberId
> {
  public static create (props: ICustomerNumberDomain): CustomerNumber {
    return new CustomerNumber(props, CustomerNumberId.create())
  }

  public static restore (
    props: ICustomerNumberDomain,
    id: CustomerNumberId
  ): CustomerNumber {
    return new CustomerNumber(props, id)
  }

  public get meterDate (): MeterDate['meterDate'] {
    return this.props.meterDate.meterDate
  }

  public get meterPlace (): MeterPlace['meterPlace'] {
    return this.props.meterPlace.meterPlace
  }

  public get othersNumber (): OthersNumber['othersNumber'] {
    return this.props.othersNumber.othersNumber
  }
}
